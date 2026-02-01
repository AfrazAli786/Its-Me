import fs from "node:fs/promises";
import path from "node:path";

export async function getData() {
  try {
    const __dirname = import.meta.dirname;
    const parent = path.join(__dirname, "..");
    const n = path.join(parent, "data");
    const pathJSON = path.join(n, "data.json");
    const data = await fs.readFile(pathJSON, "utf8");
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (err) {
    console.log(err);
  }
}
