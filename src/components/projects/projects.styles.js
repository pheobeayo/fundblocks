import styled from "styled-components";
import { devices } from "../../utils/device";


export const ProjectsParent = styled.div`
    width: 100vw;
    height: 150vh;
    display: flex;
    flex-direction: column;
    background:#121113;

    @media ${devices.md} {
      padding: 40px 40px 96px 40px;
    }

     `;

export const ProjectsWrapper = styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     background:#121113;
 
    
      `;

export const SummaryWrapper = styled.div`
      width: 100vw;
      height: 50vh;
      display: flex;
      color:#fff;
      background:#121113;
  
     
       `;


export const SummaryContainer1 = styled.section`
display: flex;
flex-direction: column;
gap: 40px;

@media ${devices.tab} {
  flex-direction: row;
}
${''// width: 25%;
  // height: 45%;
  // gap: 0.5rem;
  // justify-content: space-around;
  // align-items: center;
  // margin-left:10rem;

  // & img {
  // margin-top:2rem;
  }
    `;

export const SummaryContainer2 = styled.section`
display: flex;
flex-direction: column;
gap: 40px;
margin-top: 1rem;

@media ${devices.tab} {
  flex-direction: row;
}
${'' // width: 45%;
  // height: 45%;
  // gap: 0.5rem;
  // justify-content: space-around;
  // align-items: center;
  // margin-left:10rem;

  }
      
    `;

export const SummaryWrapper2 = styled.div`
      width: 100vw;
      height: 50vh;
      display: flex;
      color:#fff;
      background:#121113;
     margin-top: 8rem;
     
       `;



export const Header = styled.div`
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;
    margin-left:13rem;
    margin-top:3rem;

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
       
     & img {
      margin-top: 1rem;
     }

    @media ${devices.md} {
      & h2 {
        font-size: 2rem;
      }
    }
    @media ${devices.tab} {
      & h3 {
        font-size: 1.25rem;
      }
    }

    `;

