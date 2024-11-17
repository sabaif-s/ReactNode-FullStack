import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux'
import store  from './store/store.js';
import './index.css';
import App from './App.jsx';
import CreatedCard from './components/home/createdCard.jsx';
import Copy from './components/home/copy.jsx';
import Waiting from './components/home/waiting.jsx';
import CardHome from './components/home/cardHome.jsx';
// const basename = '/ReactNode-FullStack';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <Router>
      <Routes>
        <Route path="/ReactNode-FullStack/" element={<App />} />
        <Route path='/ReactNode-FullStack/card' element={<CreatedCard/>} ></Route>
        <Route path='/ReactNode-FullStack/waiting' element={<Waiting/>} ></Route>
        <Route path='/ReactNode-FullStack/copy' element={<Copy/>} ></Route>
        <Route path='/ReactNode-FullStack/watch/:userIdPar' element={<CardHome  userId={""}userData={[]} />} ></Route>
      </Routes>
    </Router>
    </Provider>
  </StrictMode>
);