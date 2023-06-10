import FriendsList from "./FriendsList";

function Friends({ initialData, getFriendObj, onShowBox, currentObj }) {
  return (
    <>
      <ul>
        {initialData.map((friend) => (
          <FriendsList
            key={friend.id}
            friendsData={friend}
            getFriendObj={getFriendObj}
            onShowBox={onShowBox}
            currentObj={currentObj}
          />
        ))}
      </ul>
    </>
  );
}

export default Friends;
