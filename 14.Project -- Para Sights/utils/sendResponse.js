export const sendJSONResponse = (res, statusCode, content_type, payload) => {
  res.setHeader("Content-Type", content_type);
  res.statusCode = statusCode;
  res.end(payload);
};
