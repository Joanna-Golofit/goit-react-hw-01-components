// import React from 'react';
import PropTypes from "prop-types";
import "./Profile.css"


//=============a czemu ta reszta ma jakies problmy i tylko ostatnia funkcja dziala przy :
//  <Profile user={user} />   w App.jsx?


function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes }
}) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={username} className="avatar" width="80" />
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
  );
}


// function Profile({username, tag, location, avatar, stats}) {
//   return (
//     <div className="profile">
//       <div className="description">
//         <img src={avatar} alt={username} className="avatar" width="100" />
//         <p className="name">{username}</p>
//         <p className="tag">{tag}</p>
//         <p className="location">{location}</p>
//       </div>

//       <ul className="stats">
//         <li>
//           <span className="label">Followers</span>
//           <span className="quantity">{stats.followers}</span>
//         </li>
//         <li>
//           <span className="label">Views</span>
//           <span className="quantity">{stats.views}</span>
//         </li>
//         <li>
//           <span className="label">Likes</span>
//           <span className="quantity">{stats.likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// }


// function Profile({user}) {
//   return (
//     <div className="profile">
//       <div className="description">
//         <img src={user.avatar} alt={user.username} className="avatar" width="100" />
//         <p className="name">{user.username}</p>
//         <p className="tag">{user.tag}</p>
//         <p className="location">{user.location}</p>
//       </div>

//       <ul className="stats">
//         <li>
//           <span className="label">Followers</span>
//           <span className="quantity">{user.stats.followers}</span>
//         </li>
//         <li>
//           <span className="label">Views</span>
//           <span className="quantity">{user.stats.views}</span>
//         </li>
//         <li>
//           <span className="label">Likes</span>
//           <span className="quantity">{user.stats.likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// }

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  // nie kumam czemu te ponizsze nie moga byc uzyte skoro przyjmuje jes w parametrach funkcji zdesrtukturyzowane i dzialaja w funkcji
  // followers: PropTypes.number,
  // views: PropTypes.number,
  // likes: PropTypes.number,
};

export default Profile
