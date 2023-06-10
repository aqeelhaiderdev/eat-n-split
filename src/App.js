import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";
import Button from "./components/UI/Button";
import SplitBill from "./components/SplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friendsData, setFriendsData] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [showSplitBox, setShowSplitBox] = useState(false);
  const [friendObj, setFriendObj] = useState({});

  const getData = (obj) => {
    setFriendsData((curn) => [...curn, obj]);
    setShowAddFriend(false);
  };

  const addFriendClickHandler = function () {
    setShowAddFriend(!showAddFriend);
  };

  const showSplitBoxHandler = function () {
    if (showSplitBox) return;
    setShowSplitBox(!showSplitBox);
  };

  const updateFriendBalance = function (value) {
    setFriendsData((curnFriend) =>
      curnFriend.map((friend) =>
        friend.id === friendObj.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  };
  return (
    <div className="app">
      <div className="sidebar">
        <Friends
          currentObj={friendObj}
          initialData={friendsData}
          getFriendObj={setFriendObj}
          onShowBox={showSplitBoxHandler}
        />
        {showAddFriend && <AddFriend onGetData={getData} />}
        <Button onClick={addFriendClickHandler}>
          {showAddFriend ? "Close" : "Add"}
        </Button>
      </div>
      {showSplitBox && (
        <SplitBill
          getFriendObj={friendObj}
          onSplitBill={updateFriendBalance}
          showSplitBox={setShowSplitBox}
        />
      )}
    </div>
  );
}

export default App;
