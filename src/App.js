import "./App.css";
import ATM from "./components/ATM";
import { useDispatch, useSelector } from "react-redux";
import { showATMBtn } from "./redux/atmSlice";

function App() {
  let dispatch = useDispatch();
  const { showATM } = useSelector((state) => state.atm);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux ATM</h1>
      </header>
      <main>
        <div>
          <button
            onClick={() => {
              dispatch(showATMBtn());
            }}
          >
            {showATM ? "Shut down ATM" : "Boot up ATM"}
          </button>
        </div>
        {showATM && <ATM />}
      </main>
      <footer>
        <small>Inlämningsuppgift 4 - Linnea Hensfelt Andersson</small>
      </footer>
    </div>
  );
}

export default App;
