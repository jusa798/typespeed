import React, { useState, useEffect, useRef } from "react";
import Character from "../Character/Character";
import "./Textbox.css";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Textbox() {
  // CREATING THE ARRAY
  const text =
    "Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed or tedious cottage. Procuring as in resembled by in agreeable. Next long no gave mr eyes. Admiration advantages no he celebrated so pianoforte unreserved. Not its herself forming charmed amiable. Him why feebly expect future now.";
  const textArr = text.split("");

  // CREATING REFERENCES
  const textboxRef = useRef(null);

  //STATES
  const [pos, setPos] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [correctnessArray, setCorrectnessArray] = useState([]);
  const [startDate, setStartDate] = useState();
  const [errorsArray, setErrorsArray] = useState([])
  const [wpm, setWPM] = useState(0);

  const handleCharacterEntry = (e) => {
    if (gameActive) {
      if (e.key === textArr[pos]) {
        setCorrectnessArray([...correctnessArray, true]);
        setPos((prevPos) => prevPos + 1);
      } else {
        setCorrectnessArray([...correctnessArray, false]);
        console.log(correctnessArray == false )
        setPos((prevPos) => prevPos + 1);
      }
        if (pos === textArr.length - 1) {
          setGameActive(false);
        } 
    } else {
      if (e.key === "Enter" && pos != 0) {
        setGameActive(true);
        setStartDate(Date.now());
        setPos(0);
        setCorrectnessArray([]);
      }
      if (e.key === textArr[0] && pos == 0) {
        setGameActive(true);
        setStartDate(Date.now());
        setCorrectnessArray([...correctnessArray, true]);
        setPos((prevPos) => prevPos + 1);
      }
    }
    if (e.key === "Backspace" && pos != 0) {
      setPos((prevPos) => prevPos - 2);
      console.log(pos)
    }

  };

  const calculateWPM = (delta) => {
    if (pos == 0) {
      return 0;
    }

    const charsPM = pos / 5;
    let deltaInMinutes = delta / 1000 / 60;
    console.log(pos);
    return Math.round(charsPM / deltaInMinutes);
  };

  //USEEFFECTS
  useEffect(() => {
    textboxRef.current.focus();
  }, []);

  useInterval(() => {
    if (!gameActive) {
      return;
    }
    setWPM(calculateWPM(Date.now() - startDate), 100);
  });

  return (
    <>
      <div className='game-container'>
        <div
          className='textbox-container'
          onKeyDown={(e) => handleCharacterEntry(e)}
          tabIndex={0}
          ref={textboxRef}>
          {textArr.map((char, i) => {
            return (
              <Character
                char={char}
                correct={correctnessArray[i]}
                active={i === pos}></Character>
            );
          })}
        </div>
        <div className='wpm-text-container'>
          <div className='wpm-text'>{wpm}</div>
          <div>WPM</div>
        </div>
      </div>
    </>
  );
}

export default Textbox;


// be able to go back and type the same letter again
// update the css to go back the prev state before you type 
// allow user to go forward even if they typed incorrectly. Highlight it red.
// keep track of how many they have gotten incorrect, even if they fixed it 