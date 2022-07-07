import Child from "./Child";
import { useState } from "react";


const Parent = () => {
      
      const [value , setValue] = useState('');

    const onSubmit = (e, val) => {

           e.preventDefault();

            
    }

     const onChange = (e) => {

            setValue(e.target.value);
     }
            

       return (

        <>
           

        <h2>This is parent</h2>


        <p>{value}</p>



        <Child onSubmit={onSubmit} onChange={onChange} setValue={setValue}/>
        
        
        
        </>
       )
}


export default Parent;