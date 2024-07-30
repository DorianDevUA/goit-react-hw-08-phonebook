import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: steelblue;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0;
  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;
