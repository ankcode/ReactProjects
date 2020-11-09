import React from 'react'

export default function Modal ({ handleClose, show, children })  {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button className="button" onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };