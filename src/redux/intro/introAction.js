import {animate_in_intro_back,animate_out_intro,hide_intro_back,animate_center_image,animate_two_ballon,animate_in_two_ballon,animate_in_center_image} from './introType';



export const AnimateInIntroBack=()=>{
    return {
        type:animate_in_intro_back
    }
}
export const AnimateOutIntro=(param)=>{
    return {
        type:animate_out_intro,
        payload:param
    }
}
export const HideIntroBack=()=>{
    return {
        type:hide_intro_back
    }
}
export const AnimateBallon=()=>{
    return {
        type:animate_two_ballon
    }
}
export const AnimateCenterImage=()=>{
    return {
        type:animate_center_image
    }
}
export const AnimateInCentreImage=()=>{
    return {
        type:animate_in_center_image
    }
}
export const AnimateInBallon=()=>{
    return {
        type:animate_in_two_ballon
    }
}