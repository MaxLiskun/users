import { createStore } from "vuex";

import allUsers from "./modules/allUsers"


const store = createStore({
  modules: {
    allUsers,
  },
});


//export default store;
export default store;
