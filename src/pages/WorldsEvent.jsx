import { useState } from "react";
import { useParams } from "react-router-dom";
import worlds from "../data/events/international/worlds/worlds.json";
import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";

function WorldsEvent() {
  const { eventName } = useParams();
  const standings = worlds[eventName].participants.sort((a, b) =>
    a.placement < b.placement ? -1 : a.placement > b.placement ? 1 : 0
  );

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      setShowModal(false);
    }
  };

  const [modalTeam, setModalTeam] = useState(standings[0]);

  const handleOpenAndPopulateModal = (team) => {
    setModalTeam(team);
    setShowModal(true);
  };

  console.log(modalTeam.roster);
  return (
    <div className="event worlds">
      <h1 className="title">Worlds {eventName}</h1>
      <div className="winner tier">
        <h2 className="title">1st</h2>
        <Card
          title={standings[0].abbreviation}
          backgroundColor="#141414"
          color="white"
          logo={require("../images/teams/" +
            standings[0].abbreviation +
            ".png")}
          alt={standings[0].abbreviation + " logo"}
          logoSideLength="75px"
          className="square-logo first"
          onClick={() => handleOpenAndPopulateModal(standings[0])}
        ></Card>
      </div>
      <div className="runner-up tier">
        <h2 className="title">2nd</h2>
        <Card
          title={standings[1].abbreviation}
          backgroundColor="#141414"
          color="white"
          logo={require("../images/teams/" +
            standings[1].abbreviation +
            ".png")}
          alt={standings[1].abbreviation + " logo"}
          logoSideLength="75px"
          className="square-logo second"
          onClick={() => handleOpenAndPopulateModal(standings[1])}
        ></Card>
      </div>
      <div className="third-fourth tier">
        <h2 className="title">3rd/4th</h2>
        <Card
          title={standings[2].abbreviation}
          backgroundColor="#141414"
          color="white"
          logo={require("../images/teams/" +
            standings[2].abbreviation +
            ".png")}
          alt={standings[2].abbreviation + " logo"}
          logoSideLength="75px"
          className="square-logo third"
          onClick={() => handleOpenAndPopulateModal(standings[2])}
        ></Card>
        <Card
          title={standings[3].abbreviation}
          backgroundColor="#141414"
          color="white"
          logo={require("../images/teams/" +
            standings[3].abbreviation +
            ".png")}
          alt={standings[3].abbreviation + " logo"}
          logoSideLength="75px"
          className="square-logo third"
          onClick={() => handleOpenAndPopulateModal(standings[3])}
        ></Card>
      </div>
      <div className="fifth-eighth tier">
        <h2 className="title">5th-8th</h2>
        <Card
          title={standings[4].abbreviation}
          backgroundColor="#141414"
          color="white"
          logo={require("../images/teams/" +
            standings[4].abbreviation +
            ".png")}
          titlePadding="true"
          alt={standings[4].abbreviation + " logo"}
          logoSideLength="75px"
          className="square-logo fifth"
          onClick={() => handleOpenAndPopulateModal(standings[4])}
        ></Card>
        <Card
          title={standings[5].abbreviation}
          backgroundColor="#141414"
          color="white"
          logo={require("../images/teams/" +
            standings[5].abbreviation +
            ".png")}
          titlePadding="true"
          alt={standings[5].abbreviation + " logo"}
          logoSideLength="75px"
          className="square-logo fifth"
          onClick={() => handleOpenAndPopulateModal(standings[5])}
        ></Card>
        <Card
          title={standings[6].abbreviation}
          backgroundColor="#141414"
          color="white"
          logo={require("../images/teams/" +
            standings[6].abbreviation +
            ".png")}
          titlePadding="true"
          alt={standings[6].abbreviation + " logo"}
          logoSideLength="75px"
          className="square-logo fifth"
          onClick={() => handleOpenAndPopulateModal(standings[6])}
        ></Card>
        <Card
          title={standings[7].abbreviation}
          backgroundColor="#141414"
          color="white"
          logo={require("../images/teams/" +
            standings[7].abbreviation +
            ".png")}
          titlePadding="true"
          alt={standings[7].abbreviation + " logo"}
          logoSideLength="75px"
          className="square-logo fifth"
          onClick={() => handleOpenAndPopulateModal(standings[7])}
        ></Card>
      </div>
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <h2>{modalTeam.name}</h2>
          <div>
            <img
              src={require("../images/teams/" +
                modalTeam.abbreviation +
                ".png")}
              alt={require("../images/teams/" +
                modalTeam.abbreviation +
                ".png")}
              width="100"
            />
          </div>
          <p className="region-seed">
            {modalTeam.region} {modalTeam.seed} seed
          </p>
          <p className="placement">Finished: {modalTeam.placement}</p>
          <div className="roster">
            {modalTeam.roster.map((player) => (
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
        </Modal>
      )}
    </div>
  );
}

export default WorldsEvent;
