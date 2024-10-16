
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './layout/NavBar';
import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser.js';
import EditUser from './users/EditUser.js';
import ViewUser from './users/ViewUser.js';


function App() {
  return (

    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="adduser" element={<AddUser/>}/>
        <Route exact path='edituser/:id' element={<EditUser/>}/>
        <Route exact path='viewuser/:id' element={<ViewUser/>}/>
      </Routes>

      </Router>

 
    </div>
  );
}

export default App;
