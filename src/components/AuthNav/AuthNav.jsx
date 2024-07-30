import { Container, NavList, StyledLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Container>
      <NavList>
        <li>
          <StyledLink to="login">Вхід</StyledLink>
        </li>
        <li>
          <StyledLink to="register">Реєстрація</StyledLink>
        </li>
      </NavList>
    </Container>
  );
};

export default AuthNav;
