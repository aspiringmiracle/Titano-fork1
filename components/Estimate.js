import React from "react";


const Estimate = () => {
  return (
    <div className="flex flex-col w-full my-20">
      <div className="flex flex-col w-full mb-40">
        <div className="text-center py-6">
          <h2 className="text-6xl font-weight-600">How much can I earn?</h2>
        </div>
        <div className="text-center py-2 ">
          <h2>Our products are powered by DeFi and are designed to help you effortlessly generate cash flow from your crypto.</h2>
        </div>
      </div>
      <div className="container mx-12">
        <div className="flex justify-between ">
        <div className="text-left mt- 10">
          <h2 className="text-5xl w-3/4 leading-snug tracking-normal">At the end of the year and with $1000 USD of $TITANO invested.</h2>
        </div>
          <div className="text-center ">
            <h2 className="text-5xl leading-normal tracking-normal mb-3">You can earn up to <span className="text-green-500 text-shadow-green">$1,002,758.54 USD</span>of $TITANO at 102,483.58% APY*.</h2>
            <div className="text-center">
              <p className="text-md">
              Earnings are calculated in a scenario where the RFV sustains the rebase reward for 365 days.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Estimate;
