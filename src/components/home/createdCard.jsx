import React from 'react';
import ReceiveBackEndData from '../../hooks/receiveBackEndData';
import { useEffect,useState } from 'react';
import CardHome from './cardHome';
const  CreatedCard = ({userId}) => {
     const {userData}=ReceiveBackEndData(userId);
     const [readyRenderCard,setReadyRenderCard]=useState(false);
     
     useEffect(()=>{
        if(userData.length > 0){
          setReadyRenderCard(true);
          console.log(userData);
        }
     },[userData]);
    return (
        <>
          {
            readyRenderCard && (
                <CardHome userData={userData} userId={userId} />
            )
          }
        </>
    )
};

export default  CreatedCard;