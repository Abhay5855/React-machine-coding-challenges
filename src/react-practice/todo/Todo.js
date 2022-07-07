
import { useState } from "react";

const Todo = () => {

      const [todos , setTodos] = useState([]);


      const [values , setValues] = useState({

             text : '',
             date : '',
      })

      const handleChange = (e) => {

          let val = e.target.value;
          let name = e.target.name;
          setValues({...values , [name] : val});
      }

      const handleSubmit = (e) => {

           e.preventDefault();

           setTodos([...todos , values]);

           setValues({
              text : "",
              date : "",
              isCompleted : false,
           })
      }

      const deleteTodo = (val) => {

            setTodos(todos.filter(item => item !== val));
      }

    const handleCompletion = (id) => {

           let newTodos = [...todos];

           newTodos[id].isCompleted = !newTodos[id].isCompleted;

        setTodos(newTodos);
    }

      return (

        <div style={{display : 'flex' , flexDirection : 'column' , justifyContent : 'center', alignItems : 'center'}}>

         

           <form onSubmit={handleSubmit}>

           <input style={{width : '300px' , height : '40px'}} type='text' name='text'  value={values.text}  onChange={(e) => handleChange(e)}/>
          <input  style={{width : '300px' , height : '40px'}} type='date' name='date' value={values.date} onChange={(e) => handleChange(e)}/>

          <br />

           <button type="submit">submit</button>

           </form>

     
           {

              todos.map((item, idx) => {

                   return (
                          
                        
                       <ul key={idx} style={{display : 'flex' , flexDirection : 'row'}}>
                        <li style={{textDecoration :  item.isCompleted  ?  'line-through'  : 'none'  }}>{item.text} : {item.date}</li>
                        <button onClick={() => deleteTodo(item)}>Delete</button>
                        {/* <input type='checkbox' checked={item.isCompleted} onChange={() => handleCompletion(idx)}/> */}
                        <button onClick={() => handleCompletion(idx)}>{item.isCompleted ?  'UnCheck' : 'Check' }</button>
                       </ul>
                   )
              })
           }

        
        </div>
      )
}

export default Todo;