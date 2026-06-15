interface Props {
  data: {
    page: string;
    clicks: number;
  }[];
}

export default function TopPages({
  data,
}: Props) {
  return (
    <div className="rounded-xl border p-6">
      <h2 className="font-bold text-xl mb-4">
        Top Pages
      </h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">
              Rank
            </th>

            <th className="text-left py-2">
              Page
            </th>

            <th className="text-right py-2">
              Clicks
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.page}
              className="border-b hover:bg-gray-50"
            >
              <td className="py-2">
                {index + 1}
              </td>

              <td
                className="py-2 max-w-md truncate"
                title={row.page}
              >
               <a
                 href={row.page}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:underline"
               >
                {row.page}
                </a>
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
