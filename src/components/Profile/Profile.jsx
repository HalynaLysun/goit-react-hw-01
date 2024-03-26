export const Profile = (props) => {
  return (
    <div className="container">
      <div className="wrapper">
        <img className="user-photo" src={props.image} alt="User avatar" />
        <p className="user-name">{props.name}</p>
        <p className="user-tag">{props.tag}</p>
        <p className="user-location">{props.location}</p>
      </div>
      <ul className="user-list">
        <li className="user-item">
          <span className="user-followers">Followers</span>
          <span className="user-followers-data">{props.stats.followers}</span>
        </li>
        <li className="user-item">
          <span className="user-views">Views</span>
          <span className="user-views-data">{props.stats.views}</span>
        </li>
        <li className="user-item">
          <span className="user-likes">Likes</span>
          <span className="user-likes-data">{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
