import React, { useState } from "react";
import StallCard from "./components/StallCard";
import ZoneLabel from "./components/super/ZoneLabel";
import New from "./components/New";
import Modal from "react-modal";
import close from "./assets/icons/Close.svg";
import { stalls } from "./consts";
import food1 from "./assets/food/food1.png";
import food2 from "./assets/food/food2.png";
import food3 from "./assets/food/food3.png";
import food4 from "./assets/food/food4.png";
import food5 from "./assets/food/food5.png";
import food6 from "./assets/food/food6.png";

const StallPage = ({ visitor }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentStall, setCurrentStall] = useState(null);

  const openModal = (stall) => {
    setModalIsOpen(true);
    setCurrentStall(stall);
  };

  return (
    <div className="flex min-h-screen w-[95%]">
      <div className="w-full text-black">
        {visitor ? null : (
          <New text={"Stall"} />
        )}
        <CustomModal
          currentStall={currentStall}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />

        {stalls.map((zone, zoneIndex) => (
          <div key={zoneIndex} className="mt-16">
            <ZoneLabel number={zoneIndex + 1} />
            <div className="flex flex-wrap gap-[2rem] mt-6">
              {zone.stalls.map((stall, stallIndex) => {
                return (
                  <div
                    key={stallIndex}
                    onClick={() => openModal(stall)}
                    className="cursor-pointer"
                  >
                    <StallCard stall={stall} />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StallPage;

function CustomModal({
  currentStall,
  modalIsOpen,
  setModalIsOpen,
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

        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{currentStall?.name}</h2>
          <p className="text-gray-500">{currentStall?.category}</p>
          {/* Add additional stall details here */}
        </div>
      </div>
    </Modal>
  );
}
