import React from 'react'
import Posts from '../Componenst/Posts';
import Background from '../Componenst/Background';
import styled from 'styled-components';
import Nav2 from '../Componenst/Nav2';



const Content = styled.div`
width: 100%;
height: 753px;
/* background-color:blue ; */
`
const Navving = styled.div`

`
const Container = styled.div`
height: 600px;
width:90%;
margin:auto;
margin-top:50px ;
/* background-color:black ; */
display: flex;
justify-content: space-around;
gap:30px;
align-items:center;
`

const Posting = styled.div`
display: flex;
flex: 1;
justify-content: center ;
`

const Backing =styled.div`
display: flex;
flex: 1;
justify-content: center ;

`



function Home() {

    

return (

<Content>

    <Navving>
        <Nav2/>
    </Navving>
    <Container>

        <Posting>
            <Posts/> 
        </Posting>
        <Backing>
            <Background/>
        </Backing>
        
    </Container>

</Content>




)
}
export default Home ; 