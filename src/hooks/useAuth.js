import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export const useAuth = () => {
  const user = useSelector(authSelectors.selectUser);
  const token = useSelector(authSelectors.selectToken);
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  return {
    user,
    token,
    isLoggedIn,
    isRefreshing,
  };
};
