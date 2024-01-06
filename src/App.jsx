import Player from "./components/Player.jsx";
import Timer from "./components/Timer.jsx";
import { useState } from "react";

function App() {
  const [scores, setScores] = useState([]);

  const getScore = (score) => {
    setScores((prevScores) => [
      ...prevScores,
      { timer: selectedTimer, score: score },
    ]);
  };

  console.log(getScore)

  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title={"commoner"} targetTime={3} getScore={getScore} />
        <Timer title={"stranger"} targetTime={7} getScore={getScore}/>
        <Timer title={"nomad"} targetTime={10} getScore={getScore} />
        <Timer title={"outlaw"} targetTime={15} getScore={getScore} />
      </div>
    </>
  );
}

export default App;
