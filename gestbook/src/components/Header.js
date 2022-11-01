import React from "react";
import SvgComponent from "./SvgComponent";

export default function Header({ themes, setThemes }) {
  let out = (
    <div
      className={`flex w-full justify-around items-center h-24 min-h-[6rem] ${
        themes ? "bg-orange-100" : "bg-slate-700"
      }`}
    >
      <h1 className="text-2xl">GestBook</h1>
      <button
        className="btn btn-sm btn-circle glass text-neutral"
        onClick={() => setThemes(!themes)}
      >
        {themes ? <SvgComponent name="sun" /> : <SvgComponent name="moon" />}
      </button>
    </div>
  );

  return out;
}
