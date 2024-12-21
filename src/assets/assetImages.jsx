import React from 'react';
import { useEffect,useState } from 'react';

import image1Small from './images/resized_10252815.png';
import image2small from './images/resized_170670446_10252808.png';

import image3Small from './images/resized_22451856_SL-120920-38660-47.jpg';

import image4Small from './images/resized_360524525_11429953.png';

import image5Small from './images/resized_9083415.jpg';

import image6Small from './images/resized_rb_26773.png';

import image7Small from './images/resized_rb_30921.png';
import image8Small from './images/resized_rb_30921.png';


const  AssetImages = (easy,hard) => {
         const [AssetImage,setAssetImage]=useState([]);
         const [fetchedHard,setFetchedHard]=useState(false);
   
     const AssetImageArrayEasy=[image1Small,image2small,image3Small,image4Small,image5Small,image6Small,image7Small,image8Small];
    useEffect(()=>{
       
       const loadHighImages=async ()=>{
           const image1=await import('./images/10252815_11zon-removebg-preview.png');
           const image2 =await import ('./images/170670446_10252808_11zon-removebg-preview.png');
           const image3 =await import('./images/22451856_SL-120920-38660-47_11zon (1).jpg');
           const image4=await import('./images/360524525_11429953_11zon-removebg-preview.png');
           const image5=await import('./images/9083415_11zon.jpg');
           const image6=await import('./images/rb_30921_11zon.jpg');
           const image7=await import('./images/rb_30921_11zon.jpg');
           const image8=await import('./images/rb_32582_11zon_11zon-removebg-preview.png');
           const AssetImageArray=[image1.default,image2.default,image3.default,image4.default,image5.default,image6.default,image7.default,image8.default];
           setAssetImage(AssetImageArray);
           setFetchedHard(true);
       }
       if(hard){
         loadHighImages();
       }
    },[hard]);
    useEffect(()=>{
         if(easy && AssetImageArrayEasy.length > 0){
             setAssetImage(AssetImageArrayEasy);
             setFetchedHard(false);
         }
    },[easy]);
     return {AssetImage,fetchedHard}
};

export default  AssetImages;