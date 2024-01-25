import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const ProtectedRoute = (rest) => {
  const { checkAuth, getAuth } = useContext(AuthContext);

  useEffect(() => {
    if (!checkAuth()) {
      window.location.href = "/auth?type=login";
    }
    console.log("PROTECTED ROUTE", getAuth());
  }, []);
  useEffect(() => {
    // Your logic here to reset hasVideoPlayed to false
    localStorage.setItem("hasVideoPlayed", "false");
  }, []);

  return <Outlet />;
};

export default ProtectedRoute;
