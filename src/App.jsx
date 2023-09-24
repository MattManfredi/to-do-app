import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';
import ToDoPage from './Pages/ToDoPage';

function App() {
  
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/todo' element={<ToDoPage/>} />
      </Routes>
    </Router>
  )
}

export default App
