import React from 'react';
import {Routes,Route} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Signup-Login/Login';
import Signup from './Components/Signup-Login/Signup';
import Protected from './Components/Protected/Protected';
import Error404 from './Components/404 Error/Error404';

const App =()=>{
  return(
    <>
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/" element={<Protected><HomePage/></Protected>}></Route>
      <Route path="*" element={<Error404/>}></Route>
    </Routes>
    </>
  )
}
export default App