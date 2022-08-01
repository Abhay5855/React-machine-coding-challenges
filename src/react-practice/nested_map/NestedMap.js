



import React from 'react'



const data = [

      {
        id : 1,
        name : 'Abhay',
        email : 'ap@gmail.com',
        address : [
            {
                hN : 10,
                country : 'India',
                area : 'Nagpur',

            },
            {
                hN : 20,
                country : 'India',
                area : 'Pune',

            },
            {
                hN : 30,
                country : 'India',
                area : 'Buldhana',

            }
        ]
        
      },
      {
        id : 1,
        name : 'Sayja',
        email : 'sayja@gmail.com',
        address : [
            {
                hN : 10,
                country : 'India',
                area : 'Nashik',

            },
            {
                hN : 20,
                country : 'India',
                area : 'Pune',

            },
            {
                hN : 30,
                country : 'India',
                area : 'Delhi',

            }
        ]
        
      },
      {
        id : 3,
        name : 'Pratiksha',
        email : 'pratik@gmail.com',
        address : [
            {
                hN : 10,
                country : 'India',
                area : 'Delhi',

            },
            {
                hN : 20,
                country : 'India',
                area : 'Pune',

            },
            {
                hN : 30,
                country : 'India',
                area : 'Mumbai',

            }
        ]
        
      }


]

const NestedMap = () => {
  return (
    <div>

        <table style={{width : '100%'}}>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Address</td>
                    
                </tr>
            </tbody>

            {
                data.map((item) => (

                      <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>
                        {
                         item.address.map((item) => (
                             <>
                             <tr>
                             <td>{item.country}</td>
                             <td>{item.area}</td>
                             </tr>
                             </>
                         ))
                       }

                        </td>

                     
                      </tr>
                ))
            }
        </table>
    </div>
  )
}

export default NestedMap