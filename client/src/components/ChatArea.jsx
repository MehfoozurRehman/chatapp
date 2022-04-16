import React from "react";

export default function ChatArea({ setIsDetails }) {
  return (
    <div className="container__chat__wrapper">
      <button
        onClick={() => {
          setIsDetails(true);
        }}
        className="container__chat__wrapper__header"
      >
        header
      </button>
      <div className="container__chat__wrapper__chat">chat</div>
      <div className="container__chat__wrapper__footer">footer</div>
    </div>
  );
}
