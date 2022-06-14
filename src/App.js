import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Redux Tutorial</h1>
      <div className="App">
        <h2>Counter {counter}</h2>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement(5))}>-</button>
        {isLogged ? <h3>Valuable Information I shouldn't see</h3> : null}
      </div>
    </>
  );
}

export default App;
