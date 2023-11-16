import styled from "styled-components";
import { devices } from "../../styles/deviceSizes";

export const LoginMainContainer = styled.div`
  width: 80vw;
  max-width: 400px;
  padding: 10px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #b7bad2;
  border: 1px solid #2c394e;
  border-radius: 4px;
  line-height: 3rem;
  font-family: Raleway, sans serif;
  font-size: 1rem;
  font-weight: 800;
  color: #2c394e;

  @media ${devices.tablet} {
    width: 400px;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2.5rem;
  margin: 10px 20px;
  width: 70vw;
  max-width: 350px;

  @media ${devices.tablet} {
    width: 350px;
  }

  label {
    text-transform: uppercase;
    color: #2c394e;
    font-size: 1.2rem;
    letter-spacing: 0.05rem;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 5px 20px;
    line-height: 2rem;
    font-size: 1rem;
    font-weight: 200;
    letter-spacing: 0.075rem;
    color: #d4d4d4;
    background-color: #404040;
    border: 0.5px solid skyblue;
    margin-bottom: 10px;
    border-radius: 4px;

    :focus {
      border: 1px solid #9fd7ee;
    }
  }
`;

export const LoginButton = styled.button`
  width: 70vw;
  max-width: 350px;
  margin: 30px 20px;
  padding: 5px 20px;
  justify-content: center;
  line-height: 2rem;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  background-color: #65627e;
  color: #f5f5f5;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-family: Raleway, sans serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05rem;

  @media ${devices.tablet} {
    width: 350px;
  }

  :hover {
    background-color: #484848;
  }
`;

export const LoginFooter = styled.div`
  margin-top: 20px;
  line-height: 1.5rem;
  cursor: pointer;

  :hover {
    color: #666666;
  }
`;
