import React from 'react'
import Sign from '../Componenst/Sign-up/Sign';
import styled from 'styled-components'
import { Link } from 'react-router-dom';




const Container = styled.div`
height:600px;
padding: 20px 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-color:#017efd ;
color: #4a4758;
`
const Top = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
const Bottom = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Login = styled(Link)`
  font-size: 18px;
  font-weight:bold;
  cursor: pointer;
  color:#fff;
  text-decoration: none;
  &:hover{
    letter-spacing:2px ;
    color: #fff;
    transition: all 0.4s ease-in ;
    -moz-transition: all 0.4s ease-in;
    -webkit-transition: all 0.4s ease-in;
    -ms-transition: all 0.4s ease-in;
    -o-transition: all 0.4s ease-in;
  }
`

const New = styled(Link)`
  font-size: 18px;
  font-weight:bold;
  cursor: pointer;
  color:#fff;
  text-decoration: none;
  &:hover{
    letter-spacing:2px ;
    color: #fff;
    transition: all 0.4s ease-in ;
    -moz-transition: all 0.4s ease-in;
    -webkit-transition: all 0.4s ease-in;
    -ms-transition: all 0.4s ease-in;
    -o-transition: all 0.4s ease-in;
  }
`






function Signing() {
  return (
    <Container>
        <Bottom>
            <Sign/>    
        </Bottom>
    </Container>
  )
}

export default Signing