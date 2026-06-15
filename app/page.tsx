import MetricCard from "@/components/MetricCard";
import TrendChart from "@/components/TrendChart";
import TopKeywords from "@/components/TopKeywords";
import TopPages from "@/components/TopPages";
import KeywordSearch from "@/components/KeywordSearch";
import { readCsv } from "@/lib/gsc";

export default async function Home() {
  const chartData = await readCsv("Chart.csv");
  const keywordsData = await readCsv("Queries.csv");
  const pagesData = await readCsv("Pages.csv");

  const totalClicks = chartData.reduce(
    (sum: number, row: any) =>
      sum + Number(row["Clicks"] || 0),
    0
  );

  const totalImpressions = chartData.reduce(
    (sum: number, row: any) =>
      sum + Number(row["Impressions"] || 0),
    0
  );

  const avgCtr =
    chartData.reduce(
      (sum: number, row: any) =>
        sum +
        Number(
          String(row["CTR"] || "0")
            .replace("%", "")
        ),
      0
    ) / chartData.length;

  const avgPosition =
    chartData.reduce(
      (sum: number, row: any) =>
        sum +
        Number(row["Position"] || 0),
      0
    ) / chartData.length;

  const trendData = chartData.map(
    (row: any) => ({
      date: row["Date"],
      clicks: Number(
        row["Clicks"] || 0
      ),
    })
  );

  const topKeywords = keywordsData
    .slice(0, 20)
    .map((row: any) => ({
      keyword: row["Top queries"],
      clicks: Number(
        row["Web Clicks"] || 0
      ),
    }));

  const topPages = pagesData
    .slice(0, 20)
    .map((row: any) => ({
      page: row["Top pages"],
      clicks: Number(
        row["Web Clicks"] || 0
      ),
    }));

 const totalKeywords =
   keywordsData.length;

 const totalPages =
   pagesData.length;

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        SIO.CO.ID Dashboard
      </h1>

      <div className="grid grid-cols-6 gap-4">
        <MetricCard
          title="Clicks"
          value={totalClicks.toLocaleString("id-ID")}
        />

        <MetricCard
          title="Impressions"
	  value={totalImpressions.toLocaleString("id-ID")}
	/>

        <MetricCard
          title="CTR"
          value={`${avgCtr.toFixed(2)}%`}
        />

        <MetricCard
          title="Position"
          value={avgPosition.toFixed(2)}
        />

        <MetricCard
          title="Keywords"
          value={totalKeywords.toLocaleString("id-ID")}
        />

        <MetricCard
          title="Pages"
          value={totalPages.toLocaleString("id-ID")}
        />
      </div>

      <TrendChart data={trendData} />

      <div className="grid grid-cols-2 gap-4 mt-8">
        <TopKeywords data={topKeywords}/>
        <TopPages data={topPages}/>
      </div>

        <KeywordSearch
          data={topKeywords}
        />
    </main>
  );
}
