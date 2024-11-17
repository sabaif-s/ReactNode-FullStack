import React from 'react';
import LightOnOff from './lightOnOff';
const  CardForShow = ({showFunction}) => {
    return (
       <>
       <LightOnOff showFunction={showFunction} />
       </>
    );
};

export default  CardForShow;