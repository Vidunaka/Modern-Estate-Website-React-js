// Popup.js
import React from "react";

const Popup = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>Hello, World!</p>
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default Popup;
