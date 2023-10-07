import styled from "styled-components";

export const NavigateButton = styled.button`
  margin-top: 2.1rem;
  background: linear-gradient(150deg, #69FEB0 40%, #5DE4F7 );
  border-radius: 4px;
  padding: 12px 30px;
  width: ${(props) => (props.width ? props.width : "26.5rem")};
  height: 2.8rem;
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 15px;
  border: 1px solid #5DE4F7;
  display: block;
  outline: none;
  
`;

