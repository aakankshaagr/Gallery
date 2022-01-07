import React from "react";

const Modal = ({ imageUrl }) => {
  return (
    <div
      className="backdrop"
      onClick={(e) => {
        if (e.target.classList.contains("backdrop")) {
          document.querySelector(".backdrop img").style.visibility = "hidden";
        }
      }}
    >
      <img src={imageUrl} alt="enlarged"></img>
    </div>
  );
};

export default Modal;
