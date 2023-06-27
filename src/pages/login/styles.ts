import { Button } from 'antd';
import styled from 'styled-components';


export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const LoginCard = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



export const ButtonLogin = styled(Button)`
  width: 100%;
  height: 50px;
  background-color: blue;
  border-radius: 5px;
`;

export const TextBtn = styled.span`
  color: white;
  font-size: 16px;
`;

export const ContainerSingUpText = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Text = styled.span`
  color: gray;
  font-size: 16px;
  margin-right: 5px;
`;

export const SingUp = styled(Button)`
  color: blue;
  cursor: pointer;
  font-size: 16px;
`;

export const LineSeparator = styled.div`
  width: 80%;
  height: 0.5px;
  background-color: #ccc;
  margin-bottom: 10px;
`;

export const ButtonSingUp = styled(Button)`
  width: 50%;
  height: 50px;
  background-color: blue; 
  border-radius: 5px;
`;


export const ErrorText = styled.div`
  margin-bottom: 10px;
  
`;
