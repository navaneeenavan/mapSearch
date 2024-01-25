import React, { useEffect, useState } from "react";
import "../../styles/Landing.css";
import TeamDetails from "./TeamDetails.js";
import "../../styles/FlipCard.css";

// Our Team

const Section7 = () => {
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
    const element = document.querySelector("#anchor8");
    const teamTexts = document.querySelectorAll(".team-text");
    const observer = new IntersectionObserver((entries) => {
      teamTexts.forEach((eventsText) => {
        eventsText.classList.add("animate-fade-in");
      });
    });

    observer.observe(element);
  });

  const [fixedPosition, setFixedPosition] = useState("relative");

  useEffect(() => {
    const rightGrid = document.querySelector("#right-grid");
    const leftGrid = document.querySelector("#left-grid");
    if (
      leftGrid.getBoundingClientRect().top <= 0 &&
      leftGrid.getBoundingClientRect().bottom > window.innerHeight &&
      fixedPosition !== "fixed"
    ) {
      setFixedPosition("fixed");
    } else if (leftGrid.getBoundingClientRect().top > 0) {
      setFixedPosition("relative");
    } else if (leftGrid.getBoundingClientRect().bottom <= window.innerHeight) {
      setFixedPosition("absolute");
    }
    console.log(
      leftGrid.getBoundingClientRect(),
      fixedPosition,
      window.innerHeight
    );
  });

  return (
    <div className="w-full relative">
      <section
        id="section7"
        className="w-full relative flex items-start team-text opacity-0 mt-12 lg:mt-24"
      >
        <div
          className={`w-full lg:w-[calc(100vw-75vh)] font-poppins pt-8 lg:pt-16 pb-0 px-[calc(100vw/12)]`}
          id="left-grid"
        >
          <h1
            className="text-4xl lg:text-5xl w-full font-semibold text-[#181818] lg:pt-24"
            id="our-team-text"
          >
            Our
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]">
              {" Team "}
            </span>
          </h1>
          <p className="w-full mt-8 text-xl">
            We bring our creativity and attention to detail to every event we
            plan, ensuring a seamless and unforgettable experience for you all.
          </p>
          {/* <ImageGrid vertical="Overall Coordinators" /> */}
          <ImageGrid vertical="Ambience and Creativity" />
          {/* <ImageGrid vertical="App and Web Development" /> */}
          <ImageGrid vertical="Design & Photography" />
          <ImageGrid vertical="Events Resource Management" />
          <ImageGrid vertical="PR and Sponsorship" />
        </div>

        <div
          className={`hidden lg:block lg:w-fit h-screen overflow-y-hidden transition-all ${
            fixedPosition === "fixed"
              ? "fixed top-0 right-0"
              : fixedPosition === "absolute"
              ? "absolute bottom-0 right-0"
              : "absolute top-0 right-0"
          }`}
          id="right-grid"
        >
          <div className="grid grid-cols-3 w-[75vh] h-full ">
            <div className="border row-span-1 col-span-1 w-[25vh] h-[25vh] rounded-tr-[6rem] bg-gradient-to-br from-[#c9478a] to-[#eb6dae]"></div>
            <div className="border row-span-1 col-span-1 w-[25vh] h-[25vh] rounded-br-[6rem] bg-gradient-to-tl from-[#6764b7] to-[#a7a5f9]"></div>
            <div className="border row-span-1 col-span-1 w-[25vh] h-[25vh] rounded-tl-[6rem] bg-black flex items-end justify-start p-2">
              <p className="text-white font-poppins ">Kriya 2024</p>
            </div>
            {/* <div className="border row-span-1 col-span-1 w-[25vh] h-[25vh] bg-gray-800"></div> */}
            <div
              className="border row-span-1 col-span-2 w-[50vh] h-[25vh]  rounded-tl-[6rem] rounded-br-[6rem]"
              style={{
                background:
                  "url(/assets/Team/Group/one.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="border row-span-1 col-span-1 w-[25vh] h-[25vh] rounded-bl-[6rem] bg-gradient-to-tl from-[#c9478a] to-[#eb6dae]"></div>
            <div className="border row-span-1 col-span-1 w-[25vh] h-[25vh] rounded-tl-[6rem] bg-black"></div>
            <div className="border row-span-1 col-span-1 w-[25vh] h-[25vh] rounded-[6rem] bg-gradient-to-tl from-[#6764b7] to-[#a7a5f9]"></div>
            <div
              className="border row-span-1 col-span-1 w-[25vh] h-[25vh] rounded-tl-[6rem]"
              style={{
                background:
                  "url(/assets/Team/Group/two.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="border row-span-1 col-span-1 w-[25vh] h-[25vh] "
              style={{
                background:
                  "url(/assets/Team/Group/three.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="border row-span-1 col-span-1 w-[25vh] h-[25vh] bg-gradient-to-br from-[#c9478a] to-[#eb6dae]"></div>
            <div className="border row-span-1 col-span-1 w-[25vh] h-[25vh] rounded-tr-[6rem] rounded-bl-[6rem] bg-gradient-to-tl from-[#6764b7] to-[#a7a5f9]"></div>
          </div>
        </div>
      </section>
      <a id="anchor8" className="absolute top-[75%] w-full h-20 -z-10"></a>
    </div>
  );
};

export default Section7;

const ImageGrid = ({ vertical }) => {
  const IMAGE_URL_1 =
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";
  const IMAGE_URL_2 =
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80";

  return (
    <React.Fragment>
      <h2 className="text-[#181818] text-2xl mt-8 mb-4">{vertical}</h2>
      <div className="flex flex-wrap gap-2 w-full bg-gray-100 shadow-xl rounded-lg p-4">
        {TeamDetails.filter((i) => i.vertical === vertical).map((item, i) => {
          return (
            <div
              className="w-24 h-24 lg:w-36 lg:h-36 aspect-square overflow-hidden"
              id="flip-card"
            >
              <div className="w-full h-full" id="flip-card-inner">
                <div
                  loading="lazy"
                  className="w-full h-full "
                  style={{
                    background: `url(${item.image_url}), #f5f5f5`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // filter: "grayscale(100%)",
                  }}
                  id="flip-card-front"
                ></div>
                <div
                  className="flex flex-col w-full h-full justify-center p-2 bg-gray-200 "
                  id="flip-card-back"
                >
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="text-xs">{item.position}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
