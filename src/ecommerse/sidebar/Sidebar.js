


import React from 'react'
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <SidebarContainer>

      
       {/* filters and clear button */}
       <div claassName='filterbtn__tab'>

        <p>
            Filters
        </p>

        <button className='clear__btn'>Clear</button>

       </div>
        
    </SidebarContainer>
  )
}

export default Sidebar




const SidebarContainer = styled.div`



max-width : 15rem;
background : #000;
color : #fff;
margin-top : 2em;
padding : 1em;
border-radius : 5px;
`