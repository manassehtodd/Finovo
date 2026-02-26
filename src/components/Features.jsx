import chart from "./../assets/images/chart.png"
import chart2 from "./../assets/images/chart2.png"

function Features(){
    return(
    <section id="features" className="bg-white px-6 py-20 md:px-12 lg:px-20 overflow-hidden">
        <div className="relative flex items-center justify-center text-center">
            <div className="z-10 max-w-2xl px-6 bg-white">
                <p className="text-sm tracking-widest mb-3">FEATURES</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    TAKE CONTROL OF YOUR FINANCIAL FUTURE TODAY
                </h1>

            <button className="mt-6 px-6 py-3 bg-black cursor-pointer text-white rounded-full hover:bg-gray-800 transition">
                Explore All
            </button>
        </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10 justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="flex bg-gray-200 p-4 md:p-6 items-center justify-center border-2 border-gray-200 rounded-3xl w-full">
                    <div className="w-full rounded-3xl">
                        <img src={chart} alt="chart" className="w-full rounded-3xl" />
                    </div>
                </div>
                <div className="w-full items-center justify-center mt-5">
                    <h3 className="text-lg md:text-xl text-center font-semibold">SMART AND EASY WAYS TO MANAGE YOUR MONEY WISELY</h3>
                    <p className="text-sm text-gray-500 text-center mt-2">Managing money wisely is key to achieving financial stability and reaching your goals. By creating a budget and tracking expenses.</p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex bg-gray-200 p-4 md:p-6 items-center justify-center border-2 border-gray-200 rounded-3xl w-full">
                    <div className="w-full rounded-lg">
                        <img src={chart2} alt="chart" className="object-cover rounded-3xl w-full" />
                    </div>
                </div>
                <div className="w-full mt-5">
                    <h3 className="text-lg md:text-xl text-center font-semibold">ACCELERATE YOUR SAVINGS GOALS EVEN FASTER TODAY</h3>
                    <p className="text-sm text-gray-500 text-center mt-2">Achieve your financial dreams faster by focusing on smart saving strategies. With tools to automate deposits</p>
                </div>
            </div>
        </div>
    </section>);
}

export default Features;