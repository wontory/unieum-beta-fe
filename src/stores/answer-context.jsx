import React, { useState } from "react";

const AnswerContext = React.createContext({ answers: {} });

export const AnswerContextProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});

  const handleSaveAnswers = (answerKey, answer) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [answerKey]: answer }));
    console.log(answers);
  };

  return (
    <AnswerContext.Provider
      value={{
        answers: answers,
        onSaveAnswers: handleSaveAnswers,
      }}
    >
      {children}
    </AnswerContext.Provider>
  );
};

export default AnswerContext;
