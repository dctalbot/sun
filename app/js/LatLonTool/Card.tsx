import React, { useEffect } from "react";
import { Value } from "./LatLonTool";
import { fethcSunTimes, fmtTime } from "../util/api";

interface CardProps {
  id: string;
  value: Value;
  onChange: (newVal: Value) => void;
  onClose: () => void;
}

const DEBOUNCE_DELAY = 500;

function Card({ id, value, onChange, onClose }: CardProps) {
  const [latID, lonID] = [`${id}-lat`, `${id}-lon`];

  const performFetch = async () => {
    const res = await fethcSunTimes(value.lat, value.lon);
    onChange({
      ...value,
      sunrise: fmtTime(res.sunrise),
      sunset: fmtTime(res.sunset),
    });
  };

  const validateAndSet = (_cand: Partial<Value>) => {
    const cand = { ...value, ..._cand }; // candidate to validate
    const candLat = Number.parseFloat(cand["lat"]);
    const candLon = Number.parseFloat(cand["lon"]);
    if ((candLat && isNaN(candLat)) || (candLon && isNaN(candLon))) return; // non-float
    if (Math.abs(candLat) > 90 || Math.abs(candLon) > 180) return; // out of bounds
    onChange(cand);
  };

  // debounce search query as user types
  useEffect(() => {
    const t = setTimeout(() => {
      performFetch();
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(t);
  }, [value.lat, value.lon]);

  return (
    <div className="p-4 bg-blue-300 grid grid-cols-3 grid-flow-col gap-4">
      <label htmlFor={latID}>
        <div>Latitutde</div>
        <input
          id={latID}
          value={value["lat"]}
          name={latID}
          type="number"
          onChange={(e) => validateAndSet({ lat: e.target.value })}
          className="mt-1 w-full"
          min="-90"
          max="90"
        ></input>
      </label>

      <label htmlFor={lonID}>
        <div>Longitude</div>
        <input
          id={lonID}
          value={value["lon"]}
          name={lonID}
          type="number"
          onChange={(e) => validateAndSet({ lon: e.target.value })}
          className="mt-1 w-full"
          min="-180"
          max="180"
        ></input>
      </label>

      <div className="row-span-2 flex flex-col">
        {value.sunset && value.sunrise && (
          <>
            <div className="flex-1">
              <label className="font-bold">☼ ↑ Sunrise:</label>
              <p className="pl-8">{value.sunrise}</p>
            </div>
            <div className="flex-1">
              <label className="font-bold">☼ ↓ Sunset:</label>
              <p className="pl-8">{value.sunset}</p>
            </div>
          </>
        )}
      </div>

      <div className="row-span-2 justify-self-end">
        <button
          onClick={() => onClose()}
          className={
            "h-full border-4 py-12 px-3 font-bold border-black bg-white"
          }
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Card;
