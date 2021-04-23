import {combineReducers} from 'redux'
import authReducer from './auth/authReducer'
import toggleReducer from './ToggleSidebar/ToggleReducer'

const rootReducer=combineReducers({
    toggle: toggleReducer,
    auth: authReducer,
})

export default rootReducer