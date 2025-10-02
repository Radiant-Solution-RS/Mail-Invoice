// Stats.jsx
import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t, i18n } = useTranslation();

  // Helper: agar German ho to translation, warna fallback original
  const translateIfNeeded = (key, fallback) =>
    i18n.language === "de" ? t(key) : fallback;

  const stats = [
    {
      label: translateIfNeeded("stats.total", "Total"),
      value: 520,
      color: "#22c55e", // green
      data: [10, 20, 15, 30, 25, 40, 35],
    },
    {
      label: translateIfNeeded("stats.parsed", "Parsed"),
      value: 480,
      color: "#22c55e",
      data: [15, 25, 20, 35, 40, 30, 45],
    },
    {
      label: translateIfNeeded("stats.errors", "Errors"),
      value: 15,
      color: "#ef4444", // red
      data: [5, 10, 8, 12, 15, 10, 14],
    },
    {
      label: translateIfNeeded("stats.pending", "Pending"),
      value: 25,
      color: "#22c55e",
      data: [12, 18, 15, 22, 20, 28, 25],
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm"
        >
          {/* Label + Value */}
          <p className="text-sm text-gray-500 mb-2">{item.label}:</p>
          <p className="text-xl font-bold text-gray-800">{item.value}</p>

          {/* Mini Chart */}
          <div className="h-12 mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={item.data.map((v, i) => ({ x: i, y: v }))}>
                <Line
                  type="monotone"
                  dataKey="y"
                  stroke={item.color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
