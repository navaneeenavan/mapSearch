import React, { useEffect, useState,useCallback } from "react";
import { IoMdCall, IoLogoWhatsapp } from "react-icons/io";
import { MdAccessTime, MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineTeam, AiOutlineUser } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPaperById, fetchPaperDetailsByEmail, fetchPaperRegister, fetchUserByEmail } from "../API/call";
import { SiGmail } from "react-icons/si";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particleOptions from "../ParticleOptions";

const Paper = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [generalPayment, setGeneralPayment] = useState(false);
  const [userPaperDetails, setUserPaperDetails] = useState([]);

  const particlesInit = useCallback(async engine => {
    console.log(engine);
 
    await loadSlim(engine);
}, []);

const particlesLoaded = (container) => {
  console.log(container);
}

  const toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const { id } = useParams();

  const [paperDetail, setPaperDetail] = useState(null);

  useEffect(() => {
    fetchPaperDetailsByEmail(localStorage.getItem("email")).then((res) => {
      console.log(res.data);
      setUserPaperDetails(res.data);
    });
  }, []);

  const handleRegister = () => {
    if (!isLoggedIn) {
      navigate("/auth?type=signup");
    } else if (!generalPayment) {
      navigate("/auth/payment?type=GENERAL");
    } else {
      fetchPaperRegister({
        email: localStorage.getItem("email"),
        paperId: id,
      }).then((res) => {
        console.log(res);
        window.location.reload();
      });
    }
  };

  useEffect(() => {
    setPaperDetail(fetchPaperById(id));
  }, [id]);

  useEffect(() => {
    fetchUserByEmail(localStorage.getItem("email")).then((res) => {
      console.log(res.data.user);
      setIsLoggedIn(true);
      setGeneralPayment(res?.data?.user?.isPaid);
    });
  }, []);

  return !paperDetail ? (
    <section className="w-full lg:px-16 font-poppins py-12 pt-36 lg:pt-12 h-screen overflow-y-scroll">
      <p className="text-white text-xl px-8">Loading...</p>
    </section>
  ) : (
    <section className="w-full lg:px-16 font-poppins py-12 pt-28 lg:pt-12 h-screen overflow-y-scroll">
     <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} className="top-0 left-0 absolute" height="100vh" width="100vh" options={particleOptions}/>
     <div className="w-fit">
        <h1 className="text-4xl text-white font-semibold px-8 lg:px-0">
          {toTitleCase(paperDetail.eventName)}
        </h1>
        <div className="w-[60%] lg:w-[80%] ml-8 lg:ml-0 mt-2 h-[4px] bg-gradient-to-r rounded-[2px] from-[#3b82f6] to-[#8b5cf6]"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 w-full lg:px-0 my-8 text-black ">

        <div className="flex flex-col w-full justify-between lg:w-3/5 space-y-5 ">

          <div className="bg-white text-[#3c4043] lg:rounded-3xl lg:px-0 space-y-8 relative py-8 px-8 h-full">
            <p className="text-2xl text-left pl-10 font-semibold tracking-wider text-[#3c4043] lg:text-[#3c4043]">
              Theme
            </p>
            <ul className=" list-disc text-left pl-10 lg:text-lg text-[#3c4043] lg:text-[#3c4043]  space-y-2 lg:pr-16">
              {paperDetail.topic.split("\n").map((item, index) => (
                <li
                  key={index}
                  className={`${item.slice(-1) === ":"
                    ? "text-xl font-semibold -ml-2 py-2"
                    : "text-lg"
                    }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white  lg:rounded-3xl lg:px-0 space-y-8 relative py-8 px-8 ">
            <p className="text-2xl font-semibold tracking-wider text-[#3c4043] pl-10">
              Rules
            </p>
            <ul className="list-disc text-base lg:text-base text-[#3c4043] pl-10 space-y-2 lg:pr-16">
              {paperDetail.rules.split("\n").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-2/5 space-y-4 flex flex-col">
          {!userPaperDetails.find((i) => i.paperId === id) ? (
            <button
              className="bg-white lg:rounded-3xl p-8 lg:p-12 space-y-4 text-center lg:text-left flex justify-center lg:justify-start"
              onClick={() => {
                window.confirm("Are you sure you want to register ?")
                  ? handleRegister()
                  : console.log("Cancelled");
              }}
            >
              <span className="text-3xl lg:text-3xl font-semibold tracking-wide bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]">
                {"Register Here!"}
                {/* {"Registrations Closed!"} */}
              </span>
            </button>
          ) : (
            <div className="flex flex-row gap-4 w-full lg:px-0">
              <div className="bg-[#ffffff] w-full lg:rounded-3xl p-8 lg:p-12 space-y-4">
                <p className="text-xl font-semibold tracking-wider text-[#3c4043]">
                  Submit the abstract to the mail ID
                </p>
                <p className="text-base text-[#3c4043] space-y-4">
                  {paperDetail.eventMail.map((item, index) => (
                    <div className="flex flex-row items-center space-x-4 group w-full">
                      <SiGmail className="text-2xl group-hover:text-black" />
                      <button
                        key={index}
                        className="text-blue-700 group-hover:underline [overflow-wrap:break-word] w-[80%] text-left"
                        onClick={() => {
                          window.open(`mailto:${item}`);
                        }}
                      >
                        {item}
                      </button>
                    </div>
                  ))}
                </p>
              </div>
            </div>
          )}

          <div className="lg:bg-[#ffffff] lg:rounded-3xl p-8 lg:p-12 space-y-6 h-full">
            <p className="text-2xl font-semibold tracking-wide text-white lg:text-[#3c4043]">
              Abstract Submission Deadline
            </p>

            <div className="flex flex-row items-center gap-4 lg:gap-4">
              <p className="text-6xl lg:text-6xl font-semibold tracking-wide text-white lg:text-[#3c4043]">
                {paperDetail.deadline}
              </p>
              <div className="flex flex-col">
                <p className="text-lg font-semibold tracking-wide text-white lg:text-[#3c4043]">
                  February
                </p>
                <p className="text-lg font-semibold tracking-wide text-white lg:text-[#3c4043]">
                  2024
                </p>
              </div>
            </div>

            <div>
              <p className="text-2xl font-semibold tracking-wide py-4 text-white lg:text-[#3c4043]">
                Note
              </p>
              <ul className="list-disc text-base text-white lg:text-[#3c4043] pl-4 space-y-2">
                <li>For teams, only <b className="font-semibold">one</b> team member needs to pay the general registration fee. (This is applicable only for paper presentations.)</li>
                <li>If the abstract is accepted, a team must pay the event registration fee of <b className="font-semibold">Rs. 200</b> to present the paper</li>
              </ul>
            </div>
          </div>
        </div>
      </div>



      <div className = "flex flex-col lg:flex-row space-x-5">
            <div className="bg-[#ffffff] w-full lg:rounded-3xl p-8 lg:p-12 space-y-4 mr-10">
              <p className="text-2xl font-semibold tracking-wide text-[#3c4043] pb-4">
                Presentation Details
              </p>

              <div className="flex flex-row items-center gap-4 lg:gap-4">
                <p className="text-6xl lg:text-6xl font-semibold tracking-wide text-[#3c4043]">
                  {paperDetail.date}
                </p>
                <div className="flex flex-col">
                  <p className="text-lg font-semibold tracking-wide text-[#3c4043]">
                    February
                  </p>
                  <p className="text-lg font-semibold tracking-wide text-[#3c4043]">
                    2024
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 lg:gap-6">
                <p className="text-4xl font-semibold tracking-wide text-[#3c4043] p-3">
                  <MdAccessTime />
                </p>
                <div className="pl-2 flex flex-col">
                  <p className="text-base lg:text-lg font-semibold tracking-wider text-[#3c4043]">
                    {paperDetail.time}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 lg:gap-6">
                <p className="text-4xl font-semibold tracking-wide text-[#3c4043] p-3">
                  <MdOutlineLocationOn />
                </p>
                <div className="pl-2 flex flex-col">
                  <p
                    className={`text-base lg:text-lg font-semibold tracking-wider text-[#3c4043]`}
                  >
                    {paperDetail.hall}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 lg:gap-6">
                <p className="text-4xl font-semibold tracking-wide text-[#3c4043] p-3">
                  {paperDetail.teamSize !== "1" ? <AiOutlineTeam /> : <AiOutlineUser />}
                </p>
                <div className="pl-2 flex flex-col">
                  <p className="text-base lg:text-lg font-semibold tracking-wide text-[#3c4043]">
                    {paperDetail.teamSize} Member{paperDetail.teamSize !== "1" ? "s" : ""}
                  </p>
                </div>
              </div>
            </div>



          <div className="lg:bg-[#ffffff] w-full  lg:rounded-3xl p-8 lg:m-12 space-y-6">
            <p className="text-3xl lg:text-3xl font-semibold tracking-wide text-white lg:text-[#3c4043]">
              Contact
            </p>

            <div className="flex flex-row items-center justify-between">
              <div className="w-1/2 lg:w-1/2">
                <p className="text-base lg:text-base font-semibold tracking-wide text-white lg:text-[#3c4043]">
                  {toTitleCase(paperDetail.contact1[0])}
                </p>
                <p className="text-base lg:text-base tracking-wider text-white lg:text-[#3c4043]">
                  {paperDetail.contact1[1]}
                </p>
              </div>
              <div className="space-x-8">
                <button
                  onClick={() => {
                    window.open(`tel:${paperDetail.contact1[1]}`);
                  }}
                >
                  <IoMdCall className="hover:text-gray-200 text-white lg:text-[#3c4043] lg:hover:text-[#5f6164] text-3xl" />
                </button>
                <button
                  onClick={() => {
                    window.open(`https://wa.me/${paperDetail.contact1[1]}`);
                  }}
                >
                  <IoLogoWhatsapp className="hover:text-gray-200 text-white lg:text-[#3c4043] lg:hover:text-[#5f6164] text-3xl" />
                </button>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between">
              <div className="w-1/2 lg:w-1/2">
                <p className="text-base lg:text-base font-semibold tracking-wide text-white lg:text-[#3c4043]">
                  {toTitleCase(paperDetail.contact2[0])}
                </p>
                <p className="text-base lg:text-base tracking-wider text-white lg:text-[#3c4043]">
                  {paperDetail.contact2[1]}
                </p>
              </div>
              <div className="space-x-8">
                <button
                  onClick={() => {
                    window.open(`tel:${paperDetail.contact2[1]}`);
                  }}
                >
                  <IoMdCall className="hover:text-gray-200 text-white lg:text-[#3c4043] lg:hover:text-[#5f6164] text-3xl" />
                </button>
                <button
                  onClick={() => {
                    window.open(`https://wa.me/${paperDetail.contact2[1]}`);
                  }}
                >
                  <IoLogoWhatsapp className="hover:text-gray-200 text-white lg:text-[#3c4043] lg:hover:text-[#5f6164] text-3xl" />
                </button>
              </div>
            </div>
          </div>


          </div>
    </section>
  );
};

export default Paper;
