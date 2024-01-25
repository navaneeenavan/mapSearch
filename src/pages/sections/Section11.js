import React, { useEffect, useState } from "react";
import { FaSoundcloud } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/Landing.css";
import { IoIosArrowForward } from "react-icons/io";
import { useSpring, animated } from "react-spring";

// Events

const Section11 = () => {
  const [consolee, setConsolee] = useState(0);

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
    const element = document.querySelector("#anchor11");
    const eventsTexts = document.querySelectorAll(".events-text");
    const observer = new IntersectionObserver((entries) => {
      eventsTexts.forEach((eventsText) => {
        eventsText.classList.add("animate-fade-in");
      });
    });

    observer.observe(element);
  }, []);

  const condition = "text-[#181818]";

  const condition_bg = "255,255,255";

  const condition_direction = "to bottom";

  function Number({ n }) {
    const props = useSpring({
      from: { number: 499900 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.span>
      {props.number.to((n) => n.toLocaleString('en-IN').split('.')[0])}
    </animated.span>;
  }

  return (
    <div className="w-full relative mb-16 lg:mb-0"
      style={{
        background: `linear-gradient(${condition_direction}, rgba(${condition_bg},0.8), rgba(${condition_bg},0.9)), url(/assets/Design/prizebg.png)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition:'background 0.3s ease',
        backgroundSize: "cover"
      }}>
      <section
        id="section11"
        className="w-full relative lg:px-[calc(100vw/12)] lg:p-16 flex flex-col-reverse lg:flex-row items-center justify-center"
      >
        <div className="w-full px-12 py-20 lg:py-40">
          <h1
            className={`text-4xl lg:text-5xl font-poppins font-semibold ${condition} transition-colors duration-300 ease-in-out events-text opacity-0 text-center`}
          >
            <p className="mb-8 drop-shadow-xl">
              Register now to win from an exciting prize pool worth
            </p>
            <span className="text-5xl lg:text-[10rem] tracking-wide lg:tracking-wider bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] drop-shadow-xl font-poppins">
              <span className="font-oswald">₹ {" "}</span>{<Number n={550000} />}
            </span>
          </h1>
        </div>
      </section>
      <a
        id="anchor11"
        className="absolute top-[40%] lg:top-[75%] w-full h-20 -z-10"
      ></a>
      <div className="absolute top-[100%] w-full h-10"></div>
    </div>
  );
};

export default Section11;