import React, { useState } from "react";
import { zones } from "./consts";
import GameCard from "./components/GameCard";
import ZoneLabel from "./components/super/ZoneLabel";
import New from "./components/New";
import Modal from "react-modal";
import game from "./assets/icons/game.svg";
import close from "./assets/icons/Close.svg";
import GameDetails from "./components/GameDetails";

const Attractions = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentGame, setCurrentGame] = useState(null);

  return (
    <div className="flex min-h-screen w-[90%]">
      <div className=" w-full">
        <New text={"Attraction"} />
        <CustomModal
          displayedEntity={currentGame}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />

        {zones.map((zone, zoneIndex) => (
          <div key={zoneIndex} className=" mt-16">
            <ZoneLabel number={zoneIndex + 1} />
            <div className="flex flex-wrap gap-[2rem] mt-6">
              {zone.games.map((game, gameIndex) => {
                return (
                  <>
                    <div
                      onClick={() => {
                        setModalIsOpen(true);
                        setCurrentGame(game);
                      }}
                      className=" cursor-pointer"
                    >
                      <GameCard attraction={game} />
                    </div>
                    <div
                      onClick={() => {
                        setModalIsOpen(true);
                        setCurrentGame(game);
                      }}
                      className=" cursor-pointer"
                    >
                      <GameCard attraction={game} />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="basis-[60%]">
        <StaffList />
      </div> */}
    </div>
  );
};

export default Attractions;

function CustomModal({ displayedEntity, modalIsOpen, setModalIsOpen }) {
  return (
    <Modal
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        },
        content: {
          width: "50%", // Set your desired width
          margin: "auto",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          padding: "20px",
        },
      }}
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <div className=" flex flex-col ">
        <div
          className="cursor-pointer place-self-end"
          onClick={() => setModalIsOpen(false)}
        >
          <img src={close} alt="" />
        </div>

        <div className="flex gap-[2rem]">
          <img src={game} className="w-[40%]" alt="" />
          <div className=" flex flex-col">
          <GameDetails game={displayedEntity} />
          <p onClick={() => console.log(displayedEntity)}>  {displayedEntity.} click to print</p>


          </div>
        </div>
      </div>
    </Modal>
  );
}
