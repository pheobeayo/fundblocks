import styled from "styled-components";
import {devices} from "../../utils/device";


export const ProjectsParent = styled.div`
    width: 100vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    background:#121113;

    
    @media ${devices.md} {
      padding: 40px 40px 96px 40px;
    }

    

     `;

export const ProjectsWrapper = styled.div`
     width: 100vw;
     height: 60vh;
     display: flex;
     flex-direction: column;
     background:#121113;
 
    
      `;

      

export const SummaryContainer1 = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-left:15rem;
  
    @media ${devices.tab} {
      flex-direction: row;
    }
    @media ${devices.md} {
      flex-direction: row;
      
    }
    ${
      '' /* width: 90%;
    height: 45%;
    display: flex;
    gap: 0.5rem;
    justify-content: space-around;
    align-items: center;
    margin-top: 7rem;
    margin-left: 5rem; */
    };
    `;

    
    
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;
    gap: 16px;

    & h2 {
        color: #fff;
        font-size:2.5rem;
        line-height:0.5rem;
     }

    

     & h3 {
        color: #fff;
        margin-bottom: 2rem;
        line-height:1rem;
     }

    
       
    @media ${devices.md} {
      & h2 {
        font-size: 1.5rem;
      }
      & h3 {
        font-size: 1rem;
      }
    }
    @media ${devices.tab} {
      & h3 {
        font-size: 1.25rem;
      }
    }

   
    `;

    