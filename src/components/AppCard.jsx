import { Link } from "react-router-dom";

const AppCard = ({ app }) => {
    return (
        <div className="p-4 bg-white rounded-lg space-y-3">
            <Link to={`/app-details/${app.id}`}>
                <img
                    src={app.image}
                    alt={app.title}
                    className="h-[316px] w-full object-cover rounded-lg bg-red-500"
                />
            </Link>

            <Link to={`/app-details/${app.id}`}>
                <h3 className="text-xl capitalize my-3">{app.title}</h3>
            </Link>

            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 p-2 bg-[#F1F5E8] text-[#00D390] rounded-lg">
                    <img src="/icon-downloads.png" alt="downloads" className="max-w-4" />
                    <p className="text-base font-medium">{app.downloads}M</p>
                </div>

                <div className="flex items-center gap-2 bg-[#FFF0E1] p-2 rounded-lg">
                    <img src="/icon-ratings.png" alt="rating" className="max-w-4" />
                    <p className="text-[#FF8811]">{app.ratingAvg}</p>
                </div>
            </div>
        </div>
    );
};

export default AppCard;
