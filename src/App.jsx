import Player from "./components/Player.jsx";
import Timer from "./components/Timer.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title={"commoner"} time={3} />
        <Timer title={"stranger"} time={7} />
        <Timer title={"nomad"} time={10} />
        <Timer title={"outlaw"} time={15} />
      </div>
    </>
  );
}

export default App;
