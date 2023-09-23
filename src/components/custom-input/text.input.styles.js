import styled from "styled-components";

export const FormLabel = styled.label`
  color: #ffffff;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 2rem;
`;

export const FormControl = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "79%")};
  border: 1px solid #E6DDF8;
  border-radius: 5px;
  height: ${(props) => (props.width ? props.width : "8%")};
  padding: 0 1rem;
  background: #E6DDF8;
  margin-top: 1rem;

  & .form-input {
    border: 0;
    outline: none;
    flex: 1;
    background: #E6DDF8;
    color: #020C17;
    font-size: 1rem;
  }

  & .form-input::placeholder {
    color: #020C17;
    line-height: 20px;
    font-size: 0.8rem;
  }

`;