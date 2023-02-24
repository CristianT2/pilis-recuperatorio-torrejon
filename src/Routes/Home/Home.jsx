import { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { Link } from "react-router-dom";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import image1 from "../../assets/image1.png";

const Home = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const userStored = localStorage.getItem('currentUser');
    console.log({ userStored });
    if (userStored) {
      setCurrentUser(JSON.parse(userStored));
    }
  }, []);

  const handleLogOut = () => {
    setCurrentUser(null);
  };

  return (
    <div className="md:h-full">
      {currentUser ? (
        <div className="container">
          <h1 className="text-4xl p-6 font-semibold">Quizz Game</h1>
          <img src={image1} alt="image" className="container:md mx-auto w-auto" />
          <div className="justify-center my-4 space-x-5">
            <button onClick={handleLogOut} className="mx-auto bg-pink-600 hover:bg-pink-700 rounded-full">
              <div className="flex items-center p-2 px-5 text-xl font-medium text-white">
                Log Out
                <BiLogOut className="p-1 justify-center w-auto font-medium" />
              </div>
            </button>
            <button className="mx-auto bg-green-600 hover:bg-green-700 rounded-full">
              <div className="flex items-center p-2 px-5 text-xl font-medium text-white">
                <Link to='/game'>
                  Play Game
                </Link>
                <BsFillPlayCircleFill className="pl-1 justify-center w-auto font-medium" />
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div className="container">
          <h1 className="text-4xl p-6 font-semibold">Quizz App</h1>
          <img src={image1} alt="image" className="container:md mx-auto w-auto" />
          <div className="justify-center my-4 space-x-5">
            <button className="mx-auto bg-sky-400 hover:bg-sky-600 rounded-full">
              <div className="flex items-center p-2 px-5 text-xl font-medium text-white">
                <Link to='/login'>Sign in</Link>
                <BiLogIn className="p-1 justify-center w-auto font-medium" />
              </div>
            </button>
            <button disabled={true} className="mx-auto bg-green-600 bg-opacity-60 rounded-full">
              <div className="flex items-center p-2 px-5 text-xl font-medium text-white">
                Play Game
                <BsFillPlayCircleFill className="pl-1 justify-center w-auto font-medium" />
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home;