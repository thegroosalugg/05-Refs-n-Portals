import { useState, useRef } from "react";

export default function Timer({ title, time }) {
  const [timerStarted, setStarted] = useState(false);
  const [timerStopped, setStopped] = useState(false);

  function handleStart() {
    setTimeout(() => {
      // setTimeout is a built in JS function
      setStopped(true);
    }, time * 1000); // time is always in MS so set time must be multiplied * 1000 ms

    setStarted(true);
  }

  function handleStop() {}

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerStopped && <p>You're out of time</p>}
      <p className="challenge-time">
        {time} second{time > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>{timerStarted ? "Stop" : "Start"}</button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Running" : "Dormant"}
      </p>
    </section>
  );
}
