import React from 'react'
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const EnquiryWrapper = () => {

  useEffect(() => {
    localStorage.setItem("hasVideoPlayed", "false");
  }, []);

  return (
    <div
      className="w-screen h-screen overflow-x-hidden lg:px-[calc(100vw/6)] lg:pt-8"
      style={{
        background: "url(/assets/Design/errorbg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
        <div className="bg-white min-h-screen w-full">
            <Outlet/>
        </div>
    </div>
  );
}

export default EnquiryWrapper