import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Error404 = () => {

  useEffect(() => {
    localStorage.setItem("hasVideoPlayed", "false");
  }, []);
  return (
    <main className="h-screen w-screen relative overflow-hidden">
      <div
        className="absolute z-0 top-0 left-0 right-0 h-[40vh] w-full"
        style={{
          background:
            "url(/assets/Design/errorbg.png)",
        }}
      ></div>
      <section className="relative z-20 flex flex-col justify-center items-center w-full h-full">
        <div
          style={{
            background:
              "url(/assets/Design/404.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "screen",
          }}
          className="lg:w-[40vw] w-[90vw] h-[50vh] "
        />
        <h1 className="text-xl font-semibold font-poppins lg:w-[40vw] w-[90vw] text-center">
          The page you were looking for is experiencing technical
          difficulties, but our team of tech wizards is working on a fix. In the
          meantime, why not explore some of our other electrifying events?
        </h1>
        <Link
          to="/"
          className="bg-gray-200 px-6 py-2 text-xl rounded-xl font-poppins mt-16 font-semibold shadow-lg lg:hover:scale-110 transition-all"
        >
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] ">
            Go to Home Page
          </span>
        </Link>
      </section>
    </main>
  );
};

export default Error404;
