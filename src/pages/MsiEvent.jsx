import { useState } from "react";
import { useParams } from "react-router-dom";
import msi from "../data/events/international/msi/msi.json";
import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";

function MsiEvent() {
  const { eventName } = useParams();
  const standings = msi[eventName].participants.sort((a, b) =>
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
    <div className="event msi">
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
        <h2 flexGrow="1" className="title">
          3rd/4th
        </h2>
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
                <h3 className="h3layer-name">{player.name}</h3>
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

export default MsiEvent;
