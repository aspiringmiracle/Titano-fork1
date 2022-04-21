import React from "react";
import Maps from "../public/assets/circle.svg";
const Token = () => {
  return (
    <div className="container">
      <div className="flex flex-col w-full text-center my-20">
        <h2 className="text-5xl capitalize">Tokenomics</h2>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
          <div className="flex flex-col">
            <div className="flex items-center h-full">
              <div className="content-center">
                <div>
                  <h2 className="text-3xl">Titano Tokenomics Explained</h2>
                </div>
                <div className="my-10">
                  <div>
                    <div className="w-full border-solid border-green-500 border-t-4"></div>
                  </div>                   
                </div>
                <div  className="mt-4">
                  <p className="text-md leading-10">$TITANO is a BEP-20 token with an elastic supply that rewards holders using a positive rebase formula.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
              <div className="flex flex-col w-full">
                <div className="m-1 pd-4 token-container">
                  <Maps className="w-1/3 m-auto my-10"></Maps>
                  <h3 className="text-3xl text-center leading-center mb-5">Automatic LP </h3>
                  <p className="leading-10 text-center">
                      5% of the trading fees return to the liquidity ensuring $TITANO's increasing collateral value.
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="m-1 pd-4 token-container">
                  <div className="w-full flex justify-center my-10">
                    <img src="/assets/safe.png" className="w-1/3 m-auto "></img>
                  </div>
                  <h3 className="text-3xl text-center mb-5">Treasury  </h3>
                  <p className="leading-normal ">
                      3% of the purchases and 8% of the sales go directly to the treasury which supports the RFV. 
                  </p>
                </div>
              </div>
          </div>
          <div className="flex flex-col content-center items-center">
            <div className="flex items-center h-full">
              <div className="flex w-full ">
                <div className="m-1 pd-4 token-container">
                  <div className="w-full flex justify-center my-10">
                    <img src="/assets/risk.png" className="w-1/3 m-auto "></img>
                  </div>
                  <h3 className="text-3xl text-center mb-10">Risk Free Value </h3>
                  <p className="leading-normal text-center">
                    5% of the trading fees are redirected to the RFV which helps sustain and back the staking rewards provided by the positive rebase
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
};

export default Token;
