import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { Container } from './AppBar.styled';

const AppBar = () => {
  return (
    <Container>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </Container>
  );
};

export default AppBar;
