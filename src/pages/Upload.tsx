import styled from "styled-components";
import Header from "../static/Header";
import Uploadpage from "../pages/Uploadpage"

const Upload = ()=>{
    return(
        <div>
     <Header/>
     <Uploadpage/>
        </div>
    );
}
export default Upload;

const Container= styled.div`
height: 600px;
width: 100vw;
display: flex;
background-color: red;
align-items: center;
justify-content: center;
`