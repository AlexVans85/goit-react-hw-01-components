import React from "react"
import PropTypes from "prop-types"
import style from "./ProfileUserSocial.module.css"

const ProfileUserSocial = ({ followers, views, likes }) => {
  return (
    <div>
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
    </div>
  )
}

ProfileUserSocial.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}

export default ProfileUserSocial
