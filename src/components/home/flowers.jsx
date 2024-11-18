import React from 'react';
import { useEffect,useState } from 'react';
import flowers1 from '../../assets/images/flowers1.jpg';
import flowers2 from '../../assets/images/flowers2.jpg';
import flowers3 from '../../assets/images/flowers3.png';
import flowersTopRight from '../../assets/images/flowers3TopRight.png';
import flowersTopLeft from '../../assets/images/flowers3TopRight.png';
import flowersBottomRight from '../../assets/images/flowersBottomRight.png';
import flowersBottomLeft from '../../assets/images/flowers3LeftBottom.png';
import ScreenSize from './screen';
import Sabk from '../../assets/images/sabk.jpeg';
const  FlowersCard = ({image}) => {
           const [fadeInImage,setFadeInImage]=useState(false);
           const {isDesktop,isDesktopLarge}=ScreenSize();
    useEffect(()=>{
         setTimeout(()=>{
             setFadeInImage(true);
         },2500);
    },[]);
    return (
        <div className='w-full h-screen absolute  flex justify-start items-center z-30 overflow-y-hidden overflow-x-hidden' >
               <div className={`${isDesktop ? "w-2/3":""} ${isDesktopLarge ? "w-1/3":""} h-full flex flex-col justify-center items-center`} >
                   <img src={flowers1} className='w-full h-1/2 animate-slideUpToCurrent ' alt="" />
                   <img src={flowers1} className='w-full h-1/2 ' alt="" />
               </div>
               <div className='w-full h-full opacity-0'>

               </div>
               <div className={` w-2/3 h-full flex flex-col justify-end items-center relative`}>
                   <img src={flowers2} className='w-full h-full absolute z-10 animate-fadeIn' alt="" />
                   
                   <div className='w-full h-1/2 mb-10 relative flex justify-center items-center'>
                   <img src={flowers3} className='w-full h-full opacity-50 absolute z-30 ' alt="" />
                   <div className='absolute h-full w-full bottom-0 z-40 flex flex-col'>
                         <div className='w-full flex justify-center items-center h-1/2  '>
                               <img src={flowersTopLeft} className='w-1/2 h-full border-0 animate-slideBR' alt="" />
                               <img src={flowersTopRight} className='w-1/2 h-full border-0 animate-slideBL' alt="" />
                         </div>
                         
                         <div className='w-full flex justify-center items-center h-1/2 '>
                               <img src={flowersBottomLeft} className='w-1/2 h-full border-0 animate-slideTR' alt="" />
                               <img src={flowersBottomRight} className='w-1/2 h-full border-0 animate-slideTL' alt="" />
                         </div>
                   </div>
                   <div className={` ${fadeInImage ? "animate-fadeIn":"opacity-0"} absolute w-48 h-48 z-40`}>
                     <img src={image} className='w-full h-full rounded-full' alt="" />
                   </div>
                   </div>
                
                
               </div>
        </div>
    );
};

export default  FlowersCard;