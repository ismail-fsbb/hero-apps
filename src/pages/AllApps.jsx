import { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../components/AppCard";

export default function AllApps() {
    const data = useLoaderData();

    const [search, setSearch] = useState(data);
    const [loading, setLoading] = useState(false);

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();

        setLoading(true);

        setTimeout(() => {
            const result = data.filter((app) =>
                app.title.toLowerCase().includes(searchValue)
            );

            setSearch(result);
            setLoading(false);
        }, 500); // loader visible delay
    };

    return (
        <section>
            <div className="container space-y-8">
                <div className="text-center space-y-4 mb-10">
                    <h2>Our All Applications</h2>
                    <p>
                        Explore All Apps on the Market developed by us. We code for
                        Millions
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold text-secondary capitalize">
                        ({search.length}) Apps Found
                    </p>

                    <input
                        type="text"
                        onChange={handleSearch}
                        placeholder="Search apps"
                        className="py-3 px-5 border border-[#D2D2D2] rounded outline-none"
                    />
                </div>

                {/* Loader */}
                {loading && (
                    <div className="flex justify-center items-center py-10">
                        <div className="h-10 w-10 border-4 border-gray-300 border-t-secondary rounded-full animate-spin"></div>
                    </div>
                )}

                {/* No data */}
                {!loading && search.length === 0 && (
                    <p className="text-center mt-4 text-secondary capitalize text-2xl font-semibold">
                        No app found
                    </p>
                )}

                {/* App Grid */}
                {!loading && search.length > 0 && (
                    <div className="grid grid-cols-4 gap-6">
                        {search.map((app) => (
                            <AppCard key={app.id} app={app} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
