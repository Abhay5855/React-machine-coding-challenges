import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Addtodos } from "../redux/actions/actions";
import TodoItems from "./TodoItems";


const TodoUI = () => {
  const [todo, setTodo] = useState("");

    const dispatch = useDispatch();
    const selector = useSelector((state) => state.TodoReducers);


 

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(Addtodos(todo));

    setTodo('');

    
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add todos"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      
    </div>
  );
};

export default TodoUI;
