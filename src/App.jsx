import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EnterName from './component/EnterName';
import Question from './component/Question';
import LoveLetter from './component/LoveLetter';
import Password from './component/Password';
import Game from './component/Game';
import Album from './component/Album';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EnterName />} />
        <Route path='/password' element={<Password />} />
        <Route path='/question' element={<Question />} />
        <Route path='/game' element={<Game />} />
        <Route path='/album' element={<Album />} />
        <Route path='/love-letter' element={<LoveLetter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App