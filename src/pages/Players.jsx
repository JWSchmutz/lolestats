import { useState } from "react";
import teams from "../data/teams/teams.json";
import players from "../data/players/players.json";
import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";
function Players() {
  // let totals = {};
  // console.log(teams);
  // for (const team in teams) {
  //   if (Object.hasOwnProperty.call(teams, team)) {
  //     teams[team].forEach((placement) => {
  //       console.log(placement);
  //       console.log(placement[Object.keys(placement)[0]].roster);
  //       placement[Object.keys(placement)[0]].roster.forEach((player) => {
  //         console.log(placement[Object.keys(placement)[0]]);
  //         totals[player.name]
  //           ? totals[player.name].push(placement)
  //           : (totals[player.name] = [placement]);
  //       });
  //     });
  //   }
  // }
  // for (const player in players) {
  //   if (Object.hasOwnProperty.call(players, player)) {
  //     const element = players[player].reduce(
  //       (a, b) => a + parseInt(b[Object.keys(b)[0]].ap),
  //       0
  //     );
  //     players[player][0][Object.keys(players[player][0])].totalAP = element;
  //   }
  //   players[player]
  //     .sort((a, b) => (Object.keys(a)[0] > Object.keys(b)[0] ? -1 : 1))
  //     .sort((a, b) =>
  //       Object.keys(a)[0].split(" ")[1] > Object.keys(b)[0].split(" ")[1]
  //         ? -1
  //         : 1
  //     );
  // }
  const [playersList, setPlayersList] = useState(
    Object.keys(players).sort((a, b) =>
      parseInt(players[a][0][Object.keys(players[a][0])[0]].totalAP) >
      parseInt(players[b][0][Object.keys(players[b][0])[0]].totalAP)
        ? -1
        : 1
    )
  );

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      setShowModal(false);
    }
  };

  const [modalPlayer, setModalPlayer] = useState();

  const handleOpenAndPopulateModal = (player) => {
    setModalPlayer(player);
    setShowModal(true);
  };

  const handleArrowClick = (event) => {
    console.log(event[Object.keys(event)[0]].rosterOpen);

    if (event[Object.keys(event)[0]].rosterOpen) {
      event[Object.keys(event)[0]].rosterOpen = false;
      return setModalPlayer([...modalPlayer]);
    }
    event[Object.keys(event)[0]].rosterOpen = true;
    return setModalPlayer([...modalPlayer]);
  };

  return (
    <div className="players">
      <h1 className="title">Players</h1>
      <div className="players-list">
        {console.log(players)}
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
              onClick={() => handleOpenAndPopulateModal(players[player])}
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
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <h2>{modalPlayer[0][Object.keys(modalPlayer[0])].name}</h2>
          <div className="team-accomplishments">
            {modalPlayer.map((event, i) => {
              return (
                <div
                  key={i}
                  className={`accomplishment${
                    event[Object.keys(event)].rosterOpen ? " open" : ""
                  }`}
                >
                  <p className="event-header">
                    <img
                      className="finished"
                      src={require("../images/logos/" +
                        event[Object.keys(event)].placement +
                        ".png")}
                      alt={require("../images/logos/" +
                        event[Object.keys(event)].placement +
                        ".png")}
                    />
                    <span className="event-name"> {Object.keys(event)} </span>
                    <span
                      className="roster-span"
                      onClick={() => handleArrowClick(event)}
                    >
                      <img
                        src={require("../images/teams/" +
                          event[Object.keys(event)].abbreviation +
                          ".png")}
                        alt={require("../images/teams/" +
                          event[Object.keys(event)].abbreviation +
                          ".png")}
                        height="40"
                        style={{ position: "relative", bottom: -10 }}
                      />{" "}
                      Roster <span className="roster-arrow">^</span>
                    </span>
                  </p>
                  <div className="roster">
                    {event[Object.keys(event)].roster.map((player) => (
                      <div key={player.name}>
                        <h3>{player.name}</h3>
                        <div>
                          <img
                            src={require("../images/logos/" +
                              player.position +
                              ".webp")}
                            alt={require("../images/logos/" +
                              player.position +
                              ".webp")}
                            width="100"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Players;
