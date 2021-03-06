import React, { useEffect, useState } from 'react';
import './Modal.css';

export default function Modal(props) {
  const { setModal, modal } = props;

  useEffect(() => {
    if (modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  }, [modal]);

  return (
    <div>
      {modal && (
        <div className="modal">
          <div onClick={() => setModal(false)} className="overlay"></div>
          <div className="modal-content">{props.children}</div>
        </div>
      )}
    </div>
  );
}
