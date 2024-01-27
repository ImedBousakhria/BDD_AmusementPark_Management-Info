import React from 'react'
import rollercoaster from "./assets/rollercoaster.png";
import fb from "./assets/icons/fb.svg";
import twitter from "./assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer
        id="contact"
        className="bg-darkBG flex items-start justify-between w-screen px-24 py-10 "
      >
        {/* sixth section */}
        <div className=" flex flex-col mt-16">
          {/* first bloc */}
          <h2 className=" mb-5 font-semibold text-2xl tracking-wider">Help?</h2>
          <div className=" flex gap-3 flex-col">
            <a href="">FAQ</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms and conditions</a>
            <a href="">Contact us</a>
          </div>
        </div>

        <div className=" flex flex-col mt-16">
          {/* second bloc */}
          <h2 className=" mb-5 font-semibold text-2xl tracking-wider">
            Contact us
          </h2>

          <div className="flex gap-3 flex-col">
            <p>Rue xxxx, Béjaia, Algeria</p>
            <p>Tél 1-888-888-888</p>
            <div className=" flex gap-8 items-center mt-4 ">
              <a href="">
                <img src={twitter} className=" w-6" alt="" />
              </a>
              <a href="">
                <img src={fb} className=" w-4" alt="" />
              </a>
              <a href="">
                <img src={linkedin} className=" w-6" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className=" basis-[25%]">
          {/* third bloc */}
          <img src={rollercoaster} alt="" />
        </div>
      </footer>
  )
}

export default Footer