import React from "react";
import "./Character.css";

function Character(props) {
  const renderChar = () => {
    if (props.char === " ") {
      return <div className='space'></div>;
    } else {
      return props.char;
    }
  };

  return (
    <div className='character-container'>
      <div className={`${props.active ? "active" : ""}`}> </div>
      <div
        className={`"character" ${props.correct ? "correct" : "shadow"} `}
        id={props.active ? "active" : ""}>
        {renderChar()}
      </div>
    </div>
  );
}

export default Character;
