import { useEffect, useState, Suspense } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import '../css/App.css';
import WeatherInfo from './weatherInfo';


function App() {


  return (
    <div className="App">
        <WeatherInfo/>
    </div>
  );
}

export default App;
