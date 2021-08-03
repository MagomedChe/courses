import { COURSES_LOAD_START } from './type'

export const loadCourses = () =>{
  return(dispatch)=>{
    dispatch({
      type: COURSES_LOAD_START
    })
    fetch(`db.json`)
      .then(response => response.json())
      .then(json=>{
        console.log(json)
      })
  }
}