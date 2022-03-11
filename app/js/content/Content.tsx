import React, { useState } from "react";

const zeroVal = { lat: 0.0, lon: 0.0 };

function int(x: string) {
  return Number.parseInt(x, 10); // explicit base 10 to avoid odd behavior in certain envs
}

function float(x: string) {
  return Number.parseFloat(x);
}

function Content() {
  const [values, setValues] = useState<Record<string, number>[]>(
    new Array(1).fill(zeroVal)
  );

  const setValue = (path: string, _newVal: string) => {
    let next = values.slice(); // mutable copy
    const [_index, unit] = path.split("-", 2);
    const index = int(_index);
    const newVal = float(_newVal);
    next[index] = { ...next[index], [unit]: newVal };
    setValues(next);
  };

  const handleRemove = (index: number) => {
    setValues(values.filter((_, i) => i !== index));
  };

  return (
    <>
      {values.map((v, i) => {
        const [latID, lonID] = [`${i}-lat`, `${i}-lon`];
        return (
          <>
            <label htmlFor={latID}>
              <span>Latitutde</span>
              <input
                id={latID}
                value={v.lat}
                name={latID}
                type="number"
                onChange={(e) => setValue(latID, e.target.value)}
                className="mt-1"
              ></input>
            </label>

            <label htmlFor={lonID}>
              <span>Longitude</span>
              <input
                id={lonID}
                value={v.lon}
                name={lonID}
                type="number"
                onChange={(e) => setValue(lonID, e.target.value)}
                className="mt-1"
              ></input>
            </label>

            {values.length > 1 && (
              <button onClick={() => handleRemove(i)}>Remove</button>
            )}

            <br />
          </>
        );
      })}

      <button
        disabled={values.length >= 5}
        onClick={() => setValues(values.concat(zeroVal))}
      >
        Add
      </button>
    </>
  );
}

export default Content;
