import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlutter } from "@fortawesome/free-brands-svg-icons";


function Navbar() {
    const [open, setOpen] = useState(false);

    const [showAlert, setShowAlert] = useState(false);
    
    const [openLanguage, setOpenLanguage] = useState(false);
    const [selectedLang, setSelectedLang] = useState("en");
    
    const languages = [
        { code: "en", name: "English" },
        { code: "es", name: "Spanish" },
        { code: "fr", name: "French" },
        { code: "de", name: "German" }
    ];
    
    const handleLanguageChange = (langCode) => {
      // Set selected language and update page language attribute
      console.log("Selected language:", langCode);
      setSelectedLang(langCode);
      if (typeof document !== "undefined" && document.documentElement) {
        document.documentElement.lang = langCode;
      }
      setOpenLanguage(false);
    };

    const setCookie = (name, value, days = 1) => {
      if (typeof document === "undefined") return;
      let expires = "";
      if (days) {
        const d = new Date();
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
        expires = ";expires=" + d.toUTCString();
      }
      document.cookie = `${name}=${value}${expires};path=/`;
    };

    const translateInPlace = (langCode) => {
      if (typeof window === "undefined" || typeof document === "undefined") return;
      // googtrans cookie format: /SOURCE/TARGET  (use auto as source)
      const value = `/auto/${langCode}`;
      try {
        setCookie("googtrans", value);
        // Also set for leading slash variant some browsers use
        setCookie("googtrans", value);
      } catch (e) {
        console.warn("failed to set googtrans cookie", e);
      }
      setSelectedLang(langCode);
      setOpenLanguage(false);
      // reload so Google Translate picks up cookie and translates the page
      window.location.reload();
    };

    const gtLoaded = useRef(false);
    const styleInjected = useRef(false);

    useEffect(() => {
      if (!openLanguage) return;
      if (typeof window === "undefined" || typeof document === "undefined") return;

      const initWidget = () => {
        try {
          console.log("init google translate widget, lang=", selectedLang);
          if (window.google && window.google.translate) {
            const opts = { pageLanguage: selectedLang };
            // Try to use a simple inline layout if available
            if (window.google.translate.TranslateElement && window.google.translate.TranslateElement.InlineLayout) {
              opts.layout = window.google.translate.TranslateElement.InlineLayout.SIMPLE;
            }
            new window.google.translate.TranslateElement(opts, "google_translate_element");
            gtLoaded.current = true;
            console.log("google translate widget initialized");

            // Inject CSS overrides once to ensure the widget's select and iframe are visible
            if (!styleInjected.current) {
              try {
                const css = `
                  /* Make the Google Translate select visible and match our layout */
                  #google_translate_element .goog-te-combo { color: #000 !important; background: #fff !important; width: 100% !important; padding: 0.5rem !important; border-radius: 0.5rem !important; }
                  /* Hide the top banner that Google may insert */
                  .goog-te-banner-frame.skiptranslate { display: none !important; }
                  body { top: 0 !important; }
                `;
                const style = document.createElement("style");
                style.setAttribute("data-google-translate-fix", "");
                style.appendChild(document.createTextNode(css));
                document.head.appendChild(style);
                styleInjected.current = true;
                console.log("injected google translate css overrides");
              } catch (e) {
                console.warn("failed to inject google translate css", e);
              }
            }
          }
        } catch (e) {
          console.error("google translate init error", e);
        }
      };

      // If script already loaded and google available, initialize immediately
      if (gtLoaded.current || (window.google && window.google.translate)) {
        initWidget();
        return;
      }

      // If a translate script tag exists, attach load handler
      const existing = Array.from(document.scripts).find((s) => s.src && s.src.includes("translate_a/element.js"));
      if (existing) {
        existing.addEventListener ? existing.addEventListener("load", initWidget) : (existing.onload = initWidget);
        return;
      }

      // Create global callback used by Google Translate script
      window.googleTranslateElementInit = function () {
        console.log("googleTranslateElementInit called");
        initWidget();
      };

      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        // intentionally keep script so subsequent opens reuse it
      };
    }, [openLanguage, selectedLang]);


    return (
    <nav className="top-0 w-full bg-[#efb4b6] z-50 p-2">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo + Menu items */}
        <div className="flex items-center gap-16">
          {/* Logo */}
            <div className="flex items-center text-xl font-bold">
                <FontAwesomeIcon icon={faFlutter} className="text-3xl text-black" />
                <span className="ml-2 text-2xl font-bold font-poppins text-black">Finovo</span>
            </div>

          {/* Menu (close to logo) */}
            <ul className="hidden md:flex items-center gap-18 font-poppins text-gray-700">
                <li><a href="#home" className="hover:text-gray-900">Home</a></li>
                <li><a href="#solution" className="hover:text-gray-900">Solution</a></li>
                <li><a href="#about" className="hover:text-gray-900">About</a></li>
            </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 md:gap-4 items-center">
            <div className="relative">
              <button
                onClick={() => setOpenLanguage((v) => !v)}
                className="flex items-center px-2 md:px-4 py-2 bg-transparent border border-stone-700 rounded-full text-black text-xs md:text-sm"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/555/555417.png"
                  alt="Language"
                  className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full"
                />
                <span className="hidden sm:inline">{selectedLang.toUpperCase()}</span>
              </button>

                {openLanguage && (
                  <div
                    className="absolute right-0 mt-2 w-56 md:w-64 bg-white rounded-md shadow-lg z-50 p-2"
                    onClick={(e) => e.stopPropagation()}
                  >

                    <div className="mt-2 border-t pt-2">
                      <p className="text-xs text-gray-500 mb-1">Choose language:</p>
                      <ul className="flex flex-col gap-1">
                        {languages.map((lang) => (
                          <li key={lang.code}>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                translateInPlace(lang.code);
                              }}
                              className="w-full text-left text-sm px-2 py-1 rounded hover:bg-gray-100 transition"
                            >
                              {lang.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
            </div>

            <button
                onClick={() => setShowAlert(true)}
                className="hidden md:flex items-center justify-center px-5 py-3 w-32 bg-black text-white rounded-full"
            >
                Log in
            </button>

            {showAlert && (
            <div
                className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
                onClick={() => setShowAlert(false)}
            >
            <div
                className="bg-white p-6 rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
            <p className="text-lg font-semibold">
                Sorry, this is just a demo project.
            </p>
    </div>
    </div>
)}


            {/* Mobile menu button */}
        <div>
      <button
        className="md:hidden flex items-center px-3 py-2 text-gray-700"
        onClick={() => setOpen(true)}
      >
       <img src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png" alt="Menu" className="w-6 h-6" />
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-75 bg-white p-6 shadow-lg z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col items-end gap-4 mt-10">
          <li><a href="#home">Home</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
    </div>
        </div>

        </div>
    </nav>
    );
}



export default Navbar;
