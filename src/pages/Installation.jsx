import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

const STORAGE_KEY = "installedApps";

export default function Installation() {
    const [items, setItems] = useState([]);
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        const data =
            JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        setItems(data);
    }, []);

    const handleRemove = (id) => {
        const filteredData = items.filter(
            (item) => item.id !== id
        );

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(filteredData)
        );
        setItems(filteredData);
        toast.success("App removed successfully");
    };

    const sortedItems = useMemo(() => {
        if (!sortBy) return items;

        const sorted = [...items].sort((a, b) => {
            if (sortBy === "high-low") {
                return b.downloads - a.downloads;
            }
            if (sortBy === "low-high") {
                return a.downloads - b.downloads;
            }
            return 0;
        });

        return sorted;
    }, [items, sortBy]);

    return (
        <section>
            <div className="container space-y-6">
                <div className="text-center space-y-4 mb-10">
                    <h2>Your Installed Apps</h2>
                    <p>
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-2xl">
                        {sortedItems.length} Apps Found
                    </h2>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border border-[#001931]/10 px-3 py-2 rounded"
                    >
                        <option value="">Sort By Downloads</option>
                        <option value="high-low">High - Low</option>
                        <option value="low-high">Low - High</option>
                    </select>
                </div>

                <div className="space-y-4">
                    {sortedItems.map((app) => (
                        <div
                            key={app.id}
                            className="p-4 bg-white flex justify-between items-center rounded-lg"
                        >
                            <div className="flex gap-3 items-center">
                                <img
                                    src={app.image}
                                    alt={app.title}
                                    className="w-20 h-20 rounded"
                                />

                                <div>
                                    <h3 className="text-xl capitalize">
                                        {app.title}
                                    </h3>

                                    <div className="flex items-center gap-3 mt-2">
                                        <div className="flex items-center gap-2 p-2 bg-[#F1F5E8] text-[#00D390] rounded-lg">
                                            <img src="/icon-downloads.png" className="max-w-4" />
                                            <p>{app.downloads}M</p>
                                        </div>

                                        <div className="flex items-center gap-2 bg-[#FFF0E1] p-2 rounded-lg">
                                            <img src="/icon-ratings.png" className="max-w-4" />
                                            <p className="text-[#FF8811]">
                                                {app.ratingAvg}
                                            </p>
                                        </div>

                                        <h5 className="text-[#627382]">
                                            {app.size} MB
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => handleRemove(app.id)}
                                className="py-2 px-4 bg-[#00D390] text-white rounded cursor-pointer"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))}

                    {sortedItems.length === 0 && (
                        <p className="text-center text-gray-500">
                            No apps installed yet
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
