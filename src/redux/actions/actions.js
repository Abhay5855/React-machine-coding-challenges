import { DECREMENT, INCREMENT } from "../action_constants/actionConstants"



export const addCounter = (val) => {

     return {

           type : INCREMENT,
           payload : val,
     }
       
}
export const DecrementCounter = (val) => {

     return {

           type : DECREMENT,
           payload : val,
     }
       
}