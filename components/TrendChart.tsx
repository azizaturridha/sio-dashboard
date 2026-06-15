"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: {
    date: string;
    clicks: number;
  }[];
}

export default function TrendChart({ data }: Props) {
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
          <Line
            type="monotone"
            dataKey="clicks"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
