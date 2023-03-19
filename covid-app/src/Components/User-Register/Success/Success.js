import React from "react";
import './Success.css'

const Success = (props) => {
  return (
    <div
      className="h-auto rounded m-auto mt-32 pt-9 pb-14 px-8 shadow hideMe bigDiv"
    >
      <div className="successAnimation mb-14">
        <svg
          className='checkmark'
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className='checkmarkCircle'
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className='checkmarkCheck'
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>
      <div className="text-center">
        <h1 className="text-3xl mt-2 mb-2">Success !</h1>

        <p>
          User Created Successfuly
        </p>
      </div>
    </div>
  );
};

export default Success;

