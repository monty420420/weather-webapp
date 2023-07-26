import { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
         <div className='header'>
           <div className='header_select'></div>
           <div className='header_search'></div>
         </div>
    </div>
  );
}

export default App;
