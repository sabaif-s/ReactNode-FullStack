import React, { useEffect, useState } from 'react';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import backMobile from '../../assets/images/15365514_5540142.jpg';
import backDesk from '../../assets/images/100.png';
import ScreenSize from './screen';
export default function Spinner() {
    const [deviceMobile,setDevice]=useState(false);
    const [imageUrl,setImageUrl]=useState(null);
    const [readyShow,setReadyShow]=useState(false);
    const {isMobile}=ScreenSize();
    useEffect(()=>{
         
       if(isMobile){
        setImageUrl(backMobile);
       }
       else {
        setImageUrl(backDesk);
       }
    },[isMobile])
    function handleImageLoaded(){
        setReadyShow(true);
        console.log("image loaded");
    }
    
  return (
   
    <div className={`w-full h-screen flex justify-center items-center relative ${readyShow ? "animate-fade-in":"hidden"} `}>
        {
                isMobile && (
                    <img
                    onLoad={handleImageLoaded}
                    src={imageUrl} className='w-full h-full absolute' alt="" />
                )
        }
        {
               !isMobile && (
                <img 
                onLoad={handleImageLoaded}
                src={imageUrl} className='w-full h-full absolute' alt="" />
            )
        }
     
      <div
        className="inline-block h-8 w-8 animate-[spinner-grow_1.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-primary opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>
      <div
        className="inline-block h-8 w-8 animate-[spinner-grow_1.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-secondary opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>
      <div
        className="inline-block h-8 w-8 animate-[spinner-grow_1.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-success opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>
      <div
        className="inline-block h-8 w-8 animate-[spinner-grow_1.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-danger opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>
      <div
        className="inline-block h-8 w-8 animate-[spinner-grow_1.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-warning opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>
      <div
        className="inline-block h-8 w-8 animate-[spinner-grow_1.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-info opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>
      <div
        className="inline-block h-8 w-8 animate-[spinner-grow_1.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-neutral-100 opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>
    </div>
  );
}