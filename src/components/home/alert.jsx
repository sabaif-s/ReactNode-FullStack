import React from 'react';

const  Alert = React.memo(({message}) => {
    return (
         <div className='w-full h-full relative flex justify-center'>
            <div className='w-2/3 bg-blue-100 fixed top-20 flex justify-center items-center z-50 p-2 animate-shake' >
                <p className='animate-fadeIn  text-red-600  word-break' >{message}</p>
            </div>
         </div>
    );
});

export default  Alert;