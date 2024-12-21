import React from 'react';
import { useEffect,useState,useMemo,useRef,Suspense,lazy} from 'react';
import AssetImages from '../../assets/assetImages';
import { useSelector,useDispatch } from 'react-redux';
import uploadImage from '../../assets/images/14666.jpg';
import uploadImageResized from '../../assets/images/resized_14666.jpg';
import birthdayCard from '../../assets/images/rb_26773.png';
import birthdayCardResize from '../../assets/images/resized_rb_26773.png';
import nextGif from '../../assets/images/next-1989_256.gif';
import pause from '../../assets/images/Pause.png';
import pauseResize from '../../assets/images/resized_Pause.png';
import play from '../../assets/images/Play.png';
import playResize from '../../assets/images/resized_Play.png';
import firstMusic from '../../assets/audio/englishMusic.m4a';
import secondMusic from '../../assets/audio/henok abebe.m4a';
import thirdMusic from '../../assets/audio/oromicMusic.m4a';
import smallBack2 from '../../assets/images/smallBack2.jpg';
import fourthMusic from '../../assets/audio/samiBerhane.m4a';
import lowQualityDesc from '../../assets/images/smallBackDesc2.jpg';
import LoadingImages from './developedBy';
import FetchData from '../../hooks/fetchData';
// const ScreenSize=lazy(()=> import('./screen'));
import ScreenSize from './screen';
const Waiting=lazy(()=> import('./waiting'));

 
import backDesk from '../../assets/images/backDeskImage.jpg';
 
