import React, { useEffect, useState } from "react";
import "../../styles/Loading.css";
import { fetchUserVerifyConfirm } from "../../API/call";
import { useNavigate, useParams } from "react-router-dom";

const PSG_COLLEGE =
  "PSG College of Technology (Autonomous), Peelamedu, Coimbatore District 641004";

const Verification = () => {
  useEffect(() => {
    localStorage.setItem("hasVideoPlayed", "false");
  }, []);
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetchUserVerifyConfirm(id)
      .then((res) => {
        localStorage.setItem("verify_email", res.data.user.email);
        setFormData(res.data.user);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (!formData) return;
    navigate(`/auth/?type=signup&page=password&email=${formData.email}`);
  }, [formData]);

  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center space-y-6">
      <img
        src="assets/Logo/KriyaLogoKLAWhite.png"
        alt=""
        className="h-24 invert"
      />
      <div class="loadingio-spinner-spinner-o7mafz45j6n">
        <div class="ldio-r21hzjwurfo">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Verification;
