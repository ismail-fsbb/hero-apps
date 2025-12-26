import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import RatingChart from "../components/recharts";
import { toast } from "react-toastify";

const STORAGE_KEY = "installedApps";

export default function AppDetails() {
    const { id } = useParams();
    const data = useLoaderData();

    const app = data.find(
        (item) => String(item.id) === id
    );

    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        const installedApps =
            JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

        const alreadyInstalled = installedApps.some(
            (item) => item.id === app?.id
        );

        setInstalled(alreadyInstalled);
    }, [app?.id]);

    if (!app) {
        return <div className="p-6">App not found</div>;
    }

    const HandleInstall = () => {
        const installedApps =
            JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

        const alreadyInstalled = installedApps.some(
            (item) => item.id === app.id
        );

        if (!alreadyInstalled) {
            installedApps.push(app);
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(installedApps)
            );
            toast.success("App installed successfully");
            setInstalled(true);
        }
    };

    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-4">
                        <img
                            src={app.image}
                            alt={app.title}
                            className="h-[316px] w-full object-cover rounded-lg"
                        />
                    </div>

                    <div className="col-span-8 space-y-4">
                        <div className="pb-5 border-b border-[#001931]/20 space-y-4">
                            <h2 className="text-5xl font-bold text-[#001931]">
                                {app.title}
                            </h2>
                            <p className="text-gray">
                                Developed by{" "}
                                <span className="text-primary">
                                    {app.companyName}
                                </span>
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 max-w-1/2">
                            <div className="space-y-2">
                                <img src="/icon-downloads.png" className="max-w-10" />
                                <p className="text-base text-[#001931]/80">
                                    Downloads
                                </p>
                                <h2 className="text-[40px] font-extrabold">
                                    {app.downloads}M
                                </h2>
                            </div>

                            <div className="space-y-2">
                                <img src="/icon-ratings.png" className="max-w-10" />
                                <p className="text-base text-[#001931]/80">
                                    Ratings
                                </p>
                                <h2 className="text-[40px] font-extrabold">
                                    {app.ratingAvg}
                                </h2>
                            </div>

                            <div className="space-y-2">
                                <img src="/icon-review.png" className="max-w-10" />
                                <p className="text-base text-[#001931]/80">
                                    Reviews
                                </p>
                                <h2 className="text-[40px] font-extrabold">
                                    {app.ratingAvg}K
                                </h2>
                            </div>
                        </div>

                        <button
                            onClick={HandleInstall}
                            disabled={installed}
                            className={`mt-6 rounded py-3 px-7 text-white transition
                                ${installed
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-[#00D390] hover:bg-[#00b87f]"
                                }`}
                        >
                            {installed
                                ? "Installed"
                                : `Install Now (${app.size} MB)`}
                        </button>
                    </div>
                </div>

                <div className="my-12">
                    <RatingChart ratings={app.ratings} />
                </div>

                <div className="mt-10">
                    <h3 className="text-2xl">Description</h3>
                    <p>{app.description}</p>
                </div>
            </div>
        </section>
    );
}
