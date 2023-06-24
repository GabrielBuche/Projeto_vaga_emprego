import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledNavLink = styled(NavLink)`
  &.selected {
    background-color: #1890ff;
    color: white;
  }
`;