import { useEffect, useState, Suspense } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import '../css/App.css';
import WeatherInfo from './WeatherInfo';


function App() {
  return (
    <div className="App">
        <div className='header'>
              <select className="header_select">
                <option value="header_select_seoul">서울</option>
                <option value="header_select_washington">워싱턴</option>
                <option value="header_select_Beijing">베이징</option>
                <option value="header_select_tokyo">도쿄</option>
              </select>
              <button className='header_search'>🔍︎</button>
        </div>
        <WeatherInfo/>
    </div>
  );
}

export default App;
