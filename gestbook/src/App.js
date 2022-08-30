import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
// import DemoModal from "./components/DemoModal";

export default function App() {
  const [base, setBase] = useState([]);
  const [themes, setThemes] = useState(false);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    fetch("/base")
      .then((res) => res.json())
      .then((res) => setBase(res))
      .catch(() => alert("the server is not responding"));
  }, []);

  let out = (
    <div
      className="app flex flex-col h-full items-center font-mono pb-5"
      data-theme={themes ? "retro" : "coffe"}
    >
      <Header themes={themes} setThemes={setThemes} />
      <Main
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
