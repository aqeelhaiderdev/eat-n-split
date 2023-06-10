import { useState } from "react";
import Button from "./UI/Button";

function SplitBill({ getFriendObj, onSplitBill, showSplitBox }) {
  const [userBill, setUserBill] = useState(0);
  const [friendBill, setFriendBill] = useState(0);
  const [whoPayBill, setWhoPayBill] = useState("you");
  const friendExpense = userBill - friendBill;

  const splitFormHandler = function (e) {
    e.preventDefault();

    if (!userBill || !friendBill) return;

    if (whoPayBill === "you") onSplitBill(friendExpense);
    if (whoPayBill === `${getFriendObj.name}`) onSplitBill(-friendBill);

    setUserBill(0);
    setFriendBill(0);
    setWhoPayBill("you");
    showSplitBox(false);
  };
  return (
    <>
      <form className="form-split-bill" onSubmit={splitFormHandler}>
        <h2>Split a bill with {getFriendObj.name}</h2>
        <label>💰 Bill Value</label>
        <input
          type="text"
          value={userBill}
          onChange={(e) => setUserBill(e.target.value)}
        ></input>

        <label>🕴️Your Expense</label>
        <input
          type="text"
          value={friendBill}
          onChange={(e) => setFriendBill(e.target.value)}
        ></input>

        <label>🧑‍🤝‍🧑 {getFriendObj.name} Expense</label>
        <input type="text" disabled value={friendExpense}></input>

        <label>🤑 Who is Paying the Bill?</label>
        <select
          value={whoPayBill}
          onChange={(e) => setWhoPayBill(e.target.value)}
        >
          <option value="you">You</option>
          <option value={getFriendObj.name}>{getFriendObj.name}</option>
        </select>

        <Button>Split Bill</Button>
      </form>
    </>
  );
}

export default SplitBill;
