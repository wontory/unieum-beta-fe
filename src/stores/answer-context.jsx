import React, { useState } from "react";

const AnswerContext = React.createContext({ answers: {} });

export const AnswerContextProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});

  const handleSaveAnswer = (answerKey, answer) => {
    setAnswers((prevAnswers) => {
      return { ...prevAnswers, [answerKey]: answer };
    });
    console.log(answers);
  };

  return (
    <AnswerContext.Provider
      value={{
        answers: answers,
        onSaveAnswer: handleSaveAnswer,
      }}
    >
      {children}
    </AnswerContext.Provider>
  );
};

export default AnswerContext;
