function Cta(){
    return(
<div className="relative flex justify-center items-center">
  <div className="absolute h-75  -top-65 md:h-95 w-full cta-bg rounded-2xl">

    {/* change happens here */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:p-10">

      {/* text */}
      <div className="p-4 md:p-10">
        <p>CTA</p>

        <h1 className="text-2xl md:text-4xl font-bold pt-2">
          LET'S WORK
          <br />
          TOGETHER TO BUILD A STRONGER TOMORROW.
        </h1>

        <button className="mt-6 px-4 py-3 cursor-pointer bg-black text-white rounded-full hover:bg-gray-800 transition">
          Get Started Today
        </button>
      </div>

      {/* image — hidden on mobile */}
      <div className="justify-end items-center hidden md:flex">
        <img
          src="https://images.unsplash.com/photo-1769071167795-a1fe9a73d004?w=600"
          alt="CTA Image"
          className="w-60 h-80 rounded-2xl"
        />
      </div>

    </div>
  </div>
</div>

    );
}

export default Cta;