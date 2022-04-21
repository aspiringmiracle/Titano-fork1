import React from "react";

const ButtonApp = ({ children, addClass }) => {
  return (
    <button
      className={ +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonApp;
