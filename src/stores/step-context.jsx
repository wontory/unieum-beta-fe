import React, { useState } from "react";

const StepContext = React.createContext({
  curStep: 0,
});

export const StepContextProvider = ({ children }) => {
  const [curStep, setCurStep] = useState(0);

  const handlePrevStep = () => {
    setCurStep((curStep) => curStep - 1);
  };

  const handleNextStep = () => {
    setCurStep((curStep) => curStep + 1);
  };

  return (
    <StepContext.Provider
      value={{
        curStep: curStep,
        onClickPrev: handlePrevStep,
        onClickNext: handleNextStep,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export default StepContext;
