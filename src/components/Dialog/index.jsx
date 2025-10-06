import { useEffect, useRef } from "react";
import "./dialog.style.css";
import { IconClose } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);
  function openDialog() {
    dialogRef.current.showModal();
  }
  function closeDialog() {
    dialogRef.current.close();
  }

  return (
    <>
      <dialog ref={dialogRef} className="dialog">
        <div className="close-btn-wrapper">
          <button className="close-btn" autoFocus onClick={onClose}>
            <IconClose></IconClose>
          </button>
        </div>
        <div className="body">{children}</div>
      </dialog>
    </>
  );
}
