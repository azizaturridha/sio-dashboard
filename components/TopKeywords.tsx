interface Props {
  data: {
    keyword: string;
    clicks: number;
  }[];
}

export default function TopKeywords({
  data,
}: Props) {
  return (
    <div className="rounded-xl border p-6">
      <h2 className="font-bold text-xl mb-4">
        Top Keywords
      </h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">
              Rank
            </th>

            <th className="text-left py-2">
              Keyword
            </th>

            <th className="text-right py-2">
              Clicks
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.keyword}
              className="border-b hover:bg-gray-50"
            >
              <td className="py-2">
                {index + 1}
              </td>

              <td className="py-2">
                {row.keyword}
              </td>

              <td className="text-right py-2 font-medium">
                {row.clicks}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
