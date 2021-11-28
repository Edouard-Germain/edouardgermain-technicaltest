import App from "../App"
import {useState,react} from "react"
import styled from 'styled-components'
import {RiContactsFill} from 'react-icons/ri'
import {AiOutlineMail} from 'react-icons/ai'
import {BsCalendarEvent} from 'react-icons/bs'
import {BiMap} from 'react-icons/bi'
import {AiTwotonePhone} from 'react-icons/ai'
import {RiLockPasswordFill} from 'react-icons/ri'
const Image = styled.img`
    height: 120px ;
    width : 120px; 
    border-radius: 50%;
    margin: auto;
    `
  const Cardbox = styled.div`
    justify-content: center;
    display : flex;
    flex-direction : column;
    width : 300px;
    height: 400px;
    margin: 0 auto;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    max-width : 100%;
  `

  const InfoContainer = styled.div`
    background-color: white;
    width: 300px;
    height : 130px;
    background-color: ;
    align-items: flex-end;
    padding-top: 10px;
    `
  const TextContainer = styled.div`
    width : 300px;
    justify-content: center;

    `
  const IconsContainer = styled.div`
    padding-top : 20px;
    display : flex;
    flex-direction: row;
    justify-content : space-around;
    height : 60px;
    `
  const Title = styled.h5`
    color : gray;
    font-size : 28px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    `
  const Text = styled.p`
    font-size : 20px;
    font-weight: 600px;
    justify-text : center; 
    font-family: 'Roboto', sans-serif;
    text-align: center;
    `

const Card =(props)=>{
    const [textparam,setTextparam]= useState()
    const [titleparam, setTitleparam] = useState()

    const handleHover = ( info, title) => {
        setTextparam(info)
        setTitleparam(title)
      }
    return (
        <>
            <Cardbox>
                <Image src={props.profile.picture.large}/>
                  <InfoContainer>
                      <Title>{titleparam}</Title>
                      <TextContainer>

                      <Text>{textparam}</Text>
                    </TextContainer>
                    </InfoContainer>  

                  <IconsContainer>
                        <RiContactsFill 
                            style ={{color: "gray", fontSize:"18px"}}
                            onMouseEnter={() => {
                              handleHover(`${props.profile.name.first} ${props.profile.name.last}`, "Hi my name is : ")
                            }}/>
                          <AiOutlineMail 
                            style ={{color: "gray", fontSize:"18px"}}
                            onMouseEnter={() => {
                              handleHover(`${props.profile.email}`, "My email is : ")
                            }}/>
                          <BsCalendarEvent
                            onMouseEnter={() => {
                              handleHover(`${props.profile.dob.age} years old`, "I am")
                            }}
                            style ={{color: "gray", fontSize:"18px"}}/>
                          <BiMap 
                            onMouseEnter={() => {
                              handleHover(`${props.profile.location.street.number} ${props.profile.location.street.name}`, "My adresse is")
                            }}
                            style ={{color: "gray", fontSize:"18px"}}/>
                          <AiTwotonePhone 
                            onMouseEnter={() =>{
                              handleHover(`${props.profile.phone}`, "My phone number is : ")
                            }}
                            style ={{color:"gray", fontSize:"18px"}}/>
                            
                          <RiLockPasswordFill 
                            onMouseEnter={() =>{
                              handleHover(`${props.profile.login.password}`, "My password is : ")
                            }}                            
                            style ={{color: "gray", fontSize:"18px"}}/>
                      </IconsContainer>
            </Cardbox>
        </>
    )
    
}

export default Card