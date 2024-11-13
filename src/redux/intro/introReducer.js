import {animate_in_intro_back,animate_out_intro,hide_intro_back,animate_center_image,animate_two_ballon,animate_in_center_image,animate_in_two_ballon} from './introType';


const initial_state={
    hiddenIntroBack:true,
    animate_in_intro_back:false,
    animate_out_intro:false,
    animate_center_image:false,
    animate_two_ballon:false,
    hidden_two_ballon:true,
    hidden_center_image:true,
    animate_in_center_image:false,
    animate_in_two_ballon:false,
}

const reducerIntro=(state=initial_state, action)=>{
    switch(action.type){
        case animate_in_intro_back:return{
            ...state,
            hiddenIntroBack:false,
            animate_in_intro_back:true,
            animate_out_intro:false
        }
        case animate_out_intro:return{
            ...state,
            hiddenIntroBack:false,
            animate_in_intro_back:false,
            animate_out_intro:action.payload
        }
        
        case hide_intro_back:return{
            ...state,
            hiddenIntroBack:true,
            animate_in_intro_back:false,
            animate_out_intro:false
        }
        case animate_center_image:return{
            ...state,
            hiddenIntroBack:false,
            animate_in_intro_back:false,
            animate_out_intro:false,
            animate_center_image:true,
            hidden_center_image:false,
            animate_in_center_image:false,
        }
        case animate_two_ballon:return{
            ...state,
            hiddenIntroBack:false,
            animate_in_intro_back:false,
            animate_out_intro:false,
            animate_two_ballon:true,
            hidden_two_ballon:false,
        }
        case animate_in_two_ballon : return{
            ...state,
        animate_in_two_ballon:true,
        animate_two_ballon:false,
        hidden_two_ballon:false,

        }
        case animate_in_center_image : return{
            ...state,
        animate_in_center_image:true,
        hidden_center_image:false,
        animate_center_image:false,
        
        }
        default:return state 
    }
}

export default reducerIntro