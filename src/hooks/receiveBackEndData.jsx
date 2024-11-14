import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';

const  ReceiveBackEndData = ({userID}) => {
    const [userData,setUserData]=useState([]);
    
useEffect(()=>{
        const backEndDataFetch=async ()=>{
            try{
             const data=await axios.get(`/api/data/getUserData/${userID}`);
             if(data){
                console.log(data);
             }
             else{
                console.log("no data");
             }
            }
            catch(err){
               console.log(err);
            }
        }

        if(userID != ""){
            backEndDataFetch();
        }
},[userID]);

};

export default  ReceiveBackEndData;