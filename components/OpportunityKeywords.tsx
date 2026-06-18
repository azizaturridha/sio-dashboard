interface Props {
  data: any[];
}

export default function OpportunityKeywords({
  data,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">
        Opportunity Keywords
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">
              Keyword
            </th>

            <th className="text-left p-2">
              Position
            </th>

            <th className="text-left p-2">
              CTR
            </th>

            <th className="text-left p-2">
              Impressions
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-b"
            >
              <td className="p-2">
                {row.keyword}
              </td>

              <td className="p-2">
                {row.position}
              </td>

              <td className="p-2">
                {row.ctr}
              </td>

              <td className="p-2">
                {row.impressions.toLocaleString(
                  "id-ID"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
