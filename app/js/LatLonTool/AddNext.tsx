import React, { ButtonHTMLAttributes } from "react";

function AddNext(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="w-full flex justify-end p-12">
      <button
        className={
          "border-4 px-12 py-3 font-bold " +
          (props.disabled
            ? "cursor-not-allowed bg-gray-200 border-gray-400"
            : "border-black bg-white")
        }
        {...props}
      >
        Add
      </button>
    </div>
  );
}

export default AddNext;
