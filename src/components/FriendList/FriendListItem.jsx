// import React from 'react'
import PropTypes from "prop-types";
import "./FriendList.css";

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className="item">
      <span className={isOnline ? "status" : "statusGone"}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendListItem
