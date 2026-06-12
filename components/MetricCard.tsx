interface MetricCardProps {
  title: string;
  value: string | number;
}

export default function MetricCard({
  title,
  value,
}: MetricCardProps) {
  return (
    <div className="rounded-xl border p-6 shadow-sm bg-white">
      <p className="text-gray-500">{title}</p>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}