import React from "react";
import worlds from "../data/events/international/worlds/worlds.json";
import Card from "../components/Card/Card";
import worldsLogo from "../images/logos/worlds.jpg";
import msiLogo from "../images/logos/msi.svg";
import msi from "../data/events/international/msi/msi.json";
import { Link } from "react-router-dom";

function Tournaments() {
  console.log(worlds);
  return (
    <div className="tournaments">
      <h1 className="title">Tournaments</h1>
      <div className="tournaments-list">
        <div className="worlds-list">
          {Object.keys(worlds).map((keyName, i) => (
            <Link to={`/tournaments/worlds/${keyName}`} key={i}>
              <Card
                logo={worldsLogo}
                logoSideLength="75"
                title={`Worlds ${keyName}`}
                titlePadding="true"
                backgroundColor="#141414"
                color="white"
                className="worlds-card"
              />
            </Link>
          ))}
        </div>
        <div className="msi-list">
          {Object.keys(msi).map((keyName, i) => (
            <Link to={`/tournaments/msi/${keyName}`} key={i}>
              <Card
                logo={msiLogo}
                logoSideLength="75"
                title={`MSI ${keyName}`}
                titlePadding="true"
                backgroundColor="#A9A9A9"
                color="#141414"
                className="msi-card"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tournaments;
