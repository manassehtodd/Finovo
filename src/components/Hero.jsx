import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import cards from "./../assets/images/cardsNull.PNG";
import smallCard from "./../assets/images/smallCard.png";

function Hero() {
  return (
    <section
      id="home"
      className="bg-linear-to-b from-[#efb4b6] via-[#f3c8c9] to-[#a7c0e7] px-6 pt-28 pb-16 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* LEFT TEXT */}
          <div>
            <p className="mb-4 text-xs tracking-wide md:text-sm">
              UNLOCK PERKS—NO CARD NEEDED
            </p>

            <h1 className="font-bold uppercase leading-tight text-[#0e0f15]
              text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] max-w-xl">
              Secure Lasting With Financial Confidence
            </h1>

            {/* CTA line */}
            <div className="flex items-end gap-4 mt-6 group">
              <div className="cursor-pointer">
                <p className="uppercase text-sm md:text-base">Claim now</p>

                <div className="h-1.5 w-24 rounded-full bg-white mt-2 overflow-hidden">
                  <div className="h-full w-5 bg-black rounded-full transition-all duration-500 group-hover:translate-x-19.5" />
                </div>
              </div>

            </div>

            {/* EMAIL INPUT */}
            <div className="mt-6 w-full max-w-md flex items-center rounded-full bg-white/90 p-2 shadow">
              <div className="flex flex-1 items-center gap-2 px-3 text-black/70">
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-transparent outline-none text-sm md:text-base"
                />
              </div>

              <button className="h-12 w-12 md:h-14 md:w-14 cursor-pointer rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center mt-20 lg:mt-0">
            <img
              src={cards}
              alt="cards"
              className="hidden lg:block w-full h-125 transition-transform duration-300 hover:scale-105"

            />

            {/* overlay card */}
            <div className="absolute md:bottom-10 bottom-3 left-1/2 -translate-x-1/2 w-[80%] md:w-[70%] rounded-3xl bg-white/30 backdrop-blur-lg p-4 md:p-6 text-white text-center">
              <h3 className="font-semibold text-lg md:text-2xl">
                New Card Design
              </h3>
              <p className="text-xs md:text-sm mt-1">
                Tools you need to get business done and support you can trust.
              </p>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-12 h-px bg-white/60" />

        {/* ================= TRUST ROW ================= */}
        <div className="grid gap-8 md:grid-cols-3 items-center text-[#0e0f15]">
          {/* item 1 */}
          <div className="flex items-center gap-4">
            <img
              src="https://www.shutterstock.com/image-photo/professional-male-avatar-clear-face-260nw-2704457945.jpg"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full"
            />
            <p className="text-sm md:text-base font-semibold uppercase max-w-48">
              Professional & Trustworthy Service
            </p>
          </div>

          {/* item 2 */}
          <div className="flex items-center gap-3 justify-start md:justify-center">
            <span className="text-4xl md:text-5xl font-semibold">4.9</span>
            <FontAwesomeIcon icon={faStar} className="text-lg" />
            <p className="text-sm md:text-base uppercase font-medium max-w-40">
              Thousands of Satisfied Users
            </p>
          </div>

          {/* item 3 */}
          <div className="flex items-center gap-4 md:justify-end">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSP-RALRX8MZrzK40JdaiKnioFv4u9sUiLRVU9tpQSTwHDKY3ea"
              className="w-12 h-12 md:w-16 md:h-16 rounded-full"
            />
            <span className="text-sm md:text-base font-medium uppercase max-w-48">
              Best Online Financial Platform
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
