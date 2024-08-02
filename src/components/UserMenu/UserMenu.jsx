import { useDispatch } from 'react-redux';
import { Container } from './UserMenu.styled';
import defaultAvatar from './default-avatar.png';
import { authOperations } from 'redux/auth';
import { useAuth } from 'hooks';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;

  const handleLogOut = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <Container>
      <img src={avatar} alt={user.name} width="32" />
      <span>Вітаємо, {user.name}</span>
      <button type="button" onClick={handleLogOut}>
        Вийти
      </button>
    </Container>
  );
};

export default UserMenu;
