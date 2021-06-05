import {combineReducers} from 'redux'
import questionsReducer from '../redux/reducers/questions/questionsReducer';

const rootReducer=combineReducers({questions:questionsReducer})
export default rootReducer;