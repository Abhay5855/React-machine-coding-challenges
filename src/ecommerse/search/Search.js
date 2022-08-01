


import React from 'react'
import styled from 'styled-components'
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <InputContainer>
        <Input placeholder='Search...'/>
        <BsSearch  style={{color : 'red'}}/>
    </InputContainer>
  )
}

export default Search


const Input = styled.input`

outline : none;
border : none;


`

const InputContainer = styled.div`

display : flex;
align-items : center;
justify-content : space-between;
border-radius : 5px;
padding : 0.5em;
height : fit-content;
background : #fff;
width : 20vw;

@media (max-width : 600px){

    width : 100%;
    justify-content : space-between;

    
}

`