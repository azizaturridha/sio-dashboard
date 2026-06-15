interface Props {
  data: {
    keyword: string;
    ctr: string;
  }[];
}

export default function TopCtrKeywords({
  data,
}: Props) {
  return (
    <div className="rounded-xl border p-6">
      <h2 className="font-bold text-xl mb-4">
        Top CTR Keywords
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
              CTR
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.keyword}
              className="border-b"
            >
              <td className="py-2">
                {index + 1}
              </td>

              <td className="py-2">
                {row.keyword}
              </td>

              <td className="text-right py-2">
                {row.ctr}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
