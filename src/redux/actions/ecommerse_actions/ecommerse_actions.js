import { ADDAUTH } from "../../action_constants/actionConstants"




export const addAuth = (data) => {


     return {

         type : ADDAUTH,
         payload : data,
     }
}