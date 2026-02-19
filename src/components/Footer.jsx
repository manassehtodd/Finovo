import Cta from "./Cta";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <section
      id="footer"
      className="px-6 bg-[#DAE6FF] py-20 md:px-12 lg:px-20"
    >
      <Cta />

      {/* BIG BRAND TEXT */}
      <div className="flex justify-center items-center">
        <div className="mt-30">
          <h1 className="
            font-extrabold 
            text-6xl 
            sm:text-8xl 
            md:text-[140px] 
            lg:text-[200px]
            leading-none
            tracking-[20px]
            md:tracking-[100px]
            text-center
          ">
            FINOVO
          </h1>
        </div>
      </div>

      {/* LINKS GRID */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-10 
        mt-16
      ">
        {/* COL 1 */}
        <div>
          <p className="mb-6">Navigation</p>
          <hr className="border-t border-gray-400 mb-6" />
          <h3 className="font-semibold text-xl">FEATURES</h3>
          <div className="flex flex-col gap-4 mt-5">
            <a href="#Transactions">Transactions</a>
            <a href="#Analytics">Analytics</a>
            <a href="#Insight">Insight</a>
          </div>
        </div>

        {/* COL 2 */}
        <div>
          <p className="mb-6">About Us</p>
          <hr className="border-t border-gray-400 mb-6" />
          <h3 className="font-semibold text-xl">OUR COMPANY</h3>
          <div className="flex flex-col gap-4 mt-5">
            <a href="#Mission">Our Mission</a>
            <a href="#Career">Career</a>
            <a href="#Blog">Blog</a>
          </div>
        </div>

        {/* COL 3 */}
        <div>
          <p className="mb-6">Let's Connect</p>
          <hr className="border-t border-gray-400 mb-6" />
          <h3 className="font-semibold text-xl">SOCIAL MEDIA</h3>
          <div className="flex flex-col gap-4 mt-5">
            <a href="#Instagram">Instagram @Finovo</a>
            <a href="#X">X @Finovo</a>
            <a href="#Tiktok">Tiktok @Finovo</a>
          </div>
        </div>

        {/* COL 4 */}
        <div>
          <p className="mb-6">Office</p>
          <hr className="border-t border-gray-400 mb-6" />
          <h3 className="font-semibold text-xl">DRE FINANCE OFFICIAL</h3>
          <div className="flex flex-col gap-4 mt-5">
            <span>+12 345 678 9</span>
            <span>Jakarta, Indonesia</span>
            <span>09:00 AM - 05:00 PM</span>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="
        mt-20 
        flex 
        flex-col 
        md:flex-row 
        justify-between 
        items-center 
        gap-6
        text-center 
        md:text-left
      ">
        <p>Copyright {year}, All Rights Reserved</p>

        <div className="flex flex-wrap justify-center md:justify-end gap-5 capitalize">
          <a href="#Policy">Privacy Policy</a>
          <a href="#Terms">Terms & Conditions</a>
          <a href="#Support">Support</a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
