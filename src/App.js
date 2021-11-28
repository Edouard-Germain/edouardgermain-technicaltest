import './App.css';
import {react,useEffect,useState} from 'react'
import styled from 'styled-components'
import Header from './Components/Header'
import users from './users.json' 
// I stocked the API in a json file to work on the project offline
import Card from './Components/Card'
// modules installed : styled component, react-icons
const Body = styled.div`
  padding : 10%`
const Footer = styled.div`
    padding-top : 40px;
    padding-bottom : 10px;
    height : 80px;
    display: flex;
    justify-content : center ;
    background-color: #f28d21    ;
    position:relative;`

const CardContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;   
    row-gap : 20px;
    `
const Image = styled.img`
    height: 180px ;
    width : 140px; 
    border-radius: 50%;
    `

  
  const Button = styled.button `
    background: #f28d21;
    border:1px solid #f28d21;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:17px;
    text-decoration:none;
    text-shadow:0px 1px 0px #2f6627;

    `
  const App = ()=>{
    const [profilesData, setProfilesData] = useState(null)
    const [page, setPage] = useState(1)
    const [textparam,setTextparam]= useState()
    const [titleparam, setTitleparam] = useState()
    useEffect(() => {
      fetch(`https://randomuser.me/api/?page=${page}&results=6&seed=abc`)
        .then(response => response.json())
        .then(data => setProfilesData(data.results))
    },[page])

    const choosePage = (num) =>{
        setPage(num)
    }
    console.log(profilesData)

    if(profilesData == null) {
      return null
    } else {    
    return (
      <>
        <Header></Header>
        <Body>
        <CardContainer>
            {profilesData.map((profile)=>

                <Card profile={profile}/>
                  
            )}
          </CardContainer>
          </Body>
          <Footer>
              <Button onClick={()=>{choosePage(1)}}>1 </Button>
              <Button onClick={()=>{choosePage(2)}}> 2</Button>
              <Button onClick = {()=>{choosePage(3)}}>3</Button>
              <Button onClick = {()=>{choosePage(4)}}>4</Button>
          </Footer>
      </>
    )
  }
}

export default App;
