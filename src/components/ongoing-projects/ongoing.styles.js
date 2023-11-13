import styled from "styled-components";
import {devices} from "../../utils/device";

export const ProjectsParent = styled.div`
    width: 100vw;
    height: 150vh;
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
  `;

      
export const SummaryContainer1 = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-left:5rem;
  
    @media ${devices.md} {
      flex-direction: row;
      
    }

    @media ${devices.tab} {
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

export const SummaryContainer2 = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 1rem;
   margin-left:5rem;
    
  
    @media ${devices.md} {
      flex-direction: row;
      
    }

    @media ${devices.tab} {
      flex-direction: row;
    
    }
    ${
      '' /* display: flex;
    gap: 0.5rem;
    justify-content: space-around;
    align-items: center;
    margin-top: 5rem;
    margin-left: 5rem; */
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
export const SummaryCard = styled.div`
    width:25%;
    display: flex;
    flex-direction: column;
    background: #181B19;
    border-radius:10px;
    border: 1px solid white;
  
    & h3{
      color: #fff;
      font-size: 1rem;
      font-weight:500;
      margin-left:1rem;
    }

    & h4{
      color: #fff;
      font-size: 1rem;
      font-weight:500;
      margin-left:1rem;
    }
  
    & p{
      font-size:0.8rem;
      color: #FFDAB9;
      margin-left:1rem;
    }
  
    & img{
      border-radius:10px;
      
    }

    hr{
      width:90%;
      margin-left:1rem;
    }

    
  `;
    
    