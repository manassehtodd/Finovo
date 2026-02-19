import CountUp from "./CountUp";

function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-20 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* ================= ABOUT TEXT ================= */}
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl font-semibold">About</h2>
          </div>

          <div className="text-gray-600 leading-relaxed">
            At Finovo, we believe banking should be simple and accessible
            anytime, anywhere. Our mission is to empower individuals and
            businesses with innovative digital banking solutions that make
            managing finances easy and secure.
          </div>
        </div>

        <div className="flex flex-row justify-end md:h-full h-28 md:gap-10 gap-5 mt-14">
          {/* item */}
          <div>
            <div className="text-2xl md:text-5xl font-semibold">
              <CountUp from={0} to={100} duration={1} startWhen />M+
            </div>
            <p className="text-sm md:text-xs text-gray-500 mt-2">
              Trusted by millions worldwide
            </p>
          </div>

          <div>
            <div className="text-2xl md:text-5xl font-semibold">
              $<CountUp from={0} to={324} duration={1} startWhen />M+
            </div>
            <p className="md:text-sm text-xs text-gray-500 mt-2">
              Transactions made monthly
            </p>
          </div>

          <div>
            <div className="text-2xl md:text-5xl font-semibold">
              <CountUp from={0} to={99} duration={1} startWhen />%
            </div>
            <p className="md:text-sm text-xs text-gray-500 mt-2">
              Customer satisfaction rate
            </p>
          </div>
        </div>
      </div>

      {/* ================= IMAGE BANNER ================= */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="relative rounded-3xl overflow-hidden min-h-65 md:min-h-100 bg-cover bg-center flex items-end p-6"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1758876200754-17a09a6c2728?fm=jpg&q=60&w=3000)",
          }}
        >
          {/* stat cards */}
          <div className="space-y-4">
            <div className="bg-white/70 backdrop-blur p-4 rounded-xl w-44">
              <p className="text-xs font-semibold">COUNTRIES SUPPORTED</p>
              <div className="text-2xl font-bold mt-1">
                <CountUp from={0} to={100} duration={1} startWhen />+
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Send money globally
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur p-4 rounded-xl w-44">
              <p className="text-xs font-semibold">PARTNER MERCHANTS</p>
              <div className="text-2xl font-bold mt-1">
                <CountUp from={0} to={20} duration={1} startWhen />K+
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Cashback network
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <div className="relative mt-28 min-h-125 pack flex items-center justify-center text-center">
        {/* center text */}
        <div className="z-10 max-w-2xl px-6 bg-white">
          <p className="text-sm tracking-widest mb-3">BUILD FINANCE WITH US</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            TAKE CONTROL OF YOUR FINANCIAL FUTURE
          </h1>

          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Get Started
          </button>
        </div>

        {/* floating images (hidden on small screens) */}
        <img
          src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZSUyMGF0JTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D"
          className="hidden md:block absolute top-16 left-10 w-24 lg:w-32 rounded-xl"
        />

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          className="hidden md:block absolute top-20 right-16 w-28 lg:w-40 rounded-xl"
        />

        <img
          src="https://plus.unsplash.com/premium_photo-1670872717035-bacc4ea61e62"
          className="hidden lg:block absolute bottom-16 left-24 w-40 rounded-xl"
        />

        <img
          src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZSUyMGF0JTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D"
          className="hidden lg:block absolute bottom-10 right-20 w-52 rounded-2xl"
        />
      </div>
    </section>
  );
}

export default About;
