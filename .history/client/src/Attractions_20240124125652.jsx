import React, { useState } from "react";
import { zones } from "./consts";
import GameCard from "./components/GameCard";
import ZoneLabel from "./components/super/ZoneLabel";
import New from "./components/New";
import Modal from "react-modal";
import game from "./assets/icons/game.svg";
import close from "./assets/icons/Close.svg";
import GameDetails from "./components/GameDetails";
import Reviews from "./components/Reviews";
import { comments } from "./consts";

const Attractions = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentGame, setCurrentGame] = useState(null);
  const [currentComments, setCurrentComments] = useState([]);

  const openModal() => {
    
  }

  return (
    <div className="flex min-h-screen w-[90%]">
      <div className=" w-full">
        <New text={"Attraction"} />
        <CustomModal
          displayedEntity={currentGame}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          currentComments={currentComments}
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
                      onClick={() => openModal()}
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

function CustomModal({ displayedEntity, modalIsOpen, setModalIsOpen, currentComments }) {
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
          <img src={close} className=" hover:opacity-70" alt="" />
        </div>

        <div className="flex gap-[2rem]">
          <img src={game} className="w-[50%]" alt="" />
          <div className=" flex flex-col">
            <GameDetails game={displayedEntity} />
            <p onClick={() => console.log(displayedEntity)}>
              {" "}
              {displayedEntity?.description}
            </p>
          </div>
        </div>
        <Reviews  game={displayedEntity}/>
        <h3>Comments:</h3>
        <ul>
          {currentComments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.user}:</strong> {comment.text}
            </li>
          ))}
        </ul>



      </div>
    </Modal>
  );
}