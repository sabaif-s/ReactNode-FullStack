import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';

const  ReceiveBackEndData = (userIdPar,userID) => {
    const [userData,setUserData]=useState([]);
    const [userDataShow,setUserDataShow]=useState([]);
    const [userIdToFetch,setUserIdToFetch]=useState("");
    useEffect(()=>{
         if(userIdPar != ""){
                    setUserIdToFetch(userIdPar);
         }
         else if(userID != "") {
                        setUserIdToFetch(userID);
         }
    },[userIdPar,userID]);
useEffect(()=>{
        const backEndDataFetch=async ()=>{
            try{
             const data=await axios.get(`/api/data/getUserData/${userIdToFetch}`);
             if(data){
                
                const parsedData=JSON.parse(data.data.data);
                console.log(typeof(parsedData));
            
                console.log(parsedData);
                setUserData([...userData,parsedData]);
                setUserDataShow([...userDataShow,parsedData]);
             }
             else{
                console.log("no data");
             }
            }
            catch(err){
               console.log(err);
            }
        }

        if(userIdToFetch != ""){
            backEndDataFetch();
        }
},[userIdToFetch]);
return {userData,userDataShow}
};

export default  ReceiveBackEndData;