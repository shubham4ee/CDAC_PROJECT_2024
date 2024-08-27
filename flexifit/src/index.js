import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//pages
import Home from './pages/Home';
import About from './pages/About';


import GymDetails from './pages/GymDetails';
import Contact from './components/Contact';
import SignIn from './pages/signIn';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Signup from './pages/signup';
import Payment from './pages/payment';




// import { BrowserRouter } from 'react-router-dom'     // this was used in older verion of react router dom

// we import this in updated versions of react router dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// in new verion we can directly specify routs in index.js insted aod specifyig it in app,js
// other path i.e about, contact, append to '/' , index can specify home page
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />

      <Route path='signup' element={<Signup />} />
      <Route path='/gymDetails/:gym_id' element={<GymDetails />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<SignIn />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path='signup' element={<Signup />} />
      <Route path='purchase' element={<PrivateRoute><Payment /></PrivateRoute>} />



      {/* <Route path='payment' element={<Contact />} />
      <Route path='Transaction' element={<Transaction />} /> */}

    </Route >
  )
)

// commented part belong to previous verioons of router 

const root = ReactDOM.createRoot(document.getElementById('root'));     // older way of specifying routes
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    {/* <App /> */}
    {/* </BrowserRouter> */}
    <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
