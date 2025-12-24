export default function Counter() {
    return (
        <div className="w-full px-6 py-20 bg-gradient-to-br from-violet-700 to-purple-500 flex flex-col items-center gap-12 overflow-hidden">
            <h2 className="text-center text-white text-4xl md:text-5xl font-bold font-['Inter'] capitalize">
                Trusted by Millions, Built for You
            </h2>

            {/* Stats */}
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center gap-4">
                    <p className="opacity-80 text-white text-base font-normal font-['Inter'] capitalize">
                        Total Downloads
                    </p>
                    <p className="text-white text-5xl md:text-6xl font-extrabold font-['Inter']">
                        29.6M
                    </p>
                    <p className="opacity-80 text-white text-base font-normal font-['Inter'] capitalize">
                        21% more than last month
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <p className="opacity-80 text-white text-base font-normal font-['Inter'] capitalize">
                        Total Reviews
                    </p>
                    <p className="text-white text-5xl md:text-6xl font-extrabold font-['Inter']">
                        906K
                    </p>
                    <p className="opacity-80 text-white text-base font-normal font-['Inter'] capitalize">
                        46% more than last month
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <p className="opacity-80 text-white text-base font-normal font-['Inter'] capitalize">
                        Active Apps
                    </p>
                    <p className="text-white text-5xl md:text-6xl font-extrabold font-['Inter']">
                        132+
                    </p>
                    <p className="opacity-80 text-white text-base font-normal font-['Inter'] capitalize">
                        31 more will launch
                    </p>
                </div>
            </div>
        </div>

    );
}