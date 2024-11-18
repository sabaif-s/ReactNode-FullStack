import React from 'react';
import { useMediaQuery } from 'react-responsive';
const  ScreenSize = () => {
    const isDesktop = useMediaQuery({ minWidth: 1141 });
    const isDesktopLarge=useMediaQuery({minWidth: 1240});
    const isTablet = useMediaQuery({ minWidth: 1024, maxWidth: 1140 });
    const isMobile = useMediaQuery({ maxWidth: 1023 });
    
    return{isDesktop,isMobile,isTablet,isDesktopLarge};
    
};

export default  ScreenSize;