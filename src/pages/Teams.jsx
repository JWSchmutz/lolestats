import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";
import Loading from "../components/Loading";
// import worlds from "../data/events/international/worlds/worlds.json";
// import msi from "../data/events/international/msi/msi.json";
import teams from "../data/teams/teams.json";
function Teams() {
  // for (const team in teams) {
  //   if (Object.hasOwnProperty.call(teams, team)) {
  //     const element = teams[team].reduce(
  //       (a, b) => a + parseInt(b[Object.keys(b)[0]].ap),
  //       0
  //     );
  //     teams[team][0][Object.keys(teams[team][0])].totalAP = element;
  //   }
  //   teams[team]
  //     .sort((a, b) => (Object.keys(a)[0] > Object.keys(b)[0] ? -1 : 1))
  //     .sort((a, b) =>
  //       Object.keys(a)[0].split(" ")[1] > Object.keys(b)[0].split(" ")[1]
  //         ? -1
  //         : 1
  //     );
  // }
  const [teamsList, setTeamsList] = useState(
    Object.keys(teams).sort((a, b) =>
      parseInt(teams[a][0][Object.keys(teams[a][0])[0]].totalAP) >
      parseInt(teams[b][0][Object.keys(teams[b][0])[0]].totalAP)
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

  const [modalTeam, setModalTeam] = useState();

  const handleOpenAndPopulateModal = (team) => {
    setModalTeam(team);
    setShowModal(true);
  };

  const handleArrowClick = (event) => {
    console.log(event[Object.keys(event)[0]].rosterOpen);

    if (event[Object.keys(event)[0]].rosterOpen) {
      event[Object.keys(event)[0]].rosterOpen = false;
      return setModalTeam([...modalTeam]);
    }
    event[Object.keys(event)[0]].rosterOpen = true;
    return setModalTeam([...modalTeam]);
  };
  // let totals = {};
  // for (const years in worlds) {
  //   if (Object.hasOwnProperty.call(worlds, years)) {
  //     const name = `worlds ${years}`;
  //     worlds[years].participants.forEach((participant) => {
  //       totals[participant.abbreviation]
  //         ? totals[participant.abbreviation].push({ [name]: participant })
  //         : (totals[participant.abbreviation] = [{ [name]: participant }]);
  //     });
  //   }
  // }
  // for (const years in msi) {
  //   if (Object.hasOwnProperty.call(msi, years)) {
  //     const name = `msi ${years}`;
  //     msi[years].participants.forEach((participant) => {
  //       totals[participant.abbreviation]
  //         ? totals[participant.abbreviation].push({ [name]: participant })
  //         : (totals[participant.abbreviation] = [{ [name]: participant }]);
  //     });
  //   }
  // }
  return (
    <div className="teams">
      <h1 className="title">Teams</h1>
      <div className="teams-list">
        {console.log("teams", teams)}
        {console.log("teamsList", teamsList)}
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
              onClick={() => handleOpenAndPopulateModal(teams[team])}
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
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <h2>{modalTeam[0][Object.keys(modalTeam[0])].name}</h2>
          <div>
            <img
              src={require("../images/teams/" +
                modalTeam[0][Object.keys(modalTeam[0])].abbreviation +
                ".png")}
              alt={require("../images/teams/" +
                modalTeam[0][Object.keys(modalTeam[0])].abbreviation +
                ".png")}
              width="100"
            />
          </div>
          <div className="team-accomplishments">
            {modalTeam.map((event, i) => {
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
                      {" "}
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

export default Teams;
