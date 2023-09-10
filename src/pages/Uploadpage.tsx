
import styled from "styled-components"


const Heropage = ()=>{
    return(
        <div>
  <Container>
    <Wrap>
<Pr></Pr>
<Upload>Upload Image</Upload>
<In placeholder="Enter title"></In>
<Inn placeholder="summary...."></Inn>
<In placeholder="Enter Author Name"></In>
<Cat>Enter a category</Cat>

    </Wrap>
  </Container>
        </div>
    );
}
export default Heropage;
const Pr = styled.div`
height: 200px;
width: 300px;
background-color: blue;
`
const Upload = styled.button`
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
const Cat = styled.div`
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