import data from "../data";
import { searchSuccess, setSearchRequest } from "../store/search/SearchAction";

export const search = () => async (dispatch, getState) => {
  const { location, guests, dates } = getState().search;
  let results;
  dispatch(setSearchRequest());

  if (location.locationKey) {
    results = data.hotels.filter((h) => location.locationKey === h.location);
  } else if (location.country !== "") {
    const country = location.country;
    const locationKeys = data.destinations
      .filter((d) => d.country === country)
      .map((d) => d.cityKeys)[0];
    results = data.hotels.filter((h) => locationKeys.includes(h.location));
  } else {
    results = data.hotels;
  }

  results = results.map((h) => {
    const locationKey = h.location;
    const city = data.cities.find((c) => c.key == locationKey);
    return { ...h, city: city.name, country: city.country };
  });
  //   development only!
  setTimeout(() => dispatch(searchSuccess(results)), 3000);
};
