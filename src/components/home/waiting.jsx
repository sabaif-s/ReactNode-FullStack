import React from 'react';
import { useEffect,useState } from 'react';
import percent75 from '../../assets/images/75.png';
import percent25 from '../../assets/images/25.png';
import percent100 from '../../assets/images/100.png';
import backImage from '../../assets/images/92990.jpg';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import CreatedCard from './createdCard';
const  Waiting = ({userId}) => {
    const [animateIn25,setAnimateIn25]=useState(false);
    const [animateInGenerating,setAnimateInGenerating]=useState(false);
    const [animateRotateGenerating,setAnimateGenerating]=useState(false);
    const [animateOut25,setAnimateOut25]=useState(false);
    const [animateIn75,setAnimateIn75]=useState(false);
    const [animateIn100,setAnimateIn100]=useState(false);
    const [animateOut75,setAnimateOut75]=useState(false);
    const [animateOut100,setAnimateOut100]=useState(false);
    const [showCreatedCard,setShowCreatedCard]=useState(false);
    const [animateOutWaiting,setAnimateOutWaiting]=useState(false);
    const [animateInBall,setAnimateInBall]=useState(false);
    const [hideWaiting,setHideWaiting]=useState(false);
    useEffect(()=>{
     setTimeout(()=>{
          setAnimateInGenerating(true);
          setTimeout(()=>{
            setAnimateInBall(true);
       },1200);
       setTimeout(()=>{
        setAnimateIn25(true);
        setTimeout(()=>{
            
          
            setAnimateOut25(true);

            setTimeout(()=>{
                setAnimateIn75(true);
                setAnimateIn25(false);
                 setTimeout(()=>{
                  setAnimateOut75(true);
                  setTimeout(()=>{
                    setAnimateIn100(true);
                    setAnimateIn75(false);
                    setTimeout(()=>{
                        setAnimateOut100(true);
                        
                        setAnimateOutWaiting(true);
                        setTimeout(()=>{
                            setShowCreatedCard(true);
                            setTimeout(()=>{
                        setHideWaiting(true);
                            },1000);
                        },1000);
                    },1200);
                  },1200);
                 },1200);
            },1200);
        },1200);
      
   },1200);


     },100);

    },[]);
    return (
        <>
        <div className='w-full h-screen relative flex justify-center items-center relative  overflow-y-hidden' >
                <img src={backImage} className={` ${animateOutWaiting ? "animate-fadeOut":""} ${hideWaiting ? "hidden":" animate-fadeIn"} w-full h-full absolute z-0`} alt="" />
                 <div className={` ${animateOutWaiting? "animate-fadeOut":""} ${hideWaiting ? "hidden":""} relative flex justify-center items-center bg-black bg-opacity-50 `}>
                 <DotLottieReact
      src="https://lottie.host/abfe0a01-0451-416e-9348-9d430fda4f41/iNTtGKCAwb.json"
      loop
      autoplay
      speed={0.5}
      className={`animate-fadeIn w-80 h-80`}
    />
               <DotLottieReact
      src="https://lottie.host/abfe0a01-0451-416e-9348-9d430fda4f41/iNTtGKCAwb.json"
      loop
      autoplay
      speed={0.5}
      className={` w-40 h-40`}
    />
    <div className="absolute inset-0 flex items-center justify-center bg-red-300 bg-opacity-10 p-4 rounded-lg shadow-lg">
      <span className={` ${animateInGenerating ? "":"hidden"} ${animateRotateGenerating ? "animate-rotateCCW":""} ${animateInGenerating && !animateRotateGenerating ? "animate-fadeIn":""} text-2xl font-semibold text-white`}>Generating...</span>
    </div>
    <div className={` ${animateIn100 ? "bg-green-100":"" } absolute z-0 inset-0 flex items-center justify-center  p-4 rounded-lg shadow-lg `}>
        {
            animateIn25 && (
                <img src={percent25} className={` ${animateIn25 ? "animate-fadeIn":""}  w-full h-full ${animateOut25 ? "animate-fadeOut":''} `} alt="" />
            )
        }
        {
            animateIn75 && (
                <img src={percent75} className={` ${animateIn75 ? "animate-fadeIn":""} ${animateOut75 ? "animate-fadeOut":""} w-full h-full`} alt="" />
            )
        }
        {
            animateIn100 && (
                <img src={percent100} className={` ${animateIn100 ? "animate-fadeIn":""} ${animateOut100 ? "animate-fadeOut":""} w-full h-full animate-fadeIn`} alt="" />
            )
        }
       
    
    </div>
                 </div>
         
        </div>
        {
            showCreatedCard && (
                <CreatedCard userId={userId} />
            )
           }
        </>
    );
};

export default  Waiting;