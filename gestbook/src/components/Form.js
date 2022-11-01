import React, { useState } from "react";

export default function Form({ base, setBase, name, setName, note, setNote }) {
  const [placeName, setPlaceName] = useState("");
  const [placeNote, setPlaceNote] = useState("");
  const [errName, setErrName] = useState(false);
  const [errNote, setErrNote] = useState(false);

  function handlerChangeName(e) {
    let t = e.target;
    if (t.value.length > 0) {
      setErrName(false);
      setPlaceName("");
    }
    setName(t.value);
  }

  function handlerChangeNote(e) {
    let t = e.target;
    if (t.value.length > 0) {
      setErrNote(false);
      setPlaceNote("");
    }
    setNote(t.value);
  }

  function handlerAddNote() {
    if (name.length !== 0 && note.length !== 0) {
      let date = new Date().getTime();

      fetch("/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
        body: JSON.stringify({ date: date, name: name, note: note }),
      })
        .then((res) => res.json())
        .then((res) => {
          setBase(res);
          setName("");
          setNote("");
        })
        .catch(() => alert("Error"));
    }
    if (name.length === 0) {
      setErrName(true);
      setPlaceName("enter your name");
    }
    if (note.length === 0) {
      setErrNote(true);
      setPlaceNote("this field should not be empty");
    }
  }

  let out = (
    <div className="card flex-shrink-0 w-2/6 max-w-sm shadow-2xl bg-base-100 fixed left-0 sm:static sm:w-full">
      <div className="card-body">
        <div className="form-control relative">
          <span
            className={`absolute top-10 right-3 text-red-500 text-2xl ${
              errName ? "block" : "hidden"
            }`}
          >
            *
          </span>
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            placeholder={placeName}
            value={name}
            onChange={handlerChangeName}
          />
        </div>
        <div className="form-control relative">
          <span
            className={`absolute top-10 right-3 text-red-500 text-2xl ${
              errNote ? "block" : "hidden"
            }`}
          >
            *
          </span>
          <label className="label">
            <span className="label-text">Your note</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder={placeNote}
            value={note}
            onChange={handlerChangeNote}
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={handlerAddNote}>
            Send note
          </button>
        </div>
      </div>
    </div>
  );

  return out;
}
