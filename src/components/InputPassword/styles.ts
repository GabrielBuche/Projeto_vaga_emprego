import { Button} from "antd";
import { styled } from "styled-components";


export const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const PasswordToggle = styled(Button)`
  position: absolute;
  top: 45%;
  right: 8px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;