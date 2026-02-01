export function renderData(locationName, locationType, data) {
  return JSON.stringify(
    data.filter((destination) => {
      return (
        destination[locationType].toLowerCase() === locationName.toLowerCase()
      );
    }),
  );
}
