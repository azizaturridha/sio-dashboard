"use client";

import { useState } from "react";

interface Props {
  data: {
    keyword: string;
    clicks: number;
  }[];
}

export default function KeywordSearch({
  data,
}: Props) {
  const [search, setSearch] = useState("");

  const filtered = data.filter((row) =>
    row.keyword
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="rounded-xl border p-6 mt-8">
      <h2 className="text-xl font-bold mb-4">
        Search Keywords
      </h2>

      <input
        type="text"
        placeholder="Cari keyword..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full border rounded-lg p-3 mb-4"
      />

      <table className="w-full">
        <tbody>
          {filtered
            .slice(0, 30)
            .map((row) => (
              <tr
                key={row.keyword}
                className="border-b"
              >
                <td className="py-2">
                  {row.keyword}
                </td>

                <td className="text-right">
                  {row.clicks}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
