import { NavList, StyledNav, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <StyledNav>
      <NavList>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="phonebook">Phonebook</StyledNavLink>
        </li>
      </NavList>
    </StyledNav>
  );
};

export default Navigation;
