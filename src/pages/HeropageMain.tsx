
import styled from "styled-components"
import video from "../asssets/pexels-francesco-ungaro-17137721.jpg"
import {FaSearch} from "react-icons/fa"
import React from "react"
const HeropageMain = ()=>{

    return(
        <div>
  <Container>
<Video src= {video}></Video>
<Hold>
   <Text>Explore the worlds leading Books <br/>
and Autors</Text>
<Tex>Millions of designers and agencies around the world showcase their portfolio work<br/>on Dribbble - the home to the world’s best design and creative professionals.</Tex>
<Div>
<FaSearch style={{marginLeft: "20px" , fontSize: "20px"}}/>

<Input placeholder="Search By Author Name">
</Input>
</Div>
</Hold> 
  </Container>
        </div>
    );
}
export default HeropageMain;
const Hold = styled.div`
height: 100%;
width: 100%;
background-color: ;
position: absolute;
top: 0;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
flex-direction: column;
`
const Input = styled.input`
height: 35px;
width: 290px;
background-color: white;
border-radius: 25px;
border: 0;
outline: 0;
margin-left: 10px;
color: gray;
font-size: 20px;
coloe: gray;

`
const Div = styled.div`
height: 60px;
width: 350px;
background-color: white;
border-radius: 40px;
display: flex;
align-items: center;
flex-direction: row;
gap: 10px;
`
const Tex = styled.text`
font-size: 15px;
text-align: center;
color: white;

`
const Text = styled.text`
font-size: 30px;
font-weight: bolder;
text-align: center;
color: white;
`
const Video = styled.img`
height:100%;
width: 100%;
background-color: blue;
position: absolute;
top:0;
`

const Container = styled.div`
  height:600px;
  width: 100vw;
  background-color: red;
  object-fit: contain; 
  display:flex;
gap: 30px;
align-items:center;
position: relative;
`
