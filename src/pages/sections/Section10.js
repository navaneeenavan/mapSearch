import React, { useEffect, useState } from "react";
import "../../styles/Landing.css";
import { fetchPapers } from "../../API/call";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowDownward, MdOutlineArrowUpward } from "react-icons/md";

// Paper Presentations

const Section10 = ({ scrollYByVH }) => {
  const [consolee, setConsolee] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener(
      "scroll",
      (event) => {
        setConsolee((window.pageYOffset / window.innerHeight).toFixed(2));
      },
      { passive: true }
    );
  }, [consolee]);

  useEffect(() => {
    const element = document.querySelector("#anchor5");
    const workshopTexts = document.querySelectorAll(".workshop-text");
    const observer = new IntersectionObserver((entries) => {
      workshopTexts.forEach((workshopText) => {
        workshopText.classList.add("animate-fade-in");
      });
    });

    observer.observe(element);
  });

  const [hoverState, setHoverState] = useState(0);

  return (
    <div className="w-full h-full relative font-poppins">
      <section
        id="section10"
        className="h-fit lg:h-screen w-full p-0 py-8 lg:p-16 lg:px-[calc(100vw/16)] lg:pr-0 flex flex-col lg:flex-row lg:items-center"
      >
        <div className="w-full lg:w-[40%] h-full flex items-center px-8 lg:pl-0 lg:pr-16 font-semibold font-poppins">
          <h1 className="text-4xl lg:text-6xl lg:leading-none text-center lg:text-left w-full">
            Introducing our{" "}
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]">
              {" Flagship "}
            </span>
            Events{" "}
          </h1>
        </div>
        <div className="hidden lg:w-[60%] h-full lg:flex items-center justify-center">
          <div className="w-full flex flex-col items-center">
            <div
              onClick={() => {
                if (hoverState === -2) {
                  navigate("/portal/event/EVNT0034");
                } else {
                  setHoverState(-2)
                }
              }}
              className={`transition-all rounded-2xl flex flex-col items-center justify-center -mt-0 ${hoverState === -2
                ? "w-full z-50 [filter:drop-shadow(0px_0px_4rem_rgba(0,0,0,0.3))] h-56"
                : hoverState === -1
                  ? "w-[90%] z-40 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                  : hoverState === 0
                    ? "w-[75%] z-30 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.6))] h-24"
                    : hoverState === 1
                      ? "w-[50%] z-20 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.8))] h-20"
                      : hoverState === 2
                        ? "w-[25%] z-10 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,1))] h-16"
                        : ""
                } relative`}
              style={{
                background: "url('https://res.cloudinary.com/dvxgjje9e/image/upload/f_auto,q_auto/speed_drift')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p
                className={`text-3xl uppercase text-white duration-300 delay-200 transition-all font-bold font-poppins ${hoverState === -2
                  ? "opacity-100 tracking-widest"
                  : "opacity-0 -tracking-[0.2em]"
                  }`}
              >
                Speed Drifters
              </p>
              <Link
                to="/portal/event/EVNT0034"
                className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-4 ${hoverState !== -2 && "hidden"
                  }`}
              >
                Know More
              </Link>
            </div>
            <div
              onClick={() => {
                if (hoverState === -1) {
                  navigate("/portal/event/EVNT0020");
                } else {
                  setHoverState(-1)
                }
              }}
              className={`transition-all rounded-2xl flex flex-col items-center justify-center -mt-8 ${hoverState === -2
                ? "w-[90%] z-40 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                : hoverState === -1
                  ? "w-full z-50 [filter:drop-shadow(0px_0px_4rem_rgba(0,0,0,0.3))] h-56"
                  : hoverState === 0
                    ? "w-[90%] z-40 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                    : hoverState === 1
                      ? "w-[75%] z-30 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.6))] h-24"
                      : hoverState === 2
                        ? "w-[50%] z-20 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.8))] h-20"
                        : hoverState === 3
                          ? "w-[25%] z-10 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.85))] h-16"
                          : ""
                } relative`}
              style={{
                background: "url('https://res.cloudinary.com/dvxgjje9e/image/upload/f_auto,q_auto/openquiz')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p
                className={`text-3xl uppercase text-white duration-300 delay-200 transition-all font-bold font-poppins ${hoverState === -1
                  ? "opacity-100 tracking-widest"
                  : "opacity-0 -tracking-[0.2em]"
                  }`}
              >
                Open Quiz
              </p>
              <Link
                to="/portal/event/EVNT0020"
                className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-4 ${hoverState !== -1 && "hidden"
                  }`}
              >
                Know More
              </Link>
            </div>
            <div
              onClick={() => {
                if (hoverState === 0) {
                  navigate("/portal/event/EVNT0026");
                } else {
                  setHoverState(0)
                }
              }}
              className={`transition-all rounded-2xl flex flex-col items-center justify-center -mt-8 ${hoverState === -2
                ? "w-[75%] z-30 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.6))] h-24"
                : hoverState === -1
                  ? "w-[90%] z-40 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                  : hoverState === 0
                    ? "w-full z-50 [filter:drop-shadow(0px_0px_4rem_rgba(0,0,0,0.3))] h-56"
                    : hoverState === 1
                      ? "w-[90%] z-40 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                      : hoverState === 2
                        ? "w-[75%] z-30 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.6))] h-24"
                        : hoverState === 3
                          ? "w-[50%] z-20 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.8))] h-16"
                          : ""
                } relative`}
              style={{
                background: "url('https://res.cloudinary.com/dvxgjje9e/image/upload/f_auto,q_auto/nextech')",
                backgroundSize: "cover",
                backgroundPosition: "50% 10%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p
                className={`text-3xl uppercase text-white duration-500 delay-200 transition-all font-bold font-poppins ${hoverState === 0
                  ? "opacity-100 tracking-widest"
                  : "opacity-0 -tracking-[0.2em]"
                  }`}
              >
                Nex Tech
              </p>
              <Link
                to="/portal/event/EVNT0026"
                className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-4 ${hoverState !== 0 && "hidden"
                  }`}
              >
                Know More
              </Link>
            </div>
            <div
              onClick={() => {
                if (hoverState === 1) {
                  navigate("/portal/event/EVNT0001");
                } else {
                  setHoverState(1)
                }
              }}
              className={`transition-all rounded-2xl flex flex-col items-center justify-center -mt-8 ${hoverState === -2
                ? "w-[50%] z-20 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.8))] h-20"
                : hoverState === -1
                  ? "w-[75%] z-30 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.6))] h-24"
                  : hoverState === 0
                    ? "w-[90%] z-40 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                    : hoverState === 1
                      ? "w-full z-50 [filter:drop-shadow(0px_0px_4rem_rgba(0,0,0,0.3))] h-56"
                      : hoverState === 2
                        ? "w-[90%] z-40 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                        : hoverState === 3
                          ? "w-[75%] z-30 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.6))] h-24"
                          : ""
                } relative`}
              style={{
                background: "url('https://res.cloudinary.com/dvxgjje9e/image/upload/f_auto,q_auto/Aqua%20jet')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p
                className={`text-3xl uppercase text-white duration-500 delay-200 transition-all font-bold font-poppins ${hoverState === 1
                  ? "opacity-100 tracking-widest"
                  : "opacity-0 -tracking-[0.2em]"
                  }`}
              >
                Aqua Jet
              </p>
              <Link
                to="/portal/event/EVNT0001"
                className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-4 ${hoverState !== 1 && "hidden"
                  }`}
              >
                Know More
              </Link>
            </div>
            <div
              onClick={() => {
                if (hoverState === 2) {
                  navigate("/portal/event/EVNT0030");
                } else {
                  setHoverState(2)
                }
              }}
              className={`transition-all rounded-2xl flex flex-col items-center justify-center -mt-8 ${hoverState === -2
                ? "w-[25%] z-10 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,1))] h-16"
                : hoverState === -1
                  ? "w-[50%] z-20 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.8))] h-20"
                  : hoverState === 0
                    ? "w-[75%] z-30 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.6))] h-24"
                    : hoverState === 1
                      ? "w-[90%] z-40 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                      : hoverState === 2
                        ? "w-full z-50 [filter:drop-shadow(0px_0px_4rem_rgba(0,0,0,0.3))] h-56"
                        : hoverState === 3
                          ? "w-[90%] z-40 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                          : ""
                } relative`}
              style={{
                background: "url('https://res.cloudinary.com/dvxgjje9e/image/upload/f_auto,q_auto/robot')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p
                className={`text-3xl uppercase text-white duration-500 delay-200 transition-all font-bold font-poppins ${hoverState === 2
                  ? "opacity-100 tracking-widest"
                  : "opacity-0 -tracking-[0.2em]"
                  }`}
              >
                RC Grand Prix
              </p>
              <Link
                to="/portal/event/EVNT0030"
                className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-4 ${hoverState !== 2 && "hidden"
                  }`}
              >
                Know More
              </Link>
            </div>
            <div
              onClick={() => {
                if (hoverState === 3) {
                  navigate("/portal/event/EVNT0031");
                } else {
                  setHoverState(3)
                }
              }}
              className={`transition-all rounded-2xl flex flex-col items-center justify-center -mt-8 ${hoverState === -2
                ? "w-[20%] z-5 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,1))] h-16"
                : hoverState === -1
                  ? "w-[25%] z-15 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.8))] h-20"
                  : hoverState === 0
                    ? "w-[50%] z-25 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.6))] h-24"
                    : hoverState === 1
                      ? "w-[75%] z-35 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                      : hoverState === 2
                        ? "w-[90%] z-45 [filter:drop-shadow(0px_0px_4rem_rgba(0,0,0,0.3))] h-56"
                        : hoverState === 3
                          ? "w-full z-50 [filter:drop-shadow(0px_0px_4rem_rgba(0,0,0,0.2))] h-60"
                          : ""
                } relative`}
              style={{
                background: "url('https://res.cloudinary.com/dvxgjje9e/image/upload/f_auto,q_auto/robo_prix')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p
                className={`text-3xl uppercase text-white duration-500 delay-200 transition-all font-bold font-poppins ${hoverState === 3
                  ? "opacity-100 tracking-widest"
                  : "opacity-0 -tracking-[0.2em]"
                  }`}
              >
                Robot Grand Prix
              </p>
              <Link
                to="/portal/event/EVNT0031"
                className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-4 ${hoverState !== 3 && "hidden"
                  }`}
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center space-y-4 lg:hidden px-4 mt-16">
          <Link
            className="flex flex-col justify-center items-center h-32 rounded-xl w-full"
            to="/portal/event/EVNT0034"
            style={{
              background: "url('https://res.cloudinary.com/dvxgjje9e/image/upload/f_auto,q_auto/speed_drift')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              className={`text-3xl uppercase text-white font-bold font-poppins backdrop-blur-sm`}
            >
              Speed Drifters
            </p>
            <p
              className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-2 backdrop-blur-sm`}
            >
              Know More
            </p>
          </Link>
          <Link
            className="flex flex-col justify-center items-center h-32 rounded-xl w-full"
            to="/portal/event/EVNT0020"
            style={{
              background: "url('https://res.cloudinary.com/dvxgjje9e/image/upload/f_auto,q_auto/openquiz')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              className={`text-3xl uppercase text-white font-bold font-poppins backdrop-blur-sm`}
            >
              Open Quiz
            </p>
            <p
              className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-2 backdrop-blur-sm`}
            >
              Know More
            </p>
          </Link>
          <Link
            className="flex flex-col justify-center items-center h-32 rounded-xl w-full"
            to="/portal/event/EVNT0026"
            style={{
              background: "url('https://res.cloudinary.com/dvxgjje9e/image/upload/f_auto,q_auto/nextech')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              className={`text-3xl uppercase text-white font-bold font-poppins backdrop-blur-sm`}
            >
              Nex Tech
            </p>
            <p
              className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-2 backdrop-blur-sm`}
            >
              Know More
            </p>
          </Link>
          <Link
            className="flex flex-col justify-center items-center h-32 rounded-xl w-full"
            to="/portal/event/EVNT0001"
            style={{
              background: "url('https://res.cloudinary.com/dvxgjje9e/image/upload/f_auto,q_auto/Aqua%20jet')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              className={`text-3xl uppercase text-white font-bold font-poppins backdrop-blur-sm`}
            >
              Aqua Jet
            </p>
            <p
              className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-2 backdrop-blur-sm`}
            >
              Know More
            </p>
          </Link>
          <Link
            className="flex flex-col justify-center items-center h-32 rounded-xl w-full"
            to="/portal/event/EVNT0030"
            style={{
              background: "url('https://res.cloudinary.com/dvxgjje9e/image/upload/f_auto,q_auto/robot')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              className={`text-3xl uppercase text-white font-bold font-poppins backdrop-blur-sm`}
            >
              RC Grand Prix
            </p>
            <p
              className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-2 backdrop-blur-sm`}
            >
              Know More
            </p>
          </Link>
          <Link
            className="flex flex-col justify-center items-center h-32 rounded-xl w-full"
            to="/portal/event/EVNT0031"
            style={{
              background: "url('https://res.cloudinary.com/dvxgjje9e/image/upload/f_auto,q_auto/robo_prix')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              className={`text-3xl uppercase text-white font-bold font-poppins backdrop-blur-sm`}
            >
              Robot Grand Prix
            </p>
            <p
              className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-2 backdrop-blur-sm`}
            >
              Know More
            </p>
          </Link>
        </div>

        <div className="hidden lg:flex flex-col justify-center px-12 text-3xl space-y-6 h-full">
          <button
            onClick={() => {
              hoverState > -2 && setHoverState(hoverState - 1);
            }}
          >
            <MdOutlineArrowUpward />
          </button>
          <button
            onClick={() => {
              hoverState < 3 && setHoverState(hoverState + 1);
            }}
          >
            <MdOutlineArrowDownward />
          </button>
        </div>
      </section>
      <a id="anchor5" className="absolute top-[90%] w-full h-1 -z-10"></a>
    </div>
  );
};

export default Section10;
