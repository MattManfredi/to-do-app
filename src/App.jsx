import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';
import ToDoPage from './Pages/ToDoPage';
import { useState } from 'react';

function App() {
  const [login,setLogin] = useState(false);
  const [user,setUser] = useState({});
  return (
    <div className='font-montserrat'>
    <Router>
      <header>
        <NavBar login={login} setLogin={setLogin} setUser={setUser}></NavBar>
      </header>
        <Routes>
          <Route path='/' element={<Home login={login} userName={user.name} userLastName={user.lastName}/>} />
          <Route path='/login' element={<LogIn setLogin={setLogin} setUser={setUser} login={login}/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/todo' element={<ToDoPage userId={user.userId} login={login}/>} />
        </Routes>
    </Router>
    </div>
  )
}

export default App
