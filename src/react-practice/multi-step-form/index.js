// Your PM has asked you to create the most annoying signup form in the world: a form that has 4 fields but on a series of 4 different screens. Your name, email, date of birth, and password will be entered separately into the site:
// The specs are as follows:

//1. Back links appear on every screen other than the first one, going back to the step the user was just on
//2. Input is required on every screen prior to proceeding to the next.
//3. On the last screen, provide a submit button that calls a handleSubmit({ name: ..., email: ..., password: ... }) function passing in the values of all the fields
//4 Show a success screen

import { useState } from 'react'

const MultiStep = () => {
  const [active, setActive] = useState(0);


  const [formData , setFormData] = useState({

      name : '',
      email : '',
      date : '',
      password : '',


  })

  const [data , setData] = useState([]);

  //   Function to render Component
  const RenderComponents = () => {
    if (active === 0) {
      return <FirstStep type='text' placeholder='name' formData={formData} setFormData={setFormData}  />
    } else if (active === 1) {
      return <SecondStep type='email' placeholder='email' formData={formData} setFormData={setFormData} />
    } else if (active === 2) {
      return <ThirdStep type='date' placeholder='date'  formData={formData} setFormData={setFormData}/>
    } else {
      return <FourthStep type='password' placeholder='password' formData={formData} setFormData={setFormData}/>
    }
  }


  const handleNext = () => {
     
      let current  = active;

      setActive(++current);

  }


  const handlePrevious = () => {

    let current  = active;

    setActive(--current);

        
  }

  console.log(formData);


    const handleSubmit = () => {

        
        let obj = {

             name : formData.name,
             email : formData.email,
             date : formData.date,
             password : formData.password,
        }
         
        setData([...data , obj]);

          console.log(data);

           
    }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >

      {
        active === 0  ? ''  :   <button style={{border : 'none' , outline : 'none' , cursor : 'pointer', padding : '0 !important'}} onClick={handlePrevious}>Previous</button> 
      }

      <br />
      <br />
      {RenderComponents()}

      <br />

      <div style={{display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop : '3em',
        justifyContent : 'space-between'
        }}>
        

      
         

        <button onClick={() => {

              if(active === 3){

                   handleSubmit();
              }else {

                  handleNext()
              }
        }} >{active === 3 ? 'Submit' : 'Next'}</button>
      </div>
    </div>
  )
}
const FirstStep = ({type , placeholder, formData, setFormData, onChange}) => {
  return (
    <>
      <input type={type} placeholder={placeholder} value={formData.name} onChange={(e) => setFormData({...formData , name : e.target.value})}/>
    </>
  )
}

const SecondStep = ({type , placeholder, formData, setFormData}) => {
  return (
    <>
      <input type={type} placeholder={placeholder} value={formData.email} onChange={(e) => setFormData({...formData , email : e.target.value})}/>
    </>
  )
}
const ThirdStep = ({type , placeholder, formData, setFormData}) => {
  return (
    <>
      <input type={type} placeholder={placeholder} value={formData.date} onChange={(e) => setFormData({...formData , date : e.target.value})}/>
    </>
  )
}

const FourthStep = ({type , placeholder, formData, setFormData}) => {
  return (
    <>
      <input type={type} placeholder={placeholder} value={formData.password} onChange={(e) => setFormData({...formData , password : e.target.value})}/>
    </>
  )
}

export default MultiStep
