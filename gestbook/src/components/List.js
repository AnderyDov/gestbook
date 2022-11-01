import React from "react";

export default function List({ base, setBase }) {
  let showList = [...base].map((el) => {
    return (
      <li key={el.id} className="flex flex-col mb-2 w-5/6 sm:w-full">
        <div className="cursor-zoom-in hover:scale-125 p-2 hover:bg-base-100 hover:shadow-md hover:rounded-md transition-all">
          <p className="indent-3">{el.name}</p>
          <p>{el.note}</p>
          <p className="text-right">
            {new Date(+el.date).toLocaleDateString() +
              " " +
              new Date(+el.date).toLocaleTimeString()}
          </p>
        </div>
        <hr />
      </li>
    );
  });

  let out = (
    <div className="flex p-8 w-4/6 sm:w-full">
      <ul className="w-full text-xs">{showList}</ul>
    </div>
  );

  return out;
}
