import React from "react";
import "./Character.css";

function Character(props) {
  const renderChar = () => {
    if (props.char === " ") {
      return <div className='space'></div>;
    } else {
      return <div className=''>{props.char}</div>;
    }
  };

  const characterState = (state) => {
    if (state === false) {
      return "incorrect";
    } else if (state === true) {
      return "correct";
    } else {
      return "shadow";
    }
  };

  return (
    <div className='character-container shadow'>
      <div className={`${props.active ? "active" : ""}`}></div>
      <div className={`${characterState(props.correct)}`}>{renderChar()}</div>
    </div>
  );
}

export default Character;
