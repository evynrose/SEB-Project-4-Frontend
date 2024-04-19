import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Navbar from "./components/Navbar"
import ConditionsPage from "./components/ConditionsPage"
import CreateCondition from "./components/CreateCondition"
import { useEffect, useState } from 'react'; // Importing necessary modules from React
import axios from 'axios'
import Login from "./components/Login"
import Signup from "./components/Signup"
import ShowCondition from "./components/ShowCondition"
import Community from "./components/AddComments"
import { IUser } from "./interfaces/user"
import { baseUrl } from "./config"

function App() {


  const [user, setUser] = useState(null); // State for user data

  async function fetchUser() { // Function to fetch user data
    const token = localStorage.getItem('token'); // Getting token from localStorage
    const resp = await axios.get(`${baseUrl}/user`, { // Sending GET request to fetch user data
      headers: { Authorization: `Bearer ${token}` } // Attaching authorization token to request headers
    });
    console.log(resp); // Logging response data to console
    setUser(resp.data); // Setting user state with fetched data
  }

  useEffect(() => { // Effect hook to fetch user data on component mount
    const token = localStorage.getItem('token'); // Getting token from localStorage
    if (token) fetchUser(); // Fetching user data if token exists
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conditions" element={<ConditionsPage />} />
        <Route path="/createconditions" element={<CreateCondition />} />
        <Route path="/login" element={<Login fetchUser={fetchUser} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/conditions/:conditionId" element={<ShowCondition user={user} />} />
        <Route path="/posts/:conditionId" element={<Community user={user} />} />


      </Routes>
    </Router>
  )
}

export default App
