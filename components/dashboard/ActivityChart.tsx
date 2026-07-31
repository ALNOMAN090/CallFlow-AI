"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    day: "Mon",
    calls: 45,
  },
  {
    day: "Tue",
    calls: 72,
  },
  {
    day: "Wed",
    calls: 58,
  },
  {
    day: "Thu",
    calls: 90,
  },
  {
    day: "Fri",
    calls: 120,
  },
  {
    day: "Sat",
    calls: 85,
  },
  {
    day: "Sun",
    calls: 110,
  },
];

export default function ActivityChart() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Call Activity
        </h2>

        <p className="text-sm text-gray-500">
          Weekly AI agent call performance
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="calls"
              stroke="#2563EB"
              strokeWidth={3}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
