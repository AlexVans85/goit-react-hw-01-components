import React from "react"
import ReactDOM from "react-dom"
// // import './index.css';

// import React from "react"
// import ReactDom from "react-dom"
import App from "./App"
import style from "./index.module.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// reactDom.render(<App />, document.getElementById("root"))

// const x = React.createElement("a", { href: "google.com" }, "nazvanie ssilki")
// console.log(x)
// ReactDOM.render(x, document.getElementById("root"))

// const y = React.createElement("h1", "название заголовка аш1")
// console.log(y)
// reactDom.render(y, document.getElementById("root"))

// const image = {
//   id: 12,
//   title: "Cat Tee Black T-Shirt",
//   availableSizes: ["S", "XS"],
//   style: "Black with custom print",
//   price: 10.9,
//   currencyId: "USD",
//   currencyFormat: "$",
//   isFreeShipping: true,
//   img: "https://i.ibb.co/YfKsBj0/8552515751438644-1.jpg",
// }

// const image2 = {
//   id: 13,
//   title: "Dark Thug Blue-Navy T-Shirt",
//   availableSizes: ["M"],
//   style: "Front print and paisley print",
//   price: 29.45,
//   currencyId: "USD",
//   currencyFormat: "$",
//   isFreeShipping: false,
//   img: "https://i.ibb.co/0jDhL34/51498472915966370-1.jpg",
// }

// const form = (
//   <div>
//     <img src={image.img} alt={image.style} />
//     <h2>{image.title}</h2>
//     <p>Price: {image.price} credits</p>
//     <button type="button">Add order</button>
//   </div>
// )

// console.log(form)

// reactDom.render(form, document.getElementById("root"))
