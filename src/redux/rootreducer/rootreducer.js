

import { combineReducers } from 'redux';
import { CounterReducer } from '../reducers/reducers';
import { TodoReducers } from '../reducers/todoReducers';
import { itemsReducer } from '../reducers/itemsReducer';
import { authReducer } from '../reducers/ecommerse_reducers/authReducer';



export const rootReducer = combineReducers({

      CounterReducer,
      TodoReducers,
      itemsReducer,
      authReducer,
})

