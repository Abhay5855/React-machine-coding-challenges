import { ADDTODO, DECREMENT, DELETETODO, INCREMENT, UPDATETIP, ADDITEM } from "../action_constants/actionConstants"


// Actions for counter example
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


// Actions for Todo app 

export const Addtodos = text => {

        return {

              type : ADDTODO,
              payload : {
                   
                     text: text,
                     id : Date.now(),
                     completed : false,
              },
        }
}


export const DeleteTodo = (id) => {

       return {

              type : DELETETODO,
              payload : id,
       }
}


export const UpdateTip = () => {

         return {

              type : UPDATETIP
         }
}


export const additem = (data) => {

         return {

              type : ADDITEM,
              payload : data,
         }
}