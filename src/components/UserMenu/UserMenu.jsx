import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/selectors';
import { Container } from './UserMenu.styled';
import defaultAvatar from './default-avatar.png';
import { authOperations } from 'redux/auth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.selectUserName);
  const avatar = defaultAvatar;

  const handleLogOut = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <Container>
      <img src={avatar} alt={userName} width="32" />
      <span>Вітаємо, {userName}</span>
      <button type="button" onClick={handleLogOut}>
        Вийти
      </button>
    </Container>
  );
};

export default UserMenu;
