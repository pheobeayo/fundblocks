import styled from "styled-components";
import { devices } from "../../utils/device";


export const HomeParent = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction: column;
    background:#121113;
`;

export const HomeWrapper = styled.div`
     width: 100vw;
     height: 150vh;
     background:#121113;

 
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
width: 50vw;
position: absolute;
top: 55%;
left: 30%;
transform: translate(-50%, -50%);
color:#fff;
align-content:center;
justify-content: center;

 & h1 {
    font-size: 4.5rem;
    color: #fff;
    font-weight: 600;
    line-height:4rem;
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
@media ${devices.md} {
   & h1 {
     font-size: 3rem;
   }
   & p {
     font-size: 1.25rem;
   }
 }

 @media ${devices.tab} {
   flex-basis: 56%;
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
width: 50vw;
position: absolute;
top: 75%;
left: 75%;
transform: translate(-50%, -50%);
align-content:center;
justify-content: center;

@media ${devices.tab} {
   flex-basis: 44%;
 }

 @media ${devices.md} {
  flex-basis: 70%;
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



export const WelcomeWrapper = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#121113;
align-items: center;

`;    

export const OngoingContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#121113;
align-items: center;
margin-top:28rem;
`;  

export const FundedContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#0F160F;
align-items: center;
margin-top:48rem;
`;  

export const TestimonialsContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#0F160F;
align-items: center;
margin-top:48rem;
`;  

export const ProjectsContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#0F160F;
align-items: center;
margin-top:10rem;
`;  

export const CryptoContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#0F160F;
align-items: center;
margin-top:25rem;
`;  

export const FooterWrapper = styled.div`
width: 100%;
height: 30%;
display: flex;
background:#0F160F;
align-items: center;
margin-top:3rem;
 
 
`;

export const SubfooterWrapper = styled.div`
width: 100%;
height: 30%;
display: flex;
background:#121113;
align-items: center;
margin-top:-13rem;

 
`;

