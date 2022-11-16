import React from "react";
import "./main.css";
import Nav from "../components/navigation";
import Home from "../components/home";
import Acc from "../components/accounts";

export default function main() {
  return (
    <div className="all">
      <Home />
      <Acc />
      <Nav />
    </div>
  );
}

// export default class App extends Component {
//   handleClick = () => {
//     useRef(null).current?.scrollIntoView({ behavior: "smooth" });
//   };

//   render() {
//     return (
//       <div className="all">
//         <Home />
//         <Acc />
//         {/* <span className="next">
//           <button className="btn" onClick={this.handleClick}>
//             \/
//           </button>
//         </span> */}
//         <Nav></Nav>
//       </div>
//     );
//   }
// }
