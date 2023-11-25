import React, { useState } from 'react';
import './App.css';

import {  Routes, Route } from "react-router-dom";

import PrivateRoutes from './utils/PrivateRoutes';
import Profile from './components/Profile';
import Login from './components/Login';
import InternForm from "./components/InternForm";
import OfferLetter from './components/OfferLetter';
import { AuthContext } from './contexts/AuthContext';
import Register from './components/Register';


function App() {
  
  const [user, setUser] = useState();

  return (
    <div className=''>
      <AuthContext.Provider value={{ user, setUser }}>

      {/* <InternForm />
      <OfferLetter/> */}

        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route element={<Profile/>} path='/' exact/>
            <Route element={<InternForm/>} path='/intern' exact/>
            <Route element={<OfferLetter/>} path='/offerLetter' exact/>
          </Route>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          {/* <PrivateRoutes path='/' Component={Profile} />
          <PrivateRoutes path='/intern' Component={InternForm} />
          <PrivateRoutes path='/offerletter' Component={OfferLetter}/> */}
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
