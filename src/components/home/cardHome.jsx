import React from 'react';
import { useEffect,useState,useRef,useCallback } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import profileBack from '../../assets/images/profileBack.jpg';
import profileBack2 from '../../assets/images/rb_32582.png';
import profileBack3 from '../../assets/images/13514304_SL.111019.24830.39.jpg';
import profileBack4 from '../../assets/images/92990.jpg';
import backDesk from '../../assets/images/backDeskImage.jpg';
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
import ScreenSize from './screen';
import CardForShow from './cardForShow';
import FlowersCard from './flowers';
import Copy from './copy';
import LightOnOff from './lightOnOff';
 
const  CardHome = React.memo(({userData,userId}) => {
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
    const {isDesktop,isMobile,isTablet}=ScreenSize();
    const [onceSlideUp,setOnceSlideUp]=useState(false);

    const [showIntroCard,setShowIntroCard]=useState(true);
    // const lightData=useSelector((state)=>{
    //     return state.light;
    // });
//  console.log(lightData);
//     useEffect(()=>{
//        if(lightData != ""){
//         console.log("light data:",lightData);
//        }
//     },[lightData]);
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
            console.log("userID :",userId);
           }
           else if (userIdPar != ""){
            console.log("users id : ",userIdPar);
            setUsersId(userIdPar);
           }
           console.log(userIdPar,userId);
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
            setOnceSlideUp(true);
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

     function showFunction () {
        setShowIntroCard(false);
        console.log("show function");
    };
    return (
         <>
         {
            !showIntroCard && (
                <div className={` ${showCopy ? "hidden":""} ${animateOutCard ? "animate-fadeOut":"animate-fadeIn"} ${isMobile ? "":""} w-full h-screen absolute overflow-hidden`} >
                <img src={
                    isMobile ? 
                    profileBack4:backDesk
                    
                    } className={` ${animateInBack ? "animate-fadeIn":"hidden"} w-full h-full absolute z-10`} alt="" />
                 <div className={` ${isMobile ? "":"p-40"} inset-y-24 inset-x-10  absolute z-50 flex flex-col justify-start pt-10 items-center  `} >
                            <div className='w-full h-60 relative flex justify-center items-center' >
                              <img src={profileBack} className={` ${animateOutBack ? "animate-fadeOut":""} ${animateInProfileBack && !onceSlideUp ? "animate-fadeIn":'hidden'} ${isMobile ? "w-full":"w-80"} h-full absolute z-10`} alt="" />
                              <img src={imageUrl} className={` ${animateOutBack ? "animate-fadeOut":""} w-28 h-28 z-20 absolute top-12 rounded-full ${animateInProfileImage && !onceSlideUp ? "animate-fadeIn":"hidden"} `} alt="" />
                            </div>
                            <div className={`${isMobile ? "w-full":"w-80"} absolute h-10 z-10  top-0 flex justify-center items-center ${animateOutBack ? "animate-fadeOut":""} `} >
                                      <img src={welcome} className='w-full h-full' alt="" />
                            </div>
                            <div
                            onClick={()=>{
                                if(animateRotateGift || animateRotateClick){
                                    audioRef.current.play();
                                }
                               
                            }}
                            className={` ${animateOutBack ? "animate-fadeOut":""} ${animateRotateGift ? "animate-fadeIn":""} w-full h-80  flex justify-center items-center relative cursor-pointer`} >
                                <img src={gift} className={` ${animateInGift  ? "animate-fadeIn":""} ${animateRotateGift && !onceSlideUp ? "animate-rotateCW":"hidden"} w-60 h-60 rounded-full`} alt="" />
                                <img src={click} className={`${isMobile ? "w-full":"w-80"} h-20 absolute z-10 ${animateRotateClick && !onceSlideUp ? "animate-rotateCCW":"hidden"} `} alt="" />
                            </div>
                            <div className={`inset-0 absolute z-20 flex justify-center items-start ${animateOutBack ? "":"hidden"} `} >
                                <div className={`${isMobile ? "hidden":"w-1/3 h-3/4 absolute opacity-50"}`} >
                                    <img src={profileBack4} className={`w-full h-full ${animateOutBack ? "animate-slideUpToCurrentSlow":""}`} alt="" />
                                </div>
                            <span className={` ${animateOutBack && !onceSlideUp ? "animate-slideUpToCurrentSlow":""} ${isMobile ? "h-full":"bg-black bg-opacity-50 w-1/3 h-3/4 overflow-y-scroll"} word-break  text-blue-600 font-bold p-6 text-xl`}>
                                   {description}
    </span>
                            </div>
                 </div>
                 {
                    !isMobile && (
                        <FlowersCard image={imageUrl} />
                    )
                 }
                
             </div> 
            )
         }
         {
            showIntroCard && (
                <LightOnOff  showFunctions={showFunction} />
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
                        if(userIdPar != undefined){
                            setAnimateOutCard(false);
                        }
                        else{
                            setAnimateOutCard(true);
                        }
                    
                      setTimeout(()=>{
                        if(userIdPar != undefined){
                            setShowCopy(false);
                        }
                        else{
                            setShowCopy(true);
                        }
                      
                     
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
});

export default  CardHome;