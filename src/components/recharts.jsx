import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

export default function RatingChart({ ratings }) {
    const sortedRatings = [...ratings].sort(
        (a, b) => parseInt(b.name) - parseInt(a.name)
    );

    return (
        <div className="w-full h-[260px]">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
                Ratings
            </h3>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={sortedRatings}
                    layout="vertical"
                    margin={{ top: 0, right: 20, left: 50, bottom: 0 }}
                >
                    {/* Value (count) */}
                    <XAxis
                        type="number"
                        tick={{ fontSize: 12 }}
                        axisLine={false}
                    />

                    {/* Left side: 1–5 star */}
                    <YAxis
                        type="category"
                        dataKey="name"
                        tick={{ fontSize: 16 }}
                        axisLine={false}
                    />

                    <Tooltip
                        cursor={{ fill: "rgba(0,0,0,0.05)" }}
                        formatter={(value) => [`${value} users`, "Ratings"]}
                    />

                    <Bar
                        dataKey="count"
                        fill="#f97316"
                        barSize={24}
                        radius={[0, 6, 6, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
