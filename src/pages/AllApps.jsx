import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import AppCard from "../components/AppCard";

export default function AllApps() {
    const data = useLoaderData();
    const [search, setSearch] = useState(data);
    const handleSearch = (e) => {
        const searchValue = e.target.value;
        const result = data.filter((app) => app.title.toLowerCase().includes(searchValue.toLowerCase()));
        setSearch(result);
    }
    return (
        <section>
            <div className="container space-y-8">
                <div className="text-center space-y-4 mb-10">
                    <h2>Our All Applications</h2>
                    <p>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold text-secondary capitalize">({data.length}) Apps Found</p>
                    <div>
                        <input type="text" onChange={handleSearch} placeholder="search Apps" className="py-3 px-5 border border-[#D2D2D2] rounded" />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    {
                        search.map((app) => (
                            <AppCard key={app.id} app={app} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}