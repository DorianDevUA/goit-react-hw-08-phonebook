import { useAuth } from 'hooks';
import { NavList, StyledNav, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <StyledNav>
      <NavList>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        {isLoggedIn && (
          <li>
            <StyledNavLink to="contacts">Phonebook</StyledNavLink>
          </li>
        )}
      </NavList>
    </StyledNav>
  );
};

export default Navigation;
