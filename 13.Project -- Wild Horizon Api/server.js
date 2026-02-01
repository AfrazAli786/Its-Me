import http from "node:http";
import { data as datas } from "./utils/data.js";
import { renderData } from "./utils/DRY.js";
import { sendJSONResponse } from "./utils/sendJSONResponse.js";

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  const queryObj = Object.fromEntries(url.searchParams);

  //! Code - in use

  req.url = req.url.toLowerCase();
  if (url.pathname === "/api" && req.method === "GET") {
    // 1. Find the first item that matches ALL provided query parameters
    const match = datas.find((item) => {
      // Check each query param: if it exists in URL, it must match the data item
      const matchName =
        !queryObj.name || item.name === queryObj.name.toLowerCase();
      const matchContinent =
        !queryObj.continent ||
        item.continent === queryObj.continent.toLowerCase();
      const matchCountry =
        !queryObj.country || item.country === queryObj.country.toLowerCase();

      // Special handling for boolean string "true"/"false"
      const matchOpen =
        !queryObj.is_open_to_public ||
        String(item.is_open_to_public) ===
          queryObj.is_open_to_public.toLowerCase();

      return matchName && matchContinent && matchCountry && matchOpen;
    });

    if (match) {
      sendJSONResponse(res, 200, match);
    } else {
      return res.end("Not found");
    }

    //* end
  } else if (req.url.includes(`/api/continent/`) && req.method === "GET") {
    const continent = decodeURIComponent(req.url.split("/").pop());

    res.write(renderData(continent, "continent", datas));
    res.end();
  } else if (req.url.includes(`/api/country/`) && req.method === "GET") {
    const country = decodeURIComponent(req.url.split("/").pop());
    res.write(renderData(country, "country", datas));
    res.end();
  } else {
    res.end("404 not found");
  }
});

server.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
