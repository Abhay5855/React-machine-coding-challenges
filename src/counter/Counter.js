




import React from 'react'

import {useDispatch, useSelector} from "react-redux";
import { addCounter, DecrementCounter } from '../redux/actions/actions';





const Counter = () => {

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.CounterReducer);

  console.log(selector);

  
  return (
    <div>
      
       <button onClick={() => dispatch(addCounter())}>+</button>
        <h3>{selector.value}</h3>
       <button onClick={() => dispatch(DecrementCounter())}>-</button>

    </div>
  )
}


export default Counter;