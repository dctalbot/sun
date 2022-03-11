const BASE_URL = "https://api.sunrise-sunset.org/json";

export async function fethcSunTimes(lat: string, lon: string) {
  return fetch(`${BASE_URL}?lat=${lat}&lng=${lon}&formatted=0`)
    .then((resp) => resp.json())
    .then((data) => data.results)
    .catch((e) => console.error(e));
}

export function fmtTime(s: string) {
  return new Date(s).toLocaleTimeString();
}
