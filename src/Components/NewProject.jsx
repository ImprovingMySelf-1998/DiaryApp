import React, { useState } from "react";

function NewProject(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(props.project.title);
  

  function handleButton() {
    if (isEditing) {
      if (playerName.trim() === "") {
        props.onDelete();
      } else {
        props.onSave(playerName);
      }
    }
    setIsEditing((editing) => !editing);
  }

  function handleInputChange(event) {
    setPlayerName(event.target.value);
  }

  let editPlayerName = (
    <h1 className="block text-2xl my-2 font-bold">{playerName}</h1>
  );
  if (isEditing) {
    editPlayerName = (
      <input
        type="text"
        value={playerName}
        onChange={handleInputChange}
        className="block text-2xl my-2 font-bold rounded-md px-2"
        autoFocus
      />
    );
  }

  return (
    <div className="m-5 w-[19.6875rem] h-[20.9375rem] outline-none flex justify-center items-center rounded-[1.25rem] py-5 px-[10px] bg-[#d5fd98] shadow-[5px_5px_10px_rgba(2_95_7_.5)] overflow-hidden">
      <div className="flex flex-col [&>*:nth-last-child(-n+3)]:my-5">
        <div className="flex justify-end">
          <button
            className="border-2 p-[0.25rem] rounded-md border-green-700 text-green-700"
            onClick={handleButton}
          >
            <strong>{isEditing ? "Save" : "Edit"}</strong>
          </button>
        </div>
        <div className="text-center">{editPlayerName}</div>
        <div>
          <span className="text-gray-400">{props.entryCount}/{props.entryLimit}</span> Entry Saved
        </div>
        <div className="flex gap-4">
          <button onClick={props.onDelete} className="bg-red-400 p-2 rounded-md border-x-red-400 text-white border-solid">Delete Diary</button>
          <button onClick={()=>props.onView(props.project.id)} className="bg-green-400 border-solid p-2 rounded-md text-green-900/90">View All</button>
        </div>
      </div>
    </div>
  );
}

export default NewProject;
