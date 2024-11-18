import React from 'react';
import LightOnOff from './lightOnOff';

const  CardForShow = React.memo(({showFunction}) => {
    return (
       <>
       <LightOnOff showFunctions={showFunction} />
       </>
    );
});

export default  CardForShow;