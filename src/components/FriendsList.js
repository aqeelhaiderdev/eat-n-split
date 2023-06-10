import Button from "./UI/Button";

function FriendsList({ friendsData, getFriendObj, onShowBox, currentObj }) {
  const selectHandler = function () {
    getFriendObj(friendsData);
    onShowBox();
  };
  return (
    <>
      <li className={currentObj.id === friendsData.id ? "selected" : ""}>
        <img src={friendsData.image} alt={friendsData.name} />
        <h3>{friendsData.name}</h3>
        {friendsData.balance < 0 && (
          <p className="red">
            You owe {friendsData.name} {Math.abs(friendsData.balance)}$
          </p>
        )}

        {friendsData.balance > 0 && (
          <p className="green">
            {friendsData.name} owes you {friendsData.balance}$
          </p>
        )}

        {friendsData.balance === 0 && (
          <p>You and {friendsData.name} are even</p>
        )}

        <Button onClick={selectHandler}>Select</Button>
      </li>
    </>
  );
}

export default FriendsList;
