import { Routes, Route } from 'react-router';
import Home from './Routes/Home/Home';
import Login from './Routes/Login/Login';
import QuizzGame from './Components/QuizzGame';
import './App.css';

function App() {

  return (
    <div className="">
      <Routes>
        <Route index element={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='game' element={<QuizzGame/> } />
      </Routes>
    </div>
  )
}

export default App
