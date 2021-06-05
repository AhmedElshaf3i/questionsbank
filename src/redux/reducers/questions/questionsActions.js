import * as actions from "./questionsTypes"

export const addQuestions=(questions)=>{
    return {
        type:actions.ADD_QUESTIONS,
        payload:questions,
    }

}
export const  addStudentName =(studentName)=>{
    return {
        type:actions.ADD_STUDENT_NAME,
        payload:studentName,
    }
}
export const addQuestionResult=(result)=>{
    return {
          type:actions.ADD_ANSWER,
          payload:parseInt(result),
        }
}
export const clearStore=()=>{
    return {
          type:actions.CLEAR_STATE,
        }
}
