import styled from "styled-components"
import books from "../asssets/book.jpg"
import { NavLink } from "react-router-dom";
import {FaSearch} from "react-icons/fa"

const Header = ()=>{
    return(
        <div>
     <Container>
         <Image>
            <Logo src={books}/>
     <Text>Bookstore</Text>
       </Image>
 
       <End>
         <Search>
            <FaSearch/>
         </Search>
      <NavLink to="/upload-books">
      <Button>Upload Books</Button>
      </NavLink>
       </End>
     </Container>
        </div>
    );
}
export default Header;
const Text = styled.text`
font-size: 30px;
font-weight: bolder;
color: black;
`
const Image = styled.div`
// height: 40px;
// width: 200px;
// background-color: purple;
margin-left: 40px;
display: flex;
align-items: center;
gap: 10px;
`

const Logo = styled.img`
width: 40px;
height: 40px;
object-fit: contain;
`

const End = styled.div`
display: flex;
flex-direction: row;
gap: 15px;
align-items: center;
margin-right: 40px;
`

const Search = styled.div`
font-size: 20px;
font-weight: 500;
color: gray;
`

const Button = styled.button`
cursor: pointer;
padding: 10px 20px;
background-color: crimson;
border: 0;
font-size: 18px;
border-radius: 10px;
`

const Container = styled.div`
background-color: tan;
height: 100px;
width: 100vw;
display: flex;
justify-content: space-between;
align-items: center;
`