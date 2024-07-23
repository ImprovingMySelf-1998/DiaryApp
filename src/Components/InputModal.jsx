import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const InputModal = forwardRef(function Modal(props, ref) {
  const input = useRef();
  useImperativeHandle(ref, () => ({
    open: () => {
      input.current.showModal();
    },
    close: () => {
      input.current.close();
    },
  }));
  return createPortal(
    <dialog ref={input} className={props.className}>
      {props.children}
      <form method="dialog" className="flex justify-around gap-2 items-center">
        <button
          className="w-full text-white bg-red-500 border-red-700 border-2 p-2 font-bold rounded-md"
          onClick={() => input.current.close()}
        >
          Close
        </button>
        <button className="text-white bg-[#08ad08] border-solid border-2 border-green-700 w-full p-2 rounded-md" onClick={props.onSave}>
          Save
        </button>
      </form>
    </dialog>,
    document.getElementById("inputmodal-root")
  );
});

export default InputModal;
