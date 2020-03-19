import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import * as API from "@/api/api";
import { Strat } from '@/api/types';

export default new Vuex.Store({
  state: {
    loggedIn: false,
    allStrats: Array<Strat>()
  },
  mutations: {
    setLoginStatus(state, nValue: boolean) {
      state.loggedIn = nValue;
    },
    setAllStrats(state, nValue: Strat[]) {
      state.allStrats = nValue;
    },
    removeStrat(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.allStrats.length; i++) {
        if (state.allStrats[i].id == id) {
          index = i;
          break;
        }
      }
      state.allStrats.splice(index, 1);
    }
  },
  actions: {
    loadAllStrats(state) {
      API.LoadAllStrats()
        .then(strats => {
          state.commit("setAllStrats", strats)
        })
        .catch(console.log)
    },
    deleteStrat(state, id: string) {
      API.DeleteStrat(id)
        .then(() => {
          state.commit("removeStrat", id);
        })
        .catch(console.log)
    }
  },
  modules: {}
});
