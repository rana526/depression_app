import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import TextAreaForm from './TextAreaForm';



const Content = styled.div`
display: flex;
justify-content: space-between ;
align-items:center ;
flex-direction:column ;
`
const Title = styled.h2`
    font-size:70px;
    text-align:center;
    line-height: 1.3;
    margin-bottom: 16px;
    color: #0b1c39;
`
const Paragraph = styled.p`
    font-size: 18px;
    line-height: 1.4;
    margin-bottom: 20px;
`
const Button = styled(Link)`
    border: 0;
    background: #333;
    color: #fff;
    padding: 21px 47px;
    font-size: 20px;
    position: relative;
    z-index: 1;
    text-decoration:none;


&:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #017efd;
    z-index: -1;
    transition: all 0.6s ease-in;
    -moz-transition: all 0.6s ease-in;
    -webkit-transition: all 0.6s ease-in;
    -ms-transition: all 0.6s ease-in;
    -o-transition: all 0.6s ease-in;
}
&:hover::before{
width:100% ;
cursor: pointer;
}
`

function Posts() {
return (
    <Content>
        <Title>
        Your life deserves the best !
        </Title>
        <Paragraph>
        Take care of yourself - eat healthy, exercise, get enough sleep, etc.
        </Paragraph>
        <Button to="/quiz">
            Try test Now
        </Button>
    </Content>
)
}
export default Posts ; 