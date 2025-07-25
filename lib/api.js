const headers = { "Content-Type": "application/json" };

async function fetchCars(link) {
  const res = await fetch(link, {
    method: "GET",
    headers,
  });
  const json = await res.json();
  return json;
}

async function fetchCarsByBrand(brand) {
  const link = import.meta.env.VITE_APP_API_URL + "/cars/brand/" + brand;
  return await fetchCars(link);
}

async function searchCars(val) {
  const link = import.meta.env.VITE_APP_API_URL + "/search?name=" + val;
  return await fetchCars(link);
}

export { fetchCars, fetchCarsByBrand, searchCars };
