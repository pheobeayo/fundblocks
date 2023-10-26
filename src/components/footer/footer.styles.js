import styled from "styled-components";
import {devices} from "../../utils/device";

export const FooterParent = styled.div`
    width: 100vw;
    height: 50vh;
    background:#0D130F;


    @media ${devices.md} {
        padding: 40px 40px 96px 40px;
      }

    
`;

export const SubcenterWrapper = styled.div`
    width: 100vw;
    height: 50vh;
    background:#0D130F;
   

    
    
`;



export const OthersContainer = styled.div`
    width: 100vw;
    display: flex;

    @media ${devices.md} {
        flex-direction: row;
      }
  
    `;    

export const LogoContainer = styled.div`
width: 30%;
height: 5%;
display: flex;
flex-direction: row;
align-items:center;
margin-left: 2rem;


& img {
width: 15rem;
}



`;



export const ProductDiv = styled.div`
    width: 20%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1rem;
    color: #ffffff;
    margin-top: 5rem;

    & h1{
        margin-buttom: 0.5rem;
        font-weight: 250;
        font-size: 1.5rem;
    }
    
    & p{
        line-height: 2rem;
    }
   
    `;
export const CompanyDiv = styled.div`
    width: 20%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    margin-top: 5rem;

    & h1{
        margin-buttom: 0.5rem;
        font-weight: 250;
        font-size: 1.5rem;
    }
    
    & p{
        line-height: 2rem;
    }
   
    `;
export const ResourcesDiv = styled.div`
    width: 20%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    margin-top: 5rem;

    & h1{
        margin-buttom: 0.5rem;
        font-weight: 250;
        font-size: 1.5rem;
    }
    
    & p{
        line-height: 2rem;
    }
    @media ${devices.md} {
        flex-direction: row;
      }
    `;

 export const ConnectDiv = styled.div`
    width: 30%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    margin-top: 5rem;
    margin-left:4rem;

    & h2{
       line-height:0.5rem;
        font-weight: 250;
        font-size: 1.5rem;
        color:#fff;
    }

    & p {
        margin-left:8rem;
        font-size: 0.9rem;
        color:#fff;
    }

    & h6 {
        line-height:1rem;
         font-weight: 200;
         font-size: 1rem;
         color:#fff;
         
         margin-left:3rem;
     }
 
    

   
    `;
export const SocialDiv = styled.div`
   display: flex;
    
   & img {
    width: 1rem;
    margin-left:1rem;

   }
    `;