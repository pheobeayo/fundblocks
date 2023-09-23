import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarParent = styled.div`
    width: 90vw;
    height: 20vh;
    display: flex;
    background:#121113;

     `;

export const NavbarWrapper = styled.div`
     width: 100%;
     height: 90%;
     display: flex;
     position: relative;
     background:#121113;
 
      `;


export const LogoContainer = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    
  

    & img {
    width: 15rem;
    margin-top:3rem;
    }

    
    `;

 
export const BigLinkContainer = styled.div`
    display: flex;
    margin-left: 2rem;
    
`;

export const NavbarLink = styled(Link)`
 color:white;
 font-size: 1rem;
 font-family: sans-serif;
 text-decoration: none;
 color: #fff;
 margin-left:3rem;
 margin-top:5rem;
 

& focus{
    color: white;
}
& active{
    color: #fff;
}

`;


export const ButtonWrapper = styled.div`
display:flex;
margin-left:10rem;
margin-top: 3.5rem;


& img{
    margin-right:1rem;
    margin-top:0.5rem;
    width: 1.5rem;
    height:1.5rem;

}




`;

export const Button = styled.button`
display: flex;
background:linear-gradient(150deg, #69FEB0 40%, #5DE4F7 );
width:8rem;
border: 1px solid #5DE4F7; 
border-radius:5px;
color:#000;
height: 2.5rem;
align-items: center;
justify-content: center;



`;

