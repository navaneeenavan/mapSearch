import React, { createContext, useEffect, useState } from "react";
import { fetchLoginVerify } from "../API/call";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const getAuth = () => {
    return auth;
  };

  const checkAuth = () => {
    if (localStorage.getItem("email") && localStorage.getItem("token")) {
      return true;
    }
    return false;
  };

  const verifyAuth = () => {
    fetchLoginVerify(
      localStorage.getItem("email"),
      localStorage.getItem("token")
    )
      .then((res) => {
        console.log("AUTH SUCCESS", res);
        if (!auth) {
          setAuth({
            email: localStorage.getItem("email"),
            token: localStorage.getItem("token"),
          });
        }
      })
      .catch((err) => {
        console.log("AUTH ERROR", err);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("email") && localStorage.getItem("token")) {
      verifyAuth();
    }
    console.log("AUTH PROVIDER", auth);
  }, [auth]);

  return (
    <AuthContext.Provider value={{ getAuth, setAuth, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
