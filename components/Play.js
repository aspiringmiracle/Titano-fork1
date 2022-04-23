import React from "react";
import Overlay from "./misc/Overlay";
const Play = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  return (
    <div className="play flex flex-col w-full">
      <Overlay/>
      <div className="container">
        <div className="grid grid-cols-2 grid-flow-row">
          <div className="flex flex-col  pl-20">
            <p className="text-green-500 capitalize text-md">Prize-Linked Accumulating Yield</p>
            <h2 className="text-4xl  capitalize py-8">MUMBAI<span className="uppercase">p.l.a.y.</span></h2>
            <h1 className ="text-lg ">Mumbai P.L.A.Y. is the new Mumbai TAP based project that allows Mumbai token holders to generate even more rewards. Simple, Powerful and Proven.</h1>
            <ul className="list-disc text-lg list-inside ml-1 py-8">
              <li>Your Mumbai Tokens Give You Access to P.L.A.Y.</li>
              <li>Easy to Enter Easy to Play</li>
              <li>Multiple Big Winners Each Week</li>
              <li>No One Loses Their Initial Deposit</li>
              <li>Even if you don’t win, keep all of your money!</li>            
            </ul>
            <div className="text-center text-green-500 text-4xl font-weight-800 text-shadow-green">
                  <h3 className="my-7 uppercase text-left">play now!</h3>
            </div>
          </div>
          <div className="flex">
            <img className="m-auto w-4/5" src="/assets/Risorsa-2@8x-1-300x226.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
