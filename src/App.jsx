import Player from "./components/Player.jsx";
import Timer from "./components/Timer.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title={"Commoner"} timer={3} />
        <Timer title={"Stranger"} timer={7} />
        <Timer title={"Nomad"} timer={10} />
        <Timer title={"Outlaw"} timer={15} />
      </div>
    </>
  );
}

export default App;
