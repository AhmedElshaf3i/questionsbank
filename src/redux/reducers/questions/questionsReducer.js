import * as actions from "./questionsTypes";

const generatID = (prefix) => {
  return prefix + Math.floor(Math.random() * 344546153);
};
const initialState = {
  questions:[],
  score:0,
  studentName: "",
};
const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_QUESTIONS: {
      return {...state,questions:[...action.payload] }
    }
    case actions.ADD_STUDENT_NAME: {
      return { ...state, studentName: action.payload };
    }
    case actions.ADD_ANSWER:{
        return {...state,score:state.score+action.payload};
    }
    case actions.CLEAR_STATE:{
        return {...state,questions:[],score:0 };
    }
    
    default:
      return state;
  }
};
export const getStudentName = (state) => state.questions.studentName;

export const getAllQeustions = (state) => state.questions.questions;

export const getResult = (state) =>state.questions.score
 
export default questionsReducer;
