import { useState } from "react";
import { getQuestions } from "../service";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { QuizzResults } from "./QuizzResults";

const QuizzGame = () => {

  const [listQuestion, setListQuestion] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [avance, setAvance] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  let catQuest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20];

  const onSubmit = (submit) => {
    getQuestions(submit.category, submit.limit, submit.difficult)
      .then(data => setListQuestion(data))
      .catch(err => console.log(err))
  };

  const handleNext = () => {
    const nextQuiz = currentQuiz + 1;
    if (nextQuiz < listQuestion.length) {
      setCurrentQuiz(nextQuiz);
      setAvance(avance + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleQuit = () => {
    setShowResult(true)
  }

  const handleExitGame = () => {
    navigate('/');
  }

  const handlePlayAgain = () => {
    setListQuestion([]);
    setCurrentQuiz(0)
    setAvance(1);
    setScore(0);
    setShowResult(false);
    navigate('/game');
  }

  const isCorrect = () => {
    const correctOpt = score + 1;
    setScore(correctOpt);
    handleNext();
  }

  console.log(listQuestion)

  return (
    <>
      <div className="container mx-auto pt-2">
        {
          listQuestion.length === 0 ? (
            <div className="mx-auto w-72 my-6 text-lg">
              <p className="text-2xl font-medium mb-9 ">CONFIGURE GAME</p>
              <form onSubmit={handleSubmit(onSubmit)} >
                <div className="mx-center flex justify-evenly my-6">
                  <label className="font-medium">Difficult</label>
                  <select {...register("difficult")} className=' bg-white border border-slate-400 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                {/* <select {...register("category")}>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    )
                    )}
                  </select> */}
                <div className="mx-center flex justify-evenly my-6">
                  <label className="font-medium">Category</label>
                  <select {...register("category")} className=' bg-white border border-slate-400 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'>
                    <option value="Arts_and_Literature">Arts & Literature</option>
                    <option value="Film_and_TV">Film & TV</option>
                    <option value="Food_and_Drink">Food & Drink</option>
                    <option value="General Knowledge">General Knowledge</option>
                    <option value="Geography">Geography</option>
                    <option value="History">History</option>
                    <option value="Music">Music</option>
                    <option value="Science">Science</option>
                    <option value="Society_and_Culture">Society & Culture</option>
                    <option value="Sport_and_Leisure">Sport & Leisure</option>
                  </select>
                </div>
                <div className="mx-center flex justify-evenly my-6">
                  <label className="font-medium">Number of questions</label>
                  <select {...register("limit")} className=' bg-white border border-slate-400 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'>
                    {catQuest.map((id, cQ) => (
                      <option key={cQ}>{id}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className='className="mx-auto bg-sky-500 hover:bg-sky-800 rounded-full p-2 px-5 text-xl font-medium text-white m-4'> Comenzar</button>
              </form>
            </div>
          ) : (
            (showResult == true ? (
              <QuizzResults
                score={score}
                quizz={listQuestion.length}
                difficult={listQuestion[currentQuiz].difficulty}
                category={listQuestion[currentQuiz].category}
                handleExitGame={handleExitGame}
                handlePlayAgain={handlePlayAgain}
              />
            ) : (
              <div>
                <div className="container py-9 bg-teal-100">
                  <h1 className="text-3xl font-bold mb-4">Quizz App</h1>
                  <h3 className="bg-zinc-800 text-orange-400 w-16 my-3 py-2 mx-auto text-lg font-bold">{avance} / {listQuestion.length}</h3>
                  <div className="mx-auto py-3 w-11/12">
                    <h2 className="my-3 mx-auto text-xl font-bold">
                      {listQuestion[currentQuiz].question}
                    </h2>
                    {/* <div>
                    {optionsList.map((id,opt) => (
                      <button key={opt}>{id}</button>
                    ))}
                  </div> */}
                    <div className="grid grid-rows-2 grid-flow-col w-full justify-evenly">
                      <button onClick={isCorrect} className='className="mx-auto md:w-52  m-3 p-2 bg-purple-800 hover:bg-purple-900 rounded-full text-xl font-medium text-white'>{listQuestion[currentQuiz].correctAnswer}</button>
                      {listQuestion[currentQuiz].incorrectAnswers.map((id, incAns) => (
                        <div key={incAns}>
                          <button onClick={handleNext} key={incAns} className='className="mx-auto md:w-52 m-3 p-2 bg-purple-800 hover:bg-purple-900 rounded-full text-xl font-medium text-white'>{id}</button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button onClick={handleQuit} className='className="mx-auto bg-red-700 hover:bg-red-800 rounded-full p-2 px-5 text-xl font-medium text-white m-4'>Quit Game</button>
                  {avance === listQuestion.length ? (
                    <button onClick={handleNext} className='className="mx-auto bg-green-600 hover:bg-green-700 rounded-full p-2 px-5 text-xl font-medium text-white m-4'>Finish Game</button>
                  ) : (
                    <button onClick={handleNext} className='className="mx-auto bg-amber-500 hover:bg-amber-600 rounded-full p-2 px-5 text-xl font-medium text-white m-4'>Next Answer</button>
                  )}
                </div>
              </div>
            ))
          )
        }
      </div>
    </>
  )
}

export default QuizzGame;