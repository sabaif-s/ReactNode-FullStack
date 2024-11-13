import React from 'react';
import { useEffect,useState } from 'react';
import image1 from './images/10252815.png';
import image2 from './images/170670446_10252808.png';
import image3 from './images/22451856_SL-120920-38660-47.jpg';
import image4 from './images/360524525_11429953.png';
import image5 from './images/9083415.jpg';
import image6 from './images/rb_26773.png';
import image7 from './images/rb_30921.png';
import image8 from './images/rb_32582.png';

const  AssetImages = () => {
         const [AssetImage,setAssetImage]=useState([]);
    const AssetImageArray=[image1,image2,image3,image4,image5,image6,image7,image8]

    useEffect(()=>{
       if(AssetImageArray.length > 0){
        setAssetImage(AssetImageArray);
       }
    },[]);
     return {AssetImage}
};

export default  AssetImages;