import React from 'react';
import ScreenSize from './screen';
const  Alert = React.memo(({message}) => {
    const {isDesktop,isMobile,isTablet}=ScreenSize();
    return (
         <div className={` w-full h-full relative flex justify-center`}>
            <div className={`${isMobile ? "w-2/3":"w-1/3"}  bg-blue-100 fixed top-20 flex justify-center items-center z-50 p-2 animate-shake`} >
                <p className='animate-fadeIn  text-red-600  word-break' >{message}</p>
            </div>
         </div>
    );
});

export default  Alert;