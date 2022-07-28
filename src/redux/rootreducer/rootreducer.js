

import { combineReducers } from 'redux';
import { CounterReducer } from '../reducers/reducers';
import { TodoReducers } from '../reducers/todoReducers';



export const rootReducer = combineReducers({

      CounterReducer,
      TodoReducers,
})

