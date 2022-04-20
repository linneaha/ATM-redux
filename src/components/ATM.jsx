import { useDispatch, useSelector } from "react-redux";
import { withdrawMoney, selectedAmount, depositMoney } from "../redux/atmSlice";

const ATM = () => {
  let dispatch = useDispatch();
  const { amount } = useSelector((state) => state.atm);
  const { balance } = useSelector((state) => state.atm);

  return (
    <div id="content">
      <div id="atmHeader">
        <h2>{balance} kr</h2>
        <p>Current balance</p>
      </div>
      <div id="selected">
        <h3>{amount} kr</h3>
        <p>Selected amount</p>
      </div>
      <div id="buttons">
        <button
          onClick={() => {
            dispatch(selectedAmount(100));
          }}
        >
          100
        </button>
        <button
          onClick={() => {
            dispatch(selectedAmount(200));
          }}
        >
          200
        </button>
        <button
          onClick={() => {
            dispatch(selectedAmount(500));
          }}
        >
          500
        </button>
        <button
          onClick={() => {
            dispatch(selectedAmount(1000));
          }}
        >
          1000
        </button>
      </div>
      <div id="inputDiv">
        <label htmlFor="selectedInput">
          Please enter amount to withdraw or deposit:{" "}
        </label>
        <input
          type="number"
          id="selectedInput"
          onChange={(e) => {
            dispatch(selectedAmount(e.target.value));
          }}
        />
      </div>
      <div id="atmFooter">
        <button
          onClick={() => {
            dispatch(withdrawMoney(amount));
            document.querySelector("#selectedInput").value = "";
          }}
        >
          Withdraw selected amount
        </button>
        <button
          onClick={() => {
            dispatch(depositMoney(amount));
            document.querySelector("#selectedInput").value = "";
          }}
        >
          Deposit selected amount
        </button>
      </div>
    </div>
  );
};

export default ATM;
