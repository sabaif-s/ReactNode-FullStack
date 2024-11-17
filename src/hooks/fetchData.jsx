import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
const  FetchData = (sendData,data,clickedCreate) => {
    const [success,setSuccess]=useState(false);
    const [error,setError]=useState(false);
    useEffect(()=>{
       if(sendData ){
      console.log("time to send data");
       }
    },[sendData]);
    useEffect(()=>{
        const sendDataToBackEnd=async ()=>{
            try {
                const sentData = await axios.post(`${import.meta.env.VITE_API_URL}/data/data`, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data', // Set the content type
                      },
                } ); // Directly send the data
                console.log(sentData.data); 
                setSuccess(true);
                
                // Access the response data
              } catch (err) {
                console.error('Error sending data:', err);
              }
        }
     if(data != null && sendData == true && clickedCreate > 0){
            sendDataToBackEnd();
            console.log(data);
     }
   
  
    },[sendData,clickedCreate]);
    return {success}
};

export default  FetchData;