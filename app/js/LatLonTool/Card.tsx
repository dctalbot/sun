import React from "react";
import { Value } from "./LatLonTool";

interface CardProps {
  id: string;
  value: Value;
  onChange: (newVal: Value) => void;
  onClose: () => void;
  onBlur: () => void;
}

function Card({ id, value, onChange, onClose, onBlur }: CardProps) {
  const [latID, lonID] = [`${id}-lat`, `${id}-lon`];

  function validateAndSet(_cand: Partial<Value>) {
    const cand = { ...value, ..._cand }; // candidate to validate
    const candLat = Number.parseFloat(cand["lat"]);
    const candLon = Number.parseFloat(cand["lon"]);
    if ((candLat && isNaN(candLat)) || (candLon && isNaN(candLon))) return; // non-float
    if (Math.abs(candLat) > 90 || Math.abs(candLon) > 180) return; // out of bounds
    onChange(cand);
  }

  return (
    <div className="p-4 bg-blue-300 grid grid-cols-2 grid-flow-col gap-4">
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
          onBlur={onBlur}
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
          onBlur={onBlur}
        ></input>
      </label>

      <div className="row-span-2">
        <p>{value["sunrise"]}</p>
        <p>{value["sunset"]}</p>
      </div>

      <div className="row-span-2">
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
