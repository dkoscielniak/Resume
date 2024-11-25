import React from "react";
import { useParams } from "react-router-dom";
import portfolioInfo from "../Data/PortfolioInfo";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/PortfolioDisplay.css";

function PortfolioDisplay() {
  const { id } = useParams();
  const portfolio = portfolioInfo[id];
  return (
    <div className="project">
      <h1> {portfolio.name}</h1>
      <img src={portfolio.image} />
      <p>
        <b>Skills:</b> {portfolio.skills}
      </p>
      <GithubIcon />
    </div>
  );
}

export default PortfolioDisplay;
