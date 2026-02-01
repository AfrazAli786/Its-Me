export const parseJSONBody = async (req) => {
  let body = "";
  for await (let chunk of req) {
    body += chunk;
  }

  try {
    body = JSON.parse(body);
    return body;
  } catch (err) {
    console.log(`Invalid JSON format ${err}`);
  }
};
