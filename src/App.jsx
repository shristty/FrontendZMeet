import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Landing from "./pages/Landing.jsx";
import Authentication from "./pages/authentication.jsx";
import {AuthProvider} from "./contexts/AuthContext";

import Home from "./pages/Home.jsx";
import VideoMeet from "./pages/VideoMeet.jsx";
import History from "./pages/History.jsx";
function App() { 
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
     <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
     <Route path="/auth" element={<Authentication/>}/>
     <Route path="/history" element={<History/>}/>
      <Route path="/:url" element={<VideoMeet/>}/>
      </Routes>
      </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
