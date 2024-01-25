import React, { useEffect } from "react";
import "../../styles/Loading.css";
import {
  fetchPaymentDetailsByTxnId,
  fetchUserVerifyConfirm,
} from "../../API/call";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const PSG_COLLEGE =
  "PSG College of Technology (Autonomous), Peelamedu, Coimbatore District 641004";

const PaymentSuccess = () => {
  useEffect(() => {
    localStorage.setItem("hasVideoPlayed", "false");
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(searchParams.get("txn"));
    localStorage.setItem("txn", searchParams.get("txn"));
    fetchPaymentDetailsByTxnId(searchParams.get("txn"))
      .then((res) => {
        console.log("ERRPR", res.data);
        if (res.data.data.status !== "SUCCESS")
          return navigate(`/payment/failure?txn=${searchParams.get("txn")}`);
        console.log(
          localStorage.getItem("txn_redirect_uri"),
          searchParams.get("txn"),
          localStorage.getItem("txn")
        );
        if (searchParams.get("redirect") === "complete_register") {
          if (
            localStorage.getItem("txn_redirect_uri") &&
            searchParams.get("txn") === localStorage.getItem("txn")
          ) {
            localStorage.removeItem("txn");
            const navigateUrl = localStorage.getItem("txn_redirect_uri");
            localStorage.removeItem("txn_redirect_uri");
            navigate(navigateUrl);
          } else {
            navigate(
              `/auth/?type=signup&page=final&email=${res.data.data.email}`
            );
          }
        } else if (searchParams.get("redirect") === "workshop_register") {
          if (
            localStorage.getItem("txn_redirect_uri") &&
            searchParams.get("txn") === localStorage.getItem("txn")
          ) {
            localStorage.removeItem("txn");
            const navigateUrl = localStorage.getItem("txn_redirect_uri");
            localStorage.removeItem("txn_redirect_uri");
            navigate(navigateUrl);
          } else {
            toast.error("Payment Fetch failed. Verify payment here.");
            navigate("/portal/profile");
          }
        } else {
          toast.error("Payment Fetch failed. Verify payment here.");
          navigate("/portal/profile");
        }
      })
      .catch((err) => console.log(err));
  }, [searchParams]);

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

export default PaymentSuccess;
