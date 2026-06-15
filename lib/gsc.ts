import fs from "fs";
import path from "path";
import Papa from "papaparse";

export async function readCsv(fileName: string) {
  const filePath = path.join(
    process.cwd(),
    "src/data",
    fileName
  );

  const csv = fs.readFileSync(filePath, "utf8");

  const result = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true,
  });

  return result.data;
}
