import React from "react";
import "./Character.css";

function Character(props) {
  const renderChar = () => {
    if (props.char === " ") {
      return <div className='space'></div>;
    } else {
      <div className="shadow"></div>
      return props.char;
    }
  };

  return (
    <div className='character-container'>
      <div className={`${props.active ? "active" : ""}`}> </div>
      <div
        className={`"character" ${props.correct ? "correct": "incorrect" }`}
        id={props.active ? "active" : ""}>
        {renderChar()}
      </div>
    </div>
  );
}

export default Character;
