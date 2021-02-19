import React from "react"
import PropTypes from "prop-types"
import StatisticsItem from "./StatisticsItem/StatisticsItem"

import style from "./Statistics.module.css"

const Statistics = ({ title, stats }) => {
  console.log(stats)
  return (
    <section className={style.statistics}>
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map((el) => (
          <StatisticsItem key={el.id} {...el} />
        ))}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

export default Statistics
