import PropTypes from "prop-types"
import React from "react"
import FriendListItem from "./FriendListItem/FriendListItem"
import style from "./FriendList.module.css"

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map((el) => (
        <FriendListItem key={el.id} {...el} />
      ))}
    </ul>
  )
}

FriendList.defaultProps = {
  avatar: "https://cdn.windowsreport.com/wp-content/uploads/2018/07/Error-message-1-930x620.jpg",
}

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

export default FriendList
