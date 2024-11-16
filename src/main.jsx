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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/card' element={<CreatedCard/>} ></Route>
        <Route path='/waiting' element={<Waiting/>} ></Route>
        <Route path='/copy' element={<Copy/>} ></Route>
      </Routes>
    </Router>
    </Provider>
  </StrictMode>
);