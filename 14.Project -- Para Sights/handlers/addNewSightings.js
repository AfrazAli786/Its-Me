import { getData } from "../utils/getData.js";
import fs from "node:fs/promises";
import path from "node:path"; // Added this

export const addNewSightings = async (newSightings, __baseDir) => {
  try {
    const sightings = await getData();

    // Use spread if newSightings is an array, otherwise just push
    if (Array.isArray(newSightings)) {
      sightings.push(...newSightings);
    } else {
      sightings.push(newSightings);
    }
    const pathJSON = path.join(path.join(__baseDir, "data"), "data.json");

    // Added null, 2 for readability
    await fs.writeFile(pathJSON, JSON.stringify(sightings, null, 2), "utf8");
  } catch (err) {
    // It's better to log the error or pass the original error object
    console.error("Failed to write to file:", err);
    throw err;
  }
};
