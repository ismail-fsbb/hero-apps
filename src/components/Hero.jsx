export default function Hero() {
    return (
        <section className="pt-20">
            <div className="container">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 text-center space-y-6 max-w-[65%] mx-auto">
                        <h2 className="text-5xl font-bold text-[#001931]">We Build <br />
                            <span className="text-primary">Productive</span> Apps</h2>
                        <p className="text-gray">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                        <div className="flex items-center gap-4 justify-center">
                            <a href="https://play.google.com/store" target="_blank" className="font-semibold text-xl capitalize flex items-center gap-2 py-2 px-5 border border-primary/20 rounded cursor-pointer max-w-fit">
                                <img src="/google-icon.png" alt="Google" className="max-w-[30px] max-h-[30px] object-contain" />
                                Google Play
                            </a>
                            <a href="https://apps.apple.com" target="_blank" className="font-semibold text-xl capitalize flex items-center gap-2 py-2 px-5 border border-primary/20 rounded cursor-pointer max-w-fit">
                                <img src="/app-store.png" alt="Apple" className="max-w-[30px] max-h-[30px] object-contain" />
                                App Store
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-10 text-center">
                    <img src="/hero.png" alt="Mobile" className="mx-auto" />
                </div>
            </div>
        </section>
    );
}