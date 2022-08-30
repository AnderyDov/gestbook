import React, { useEffect } from "react";
import List from "./List";
import Form from "./Form";

export default function Main({ base, setBase, name, setName, note, setNote }) {
  useEffect(() => {
    document.querySelector(".main").scrollTop =
      document.querySelector(".main").scrollHeight;
  });

  let out = (
    <div className="main relative flex flex-row sm:flex-col w-full justify-end overflow-auto sm:justify-center sm:items-center">
      <List base={base} setBase={setBase} />
      <Form
        base={base}
        setBase={setBase}
        name={name}
        setName={setName}
        note={note}
        setNote={setNote}
      />
    </div>
  );

  return out;
}
