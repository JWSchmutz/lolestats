import React from "react";
import players from "../data/players/players.json";
import Card from "../components/Card/Card";
import teams from "../data/teams/teams.json";

function Home() {
  for (const player in players) {
    if (Object.hasOwnProperty.call(players, player)) {
      const element = players[player].reduce(
        (a, b) => a + parseInt(b[Object.keys(b)[0]].ap),
        0
      );
      players[player][0][Object.keys(players[player][0])].totalAP = element;
    }
    players[player]
      .sort((a, b) => (Object.keys(a)[0] > Object.keys(b)[0] ? -1 : 1))
      .sort((a, b) =>
        Object.keys(a)[0].split(" ")[1] > Object.keys(b)[0].split(" ")[1]
          ? -1
          : 1
      );
  }
  const playersList = Object.keys(players).sort((a, b) =>
    parseInt(players[a][0][Object.keys(players[a][0])[0]].totalAP) >
    parseInt(players[b][0][Object.keys(players[b][0])[0]].totalAP)
      ? -1
      : 1
  );
  playersList.length = 5;

  for (const team in teams) {
    if (Object.hasOwnProperty.call(teams, team)) {
      const element = teams[team].reduce(
        (a, b) => a + parseInt(b[Object.keys(b)[0]].ap),
        0
      );
      teams[team][0][Object.keys(teams[team][0])].totalAP = element;
    }
    teams[team]
      .sort((a, b) => (Object.keys(a)[0] > Object.keys(b)[0] ? -1 : 1))
      .sort((a, b) =>
        Object.keys(a)[0].split(" ")[1] > Object.keys(b)[0].split(" ")[1]
          ? -1
          : 1
      );
  }
  const teamsList = Object.keys(teams).sort((a, b) =>
    parseInt(teams[a][0][Object.keys(teams[a][0])[0]].totalAP) >
    parseInt(teams[b][0][Object.keys(teams[b][0])[0]].totalAP)
      ? -1
      : 1
  );
  teamsList.length = 5;

  return (
    <div className="home">
      <h1 className="title">LOL Estats</h1>
      <div className="players-list">
        <h2 className="title">Top Achieving Players</h2>
        {playersList.map((player, i) => {
          return (
            <Card
              key={i}
              logo={require("../images/teams/" +
                players[player][0][Object.keys(players[player][0])]
                  .abbreviation +
                ".png")}
              logoSideLength="75"
              title={player}
              titlePadding="true"
              backgroundColor="#141414"
              color="white"
              className="square-logo"
              // onClick={() => handleOpenAndPopulateModal(players[player])}
            >
              <span
                style={{ position: "absolute", top: "10px", right: "10px" }}
              >
                AP:{" "}
                {players[player][0][Object.keys(players[player][0])].totalAP}
              </span>
            </Card>
          );
        })}
      </div>

      <div className="teams-list">
        <h2 className="title">Top Achieving Teams</h2>
        {teamsList.map((team, i) => {
          return (
            <Card
              key={i}
              logo={require("../images/teams/" + team + ".png")}
              logoSideLength="75"
              title={team}
              titlePadding="true"
              backgroundColor="#141414"
              color="white"
              className="square-logo"
            >
              <span
                style={{ position: "absolute", top: "10px", right: "10px" }}
              >
                AP: {teams[team][0][Object.keys(teams[team][0])].totalAP}
              </span>
            </Card>
          );
        })}
      </div>

      <section>
        <h2 className="sub-title">Achievement Points (AP) scoring system</h2>
        <div className="table">
          <div className="row">
            <div className="column">Event</div>
            <div className="column">
              1<sup>st</sup>
            </div>
            <div className="column">
              2<sup>nd</sup>
            </div>
            <div className="column">
              3<sup>rd</sup> - 4<sup>th</sup>
            </div>
            <div className="column">
              5<sup>th</sup> - 8<sup>th</sup>
            </div>
          </div>
          <div className="row">
            <div className="column">Worlds</div>
            <div className="column">10</div>
            <div className="column">7</div>
            <div className="column">4</div>
            <div className="column">2</div>
          </div>
          <div className="row">
            <div className="column">MSI</div>
            <div className="column">5</div>
            <div className="column">3</div>
            <div className="column">1</div>
            <div className="column">0</div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="sub-title">About</h2>
        <p>
          I wanted to make a website where I could quickly see a teams results,
          their rosters at events, and individual player results. I didn't feel
          like any of the tools were intuitive, so I made LOL EStats. I hope you
          like it.
        </p>
        <p>
          This website is neither complete nor perfect. I have lots of updates
          to do. As the json for this was not readily available, I had to enter
          large amounts by hand, so please be aware that there may be small
          errors. Thanks!
        </p>
      </section>
    </div>
  );
}

export default Home;
