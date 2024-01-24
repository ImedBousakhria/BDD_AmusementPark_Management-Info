import React, { useState } from "react";
import { zones } from "./consts";
import GameCard from "./components/GameCard";
import ZoneLabel from "./components/super/ZoneLabel";
import New from "./components/New";
import Modal from "react-modal";

const Attractions = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-[90%]">
      <div className=" w-full">
        <New text={"Attraction"} />

        {zones.map((zone, zoneIndex) => (
          <div key={zoneIndex} className=" mt-16">
            <ZoneLabel number={zoneIndex + 1} />
            <div className="flex flex-wrap gap-[2rem] mt-6">
              {zone.games.map((game, gameIndex) => (
                <>
                  <div
                    onClick={() => setModalIsOpen(true)}
                    className=" cursor-pointer"
                  >
                    <GameCard attraction={game} />
                  </div>
                  <div
                    onClick={() => setModalIsOpen(true)}
                    className=" cursor-pointer"
                  >
                    <GameCard attraction={game} />
                  </div>
                  <Modal
                  className="bg-gray-400"
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                  >
                    {/* Modal content here */}
                    <h2>Hello Modal</h2>
                    <button onClick={() => setModalIsOpen(false)}>
                      Close Modal
                    </button>
                  </Modal>
                </>
              ))}
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
