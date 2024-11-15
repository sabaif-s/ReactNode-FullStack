import React from 'react';
import { useEffect,useState,useRef } from 'react';
import profileBack from '../../assets/images/profileBack.jpg';
import profileBack2 from '../../assets/images/rb_32582.png';
import profileBack3 from '../../assets/images/13514304_SL.111019.24830.39.jpg';
import profileBack4 from '../../assets/images/92990.jpg';
import sabk from '../../assets/images/sabk.jpeg';
import welcome from '../../assets/images/welcome.png';
import gift from '../../assets/images/18203 (1).jpg';
import click from '../../assets/images/click.png';
import firstMusic from '../../assets/audio/englishMusic.m4a';
import secondMusic from '../../assets/audio/henok abebe.m4a';
import thirdMusic from '../../assets/audio/oromicMusic.m4a';
import fourthMusic from '../../assets/audio/samiBerhane.m4a';
const  CardHome = ({userData}) => {
    const images=[profileBack,profileBack2,profileBack3,profileBack4];
    const [animateInBack,setAnimateInBack]=useState(false);
    const [animateOutBack,setAnimateOutBack]=useState(false); 
    const [animateInProfileBack,setAnimateInProfileBack]=useState(false);
    const [animateInProfileImage,setAnimateInProfileImage]=useState(false);
    const [animateInGift,setAnimateInGift]=useState(false);
    const [animateRotateGift,setAnimateRotateGift]=useState(false);
    const [animateRotateClick,setAnimateRotateClick]=useState(false);

    const audioRef=useRef(null);
    const [audioMusic,setAudioMusic]=useState(null);
    const audios=[firstMusic,secondMusic,thirdMusic,fourthMusic];
    useEffect(()=>{
       setTimeout(()=>{
               setAnimateInBack(true);
       },1000);
    },[]);
    useEffect(()=>{
        if(userData.length > 0){
            const selectedMusic=userData[0].data[0].selectedMusic;
            setAudioMusic(audios[selectedMusic - 1]);
        }
         
    },[userData]);
    useEffect(()=>{
        if(animateInBack){
            setTimeout(()=>{
                setAnimateInProfileBack(true);
            },2000)
        }
    },[animateInBack]);
    useEffect(()=>{
     if(animateInProfileBack){
        setTimeout(()=>{
            setAnimateInProfileImage(true);
        },2000);
        
     }
    },[animateInProfileBack]);
    useEffect(()=>{
       if(animateInProfileImage){
        setTimeout(()=>{
            setAnimateInGift(true);
        },2000);
       
       }
    },[animateInProfileImage]);
    useEffect(()=>{
        if(animateInGift){
            setTimeout(()=>{
                setAnimateRotateGift(true);
                setAnimateInGift(false);
            },2000);
         
        }
     },[animateInGift]);
     useEffect(()=>{
        if(animateRotateGift){
            setTimeout(()=>{
                setAnimateRotateClick(true);
                setAnimateRotateGift(false);
            },3000);
         
        }
     },[animateRotateGift]);
     useEffect(()=>{
        if(animateRotateClick){
            setTimeout(()=>{
                setAnimateRotateClick(false);
                setAnimateRotateGift(true);
                
                
        },10000);
        }
           
     },[animateRotateClick])


    return (
         <>
             <div className='w-full h-screen relative animate-fadeIn' >
                <img src={profileBack4} className={` ${animateInBack ? "animate-fadeIn":"hidden"} w-full h-full absolute z-10`} alt="" />
                 <div className={`inset-y-24 inset-x-10  absolute z-20 flex flex-col justify-start pt-10 items-center  `} >
                            <div className='w-full h-60 relative flex justify-center items-center' >
                              <img src={profileBack} className={` ${animateOutBack ? "animate-fadeOut":""} ${animateInProfileBack ? "animate-fadeIn":'hidden'} w-full h-full absolute z-10`} alt="" />
                              <img src={sabk} className={` ${animateOutBack ? "animate-fadeOut":""} w-20 h-20 z-20 absolute top-16 rounded-full ${animateInProfileImage ? "animate-fadeIn":"hidden"} `} alt="" />
                            </div>
                            <div className={`w-full absolute h-10 z-10  top-0 flex justify-center items-center ${animateOutBack ? "animate-fadeOut":""} `} >
                                      <img src={welcome} className='w-full h-full' alt="" />
                            </div>
                            <div
                            onClick={()=>{
                                audioRef.current.play();
                            }}
                            className={` ${animateOutBack ? "animate-fadeOut":""} ${animateRotateGift ? "animate-fadeIn":""} w-full h-80  flex justify-center items-center relative cursor-pointer`} >
                                <img src={gift} className={` ${animateInGift ? "animate-fadeIn":""} ${animateRotateGift ? "animate-rotateCW":"hidden"} w-60 h-60 rounded-full`} alt="" />
                                <img src={click} className={`w-full h-20 absolute z-10 ${animateRotateClick ? "animate-rotateCCW":"hidden"} `} alt="" />
                            </div>
                            <div className={`inset-0 absolute z-20 flex justify-center items-start ${animateOutBack ? "":"hidden"} `} >
                            <span className={` ${animateOutBack ? "animate-slideUpToCurrentSlow":""} word-break h-full  text-blue-600 font-bold p-6 text-xl`}>
      HELLOO SEBAIF MUHAMMED UMER ADEM SHEKA HARBEE
    </span>
                            </div>
                 </div>
             </div>
                   <audio
                   onPlay={()=>{
                    setAnimateOutBack(true);
                   }}
                   src={audioMusic} ref={audioRef} ></audio>

         {/* {
            images.map((item,index)=>{
return (
    <div key={index} >
        <img src={item} alt="" />
    </div>
)
            })
         } */}
         </>
    );
};

export default  CardHome;