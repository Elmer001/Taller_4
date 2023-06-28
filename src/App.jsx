import './App.css'
import UserPlaylist from '../src/components/UserPlaylist'
import AllSongs from './components/AllSongs'
import Mysongs from './components/Mysongs'
import Login from './components/Login'
import SetPassword from './components/SetPassword'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>

    <Route path="/allSongs" element={<AllSongs/>} />
    <Route path="/userPlaylist" element={<UserPlaylist/>} />
    <Route path="/Mysongs" element={<Mysongs/>} />
    <Route path="/" element={<Login/>} />
    <Route path="/setPassword" element={<SetPassword/>} />


    </Routes>
    
    </BrowserRouter>
   </div>
  )
}

export default App
