import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { DeleteTodo } from '../redux/actions/actions';

const TodoItems = () => {

    
      
    

    const dispatch = useDispatch();


    const handleCheckbox = () => {

        

         
    }



  // const displayTodos = todoitems?.todos?.map((item) => {
  //   return (
  //     <>
  //       <ul key={item.id}>
  //         <li>{item.text}</li>
  //         <li>
  //           <input type="checkbox" checked={item.completed} onChange={() => handleCheckbox()}/>
  //         </li>
  //         <li>
  //           <button onClick={() => dispatch(DeleteTodo(item.id))}>Delete</button>
  //         </li>
  //       </ul>
  //     </>
  //   )
  // })

  return <div></div>
}

export default TodoItems
