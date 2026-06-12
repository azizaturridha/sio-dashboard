"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "01", clicks: 100 },
  { date: "02", clicks: 250 },
  { date: "03", clicks: 180 },
];

export default function TrendChart() {
  return (
    <div className="mt-8 rounded-xl border p-6">
      <h2 className="font-bold mb-4">
        Click Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line dataKey="clicks" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}