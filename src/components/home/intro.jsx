import React from 'react';
import { useEffect,useState,useMemo,useRef } from 'react';
import AssetImages from '../../assets/assetImages';
import { useSelector,useDispatch } from 'react-redux';
import uploadImage from '../../assets/images/14666.jpg';
import birthdayCard from '../../assets/images/rb_26773.png';
import nextGif from '../../assets/images/next-1989_256.gif';
import pause from '../../assets/images/Pause.png';
import play from '../../assets/images/Play.png';
import firstMusic from '../../assets/audio/englishMusic.m4a';
import secondMusic from '../../assets/audio/henok abebe.m4a';
import thirdMusic from '../../assets/audio/oromicMusic.m4a';
import fourthMusic from '../../assets/audio/samiBerhane.m4a';
import FetchData from '../../hooks/fetchData';
import CreatedCard from './createdCard';
import Waiting from './waiting';
import Copy from './copy';
import {AnimateInIntroBack,AnimateOutIntro,HideIntroBack,AnimateBallon,AnimateCenterImage,AnimateInBallon,AnimateInCentreImage} from '../../redux/intro/introAction'
import Alert from './alert';
const  Intro = () => {
    const {AssetImage}=AssetImages();
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

    const fileRef=useRef(null);

    const introDataW = useSelector((state) => state.intro);

    // If you want to memoize the selected data based on `introData`:
    const memoizedIntroData = useMemo(() => introDataW, [introDataW]);
    const audioRefCollection=["",firstMusicRef,secondMusicRef,thirdMusicRef,fourthMusicRef];
    const dispatch=useDispatch();

    useEffect(()=>{
        console.log(memoizedIntroData);
    },[memoizedIntroData]);
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
          pausedAudio.current.pause();
          console.log(pausedAudio);
          
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
},23000);
       
    },[]);

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
       <div className={` ${memoizedIntroData.hiddenIntroBack ? "":""}   w-full h-screen  relative`}>
        <img src={AssetImage[2]} className={`w-full h-full absolute object-cover z-10 ${memoizedIntroData.animate_in_intro_back ? "animate-fadeIn":""} `} alt="" />
        {
            !memoizedIntroData.hiddenIntroBack && (
                <div className={` ${memoizedIntroData.animate_out_intro ? "animate-fadeOut relative w-full h-full z-20 bg-black bg-opacity-50":"absolute w-full h-full z-20"}`}>
                       <img src={AssetImage[3]} className={` ${memoizedIntroData.hidden_center_image ? "hidden":""} ${memoizedIntroData.animate_in_centre_image ? "animate-fadeIn":""} ${memoizedIntroData.animate_center_image ? "animate-bounce":""}  w-1/2 h-1/2 absolute top-20 left-20 object-cover z-30`} alt="" />
        <img src={AssetImage[0]} className={` ${memoizedIntroData.hidden_two_ballon ? "hidden":""} ${memoizedIntroData.animate_in_two_ballon ? "animate-fadeIn":""}  ${memoizedIntroData.animate_two_ballon ? "animate-skew":""} w-40 h-40 absolute object-cover top-40 left-4 z-20`} alt="" />
        <img src={AssetImage[1]} className={` ${memoizedIntroData.hidden_two_ballon ? "hidden":""} ${memoizedIntroData.animate_in_two_ballon ? "animate-fadeIn":""} ${memoizedIntroData.animate_two_ballon ? "animate-skew":""} w-40 h-40 absolute object-cover top-40 right-10 z-20`} alt="" />
        <div className={` ${hideRotates ? "hidden":""} ${animateCreate ? "hidden":""} ${animateDownRotates ? "animate-slideDown":""} ${animateInRotates ? "animate-fadeIn":""} absolute w-full h-full left-0 right-0 z-40 flex justify-center items-center`} >
            <img src={AssetImage[7]} className={` ${animateImageRotate ? "animate-rotateCW":""} w-full h-80 object-cover absolute z-10`} alt="" />
            <div className={` ${animateRotateText ? "w-full h-80":"w-80 h-80"} relative text-center `}>
            <h1 className={` ${animateRotateText ? "animate-rotateDeg text-4xl":"transform rotate-45"} font-extrabold text-center text-purple-700 mt-10 absolute z-40 ${ animateRotateText ?  "w-full h-full left-0 top-0":"w-40 h-40  top-10 left-20"} text-break`}>
            🎉 Craft the Perfect Birthday Surprise for Your Bestie! 🎂
        </h1>
            </div>
           

        </div>
        <div
       className={` ${animateCreate ? "animate-slideUpToCurrent":"hidden"} w-full h-full absolute z-50 flex justify-center items-center cursor-pointer`}>
        <div className='w-1/2 h-1/2 relative flex justify-center items-center' >
        <img 
     
        src={AssetImage[1]} className='w-full h-full object-cover' alt="" />
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
                  <div className='w-full h-full  animate-fadeIn bg-red-300 absolute z-20 flex justify-center items-center'>
                      <div className='w-full h-full relative flex justify-center items-center' >
                        <img src={AssetImage[4]} className={`absolute w-full h-full z-30 ${fadeOutIntro ? "animate-fadeOut":''}   ${descriptionShow ? "blur-md":""} `} alt="" />
                        <div className={` ${fadeOutNameAndImage ? "animate-fadeOut":""} absolute h-2/3 w-64 bg-black bg-opacity-50 z-40 flex flex-col gap-y-10 justify-center items-center p-10`} >
                        <input
                value={inputValue}
                onChange={(e)=>{
                    setInputValue(e.target.value)
                }}
                type="text"
                placeholder="Enter Your Friends Name"
                className={`border-b border-gray-400 focus:border-blue-500 focus:outline-none w-full py-1 text-center bg-red-300 bg-opacity-0 ${fadeOutNameAndImage ? "animate-fadeOut":""} `}
            />
                <div
                onClick={uploadClicked}
                className={` ${showProfileUpload ? "":"hidden"} ${fadeOutNameAndImage ? "animate-fadeOut":""} ${preview == null ? "h-20":""} w-full  relative flex justify-center items-center ${animateUp ? "animate-rotateCCW":""} ${animateDown ? "animate-rotateCW":""} `} >
                      <span className={` ${preview != null ? "hidden":""} w-full text-center`}>
                        {
                            animateDown ? "UPLOAD PICTURE":""
                        }
                        {
                            animateUp ? "UPLOAD YOUR FRIENDS PICTURE":""
                        }
                        
                        </span>
                      {/* <img src={AssetImage[2]} className='w-16 h-16 rounded-full absolute animate-slideUpToCurrent' alt="" /> */}
                      <img src={uploadImage} className={` ${animateUp || preview != null ? "hidden":""} w-16 h-16 rounded-full animate-slideUpToCurrent`} alt="" />
                      <img src={preview} className={` ${preview == null ? "hidden":""} ${fadeOutNameAndImage ? "animate-fadeOut":"animate-slideUpToCurrent"} w-40 h-40 rounded-full `} alt="" />
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
                                <div className={` ${fadeOutDescriptionSection ? "animate-fadeOut":""}  absolute inset-y-10 w-full bg-black bg-opacity-50 z-40 flex flex-col gap-y-6 justify-center items-center p-4`} >
                                  <div className={` ${rotateBirthDayCard ? "animate-fadeIn":''} w-full h-40 flex flex-row justify-center items-center relative  `} >
                                        <span className={`text-center p-4 bg-black bg-opacity-50 ${rotateMessageBirthDay ? "animate-rotateCCW z-50":"opacity-0"} `} >Message Your Friend</span>
                                        <img src={birthdayCard} className={` ${rotateBirthDayCard ? "animate-rotateCW":"opacity-0"} w-full h-40 absolute top-0 left-0`} alt="" />
                                  </div>
                                  <div className={`w-full flex justify-start items-start h-full p-4 relative`} >
                                       <textarea
                                       value={descriptionValue}
                                       onChange={(e)=>{
                                        setDescriptionValue(e.target.value);
                                       }}
                                        className={` ${rotateBirthDayCard ? "text-violet-600":"text-teal-400"} w-full h-full p-2 z-10 bg-red-300 bg-opacity-10 font-bold font-mono text-2xl word-break`}  placeholder="ENTER MESSAGE" name="" id=""></textarea>
                                        <img src={AssetImage[4]} className='w-full h-full absolute opacity-80  top-0 left-0 p-4' alt="" />
                                  </div>
                                  <div className='w-full h-20  flex justify-center items-center' >
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
                                         src={nextGif} className={` ${false ? "opacity-0":"animate-fadeIn"} w-40 h-20 object-cove`} alt="" />
                                  </div>

                                </div>

                            )
                        }
                        {
                            showSelectMusic && (
                                <div className={` ${fadeOutIntro ? "animate-fadeOut z-10":"animate-fadeIn z-40"} w-full inset-y-10 bg-black flex flex-col justify-center items-center gap-y-6 bg-opacity-50  absolute`}>
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
                                          </div>
                                          <div className='' >
                                             <span className='text-green-300 '>SAMI BERHANE</span>
                                          </div>
                                          <div className='w-20 h-20 '>
                                            
                                                  <img src={
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
                                             <span className='text-green-300 '>HELEN MELESE</span>
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
                                             <span className='text-green-300 '>HELEN MELESE</span>
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
                                             <span className='text-green-300 '>SAMI BERHANE</span>
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
                            <Waiting userId={uniqueIDNew} />
                          )
                        }
                        {
                          showGeneratedCard && (
                            <CreatedCard/>
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
        <audio
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
        
       </div>

       </>
    );
};

export default  Intro;