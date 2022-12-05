import { createStore } from "vuex";
import Modules from "./modules";

import createPersistedState from "vuex-persistedstate";

export const store = createStore({
  strict: true,
  modules: {
    Modules,
  },
  plugins: [createPersistedState()],
});
