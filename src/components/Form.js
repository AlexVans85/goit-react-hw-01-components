import React from "react"
import PropTypes from "prop-types"

const Form = ({ img, style, title, price }) => {
  console.log(img)
  return (
    <div>
      <img src={img} alt={style} />
      <h2>{title}</h2>
      <p>Price: {price} credits</p>
      <button type="button">Add order</button>
    </div>
  )
}

Form.defaultProps = { img: "https://cdn.windowsreport.com/wp-content/uploads/2018/07/Error-message-1-930x620.jpg" }

Form.propTypes = {
  img: PropTypes.string,
  style: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}
export default Form
