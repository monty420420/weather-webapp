import { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import '../css/App.css';

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
              <button className='header_search'></button>
        </div>
        <div className='contents'>
          <div className='contents_info'>
             <div className='contents_info_temperature'></div>
             <div className='contents_info_text'>맑음</div>
          </div>
          <div className='contents_img'></div>
        </div>
    </div>
  );
}

export default App;
