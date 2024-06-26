import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// <div>
//   <h1>
//     <p>Hello!</p>
//   </h1>
//   <span>
//     <p>Caramba</p>
//   </span>
// </div>;
// ===
// React.createElement("div", {
//   children: [
//     React.createElement("h1", {
//       children: [
//         React.createElement("p", {
//           children: ["Hello!"],
//         }),
//       ],
//     }),
//     React.createElement("span", {
//       children: [
//         React.createElement("p", {
//           children: ["Caramba"],
//         }),
//       ],
//     }),
//   ],
// })
