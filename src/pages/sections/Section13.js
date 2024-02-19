import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { fetchUserByEmail } from "../../API/call";

// Countdown

const Section13 = ({ scrollYByVH }) => {
  const [consolee, setConsolee] = useState(0);
  const [paid, setPaid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserByEmail(localStorage.getItem("email")).then((res) => {
      if (res.data.user.isPaid) {
        setPaid(true);
      }
    });
  }, []);


  

  const mobBgUrl = "/assets/sponsor_event.jpg";


  return (
      <section
        id="section2"
        className="lg:flex-row lg:justify-around items-center px-4 space-y-8  bg-no-repeat  [scroll-snap-align:start] flex flex-col" 
      >

      <div className="lg:w-[60%] w-full lg:h-full flex justify-center items-center">
      <img src={mobBgUrl} className="w-full"/>

      </div>


      <div className="lg:w-[40%] w-full lg:h-full space-y-8 flex flex-col justify-center items-center">

      <h1 className="font-poppins text-xl lg:text-3xl font-semibold text-center">
      Launch Your Dream IT Career with guidance from Vites Technologies
      </h1>

      <button
              className="lg:text-lg font-semibold w-fit text-center flex justify-center items-center font-poppins text-white bg-[#C80067] border-2 border-[#C80067] shadow-lg hover:scale-110 transition-all px-6 py-2 rounded-lg whitespace-nowrap lg:whitespace-normal"
              onClick={() => {
                    navigate("/portal/event/EVNT0043")
                  }}
            >
              Register Now!
            </button>
      </div>

       

      </section>
  );
};

export default Section13;
