export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline ? (
        <p className="online">Online</p>
      ) : (
        <p className="offline">Offline</p>
      )}
    </div>
  );
}
