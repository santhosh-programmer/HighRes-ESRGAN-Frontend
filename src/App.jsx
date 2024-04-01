import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './app.css'
import HomePage from './pages/home/HomePage';
import Historypage from './pages/history/HistoryPage';
import ImageComponent from './pages/history/components/ImageComponent';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/history' element={<Historypage/>}/>
          <Route path='/view-image/:category/:imgurl' element={<ImageComponent/>}/>
          <Route path='*' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App