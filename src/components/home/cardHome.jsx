import React from 'react';
import { useEffect,useState,useRef,useCallback } from 'react';
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
import { useParams } from 'react-router-dom';
import ReceiveBackEndData from '../../hooks/receiveBackEndData';
import CardForShow from './cardForShow';
import Copy from './copy';
const  CardHome = ({userData,userId}) => {
    const images=[profileBack,profileBack2,profileBack3,profileBack4];
    const {userIdPar}=useParams();
    const {userDataShow}=ReceiveBackEndData(userIdPar,userId);
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
    const [imageUrl,setImageUrl]=useState("");
    const ApiUrl=import.meta.env.VITE_API_URL;
    const backendUrl=`${ApiUrl}/image/`;
    const [showCopy,setShowCopy]=useState(false);
    const [description,setDescription]=useState("");
    const [animateOutCard,setAnimateOutCard]=useState(false);
    const [usersId,setUsersId]=useState("");

    const [showIntroCard,setShowIntroCard]=useState(true);
    useEffect(()=>{
      
       
        setTimeout(()=>{
            setAnimateInBack(true);
    },1000);
       
    },[]);
    useEffect(()=>{
        if(userData.length > 0){
            const selectedMusic=userData[0][0].selectedMusic;
            setAudioMusic(audios[selectedMusic - 1]);
            const profile=`${backendUrl}${userData[0][0].profileImage}`;
            console.log(profile);
            setImageUrl(profile);
            setDescription(userData[0][0].description);
        }
         
    },[userData]);
    useEffect(()=>{
           if(userId != ""){
            setUsersId(userId);
           }
           else if (userIdPar != ""){
            setUsersId(userIdPar);
           }
    },[userIdPar,userId]);
    useEffect(()=>{
        if(userDataShow.length > 0){
            const selectedMusic=userDataShow[0][0].selectedMusic;
            setAudioMusic(audios[selectedMusic - 1]);
            const profile=`${backendUrl}${userDataShow[0][0].profileImage}`;
            console.log(profile);
            setImageUrl(profile);
            setDescription(userDataShow[0][0].description);
        }
         
    },[userDataShow]);
    useEffect(()=>{
        if(animateInBack){
            setTimeout(()=>{
                setAnimateInProfileBack(true);
            },2000)
        }
    },[animateInBack]);
    useEffect(()=>{
        if(showCopy){
            setTimeout(()=>{
                setShowCopy(false);
                setAnimateOutCard(false);
                setTimeout(()=>{
                       setAnimateOutCard(true);
                       setTimeout(()=>{
                            setShowCopy(true);
                       },1500);
                },20000);
               },5000);
        }
    },[showCopy]);
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

        const showFunction=useCallback(()=>{
                     setShowIntroCard(false);
        });
    return (
         <>
         {
            !showIntroCard && (
                <div className={` ${showCopy ? "hidden":""} ${animateOutCard ? "animate-fadeOut":"animate-fadeIn"} w-full h-screen absolute `} >
                <img src={profileBack4} className={` ${animateInBack ? "animate-fadeIn":"hidden"} w-full h-full absolute z-10`} alt="" />
                 <div className={` inset-y-24 inset-x-10  absolute z-50 flex flex-col justify-start pt-10 items-center  `} >
                            <div className='w-full h-60 relative flex justify-center items-center' >
                              <img src={profileBack} className={` ${animateOutBack ? "animate-fadeOut":""} ${animateInProfileBack ? "animate-fadeIn":'hidden'} w-full h-full absolute z-10`} alt="" />
                              <img src={imageUrl} className={` ${animateOutBack ? "animate-fadeOut":""} w-28 h-28 z-20 absolute top-12 rounded-full ${animateInProfileImage ? "animate-fadeIn":"hidden"} `} alt="" />
                            </div>
                            <div className={`w-full absolute h-10 z-10  top-0 flex justify-center items-center ${animateOutBack ? "animate-fadeOut":""} `} >
                                      <img src={welcome} className='w-full h-full' alt="" />
                            </div>
                            <div
                            onClick={()=>{
                                if(animateRotateGift || animateRotateClick){
                                    audioRef.current.play();
                                }
                               
                            }}
                            className={` ${animateOutBack ? "animate-fadeOut":""} ${animateRotateGift ? "animate-fadeIn":""} w-full h-80  flex justify-center items-center relative cursor-pointer`} >
                                <img src={gift} className={` ${animateInGift ? "animate-fadeIn":""} ${animateRotateGift ? "animate-rotateCW":"hidden"} w-60 h-60 rounded-full`} alt="" />
                                <img src={click} className={`w-full h-20 absolute z-10 ${animateRotateClick ? "animate-rotateCCW":"hidden"} `} alt="" />
                            </div>
                            <div className={`inset-0 absolute z-20 flex justify-center items-start ${animateOutBack ? "":"hidden"} `} >
                            <span className={` ${animateOutBack ? "animate-slideUpToCurrentSlow":""} word-break h-full  text-blue-600 font-bold p-6 text-xl`}>
                                   {description}
    </span>
                            </div>
                 </div>
             </div> 
            )
         }
         {
            showIntroCard && (
                <CardForShow  showFunction={showFunction} />
            )
         }
           
             {
                showCopy && (
                    <Copy userId={usersId} userIdPar={userIdPar} />
                )
             }
                   <audio
                   onPlay={()=>{
                    setAnimateOutBack(true);
                    setTimeout(()=>{
                      setAnimateOutCard(true);
                      setTimeout(()=>{
                      setShowCopy(true);
                     
                      },2500);
                    },20000);
                    
                   }}
                   onEnded={()=>{
                    audioRef.current.currentTime=0;
                    audioRef.current.play();
                   }}
                   src={audioMusic} ref={audioRef} ></audio>
 
         </>
    );
};

export default  CardHome;