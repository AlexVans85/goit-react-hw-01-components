import React from "react"
import PropTypes from "prop-types"
import style from "./ProfileUser.module.css"

const ProfileUser = ({ avatar, tag, name, location }) => {
  return (
    <div className={style.description}>
      <img src={avatar} alt={tag} className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  )
}

ProfileUser.defaultProps = {
  avatar: "https://cdn.windowsreport.com/wp-content/uploads/2018/07/Error-message-1-930x620.jpg",
}

ProfileUser.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default ProfileUser
