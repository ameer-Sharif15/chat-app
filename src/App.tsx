import './App.css'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom";
import Sign from './home/Sign'
import './index.css'

const App = () => {
  return (
   <div className="">
    <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/home" element={<Home />} />
      </Routes>
   </div>
  )
}

export default App
