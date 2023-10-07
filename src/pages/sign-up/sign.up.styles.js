import styled from "styled-components";

export const SignupParent = styled.div`
    width: 110vw;
    height: 180vh;
    display: flex;
    flex-direction: column;
    background:#121113;

     `;

export const SignupWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:#121113;

    `;


export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background:#121113;
    margin-left: 2rem;
   
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
        height: 130%;
        margin-left: 8rem;
        margin-top:3rem;
        color:#fff;
        
    }
    & h4 {
        margin-top:1rem;
        font-size:1rem;
        font-weight:450;
        line-height:1rem;
        color:#fff; 
    }
    
    & p {
        color:#fff;
        line-height:1.5rem;
    }
    `;

export const SecondWrapper = styled.div`
    width: 75vw;
    height: 180vh;
    background:linear-gradient(150deg, #fff 30%, #69FEB0 60%, #5DE4F7 );
    display: flex;
    flex-direction: column;
    padding-left: 5rem;
    padding-top:7rem;

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

export const SummaryContainer = styled.section`
      width: 90%;
      height: 45%;
      display: flex;
      gap: 0.5rem;
      justify-content: space-around;
      align-items: center;
      margin-top:15rem;
      margin-left:5rem;
    `;

export const FormHeader = styled.div`
    width: 70%;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;

    & img {
        margin-top: 1rem;
    }
      
    
    `;



export const DivideWrapper = styled.div`
  display: flex;
  width: 85%;
 
  gap: 0.5rem;
  
 
`;

export const Side = styled.div`
  width: 50%;
`;




