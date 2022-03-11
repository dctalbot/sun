import React, { useState } from "react";
import Card from "./Card";
import AddNext from "./AddNext";

const zeroVal = { lat: "0.0", lon: "0.0", sunrise: "", sunset: "" };
export type Value = typeof zeroVal;

function LatLonTool() {
  const [values, setValues] = useState([zeroVal]);

  const setValue = (index: number, newVal: Value) => {
    let next = values.slice(); // mutable copy
    next[index] = newVal;
    setValues(next);
  };

  const handleRemove = (index: number) => {
    setValues(values.filter((_, i) => i !== index));
  };

  return (
    <>
      {values.map((v, i) => (
        <Card
          id={i.toString()}
          value={v}
          onChange={(newVal) => setValue(i, newVal)}
          onClose={() => handleRemove(i)}
        />
      ))}

      <AddNext
        disabled={values.length >= 5}
        onClick={() => setValues(values.concat(zeroVal))}
      />
    </>
  );
}

export default LatLonTool;
