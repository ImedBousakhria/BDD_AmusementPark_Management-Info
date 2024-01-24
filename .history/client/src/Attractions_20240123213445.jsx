import React, { useState } from "react";
import { zones } from "./consts";
import GameCard from "./components/GameCard";
import ZoneLabel from "./components/super/ZoneLabel";
import New from "./components/New";
import Modal from "react-modal";
import Dialog from "@mui/material/Dialog";
import close from "./assets/icons/Close.svg";

const Attractions = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-[90%]">
      <div className=" w-full">
        <New text={"Attraction"} />
        <CustomModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
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
          <img src={close} alt="" />
        </div>

        <div>
          <h2>Hello Modal</h2>
          <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
        </div>
      </div>
    </Modal>
  );
}
