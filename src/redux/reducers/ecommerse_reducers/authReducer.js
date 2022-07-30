import { ADDAUTH } from "../../action_constants/actionConstants"






const initialState = {

      auth : [],
}


export const authReducer = (state = initialState , action) => {

             switch (action.type){


                case ADDAUTH  : 

                 const {email , password , image} = action.payload

                return {
                    ...state,
            
                     auth: [
                      ...state.auth,
            
                      {
                        email,
                        password,
                        image,
                      }
                    ],
                  }


                default : return state


             }
        
}