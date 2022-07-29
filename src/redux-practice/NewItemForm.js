import React from 'react'

const NewItemForm = () => {

  const handleSubmit = (e) => {

       e.preventDefault();

       if(typeof onSubmit === 'function'){

           
       }

       
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name'/>
        <input type='number' placeholder='price'/>
        <input type='number' placeholder='Quantity'/>
      </form> 
    </div>
  )
}

export default NewItemForm