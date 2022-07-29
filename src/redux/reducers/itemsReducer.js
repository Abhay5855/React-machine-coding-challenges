
import {ADDITEM} from "../action_constants/actionConstants"
let initialState = {

      items : [{

        id : Date.now(),
        name : 'Biscuit',
        price : 10,
        qunatity : 2,
  },
  {
  
      id : Date.now(),
      name : 'Choclate',
      price : 20,
      qunatity : 5,
  }]
}






export const itemsReducer = (state = initialState , action) => {
         
    switch(action.type){

        case ADDITEM : 

          return {
            ...state,

             items : [...state, action.payload.data],
          }

        




        default : return state;
            
               
    }

     
}