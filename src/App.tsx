import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Navbar from "./components/Navbar"
import ConditionsPage from "./components/ConditionsPage"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conditions" element={<ConditionsPage />} />
      </Routes>
    </Router>
  )
}

export default App
