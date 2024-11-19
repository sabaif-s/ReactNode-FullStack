import { StrictMode } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux'
import store  from './store/store.js';
import './index.css';
import App from './App.jsx';
import CreatedCard from './components/home/createdCard.jsx';
import Copy from './components/home/copy.jsx';
import Waiting from './components/home/waiting.jsx';
import CardHome from './components/home/cardHome.jsx';
import CardForShow from './components/home/cardForShow.jsx';
import FlowersCard from './components/home/flowers.jsx';
import OpenBookAnimation from './components/home/openBookAnimation.jsx';
const basename = '/ReactNode-FullStack';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <Router >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/card' element={<CreatedCard/>} ></Route>
        <Route path='/waiting' element={<Waiting/>} ></Route>
        <Route path='/copy' element={<Copy/>} ></Route>
        <Route path='/watch/:userIdPar' element={<CardHome  userId={""}userData={[]} />} ></Route>
        <Route path='/cardForShow' element={<CardForShow/>} ></Route>
        <Route path='/flowers' element={<FlowersCard/>} ></Route>
        <Route path='/openBookAnimation' element={<OpenBookAnimation/>} ></Route>
      </Routes>
    </Router>
    </Provider>
  </StrictMode>
);