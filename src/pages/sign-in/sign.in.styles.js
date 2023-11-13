import styled from "styled-components";
import {devices} from "../../utils/device";

export const SigninParent = styled.div`
    width: 110vw;
    height: 150vh;
    display: flex;
    flex-direction: column;
    background:#121113;
    padding: 40px 32px 56px 32px;
 
    @media ${devices.md} {
      padding: 40px 40px 40px 40px;
    }

   

     `;

export const SigninWrapper = styled.div`
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


export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background:#121113;
    margin-left:2rem;
   
    & h3 {
        margin-top:2rem;
        font-size:1.5rem;
        font-weight:450;
        line-height:0.1rem;
        color:#fff;
        margin-left:5rem;
    
        
    }
   
    & form {
        width: 60%;
        height: 80%;
        margin-left: 8rem;
        margin-top:3rem;
        color:#fff;
        
    }
 
  & link {
        color: #FFF;
    }

  & link:hover {
         color: #00F;
      }
    

     
    `;

export const SecondWrapper = styled.div`
    width: 75vw;
    height: 142.8vh;
    background:linear-gradient(150deg, #fff 30%, #69FEB0 60%, #5DE4F7 );
    display: flex;
    flex-direction: column;
    padding-left: 3rem;
    

  & h1{
        color:#1B2924;
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 2rem;
    }

  & h2 {
    color:#100625;
    font-size: 1.5rem;
    font-weight: 450;
    line-height:1.5rem;
   }
 
   & p {
    color:#100625;
    font-size: 0.9rem;
    font-weight: 400;
   }

   & img {
    margin-right: 1rem;
    height: 1rem;
   }
    `;
export const FormHeader = styled.div`
    width: 80%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;

    & img{
        margin-top: 1rem;
    }

   
    `;



     
   
   


  