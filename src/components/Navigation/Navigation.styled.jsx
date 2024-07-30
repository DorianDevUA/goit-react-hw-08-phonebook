import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  background-color: palevioletred;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0;
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  &.active {
    color: ${({ theme }) => theme.colors.red};
  }
`;
