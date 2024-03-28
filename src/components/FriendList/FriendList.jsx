import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  // console.log(friends);
  // const friendsArr = friends.friends;
  // console.log(friendsArr);
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
