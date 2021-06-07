export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.AutoLogout = false;
  },
  setAutoLogout(state) {
    state.AutoLogout = true;
  },
};
