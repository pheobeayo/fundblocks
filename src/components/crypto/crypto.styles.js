import styled from "styled-components";
import {devices} from "../../utils/device";


export const ProjectsParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:#121113;
    padding: 40px 32px 56px 32px;

    
    @media ${devices.md} {
      padding: 40px 40px 96px 40px;
    }


     `;

export const ProjectsWrapper = styled.div`
display: flex;
flex-direction: column;
background:#121113;

@media ${devices.tab} {
  flex-basis: 56%;
}

     & p{
        font-size: 1.5rem;
        margin-left: 28rem;
        color: #fff;
        margin-bottom:1rem;
     }

     @media ${devices.tab} {
      & p {
        font-size: 1rem;
        color: #fff;
      }
    }
 
    
`;

      

    

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;
    gap: 16px;
    margin-right:5rem;

    & h2 {
        color: #fff;
        font-size:2rem;
        line-height:0.5rem;
     }

    

     & h3 {
        color: #fff;
        margin-bottom: 1.8rem;
        line-height:1rem;
        
     }

     

    
     
   @media ${devices.md} {
    & h2 {
      font-size: 1.5rem;
      color: #fff;
    }
    & h3 {
      font-size: 1rem;
      color: #fff;
    }
    }
    @media ${devices.tab} {
      & h3 {
        font-size: 1.25rem;
        color: #fff;
      }
    }
       
`;

    