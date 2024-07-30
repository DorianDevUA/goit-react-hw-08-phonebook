import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/selectors';
import { Container } from './UserMenu.styled';

const UserMenu = () => {
  const userName = useSelector(authSelectors.selectUserName);

  return (
    <Container>
      <span>Вітаємо, {userName}</span>
      <button type="button">Вийти</button>
    </Container>
  );
};

export default UserMenu;
