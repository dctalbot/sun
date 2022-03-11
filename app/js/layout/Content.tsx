import React from "react";
import LatLonTool from "../LatLonTool/LatLonTool";

function Content() {
  return (
    <>
      <header className="bg-yellow-200 px-4 py-2">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900">
          SunRise / SunSet
        </h1>
      </header>
      <main>
        <LatLonTool />
      </main>
    </>
  );
}

export default Content;
