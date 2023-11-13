import styled from "styled-components";
import { devices } from "../../utils/device";


export const HomeParent = styled.div`
    background:#121113;
`;

export const HomeWrapper = styled.div`
  background:#121113;
  display: flex;
  flex-direction: column;

 
`;



export const BarWrapper = styled.div`
      width: 100vw;
      height: 10vh;
      display: flex;
      flex-direction: column;
      margin-top:2rem;
      margin-left:5rem;
      margin-bottom:3rem;
      `;

export const CentreWrapper = styled.div`
padding: 40px 32px;
position: relative;
display: flex;
flex-direction: column;
gap: 28px;


@media ${devices.md} {
   padding: 0px 40px 132px 40px;
 }
 @media ${devices.tab} {
   flex-direction: row;
 }     
                              
 
   
      `;
      
export const TextContainer = styled.div`
margin-top:2rem;
h1 {
    font-size: 4.5rem;
    color: #fff;
    font-weight: 500;
    line-height: normal;
 }

 & h2 {
    font-size: 1rem;
    color: #fff;
    font-weight: 500;
    line-height:2rem;
    margin-top: 1rem;
   
 }

 & h3{
    font-size:1.3rem;
    color:#fff;
    font-weight:500;
    line-height:1.5rem;
 }

@media ${devices.tab} {
  flex-basis: 56%;
}

@media ${devices.sm} {
  & h1 {
    font-size: 4rem;
  }
  & h2 {
    font-size: 1rem;
  }
  & h3 {
    font-size: 1rem;
  }

}

@media ${devices.xl} {
  & h1 {
    font-size: 5.5rem;
  }
}

`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-top:2rem;

    @media ${devices.tab} {
      width: 80%;
    }
   
    
    
`;

export const HeroContainer = styled.div`

@media ${devices.tab} {
   flex-basis: 44%;
 }




`;


export const LButton = styled.button`
display: flex;
background:linear-gradient(150deg, #69FEB0 40%, #5DE4F7 );
width:10rem;
border: 1px solid #5DE4F7; 
border-radius:5px;
color:#000;
height: 2.5rem;
align-items: center;
justify-content: center;


`;

export const EButton = styled.button`
display: flex;
background:#121113;
width:10rem;
border: 1px solid  #5DE4F7; 
border-radius:5px;
color:#ffffff;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-left:1rem;


`;

export const SButton = styled.button`
display: flex;
background: #8BC34A;
width:15rem;
border: 1px solid  #8BC34A; 
border-radius:5px;
color:#000;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-left:20rem;
margin-top:2rem;


`;




