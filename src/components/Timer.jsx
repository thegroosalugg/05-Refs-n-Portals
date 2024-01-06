import { useState, useRef } from "react";
import ResultsModal from "./ResultsModal";

export default function Timer({ title, targetTime }) {
  const [timerStarted, setStarted] = useState(false);
  const [timerExpired, setExpired] = useState(false);

  const timer = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      // must always target the current ref
      setExpired(true); // setTimeout is a built-in JS function
    }, targetTime * 1000); // time is always in MS so set time must be multiplied * 1000 ms

    setStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current); // clearTimeout is a built-in JS function
  }

  return (
    <>
      {timerExpired && <ResultsModal result={"Massive Fail"} targetTime={targetTime} />}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Running" : "Dormant"}
        </p>
      </section>
    </>
  );
}
