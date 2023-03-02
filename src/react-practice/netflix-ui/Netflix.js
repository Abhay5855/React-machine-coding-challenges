

import React from 'react'
import { movieList } from '../../data/data'

const Netflix = () => {
  return (
    <div>
     
     {
        movieList.map((item) => (
                   <div key={item.id}>

               
                  <Card img={item.img} title={item.title} id={item.id}/>

                  </div>
               
             
        ))
     }

      
    </div>
  )
}

const Card = ({img , title}) => {

       return (

            <div>

                <img className='netflix-img' src={img} alt='img'/>
                <p>{title}</p>
             
            </div>
       )

   

}





export default Netflix

