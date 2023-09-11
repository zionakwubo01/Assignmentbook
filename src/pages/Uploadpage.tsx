
import { useState } from "react";
import styled from "styled-components"


const Heropage = ()=>{

const [Images, setImages] = useState("")
const [preImage, setpreview] = useState("")

const Uploadimage = (e: any)=>{
    const file = e.target.file?.[0];
    setImages(file);

    if(file){
        const url = URL.createObjectURL(file);
        setpreview(url)
    }
}


const [title, setTitle] = useState('')
const [sum, setSum] = useState('')
const [author, setAuthor] = useState('')
const [select, setSelect] = useState('')

    return(
        <div>
  <Container>
    <Wrap>
<Pr><img src={preImage}/></Pr>
<Upload htmlFor="Pics">Upload Image</Upload>
<input
type="file"
id = "Pics" 
accept="image/png, image/jpg, image/jpeg" 
onChange={Uploadimage}
style={{display: "none"}}
/>
<In 
onChange={(e:any)=>{
    setTitle(e.target.value);
}}
placeholder="Enter title"></In>
<Inn 
onChange={(e:any)=>{
    setAuthor(e.target.value);
}}
placeholder="summary...."></Inn>
<In 
onChange={(e:any)=>{
    setSum(e.target.value);
}}
placeholder="Enter Author Name"></In>
<Cat 
onChange={(e:any)=>{
    setSelect(e.target.value);
}}
placeholder='Enter a category'></Cat>

<Submit>submit</Submit>

    </Wrap>
  </Container>
        </div>
    );
}
export default Heropage;
const Submit = styled.button`
padding: 10px 30px;
color: white;
background-color: red;
border: 0;

`
const Pr = styled.div`
height: 200px;
width: 300px;
background-color: ;
border: 2px solid silver;
`
const Upload = styled.label`cursor: pointer;
height: 40px;
width: 180px;
background-color: black;
border: 0;
color: white;
`
const In = styled.input`
width: 300px;
height: 40px;
color: gray;
background-color: white;
border: 2px solid silver;

`
const Cat = styled.input`
width: 300px;
height: 40px;
color: gray;
background-color: white;
border: 2px solid silver;
`
const Inn = styled.input`
width: 300px;
height: 80px;
color: gray;
background-color: white;
display: flex;
justify-content: flex-start;
border: 2px solid silver;
`
const Wrap = styled.div`
height: 550px;
width: 600px;
background-color: ;
border: 2px solid silver;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
`
const Container = styled.div`
height: 600px;
width: 100vw;
background-color: white;
display: flex;
align-items: center;
justify-content: center;

`