import {AnimateInIntroBack,AnimateOutIntro,HideIntroBack,AnimateBallon,AnimateCenterImage,AnimateInBallon,AnimateInCentreImage} from '../../redux/intro/introAction'
import Alert from './alert';
import Spinner from './Spinner';
const  Intro = ({loaded,onLoad}) => {
  const [fetchEasyImage,setFetchEasyImage]=useState(true);
  const [fetchHardImage,setHardImage]=useState(false);
    const {AssetImage,fetchedHard}=AssetImages(fetchEasyImage,fetchHardImage);
    const [imageRendered,setImageRendered]=useState(false);
    const [animateImageRotate,setAnimateRotateImage]=useState(false);
    const [animateRotateText,setAnimateRotateText]=useState(false);
    const [animateInRotates,setAnimateInRotates]=useState(false);
    const [animateDownRotates,setAnimateDownRotates]=useState(false);
    const [hideRotates,setHideRotates]=useState(true);
    const [animateCreate,setAnimateCreate]=useState(false);
    const [showCreateComponent,setShowCreateComponent]=useState(false);
    const [inputValue,setInputValue]=useState("");
    const [showProfileUpload,setShowProfileUpload]=useState(false);
    const [atLeastOneInput,setAtLeastOneInput]=useState(false);
    const [animateUploadButton,setAnimateUploadButton]=useState(false);
    const [animateDown,setAnimateDown]=useState(false);
    const [animateUp,setAnimateUp]=useState(false);
    const [preview, setPreview] = useState(null);
    const [fadeOutNameAndImage,setFadeOutNameAndImage]=useState(false);
    const [descriptionShow,setDescriptionShow]=useState(false);
    const [descriptionValue,setDescriptionValue]=useState("");
    const [showSelectMusic,setShowSelectMusic]=useState(false);
    const [selectedMusic,setSelectedMusic]=useState(0);
    const [fadeOutDescriptionSection,setFadeOutDescriptionSection]=useState(false);
    const [fadeInSelectMusic,setFadeInSelectMusic]=useState(false);
    const [rotateBirthDayCard,setRotateBirthDayCard]=useState(false);
    const [rotateMessageBirthDay,setRotateMessageBirthDay]=useState(false);
    const firstMusicRef=useRef(null);
    const secondMusicRef=useRef(null);
    const thirdMusicRef=useRef(null);
    const fourthMusicRef=useRef(null);
    const [showCreateButton,setShowCreateButton]=useState(false);
    const [showAlert,setShowAlert]=useState(false);
    const [alertMessage,setAlertMessage]=useState("");
    const [sendData,setSendData]=useState(false);
    const [clickedCreate,setClickedCreate]=useState(0);
    const [sendDataFormData,setSendDataFormData]=useState({});
    const [fileImage,setFileImage]=useState(null);
    const [showWaiting,setShowWaiting]=useState(false);
    const [showGeneratedCard,setShowGeneratedCard]=useState(false);
    const [fadeOutIntro,setFadeOutIntro]=useState(false);
    const [uniqueIDNew,setUniqueID]=useState("");
     const {success}=FetchData(sendData,sendDataFormData,clickedCreate);
     const {isMobile,isDesktop,isTablet}=ScreenSize();
     const [hideCreateIntro,setHideCreateIntro]=useState(false);
     const [showIntro,setShowIntro]=useState(false);
     const [loadedFullyDesc,setLoadedFullyDesc]=useState(false);
     const [renderAllSelectMusic,setRenderAllSelectMusic]=useState(false);
     const [renderPauseImage,setRenderPauseImage]=useState(false);
     const [renderPlayImage,setRenderPlayImage]=useState(false);
     const [renderUploadImage,setRenderUploadImage]=useState(false);
     const [hideLowQualityBirthDayCard,setHideLowQualityBirthDayCard]=useState(false);
     const [hideLowQualityUpload,setHideLowQualityUpload]=useState(false);
     const playImageRef=useRef(null);
     const pauseImageRef=useRef(null);
     const uploadImageRef=useRef(null);
     const [loadedFirst,setLoadedFirst]=useState(0);

    const fileRef=useRef(null);

    const introDataW = useSelector((state) => state.intro);
    // If you want to memoize the selected data based on `introData`:
    const memoizedIntroData = useMemo(() => introDataW, [introDataW]);
    const audioRefCollection=["",firstMusicRef,secondMusicRef,thirdMusicRef,fourthMusicRef];
    const dispatch=useDispatch();

    // useEffect(()=>{
    //     console.log(memoizedIntroData);
    // },[memoizedIntroData]);
     useEffect(()=>{
          
           console.log("mounted first intro");
            if(!fetchHardImage){
              setFetchEasyImage(false);
              setHardImage(true);
             } 
     },[]);
     useEffect(()=>{
         console.log("LOADING IMAGES: ",LoadingImages);
     },[LoadingImages]);
     useEffect(()=>{
          console.log("current asset image: ",AssetImage);
     },[AssetImage]);
    useEffect(()=>{
            if(renderPauseImage && renderPlayImage && renderUploadImage){
              firstMusicRef.current.load();
              secondMusicRef.current.load();
              thirdMusicRef.current.load();
              fourthMusicRef.current.load();
            }
    },[renderPauseImage,renderPlayImage,renderUploadImage]);
    useEffect(() => {
      // Simulate loading time
      const timer = setTimeout(() => {
        if(loaded){
            console.log("already loaded")
        }
        else{
          onLoad(); 
        }
        // Call the onLoad function passed as a prop
      }, 1000); // Simulate a 1-second loading time
  
      // Clean up the timer on component unmount
      return () => clearTimeout(timer);
    }, [loaded]);
    useEffect(()=>{
      if(showAlert){
        setTimeout(()=>{
                 setShowAlert(false);
        },3500);
      }
    },[showAlert]);
    useEffect(()=>{
         if(success){
          setTimeout(()=>{
            setShowWaiting(true);
          },1500);
          
          setFadeOutIntro(true);
          
          const pausedAudio=audioRefCollection[selectedMusic];
          pausedAudio.current.volume=0.5;
          setTimeout(()=>{
            pausedAudio.current.pause();
            console.log(pausedAudio);
          },1500);
         
          
         }
    },[success]);
    // useEffect(()=>{
    //         if(showWaiting){
    //           setTimeout(() => {
    //              setShowGeneratedCard(true);
    //           },3000);
    //         }
    // },[showWaiting]);
    useEffect(()=>{
     
       if(fetchHardImage){
        setTimeout(()=>{
          dispatch(AnimateInIntroBack());
      },500);
      setTimeout(()=>{
                dispatch(AnimateInCentreImage());
                dispatch(AnimateInBallon());
      },3500);
      setTimeout(()=>{
        dispatch(AnimateCenterImage());
        dispatch(AnimateBallon());
},6500);
setTimeout(()=>{
 setAnimateRotateImage(true);
 setAnimateRotateText(true);
},15500);
setTimeout(()=>{
  setAnimateInRotates(true);
  setHideRotates(false);
},10500);
setTimeout(()=>{
       setAnimateDownRotates(true);
       setAnimateInRotates(false);
       setHideRotates(false);
},19500);
setTimeout(()=>{
    setAnimateCreate(true);
},22000);
       }
    },[fetchedHard]);

    useEffect(()=>{
        if(AssetImage.length > 0){
            setImageRendered(true);
        }
    },[AssetImage]);

    useEffect(()=>{
          if(inputValue.length > 0){
            setAtLeastOneInput(true);
          }
    },[inputValue]);
    useEffect(()=>{
         if(atLeastOneInput){
            setShowProfileUpload(true);
            setTimeout(()=>{
             setAnimateDown(true);
            },3000);
         }
    },[atLeastOneInput]);
    useEffect(()=>{
       if(animateDown && !fadeOutNameAndImage){
        setTimeout(()=>{
                setAnimateDown(false);
                setAnimateUp(true);
        },3000);
       }
    },[animateDown]);
    useEffect(()=>{
        if(animateUp && !fadeOutNameAndImage){
         setTimeout(()=>{
                 setAnimateDown(true);
                 setAnimateUp(false);
         },3000);
        }
     },[animateUp]);
     useEffect(()=>{
            if(rotateBirthDayCard){
                setTimeout(()=>{
                      setRotateBirthDayCard(false);
                      setRotateMessageBirthDay(true);
                },3000);
            }
     },[rotateBirthDayCard]);
     useEffect(()=>{
              if(rotateMessageBirthDay){
                setTimeout(()=>{
                   setRotateBirthDayCard(true);
                   setRotateMessageBirthDay(false);
                },3000);
              }
     },[rotateMessageBirthDay]);
      
     useEffect(()=>{
          if(preview != null){
            setTimeout(()=>{
              setFadeOutNameAndImage(true);
              setAnimateDown(false);
              setAnimateUp(false);
            },3000);
          }
     },[preview]);
     useEffect(()=>{
        if(fadeOutNameAndImage){
            setTimeout(()=>{
             setDescriptionShow(true);
             
            },3000);
        }
     },[fadeOutNameAndImage]);
     useEffect(()=>{
               if(descriptionShow){
                setTimeout(()=>{
                   setRotateBirthDayCard(true);
                },1000);
               }
     },[descriptionShow]);
     useEffect(()=>{
            if(fadeOutDescriptionSection){
                setTimeout(()=>{
                  setFadeInSelectMusic(true);
                  setShowSelectMusic(true);
                  setDescriptionShow(false);
                },3000);
            }
     },[fadeOutDescriptionSection]);
     
     useEffect(()=>{
             if(selectedMusic != 0){
                setShowCreateButton(true);
             }
             else{
                setShowCreateButton(false);
             }
     },[selectedMusic]);
   const handleCreateClicked=()=>{
    console.log("create clicked");
    dispatch(AnimateOutIntro(true));
    setTimeout(()=>{
          dispatch(HideIntroBack());
          setShowCreateComponent(true);
          setHideCreateIntro(true);
    },5000);
   }
   const uploadClicked=()=>{
        if(fileRef.current && preview == null){

            fileRef.current.click();
        }
   }
   const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) { // Ensure it's an image
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl); 
       setFileImage(file);
      // Set image URL as preview
    } else {
      setAlertMessage("Please select a valid image file.");
      setShowAlert(true);
    }
  };
  const backIntroLoaded=()=>{
    setShowIntro(true);
    setLoadedFirst((prev) => prev + 1);
  }
  const createFormData=()=>{
  const uniqueID=createUniqueId(inputValue);
  setUniqueID(uniqueID);
    const formData= new FormData();
    formData.append("description",descriptionValue);
    formData.append("selectedMusic",selectedMusic);
    formData.append("name",inputValue);
    formData.append("image",fileImage);
    formData.append("uniqueId",uniqueID);
        // const sentData={
        //   description:descriptionValue,
        //   selectedMusic:selectedMusic,
        //   name:inputValue
        // }
         setSendData(true)
         console.log("form data : ",formData);
         setSendDataFormData(formData);
         setClickedCreate(prev => prev + 1);
  };
  const createUniqueId=(name)=>{
      const date=Date.now();
      return name + date;
  }
    return (
       <>
       <div className={` ${memoizedIntroData.hiddenIntroBack ? "":""}  ${isMobile ? "":'flex justify-center items-center'} ${loadedFirst > 4 ? "animate-fadeIn":"opacity-0"}  w-full h-screen  relative overflow-hidden`}>
       <div className={` ${fetchedHard ? "hidden":""} w-full h-full absolute object-cover z-20`}>
 
</div>
        <img 
        onLoad={backIntroLoaded}
        src={AssetImage[2]} className={`w-full h-full absolute object-cover z-10 ${memoizedIntroData.animate_in_intro_back ? "":""} `} alt="" />
         
        {
            !memoizedIntroData.hiddenIntroBack && (
                <div className={` ${isMobile ? "":"flex justify-center items-center"} ${memoizedIntroData.animate_out_intro ? "animate-fadeOut relative w-full h-full z-20 bg-black bg-opacity-50":"absolute w-full h-full z-20"}`}>
                       <img
                       onLoad={backIntroLoaded}
                       src={AssetImage[3]} className={` ${memoizedIntroData.hidden_center_image ? "hidden":""} ${memoizedIntroData.animate_in_centre_image ? "animate-fadeIn":""} ${memoizedIntroData.animate_center_image ? "animate-bounce":""} ${isMobile ? "w-1/2 h-1/2":"w-1/3 h-full object-cover rounded-full"} absolute ${isMobile ? "top-20 left-20":""} z-30`} alt="" />
        <img
        onLoad={backIntroLoaded}
        src={AssetImage[0]} className={` ${memoizedIntroData.hidden_two_ballon ? "hidden":""} ${memoizedIntroData.animate_in_two_ballon ? "animate-fadeIn":""}  ${memoizedIntroData.animate_two_ballon ? "animate-skew":""} ${isMobile ? "w-40 h-40 top-40 left-4":"w-80 h-80 left-60"} absolute  z-20`} alt="" />
        <img
        onLoad={backIntroLoaded}
        src={AssetImage[1]} className={` ${memoizedIntroData.hidden_two_ballon ? "hidden":""} ${memoizedIntroData.animate_in_two_ballon ? "animate-fadeIn":""} ${memoizedIntroData.animate_two_ballon ? "animate-skew":""} ${isMobile ? "w-40 h-40 top-40 right-10":"w-80 h-80 right-60"} absolute  z-20`} alt="" />
        <div className={` ${hideRotates ? "hidden":""} ${animateCreate ? "hidden":""} ${animateDownRotates ? "animate-slideDown":""} ${animateInRotates ? "animate-fadeIn":""} absolute w-full h-full left-0 right-0 z-40 flex justify-center items-center`} >
            <img
            onLoad={backIntroLoaded}
            src={AssetImage[7]} className={` ${animateImageRotate ? "animate-rotateCW":""} ${isMobile ? "w-full h-80 object-cover":"w-full h-full"} absolute z-10`} alt="" />
            <div className={` ${animateRotateText ? "w-full h-80":"w-80 h-80"} relative text-center `}>
            <h1 className={` ${animateRotateText ? "animate-rotateDeg text-4xl":"transform rotate-45"} font-extrabold text-center text-purple-700 mt-10 absolute ${!isMobile ? "w-full h-full":""} ${isMobile && animateRotateText ? "w-full h-full":""} z-40 ${ animateRotateText ?  " left-0 top-0":"  top-10 left-20"} text-break`}>
            🎉 Craft the Perfect Birthday
             
                <br />
              
             Surprise for Your Bestie! 🎂
        </h1>
            </div>
           

        </div>
        <div
       className={` ${animateCreate ? "animate-slideUpToCurrent":"hidden"} w-full h-full ${isMobile ? "":"py-10"} absolute z-50 flex justify-center items-center cursor-pointer`}>
        <div className={`${isMobile ? "w-1/2 h-1/2":"w-1/2 h-full"} relative flex justify-center items-center`} >
        <img 
     
        src={AssetImage[1]} className={` ${isMobile ? "object-cover":""} ${hideCreateIntro ? "hidden":""} w-full h-full`} alt="" />
        <div 
           onClick={handleCreateClicked}
        className="absolute w-full h-full top-10 flex justify-center ">
                <p className="text-white text-lg font-bold text-center animate-slideUpDown">
                    CLICK TO CREATE
                </p>
            </div>
        </div>
          
       </div>
                </div>
            )
        }
        {
            showCreateComponent && (
                <>
                  <div className={` ${isMobile ? "":""} w-full h-full  animate-fadeIn  absolute z-20 flex justify-center items-center`}>
                    <div className={`w-full h-full absolute z-10 ${showWaiting ? "hidden":""}`} >
                       <img src={lowQualityDesc} className='w-full h-full object-cover' alt="" />
                    </div>
                      <div className='w-full h-full relative flex justify-center items-center' >
                        <img
                        onLoad={()=>{
                          setLoadedFullyDesc(true);
                        }}
                        src={
                          isMobile ? 
                          AssetImage[4]:backDesk 
                          } className={`absolute w-full h-full z-30 ${loadedFullyDesc ? "animate-fadeIn":"hidden"} ${fadeOutIntro ? "animate-fadeOut":''}   ${descriptionShow && isMobile ? "blur-md":""} `} alt="" />
                        <div className={` ${fadeOutNameAndImage ? "animate-fadeOut":""} absolute h-2/3  ${isMobile ?  " w-64 ":"w-1/2"} z-40 flex flex-col gap-y-10 justify-center items-center p-10`} >
                        <input
                value={inputValue}
                onChange={(e)=>{
                    setInputValue(e.target.value)
                }}
                type="text"
                placeholder="Enter Your Friends Name"
                className={`border-b border-gray-400 focus:border-blue-500 focus:outline-none font-italic text-blue-600 ${isMobile ? "w-full ":"w-2/3"} py-1 text-center bg-red-300 bg-opacity-0 ${isMobile ? "":"text-4xl"} ${fadeOutNameAndImage ? "animate-fadeOut":""} `}
            />
                <div
                onClick={uploadClicked}
                className={` ${showProfileUpload ? "":"hidden"} ${fadeOutNameAndImage ? "animate-fadeOut":""} ${preview == null ? "h-20":""} w-full  relative flex justify-center items-center ${animateUp ? "animate-rotateCCW":""} ${animateDown ? "animate-rotateCW":""} `} >
                      <span className={` ${preview != null ? "hidden":""} ${isMobile ? "":"text-2xl"} w-full text-center text-green-600 font-bold`}>
                        {
                            animateDown ? "UPLOAD PICTURE":""
                        }
                        {
                            animateUp ? "UPLOAD YOUR FRIENDS PICTURE":""
                        }
                        
                        </span>
                      {/* <img src={AssetImage[2]} className='w-16 h-16 rounded-full absolute animate-slideUpToCurrent' alt="" /> */}
                      <img
                      onLoad={()=>{
                        setHideLowQualityUpload(true);
                      }}
                      src={uploadImage} className={` ${hideLowQualityUpload ? "":"hidden"} ${animateUp || preview != null ? "hidden":""} ${isMobile ? "w-16 h-16":"w-40 h-40"}  rounded-full animate-slideUpToCurrent`} alt="" />
                                            <img
                     
                      src={uploadImageResized} className={` ${hideLowQualityUpload ? "hidden":""} ${animateUp || preview != null ? "hidden":""} ${isMobile ? "w-16 h-16":"w-40 h-40"}  rounded-full animate-slideUpToCurrent`} alt="" />

                      <img src={preview} className={` ${preview == null ? "hidden":""} ${fadeOutNameAndImage ? "animate-fadeOut":"animate-slideUpToCurrent"} ${isMobile ? "w-40 h-40":"w-80 h-80"} rounded-full `} alt="" />
                </div>
                {/* <div className={` ${true ? "":"hidden"} min-h-40 max-h-64 bg-gray-300 overflow-y-scroll w-full flex justify-start items-start overflow-x-hidden text-break`} >
                        <span className='w-full break-words' >
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        </span>
                </div> */}
                {/* <div className={` ${true ? "":"hidden"} h-40 bg-green-300 w-full `} >
                       select files
                </div> */}
                        </div>
                        {
                            descriptionShow && (
                                <div className={` ${fadeOutDescriptionSection ? "animate-fadeOut":""} ${isMobile ? "p-4 inset-y-10":"px-80 py-10 inset-y-10 inset-x-20 left-0 flex justify-center"}  absolute w-full ${isMobile ? "":""} z-40 flex flex-col gap-y-6 justify-center items-center overflow-x-hidden`} >
                                  <div className={` ${rotateBirthDayCard ? "animate-fadeIn":''} w-full h-40 flex flex-row justify-center items-center relative  `} >
                                        <span className={`text-center p-4 bg-black bg-opacity-50 ${rotateMessageBirthDay ? "animate-rotateCCW z-50":"opacity-0"} `} >Message Your Friend</span>
                                        <img src={birthdayCardResize} className={` ${hideLowQualityBirthDayCard ? "true":""} ${rotateBirthDayCard ? "animate-rotateCW":"opacity-0"} ${isMobile ? "w-full h-40 top-0 left-0":"w-60 h-60 top-0 z-50"}  absolute `} alt="" />
                                        <img
                                        onLoad={()=>{
                                          setHideLowQualityBirthDayCard(true);
                                        }}
                                        src={birthdayCard} className={` ${hideLowQualityBirthDayCard ? "":"hidden"} ${rotateBirthDayCard ? "animate-rotateCW":"opacity-0"} ${isMobile ? "w-full h-40 top-0 left-0":"w-60 h-60 top-0 z-50"}  absolute `} alt="" />
                                  </div>
                                  <div className={`w-full flex justify-start items-start h-full ${isMobile ? "p-4":'py-10 px-20 mt-10'} relative`} >
                                       <textarea
                                       value={descriptionValue}
                                       onChange={(e)=>{
                                        setDescriptionValue(e.target.value);
                                       }}
                                        className={` ${rotateBirthDayCard ? "text-violet-600":"text-teal-400"} ${isMobile ? "w-full p-2 bg-opacity-10 ":"w-2/3 top-0 left-40 absolute p-8 bg-opacity-20"} h-full z-10 bg-red-300  font-bold font-mono text-2xl word-break`}  placeholder="ENTER MESSAGE" name="" id=""></textarea>
                                        <img src={AssetImage[4]} className={`${isMobile ? "w-full opacity-80 left-0":"w-2/3 left-40"} h-full absolute  top-0 p-4 `} alt="" />
                                  </div>
                                  <div className='w-full h-20  flex justify-center items-center cursor-pointer' >
                                         <img 
                                         onClick={()=>{
                                            if(descriptionValue == ""){
                                                setShowAlert(true);
                                                setAlertMessage("You Should Write a message!");
                                            }
                                            else{
                                                 setFadeOutDescriptionSection(true);
                                            }
                                         }}
                                         src={nextGif} className={` ${false ? "opacity-0":"animate-fadeIn"} ${isMobile ? "w-40 h-20":"h-28 w-60"} object-cover`} alt="" />
                                  </div>

                                </div>

                            )
                        }
                        {
                            showSelectMusic && (
                                <div className={` ${renderAllSelectMusic ? "animate-fadeIn":"hidden"} ${fadeOutIntro ? "animate-fadeOut z-10":"animate-fadeIn z-40"} ${isMobile ? "":"p-10"} ${isMobile ? "w-full inset-0":"w-1/2 inset-y-20 rounded-lg border-4 border-green-400"} bg-black flex flex-col justify-center items-center gap-y-6 bg-opacity-50  absolute`}>
                                      <div className='w-full p-6 bg-gray-300 flex justify-center items-center' >
                                          <span className='text-white text-2xl' >SELECT MUSIC</span>
                                      </div>
                                      <div 
                                      onClick={()=>{
                                        if(selectedMusic == 1){
                                            firstMusicRef.current.pause();
                                            setSelectedMusic(0);
                                        }
                                        else{
                                           if(!fadeOutIntro){
                                            firstMusicRef.current.play();
                                            setSelectedMusic(1);
                                           }
                                            
                                        }
                                        
                                        
                                        console.log("first clicked");
                                      }}
                                      className={` ${selectedMusic == 1 ? "animate-bounce":""} cursor-pointer w-full h-20  flex justify-around items-center`}>
                                          <div className='w-20 h-20 rounded-full'>
                                            <img src={uploadImage} className='w-full h-full rounded-full' alt="" />
                                            <img
                                            onLoad={()=>{
                                              setRenderUploadImage(true);
                                               
                                            }}
                                            src={uploadImage} ref={uploadImageRef} className='hidden' alt="" />
                                            <img
                                               onLoad={()=>{
                                                setRenderPlayImage(true);
                                                 
                                              }}
                                            src={play} ref={playImageRef}  className="hidden" alt="" />
                                            <img
                                              onLoad={()=>{
                                                setRenderPauseImage(true);
                                                
                                              }}
                                            src={pause} ref={pauseImageRef} className='hidden' alt="" />
                                          </div>
                                          <div className='' >
                                             <span className='text-green-300 '>English</span>
                                          </div>
                                          <div className='w-20 h-20 '>
                                            
                                                  <img
                                                  
                                                  src={
                                                    selectedMusic == 1 ? pause:play
                                                    
                                                    } className='w-full h-full' alt="" />
                                          </div>
                                      </div>
                                      <div 
                                      onClick={()=>{
                                        if(selectedMusic == 2){
                                                 secondMusicRef.current.pause();
                                                 setSelectedMusic(0);
                                        }
                                        else{
                                          if(!fadeOutIntro){
                                            secondMusicRef.current.play();
                                            setSelectedMusic(2);
                                        }
                                            
                                        }
                                        
                                        console.log("first clicked");
                                      }}
                                      className={` ${selectedMusic == 2 ? "animate-bounce":""} cursor-pointer w-full h-20  flex justify-around items-center`}>
                                           <div className='w-20 h-20 rounded-full'>
                                            <img src={uploadImage} className='w-full h-full rounded-full' alt="" />
                                          </div>
                                          <div className='' >
                                             <span className='text-green-300 '>Amharic</span>
                                          </div>
                                          <div className='w-20 h-20 '>
                                            
                                                  <img src={
                                                    selectedMusic == 2 ? pause:play
                                                    
                                                    } className='w-full h-full' alt="" />
                                          </div>
                                      </div>
                                      <div 
                                      onClick={()=>{
                                        if(selectedMusic == 3){
                                            thirdMusicRef.current.pause();
                                            setSelectedMusic(0);
                                        }
                                        else{
                                          if(!fadeOutIntro){
                                            thirdMusicRef.current.play();
                                            setSelectedMusic(3);
                                          }
                                            
                                        }
                                        
                                        console.log("first clicked");
                                      }}
                                      className={` ${selectedMusic == 3 ? "animate-bounce":""} cursor-pointer w-full h-20  flex justify-around items-center`}>
                                           <div className='w-20 h-20 rounded-full'>
                                            <img src={uploadImage} className='w-full h-full rounded-full' alt="" />
                                          </div>
                                          <div className='' >
                                             <span className='text-green-300 '>Oromic</span>
                                          </div>
                                          <div className='w-20 h-20 '>
                                            
                                                  <img src={
                                                    selectedMusic == 3 ? pause:play
                                                    
                                                    } className='w-full h-full' alt="" />
                                          </div>
                                      </div>
                                      <div 
                                      onClick={()=>{
                                        if(selectedMusic == 4){
                                            fourthMusicRef.current.pause();
                                            setSelectedMusic(0);
                                        }
                                        else{
                                            fourthMusicRef.current.play();
                                            setSelectedMusic(4);
                                        }
                                        
                                        
                                        console.log("first clicked");
                                      }}
                                      className={` ${selectedMusic == 4 ? "animate-bounce":""} cursor-pointer w-full h-20  flex justify-around items-center`}>
                                          <div className='w-20 h-20 rounded-full'>
                                            <img src={uploadImage} className='w-full h-full rounded-full' alt="" />
                                          </div>
                                          <div className='' >
                                             <span className='text-green-300 '>Tigrigna</span>
                                          </div>
                                          <div className='w-20 h-20 '>
                                            
                                                  <img src={
                                                    selectedMusic == 4 ? pause:play
                                                    
                                                    } className='w-full h-full' alt="" />
                                          </div>
                                      </div>
                                      <div className={`w-full h-40 flex justify-center items-center ${true ? "animate-fadeIn" : "opacity-0"}`}>
  <button 
  onClick={()=>{
    if(selectedMusic == 0){
        setAlertMessage("You Should Select The Music");
        setShowAlert(true);
    }
    else{
      createFormData();
    }
  }}
  className="p-4 bg-gray-800 hover:bg-gray-600 transition duration-300 rounded-lg shadow-lg">
    <span className="text-white text-2xl font-semibold">CREATE</span>
  </button>
</div>
                                </div>
                            )
                        }
                        {
                          showWaiting && (
                            <Suspense fallback={<Spinner/>} >     
                            <Waiting userId={uniqueIDNew} />
                            </Suspense>
                          )
                        }
                        
                        
                        
                      </div>
                  </div>
                  <input type="file" ref={fileRef} className='hidden' 
                       onChange={handleFileChange}
                    
                       accept="image/*"
                  />
                </>
            )
        }
     
       {/* {
        imageRendered && (
            AssetImage.map((item,index)=>{
                return (
                    <div key={index} className='w-40 h-40 relative z-20' >
                        <img src={item} className='w-full h-full absolute' alt="" />
                    </div>
                )
            })
        )
       } */}
       {
        showSelectMusic && (
          <>
           <audio
            preload="auto"
             onCanPlayThrough={()=>{
              setRenderAllSelectMusic(true);
              console.log("can play first");
             }}
         ref={firstMusicRef}
         onPlay={()=>{
            if(secondMusicRef.current && thirdMusicRef.current){
                secondMusicRef.current.pause();
                thirdMusicRef.current.pause();
            }
         }}
         onEnded={()=>{
            firstMusicRef.current.currentTime=0;
            firstMusicRef.current.play();
         }}
        src={firstMusic} ></audio>
        <audio
         preload="auto"
         onCanPlayThrough={()=>{
          setRenderAllSelectMusic(true);
          console.log("can play second");
         }}
          onPlay={()=>{
            if(firstMusicRef.current && thirdMusicRef.current && fourthMusicRef.current){
                firstMusicRef.current.pause();
                thirdMusicRef.current.pause();
                fourthMusicRef.current.pause();
            }
            
         }}
         onEnded={()=>{
            secondMusicRef.current.currentTime=0;
            secondMusicRef.current.play();
         }}
        ref={secondMusicRef}
        src={secondMusic}></audio>
        <audio
         preload="auto"
         onCanPlayThrough={()=>{
          setRenderAllSelectMusic(true);
          console.log("can play Third");
         }}
          onPlay={()=>{
            if(secondMusicRef.current && firstMusicRef.current && fourthMusicRef.current){
                secondMusicRef.current.pause();
                firstMusicRef.current.pause();
                fourthMusicRef.current.pause();
            }
         }}
         onEnded={()=>{
            thirdMusicRef.current.currentTime=0;
            thirdMusicRef.current.play();
         }}
        ref={thirdMusicRef}
        src={thirdMusic}></audio>
        <audio
         preload="auto"
         onCanPlayThrough={()=>{
          setRenderAllSelectMusic(true);
          console.log("can play fourth");
         }}
         onPlay={()=>{
            if(secondMusicRef.current && firstMusicRef.current && thirdMusicRef){
                secondMusicRef.current.pause();
                firstMusicRef.current.pause();
                thirdMusicRef.current.pause();
            }
         }}
         onEnded={()=>{
            fourthMusicRef.current.currentTime=0;
            fourthMusicRef.current.play();
         }}
         ref={fourthMusicRef}
        src={fourthMusic}></audio>
        {
            showAlert && (
                <Alert message={alertMessage} />
            )
        }
          </>
        )
       }
       
        
       </div>
       
       {loadedFirst < 4 && (
        <div className='w-full h-screen absolute z-50 top-0'>
        <LoadingImages key={2} reRender={true} />
        </div>
    
  )  
}
       
      

       </>
    );
};

export default  Intro;