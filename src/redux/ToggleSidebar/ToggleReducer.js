import { SET__TOGGLE } from './ToggleType'

const init={
    toggle:false
}


const toggleReducer=(state=init,action)=>{
    switch(action.type){
        case SET__TOGGLE: return{
            toggle: action.payload
        }
        default : return state
    }
}

export default toggleReducer