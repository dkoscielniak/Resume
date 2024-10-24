import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

export default function Navbar() {
  const [OpenNavbar, setOpenNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setOpenNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={OpenNavbar ? "open" : "close"}>
      <div className="toggle">
        <button
          onClick={() => {
            setOpenNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/portfolio"> Portfolio </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  );
}

// Old nav bar

// return (
//     <nav className="nav">
//       <ul>
//         <li>
//           <a href="/Home">Home</a>
//         </li>
//         <li>
//           <a href="/Skills">Skills</a>
//         </li>
//         <li>
//           <a href="/Portfolio">Portfolio</a>
//         </li>
//         <li>
//           <a href="/Contact">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }
