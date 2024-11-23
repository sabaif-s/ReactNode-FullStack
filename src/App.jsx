import { useState,React,useEffect,Suspense,lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Spinner from './components/home/Spinner';
 

const Intro =lazy(()=>import('./components/home/intro'));
// import Intro from './components/home/intro';
 
 

function App() {
   

  return (
    <>
    <Suspense fallback={<Spinner/>}>
    <Intro />
    </Suspense>
   
    </>
  )
}

export default App
