import React from "react";
import NavBar from "./components/super/NavBar";
import gradone from "./assets/gradient-diagonal.png";
import park from "./assets/park.png";
import Footer from "./components/super/Footer";


const VisitorPage = ({}) => {
  return (
    <div className=" overflow-hidden flex flex-col relative mx-auto items-center bg-primaryBG z-10 text-white ">
      {/* grandparent wrapper */}
      <NavBar logged={true} />
      {/* secondary bg */}
      <img
        src={gradone}
        alt=""
        className=" absolute m-auto w-[200vw] -z-10  "
      />
      <section
        id="hero"
        className="h-screen flex  w-screen justify-center my-10 mx-40 "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* first section */}
        <div className=" ml-[8%] w-[35%] mt-[10%]  ">
            <h2>Our Games</h2>
          <p className="opacity-80 leading-loose text-xl tracking-wide mb-14">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document. Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document.
          </p>
          <a
            href=""
            className=" bg-customYellow text-black shadow-lg shadow-customYellow py-2.5 px-5 rounded-3xl"
          >
            See more
          </a>
        </div>
        <div className="place-self-center">
          {" "}
          <img src={park} alt="" />
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default VisitorPage;
