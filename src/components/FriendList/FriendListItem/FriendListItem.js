import React from "react"
import PropTypes from "prop-types"
import style from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <li className="item">
      <span className="status">{isOnline ? "Online" : "DNTOnline"}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
}

export default FriendListItem
