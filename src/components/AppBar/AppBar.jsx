import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { Container } from './AppBar.styled';
import { useAuth } from 'hooks';

const AppBar = () => {
  const {isLoggedIn} = useAuth();

  return (
    <Container>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Container>
  );
};

export default AppBar;
