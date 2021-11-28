import react from 'react'
import styled from 'styled-components'

const Container = styled.div`;
    padding-bottom: 30px;
    display: flex;
    justify-content: space-around;
    align-items : center ;
    background-color: #f28d21;
    position:relative;

`
const Title = styled.h2`
    color: white;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
`
const Header =()=>{

    return(
        <Container>
            <Title> Edouard Germain</Title>
            <Title> Technical Test</Title>
            <Title>Netatmo</Title>
        </Container>
    )
}
export default  Header 