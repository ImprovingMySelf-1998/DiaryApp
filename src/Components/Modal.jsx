import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal(props, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
  }));
  return createPortal(
    <dialog ref={dialog} className={props.className}>
      {props.children}
      <form method="dialog">
        <button className="bg-red-400 p-2 rounded-md text-white mt-2">Close</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
