import { createContext, useState } from "react";

export const QuestionsContext = createContext({
  questions : [],
  setQuestions: () => {}
});

export const QuestionsContextProvider = ({children}) => {
  const [ questions, setQuestions ] = useState([]);
  const value = { questions, setQuestions};

  return <QuestionsContext.Provider value={value}>{children}</QuestionsContext.Provider>
};
