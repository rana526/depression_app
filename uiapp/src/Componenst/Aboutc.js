import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
width: 85%;
height: 500px;
display: flex;
justify-content:space-between ;
align-items:center;
margin: auto;
margin-top:100px ;
`
const Content = styled.div`
background-color:#1c2f36;
width:95%;
height: 90%;
display: flex;
flex-direction:column ;
justify-content:center ;
align-items:center;
margin: auto;
row-gap:50px;
color: #fff;
padding: 20px;
`
const Title = styled.h1`
font-size:40px;
font-weight:bold;


`
const Text = styled.div`
display: flex;
justify-content:start;
align-items:center;
line-height:40px;
font-size:20px ;


`
const Kalam = styled.p`

`

function Aboutc() {
  return (
    <Container>
        <Content>
            <Title>
                About US
            </Title>
            <Text>
                <Kalam>
                Welcome to our website! We are a team of mental health professionals dedicated to helping people understand and manage their depression. Our website offers a comprehensive depression test that can help you identify if you are suffering from depression and provide you with the resources and support you need to manage it. Our test is designed to be easy to use, accurate, and reliable. We also provide educational materials about depression, its causes, symptoms, and treatments. Our goal is to help people recognize the signs of depression early on so they can get the help they need before it becomes a more serious problem. We believe that everyone deserves access to quality mental health care, and we strive to make our website a safe space for anyone seeking information about depression. Thank you for visiting our website!
                </Kalam>
            </Text>
        </Content>
    </Container>
  )
}

export default Aboutc
