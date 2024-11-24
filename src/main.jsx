import { StrictMode,Suspense,lazy,useEffect,useState} from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux'
import store  from './store/store.js';
import Spinner from './components/home/Spinner.jsx';
import LoadingImages from './components/home/developedBy.jsx';
import './index.css';
const App =lazy(()=>import('./App.jsx'));
// import App from './App.jsx';
 const Copy=lazy(()=> import('./components/home/copy.jsx'));
// import Copy from './components/home/copy.jsx';
// import Waiting from './components/home/waiting.jsx';
const Waiting=lazy(()=> import('./components/home/waiting.jsx'));
// import CardHome from './components/home/cardHome.jsx';
const CardHome=lazy(()=> import('./components/home/cardHome.jsx'));
const CardForShow=lazy(()=>
  import('./components/home/cardForShow.jsx')
)
const CreatedCard=lazy(()=>
  import('./components/home/createdCard.jsx')
)
// import CardForShow from './components/home/cardForShow.jsx';
// import FlowersCard from './components/home/flowers.jsx';
const FlowersCard=lazy(()=> import('./components/home/flowers.jsx'));
const OpenBookAnimation=lazy(()=> import('./components/home/openBookAnimation.jsx'));
// import OpenBookAnimation from './components/home/openBookAnimation.jsx';
const basename = '/ReactNode-FullStack';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <Router >
      <Routes>
      <Route 
  path="/" 
  element={  
    <Suspense fallback={<LoadingImages/>}>
      <App />
    </Suspense>
  } 
> </Route>
<Route path='/spinner' element={
  <Spinner/>
}>

</Route>
        <Route path='/card'element={
          <Suspense fallback={<div>Loading..</div>}>
          <CreatedCard/>
          </Suspense>
          } ></Route>
        <Route path='/waiting' element={<Waiting/>} ></Route>
        <Route path='/copy' element={<Copy/>} ></Route>
        <Route path='/watch/:userIdPar' element={  
           <Suspense fallback={<Spinner/>} >
          <CardHome  userId={""}userData={[]} /> 
          </Suspense>
          }>
          </Route>

        <Route path='/cardForShow' element={
          <Suspense fallback={<div>Loading..</div>}>
          <CardForShow/>
          </Suspense>
          } ></Route>
        <Route path='/flowers' element={<FlowersCard/>} ></Route>
        <Route path='/openBookAnimation' element={<OpenBookAnimation/>} ></Route>
      </Routes>
    </Router>
    </Provider>
  </StrictMode>
);