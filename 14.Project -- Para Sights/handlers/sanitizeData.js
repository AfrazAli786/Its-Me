import sanitizeHtml from "sanitize-html";

export const sanitizeInput = async (data) => {
  let sanitizeData = {};
  for (let [key, value] of Object.entries(data)) {
    if (typeof value === "string") {
      sanitizeData[key] = sanitizeHtml(value, {
        allowedTags: ["b"],
        allowedAttributes: {},
      });
    } else {
      sanitizeData[key] = value;
    }
  }

  return sanitizeData;
};
