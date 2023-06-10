import { useState } from "react";
import Button from "./UI/Button";

function AddFriend({ onGetData }) {
  const [friendName, setFriendName] = useState("");
  const [friendImg, setFriendImage] = useState("https://i.pravatar.cc/48");

  const addFormSubmitHandler = (e) => {
    e.preventDefault();

    if (!friendName) return;
    onGetData({
      id: Date.now(),
      name: friendName,
      image: friendImg,
      balance: 0,
    });
    setFriendName("");
  };

  return (
    <>
      <form className="form-add-friend" onSubmit={addFormSubmitHandler}>
        <label>🧑‍🤝‍🧑Friend Name</label>
        <input
          type="text"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        ></input>
        <label>🌄 Image URL</label>
        <input
          type="text"
          value={friendImg}
          onChange={(e) => setFriendImage(e.target.value)}
        ></input>
        <Button>Add</Button>
      </form>
    </>
  );
}

export default AddFriend;
