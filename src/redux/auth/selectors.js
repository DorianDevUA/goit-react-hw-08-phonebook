const selectUser = state => state.auth.user;
const selectUserName = state => state.auth.user.name;
const selectToken = state => state.auth.token;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  selectUser,
  selectUserName,
  selectToken,
  selectIsLoggedIn,
  selectIsRefreshing,
};

export default authSelectors;
