import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";
type authType={
  userId: string|null,
  token: string|null,
  AutoLogout: boolean,}
export default {
  state():authType {
    return {
      userId:null,
      token: null,
      AutoLogout: false,
    }; 
  },
  mutations,
  actions,
  getters,
};
 