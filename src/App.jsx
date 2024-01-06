import Player from "./components/Player.jsx";
import Timer from "./components/Timer.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title={"commoner"} targetTime={3} />
        <Timer title={"stranger"} targetTime={7} />
        <Timer title={"nomad"} targetTime={10} />
        <Timer title={"outlaw"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
