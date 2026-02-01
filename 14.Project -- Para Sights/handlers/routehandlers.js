import { getData } from "../utils/getData.js";
import { sendJSONResponse } from "../utils/sendResponse.js";
import { parseJSONBody } from "./parseJSONBody.js";
import { addNewSightings } from "./addNewSightings.js";
import { sanitizeInput } from "./sanitizeData.js";
import { sightingEvent } from "../utils/sightingsEvent.js";
import { stories } from "../data/stories.js";

export async function handleGet(res) {
  const data = await getData();
  const content = JSON.stringify(data);
  sendJSONResponse(res, 200, "application/json", content);
}

export async function handlePost(req, res, __baseDir) {
  try {
    const parsedBody = await parseJSONBody(req);
    const sanitized = await sanitizeInput(parsedBody);
    await addNewSightings(sanitized, __baseDir);
    sightingEvent.emit("sighting-added", sanitized);
    sendJSONResponse(res, 201, "application/json", JSON.stringify(parsedBody));
  } catch (err) {
    sendJSONResponse(
      res,
      400,
      "application/json",
      JSON.stringify({ error: err }),
    );
  }
}

export const handleNews = async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  setInterval(() => {
    let random_index = Math.floor(Math.random() * stories.length);

    res.write(
      `data:${JSON.stringify({
        event: "news-update",
        story: stories[random_index],
      })}\n\n`,
    );
  }, 3000);
};
