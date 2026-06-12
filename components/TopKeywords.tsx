export default function TopKeywords() {
  const data = [
    {
      keyword: "sio",
      clicks: 1500,
    },
    {
      keyword: "sio online",
      clicks: 1200,
    },
  ];

  return (
    <div className="rounded-xl border p-6">
      <h2 className="font-bold mb-4">
        Top Keywords
      </h2>

      <table className="w-full">
        <tbody>
          {data.map((row) => (
            <tr key={row.keyword}>
              <td>{row.keyword}</td>
              <td>{row.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}