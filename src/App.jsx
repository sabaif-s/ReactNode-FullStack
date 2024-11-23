import { useState,React,useEffect,Suspense,lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
 
import LoadingImages from './components/home/developedBy';
 

const Intro =lazy(()=>import('./components/home/intro'));
// import Intro from './components/home/intro';
 

function App() {
   const [introLoaded,setIntroLoaded]=useState(false);

   function loaded(){
    setIntroLoaded(true);
   }

  return (
    <>
    {introLoaded ? (
      <Intro loaded={introLoaded} onLoad={loaded} />
    ) : (
      <Suspense fallback={<LoadingImages />}>
        <Intro onLoad={loaded} loaded={introLoaded} />
      </Suspense>
    )}
  </>
  )
}

export default App
