import { Link, useLoaderData } from "react-router";

export default function TrendingApps() {
    const data = useLoaderData();
    console.log(data);
    return (
        <section>
            < div className="container" >
                <div className="text-center space-y-4 mb-10">
                    <h2>Trending Apps</h2>
                    <p>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className="grid grid-cols-4 gap-6">
                    {
                        data.slice(0, 8).map((app) => (
                            <AppCard key={app.id} app={app} />
                        ))
                    }
                </div>

                <a href="/all-apps" className=" text-white font-semibold text-base bg-gradient-to-br from-violet-700 to-purple-500 py-3 px-6 rounded capitalize block mt-8 mx-auto max-w-fit">
                    show all
                </a>
            </div >
        </section >
    );
}