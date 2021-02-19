import React from "react"
import PropTypes from "prop-types"
import style from "./Profile.module.css"
import ProfileUser from "./ProfileUser/ProfileUser"
import ProfileUserSocial from "./ProfileUserSocial/ProfileUserSocial"
// console.log(style)

const Profile = ({ avatar, tag, name, location, stats }) => {
  return (
    <div className={style.profile}>
      <div className="description">{<ProfileUser name={name} tag={tag} location={location} avatar={avatar} />}</div>

      <ul className="stats">
        {<ProfileUserSocial followers={stats.followers} views={stats.views} likes={stats.likes} />}
      </ul>
    </div>
  )
}

Profile.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
}

export default Profile
