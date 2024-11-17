import React from 'react';
import { useEffect,useState,useRef } from 'react';
import bulbLight from '../../assets/images/bulbLight.jpg';
import bulbDim from '../../assets/images/bulbDim.png';
import bulbLight2 from '../../assets/images/ bulb light2.jpg';
import bulbLight3 from '../../assets/images/bulb light23.jpg';
import bulbLight4 from '../../assets/images/bulbLight3.png';
import bulbLight5Left from '../../assets/images/bulbLight5Left.jpg';
import bulbLight5Center from '../../assets/images/bulbLight52.jpg';
import bulbLight5Right from '../../assets/images/bulbLight.jpg';
import imageBack from '../../assets/images/imageBack.jpg';
import flowers from '../../assets/images/flowers1.jpg';
import backImageBackGround from '../../assets/images/92990.jpg';
import bulbSound from '../../assets/audio/light-switch-156813.mp3';
import bulbShake from '../../assets/audio/light-bulb-shaking-30940.mp3';
import shakeBulb from '../../assets/images/shakeBulbBack.jpg';
const  LightOnOff = () => {
    const [animateInTopLight,setAnimateInTopLight]=useState(false);
    const [animateInBottomLight,setAnimateInBottomLight]=useState(false);
    const [animateLightBackTop,setAnimateLightBackTop]=useState(false);
    const [animateLightBackBottom,setAnimateLightBackBottom]=useState(false);
    const audioRef=useRef(null);
    const audioRef2=useRef(null);
    useEffect(()=>{

    },[]);
          const images=[bulbLight,bulbDim,bulbLight2,bulbLight4,imageBack,flowers];
    return (
        <>
        <div className={`w-full h-screen  relative ` } >
                    <img src={backImageBackGround} className={` ${animateInTopLight ? "opacity-50":"opacity-100"} absolute w-full h-full z-10`} alt="" />
                    <div className='w-full h-full absolute flex justify-center items-center' >
                    <img
                    onClick={()=>{
                        setTimeout(()=>{
                           audioRef.current.play();
                           setTimeout(()=>{
                             setAnimateInTopLight(true);
                             setTimeout(()=>{
                                audioRef.current.currentTime=0;
                                audioRef.current.play();
                                setTimeout(()=>{
                                    setAnimateInBottomLight(true);
                                    setTimeout(()=>{
                                      audioRef.current.currentTime=0;
                                      audioRef.current.play();
                                      setTimeout(()=>{
                                         audioRef2.current.play();
                                      },1000);
                                    },1500);
                                   },1500);
                             },1500);
                           },1500);
                        },100);
                    }}
                    src={bulbDim} className={`${animateInTopLight ? "animate-fadeOut":"animate-bounce"} w-40 h-40 z-20 cursor-pointer`} alt="" />
                    </div>
                    <div className={`${animateInTopLight ? "animate-fadeIn":"opacity-0"} w-full h-1/2 absolute z-10 flex justify-start items-center`} >
                         <img src={bulbLight3} className='w-full h-full ' alt="" />
                         {/* <img src={bulbLight2} className='w-full h-40' alt="" /> */}
                    </div>
                    <div className={`w-full ${animateInBottomLight ? "animate-fadeIn":"opacity-0"} h-1/2 absolute z-10 bottom-0 z-0 flex justify-start items-center`} >
                         <img src={bulbLight5Left} className='w-1/3 h-full animate-shakeSlow z-10' alt="" />
                         <img src={bulbLight5Center} className='w-1/3 h-full z-10 animate-shakeSlowLeft' alt="" />
                         <img src={bulbLight5Right} className='w-1/3 h-full animate-shakeSlow z-10' alt="" />
                         <img src={shakeBulb} className='w-full h-full absolute z-0' alt="" />
                         {/* <img src={bulbLight4} className='w-full h-40' alt="" /> */}
                    </div>
                     
        </div>
      {
        images.map((item,index)=>{
            return (
                <div key={index
                } >
                <img src={item} alt="" />
                </div>
            )
        })
      }
      <audio src={bulbSound}ref={audioRef} ></audio>
      <audio src={bulbShake}ref={audioRef2} ></audio>
      </>
    );
};

export default  LightOnOff;