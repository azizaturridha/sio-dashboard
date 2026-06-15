import {
  MousePointerClick,
  Eye,
  Target,
  Trophy,
  Search,
  FileText,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
}

export default function MetricCard({
  title,
  value,
}: MetricCardProps) {
  const icons: Record<string, any> = {
    Clicks: MousePointerClick,
    Impressions: Eye,
    CTR: Target,
    Position: Trophy,
    Keywords: Search,
    Pages: FileText,
  };

  const Icon = icons[title];

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-2 text-gray-500">
        {Icon && (
          <Icon
            size={18}
            className="text-blue-600"
          />
        )}

        <p>{title}</p>
      </div>

      <h2 className="text-4xl font-bold mt-4">
        {value}
      </h2>
    </div>
  );
}
