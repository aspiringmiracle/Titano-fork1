import React from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";

const Pricing = () => {
  return (
    <div
      className="w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed">
            Titano Autostaking Protocol
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <div className="flex flex-col justify-center items-center py-4 px-6 lg:px-12 xl:px-20">
              <div className="text-center text-green-500 text-5xl font-weight-800 text-shadow-green">
                <h3 className="mb-7">102 483.58%</h3>
              </div>
              <div className="text-center text-white font-weight-800 text-4xl mb-7 ">
                <h4>Fixed Staking APY</h4>
              </div>
              <div className="text-center text-white font-weight-800 text-4xl mb-7 ">
                <h4>open app</h4>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Standard.png"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                />
              </div>
              <p className="text-lg  font-medium uppercase my-2 sm:my-7">
                about 
              </p>
              <p className="text-md text-white">MUMBAI Finance is transforming DeFi with the MUMBAI Autostaking Protocol (TAP) that delivers the industry’s highest fixed APY, rebasing rewards every 30 minutes, and a simple buy-hold-earn system that grows your portfolio in your wallet, fast.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <p className="text-sm text-black">$TITANO Contract: 0xba96731324de188ebc1ed87ca74544ddebc07d7f</p>
        </div>
        <div className="flex flex-col w-full my-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
            Titano rewards holders with automatic compounding interest, increasing their TITANO holdings over time.
          </h3>
          <p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12">
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </p>
          
        </div>
    
      </div>
    </div>
  );
};

export default Pricing;
