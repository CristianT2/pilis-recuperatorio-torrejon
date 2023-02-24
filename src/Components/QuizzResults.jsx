import { AiFillLike, AiFillDislike } from 'react-icons/ai';

const QuizzResults = (props) => {

  return (
    <>
      <div className="container mx-auto px-4 w-2/5 pt-14">
        <h2 className='font-bold text-3xl mb-7'>GAME OVER</h2>
        <h3 className='font-bold text-lg text-start py-2'>Final Score: </h3>
        <h3 className='font-semibold text-lg text-start py-2'>Score: {props.score} of {props.quizz} questions.</h3>
        <h3 className='font-semibold text-lg text-start py-2'>Difficult: {props.difficult}</h3>
        <h3 className='font-semibold text-lg text-start py-2'>Category: {props.category}</h3>
        <div className='font-medium text-3xl my-3'>
          <button className='m-2 text-zinc-600'><AiFillDislike /></button>
          <button className='m-2 text-sky-600'><AiFillLike /></button>
        </div>
      </div>
      <div>
        <button onClick={props.handleExitGame} className='className="mx-auto bg-red-700 hover:bg-red-800 rounded-full p-2 px-5 text-xl font-medium text-white m-4'>Exit Game</button>
        <button onClick={props.handlePlayAgain} className='className="mx-auto bg-green-600 hover:bg-green-700 rounded-full p-2 px-5 text-xl font-medium text-white m-4'>New Game</button>
      </div>
    </>
  )
}

export default QuizzResults;