// import React from 'react'
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem"
import "./FriendList.css";


function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {/* <!-- Dowolna ilość FriendListItem --> */}
      {friends.map(({ avatar, name, isOnline, id }) =>
        <FriendListItem
          key={id}
          id={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      )}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList
