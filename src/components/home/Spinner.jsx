import React, { useEffect, useState } from 'react';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
 
import smallBackMobile from '../../assets/images/92990small.jpg';
import smallBackDesk from '../../assets/images/backDeskImageSmall.jpg';
import ScreenSize from './screen';
export default function Spinner() {
    const [deviceMobile,setDevice]=useState(false);
    const [imageUrl,setImageUrl]=useState(null);
    const [readyShow,setReadyShow]=useState(false);
    const [backDesk,setBackDesk]=useState(null);
    const [backMobile,setBackMobile]=useState(null);
    const {isMobile}=ScreenSize();
    useEffect(()=>{
         function setImageMobile(){
          
            setImageUrl(backMobile);
         }
         function setImageDesk(){
          setImageUrl(backDesk);
         }
         if(isMobile && backMobile != null){
          setImageMobile();
         }
         if(!isMobile && backDesk != null){
          setImageDesk();
         }
      
    },[isMobile,backMobile,backDesk]);
    useEffect(() => {
      const loadImages = async () => {
        const mobileImage = await import('../../assets/images/92990.jpg');
        const deskImage = await import('../../assets/images/bookCover.jpg');
        setBackMobile(mobileImage.default);
        setBackDesk(deskImage.default);
      };
    
      loadImages();
    }, [isMobile]);
    function handleImageLoaded(){
        setReadyShow(true);
        
        console.log("image loaded");
    }
    useEffect(()=>{
              console.log("spinner loaded");
    },[]);
    
  return (
   
    <div className={`w-full h-screen flex justify-center items-center relative ${true ? "animate-fade-in":"hidden"} `}>
      <div className={` ${readyShow ? "hidden":""} w-full h-full absolute z-20`} >
               <img 
              
               src={smallBackMobile} className='w-full h-full absolute' alt="" />
      </div>
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