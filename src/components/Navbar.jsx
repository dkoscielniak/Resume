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

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 600);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      // Update state based on screen size
      setIsLargeScreen(window.innerWidth > 600);
    };

    // Attach event listener to window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run once when the component mounts

  return (
    <div
      className="navbar"
      id={OpenNavbar && !isLargeScreen ? "open" : "close"}
    >
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
