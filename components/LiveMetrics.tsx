"use client";

import { useEffect, useState } from "react";
import MetricCard from "./MetricCard";

export default function LiveMetrics() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/gsc")
      .then((res) => res.json())
      .then((json) => {
        setData(json.rows?.[0]);
      });
  }, []);

  if (!data) {
    return (
      <div className="grid grid-cols-4 gap-4">
        <MetricCard title="Clicks" value="..." />
        <MetricCard title="Impressions" value="..." />
        <MetricCard title="CTR" value="..." />
        <MetricCard title="Position" value="..." />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      <MetricCard
        title="Clicks"
        value={data.clicks.toLocaleString("id-ID")}
      />

      <MetricCard
        title="Impressions"
        value={data.impressions.toLocaleString("id-ID")}
      />

      <MetricCard
        title="CTR"
        value={`${(data.ctr * 100).toFixed(2)}%`}
      />

      <MetricCard
        title="Position"
        value={data.position.toFixed(2)}
      />
    </div>
  );
}
