import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {captions} from './Advices';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';



const Container = styled.div`
background-color:#017efd ;
background: linear-gradient(to top right, #017efd 0%, #1c2f36 89%);

width: 70%;
height: 500px;
display: flex;
justify-content:space-between ;
align-items:center;
margin: auto;
margin-top:100px ;
`
const Content = styled.div`
/* background-color:#017efd ; */
width: 90%;
height: 70%;
display: flex;
background: linear-gradient(to top right, #017efd 0%, #1c2f36 89%);
justify-content:space-between ;
align-items:center;
margin: auto;
`
const Button = styled.button`
flex: 0.8;
width: 10px;
height: 99%;
color: #fff;
background: linear-gradient(to top right, #017efd 0%, #1c2f36 89%);
border: none;
  font-weight:bold;
  cursor: pointer;
  &:hover{
    height: 110%;
    color: #fff;
    transition: all 0.4s ease-in ;
    -moz-transition: all 0.4s ease-in;
    -webkit-transition: all 0.4s ease-in;
    -ms-transition: all 0.4s ease-in;
    -o-transition: all 0.4s ease-in;
  }


`
const Texting = styled.div`
flex: 16;
display: flex;
justify-content:center;
align-items:center;
margin: auto;
padding: 20px;
`
const Qoute = styled.h1`
color: #fff;
`



function QuotesSlider() {
  const [quotes, setQuotes] = useState([]);



  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get(captions)
      .then(res => setQuotes(res))
      .catch(err => console.log(err));
  }, []);

  const handleNextQuote = () => {
    setCurrentIndex(currentIndex + 1)
    if(currentIndex===8){
      setCurrentIndex(currentIndex);
    }
  }


  const handlePreviousQuote = () => {    
    setCurrentIndex(currentIndex - 1)
    if(currentIndex===0){
      setCurrentIndex(currentIndex);
    }
  };

  return (  
    <Container>  
        <Content>
          <Button  onClick={handlePreviousQuote}><ArrowBackIos/></Button>
          <Texting>
            <Qoute>{captions[currentIndex].text}</Qoute>
          </Texting>  
          <Button onClick={handleNextQuote}><ArrowForwardIosIcon/></Button>  
        </Content>
    </Container>  

  );  
  }

export default QuotesSlider;


