import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
width: 80%;
height: 500px;

background: #017efd;
background: -webkit-linear-gradient(left, #017efd, #1c2f36);
background: -moz-linear-gradient(left, #017efd, #1c2f36);
background: -ms-linear-gradient(left, #017efd, #1c2f36);
background: -o-linear-gradient(left, #017efd, #1c2f36);
background: linear-gradient(to right, #017efd, #1c2f36);

margin:100px auto;
display: flex;
flex-direction:column ;
flex: 1;
justify-content:center;
align-items:center;
margin-top:100px;
padding-top:30px ;
`
const Form = styled.form`
width: 80%;
height: 85%;

margin:auto ;
display: flex;
justify-content:center;
align-items:center;



`
const Content = styled.div`
display: flex;
flex-direction:column ;
justify-content:center;
align-items:center ;
gap: 10px;
`

    const Test = styled.div`
    color: #fff;
    font-size: 40px;
    font-weight:bold;
    `

    const Texting = styled.textarea`
    width: 800px;
    height: 350px;
    padding: 12px 20px;
    margin: auto;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;
    ::placeholder{
        color: #d0cece;
        font-size:15px ;
        font-weight:bold;
    }
    `



const Button = styled.button`
background-color:#1c2f36;
width: 800px;
height: 50px;
border-radius:10px;
border: #fff 1px solid;
color: #fff;
font-size:30px;
font-weight:bold;

&:hover{
width:100% ;
cursor: pointer;
background-color:#fff;
color: #000;
border: #000 1px solid;
letter-spacing:3px;

transition: all 0.4s ease-in;
    -moz-transition: all 0.4s ease-in;
    -webkit-transition: all 0.4s ease-in;
    -ms-transition: all 0.4s ease-in;
    -o-transition: all 0.4s ease-in;
}

`



function TextAreaForm () {
const [text, setText] = useState('');

const handleChange = (e) => {
    setText(e.target.value);
};

const navigate = useNavigate(); 

const handleSubmit = (e) => {
    e.preventDefault();





    axios.post('/api/text', { text })
    .then(res => console.log(res))
    .catch(err => console.log(err));
    setText(''); 


    navigate('/response');


};















return (
    <Container>
        <Test> Do The Test Now !</Test>
        <Form onSubmit={handleSubmit}>
            <Content>
                <Texting required placeholder='Write Your Explanation here ...' value={text} onChange={handleChange} />
                <Button type="submit">
                    Test
                </Button>
            </Content>
        </Form>  
    </Container>
);  
};  
export default TextAreaForm;