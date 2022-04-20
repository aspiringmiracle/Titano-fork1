import Image from "next/image";
import React from "react";
import Overlay from './misc/Overlay'
import Link from 'next/link'
import ButtonPrimary from "./misc/ButtonPrimary";
const Feature = () => {
  return (
    <div className="banner">
      <Overlay/>
      <div className="container">
        <div className="block">
          <div className="flex justify-between">

              <div className="p-2 ml-4">
                <div className="block">
                    <div className="w-full">
                      <h2 className="text-4xl font-medium ">
                        The Best Auto-Staking & Auto-Compounding Protocol in Crypto
                      </h2>
                    </div>
                    <div className="w-full mt-4 ml-1">
                      <ul className="list-disc list-inside ml-1">
                        <li className="text-xl">Highest Fixed APY – 102,483%</li>
                        <li className="text-xl">First Automatic Staking and Compounding in Your Wallet!</li>
                        <li className="text-xl">Get Rewards Every 30 Minutes / 48 Times Daily!</li>
                      </ul>
                    </div>
                </div>
              </div>
            <Image
              src="/assets/Free.png"
              alt="Picture of the author"
              width="w-full"
              height={300}
              className="float-right"
            />
          </div>
        </div>
        <div className="block w-full flex">
          <div className="w-1/4 ml-7">
            <ButtonPrimary addClass={'bg-green-500'}>Buy $TITANO</ButtonPrimary>
          </div>
          <div className="w-1/4 ml-7">
            <ButtonPrimary>white paper</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
