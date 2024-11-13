import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux'
import store  from './store/store.js';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
    </Provider>
  </StrictMode>
);