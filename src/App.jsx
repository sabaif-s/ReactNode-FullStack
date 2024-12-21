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
   useEffect(()=>{
     console.log("App Started");
     console.log("App Loaded");
   },[]);

  return (
    <>
    <div className={`${introLoaded ? "animate-fadeIn":""} w-full`} >

   
    {introLoaded ? (
      <Intro key={2} loaded={introLoaded} onLoad={loaded}  LoadingImages={LoadingImages} />
    ) : (
      <Suspense fallback={<LoadingImages reRender={false} key={1} />}>
        <Intro key={1} onLoad={loaded} loaded={introLoaded} />
      </Suspense>
    )}
     </div>
  </>
  )
}

export default App
