import MetricCard from "@/components/MetricCard";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        SIO.CO.ID Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard
          title="Clicks"
          value="194.114"
        />

        <MetricCard
          title="Impressions"
          value="7.567.099"
        />

        <MetricCard
          title="CTR"
          value="2.57%"
        />

        <MetricCard
          title="Position"
          value="6.8"
        />
      </div>
    </main>
  );
}