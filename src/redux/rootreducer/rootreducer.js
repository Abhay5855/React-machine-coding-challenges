

import { combineReducers } from 'redux';
import { CounterReducer } from '../reducers/reducers';
import { TodoReducers } from '../reducers/todoReducers';
import { itemsReducer } from '../reducers/itemsReducer';



export const rootReducer = combineReducers({

      CounterReducer,
      TodoReducers,
      itemsReducer,
})

