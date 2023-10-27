import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';
import ToDoPage from './Pages/ToDoPage';
import NotFound from './Pages/NotFound';
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
        <Route path="*" element={<NotFound />} />
          {login && <Route path='/todo' element={<ToDoPage userId={user.userId} login={login}/>} />}
          {!login && (
            <>
            <Route path='/login' element={<LogIn setLogin={setLogin} setUser={setUser} login={login}/>} />
            <Route path='/register' element={<Register/>} />
            </>
          )}
          
          
        </Routes>
    </Router>
    </div>
  )
}

export default App
