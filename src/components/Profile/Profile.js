import './Profile.css';


const Profile = ({
  username = 'Petra Marica',
  tag = 'pmarica',
  location = 'Salvador, Brasil',
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) => {
  const followers = stats.followers;
  const views = stats.views;
  const likes = stats.likes;

  return (
    <div className="card">
      <div className="profile">
        <div className="description">
          {/* <div className="box"> */}
          <img src={avatar} alt="User avatar" className="avatar" />
          {/* </div> */}

          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile
