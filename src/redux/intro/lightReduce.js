import {HIDE_LIGHT,SHOW_INTRO_CREATED} from './lightType';
const initial_state={
  HIDE_LIGHT:false,
  SHOW_INTRO_CREATED:false
}


const LightReducer=(state=initial_state,action)=>{
        switch(action.type){
            case HIDE_LIGHT:return{
                ...state,
                HIDE_LIGHT:true,
                SHOW_INTRO_CREATED:true,
            }
            case SHOW_INTRO_CREATED:return{
                ...state,
                SHOW_INTRO_CREATED:true,
                HIDE_LIGHT:true
            }
            default: return state
        }

}

export default LightReducer;