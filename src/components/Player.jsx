import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef(); // useRef captures input data without the need for onChange event listener
  const [inputName, setName] = useState(null); // State to hold the input name


  function handleClick() {
    setName(playerName.current.value) // Set inputName with the value from the ref
  }

  return ( // ?? operator provides same output as the ternary (inputName ? inputName : 'Stanger')
    <section id="player">
      <h2>Welcome {inputName ?? 'Stranger'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
