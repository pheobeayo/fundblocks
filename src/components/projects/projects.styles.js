import styled from "styled-components";
import {devices} from "../../utils/device";


export const ProjectsParent = styled.div`
    width: 100vw;
    height: 130vh;
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

  & hr {
    color:#FFDAB9;
    width: 30%;
  }
 
    
      `;

export const SummaryWrapper = styled.div`
      width: 100vw;
      height: 50vh;
      display: flex;
      color:#fff;
      background:#121113;


      @media ${devices.md} {
        flex-direction: row;
      }

      @media ${devices.tab} {
        flex-basis: 56%;
      }
     
       `;
     

export const SummaryContainer1 = styled.section`
      width: 25%;
      height: 45%;
      gap: 0.5rem;
      justify-content: space-around;
      align-items: center;
      margin-left:10rem;

      & img {
        margin-top:2rem;
      }

      @media ${devices.tab} {
        flex-direction: row;
      }

      @media ${devices.md} {
        & h4 {
          font-size: 0.8rem;
        }
      } 
    `;

export const SummaryContainer2 = styled.section`
      width: 45%;
      height: 45%;
      gap: 0.5rem;
      justify-content: space-around;
      align-items: center;
      margin-left:10rem;

      @media ${devices.tab} {
        flex-direction: row;
      }

      @media ${devices.md} {
        & p {
          font-size: 0.8rem;
        }
      } 

      
    `;

export const SummaryWrapper2 = styled.div`
      width: 100vw;
      height: 50vh;
      display: flex;
      color:#fff;
      background:#121113;
     margin-top: 8rem;


     
     @media ${devices.md} {
      flex-direction: row;
    }

    @media ${devices.tab} {
      flex-basis: 56%;
    }
     
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
      font-size:2rem;
      line-height:normal;
   }

  

   & h3 {
      color: #fff;
      margin-bottom: 1.8rem;
      line-height:normal;
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
        font-size: 1rem;
      }
    } 
    `;

    