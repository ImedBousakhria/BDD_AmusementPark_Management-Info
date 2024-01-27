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
  const [showNewForm, setShowNewForm] = useState(false);
  const [newGame, setNewGame] = useState({
    title: "",
    description: "",
    rating: 0,
  });

  const openModal = (game) => {
    setModalIsOpen(true);
    setCurrentComments(comments[game.title]);
    setCurrentGame(game);
  };

  const handleNewGameSubmit = () => {
    // Add logic to save the new game to backend or wherever it's needed
    // For demonstration purposes, let's just log the new game object
    console.log("New game submitted:", newGame);
    // Reset the form fields
    setNewGame({ title: "", description: "", rating: 0 });
    // Close the form after submission
    setShowNewForm(false);
  };

  return (
    <div className="flex min-h-screen w-[90%]">
      <div className="w-full">
        <New text={"Attraction"} setShowNewForm={setShowNewForm} />
        {showNewForm && (
          <div className="p-4 mt-4 bg-white rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Add New Attraction</h2>
            <input
              type="text"
              placeholder="Title"
              className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
              value={newGame.title}
              onChange={(e) =>
                setNewGame({ ...newGame, title: e.target.value })
              }
            />
            <textarea
              placeholder="Description"
              className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
              value={newGame.description}
              onChange={(e) =>
                setNewGame({ ...newGame, description: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Rating"
              min="0"
              max="5"
              className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
              value={newGame.rating}
              onChange={(e) =>
                setNewGame({ ...newGame, rating: parseInt(e.target.value) })
              }
            />
            <button
              onClick={handleNewGameSubmit}
              className="bg-creamBlue text-white px-4 py-2 rounded-md hover:opacity-80"
            >
              Submit
            </button>
          </div>
        )}
        <CustomModal
          setCurrentComments={setCurrentComments}
          displayedEntity={currentGame}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          currentComments={currentComments}
        />

        {zones.map((zone, zoneIndex) => (
          <div key={zoneIndex} className="mt-16">
            <ZoneLabel number={zoneIndex + 1} />
            <div className="flex flex-wrap gap-[2rem] mt-6">
              {zone.games.map((game, gameIndex) => {
                return (
                  <>
                    <div
                      key={gameIndex}
                      onClick={() => openModal(game)}
                      className="cursor-pointer"
                    >
                      <GameCard attraction={game} />
                    </div>
                    <div
                      key={gameIndex}
                      onClick={() => openModal(game)}
                      className="cursor-pointer"
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
    </div>
  );
};

export default Attractions;

function CustomModal({
  displayedEntity,
  modalIsOpen,
  setModalIsOpen,
  currentComments,
  setCurrentComments,
}) {
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
      <div className="flex flex-col">
        <div
          className="cursor-pointer place-self-end"
          onClick={() => setModalIsOpen(false)}
        >
          <img src={close} className="hover:opacity-70" alt="" />
        </div>

        <div className="flex gap-[2rem]">
          <img src={game} className="w-[50%]" alt="" />
          <div className="flex flex-col">
            <GameDetails game={displayedEntity} />
            <p onClick={() => console.log(displayedEntity)}>
              {displayedEntity?.description}
            </p>
          </div>
        </div>
        <Reviews
          game={displayedEntity}
          comments={currentComments}
          setCurrentComments={setCurrentComments}
        />
      </div>
    </Modal>
  );
}
