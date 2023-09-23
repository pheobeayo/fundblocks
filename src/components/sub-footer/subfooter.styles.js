import styled from "styled-components";

export const SubfooterParent = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    background:#181B19;

    
`;

export const CenterWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background:#181B19;
   

    
    
`;

export const SubscribeContainer = styled.div`
    width: 100vw;
    height: 50%;
    margin-top:3rem;
    margin-left: 25rem;
  
    
    
    
    & h3 {
      margin-top: 1.2rem;
      color: #ffffff;
      margin-left: 7rem;
      font-size:1.8rem;
      font-weight:700;
     
      
      
  }

  
  & h4 {
    line-height:1rem;
    color: #ffffff;
    margin-left: 8rem;
    font-weight:200;
    
}
    & p {
      line-height:1rem;
      color: #ffffff;
      margin-left: 9rem;
      margin-bottom:2rem;
      
  }
    `;

   





export const ButtonContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
margin-left: 1rem;

`;


export const SearchBarContainer = styled.div`
  display: flex;
  width:  40%;
  height: 15%;
  margin-left: 5rem;
  
`;

export const SearchBarForm = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 5px;
  height: 90%;
  background: #181B19;

  & .search-input {
    border: 0;
    outline: none;
    background: #181B19;
    color: #fff;
    font-size: 1rem;
    margin-left:3rem;
    

  }
  & .search-input::placeholder {
    color: #fff;
    font-size: 0.7rem;
    margin-left: 1rem;
    margin-top: 2rem;
  }
  
`;

export const Button = styled.button`
background:linear-gradient(150deg, #69FEB0 40%, #5DE4F7 );
width:5rem;
border: 1px solid #5DE4F7; 
border-radius:5px;
color:#000000;
height: 1.8rem;
align-items: center;
margin-top:0.275rem;
margin-bottom:0.25rem;
font-size: 1rem;
display:flex;
margin-left:3rem;


`;

