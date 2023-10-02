/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function Modal({ isOpenProp, onClose, expense }) {
  const [isOpen, setIsOpen] = useState(isOpenProp);

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <p>{expense?.description}</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button type="button" className="btn" onClick={onClose}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
