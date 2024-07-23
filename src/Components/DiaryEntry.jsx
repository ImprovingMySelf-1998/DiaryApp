import React, { useRef, useState } from "react";
import InputModal from "./InputModal";
import Input from "./Input";
import Entrys from "./Entrys";
import Modal from "./Modal";

function DiaryEntry(props) {
  const inputRef = useRef();
  const title = useRef();
  const content = useRef();

  function handleAddEntry() {
    inputRef.current.open();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newEntry = {
      title: title.current.value,
      content: content.current.value,
    };
    if (!newEntry.title || !newEntry.content) {
      inputRef.current.close();
      return;
    }
    props.onAddEntry(newEntry);
    inputRef.current.close();
    title.current.value = "";
    content.current.value = "";
  }

  return (
    <React.Fragment>
      <InputModal
        ref={inputRef}
        className="h-screen w-screen bg-transparent [&>*:last-child]:my-2 backdrop:bg-black backdrop:bg-opacity-40"
        onSave={handleSubmit}
      >
        <div className="flex flex-col gap-1 h-[90%]">
          <Input
            type="text"
            placeholder="Title"
            className="p-[0.625rem] box-border outline-none rounded-t-[0.625rem]"
            ref={title}
          />
          <hr className="border-solid border-y-2" />
          <textarea
            placeholder="Content"
            className="rounded-b-[0.625rem] h-full p-[0.625rem] resize-none"
            ref={content}
          />
        </div>
      </InputModal>
      <div className="flex justify-center items-start flex-wrap box-border">
        <div className="m-5 w-[19.6875rem] h-[20.9375rem] outline-none flex justify-center items-center text-[31.25rem] rounded-[1.25rem] p-5 text-green-700 bg-[rgba(213_253_152)] bg-opacity-50 shadow-[5px_5px_10px_rgba(2_95_7_.5)] overflow-hidden border-2 border-solid border-[#006400]">
          <button onClick={handleAddEntry}>+</button>
        </div>
        <Entrys entries={props.entries} />
      </div>
    </React.Fragment>
  );
}

export default DiaryEntry;
