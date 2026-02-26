import circleChart from "../assets/images/cirlcleChart.png";

function Progress() {
    return(
        <section id="progress" className="bg-white px-6 py-20 md:px-12 lg:px-20">
            <div className="flex items-left justify-start">
                <div className="z-10 max-w-2xl px-6 items-center justify-center text-left">
                    <p className="text-sm tracking-widest mb-3">OUR PROGRESS</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        EMPOWERING SMARTER FINANCIAL DECISIONS
                    </h1>

                    <button className="mt-6 px-6 py-3 bg-black cursor-pointer text-white rounded-full hover:bg-gray-800 transition">
                        Learn More
                    </button>
                </div>
            </div>
                <div className="items-center justify-center mt-2">
                    <img src={circleChart} alt="chart" className="w-300 h-200 object-contain" />
                    </div>
                
        </section>
    );
}

export default Progress;