import React from 'react';
import { useMediaQuery } from 'react-responsive';
const  ScreenSize = () => {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    
    return{isDesktop,isMobile,isTablet};
    
};

export default  ScreenSize;