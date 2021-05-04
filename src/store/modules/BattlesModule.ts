import axios from "axios";
import { Module } from "vuex";
import { Battle, rootStore } from "@/store/store";

export type BattlesState = {
  battles: Battle[];
}

export type BattlesModule = Module<BattlesState, rootStore>

export const battlesModule: BattlesModule = {
  state() {
    return {
      battles: []
    }
  },
  getters: {
    getBattles(state) {
      return state.battles;
    }
  },
  mutations: {
    setBattles(state, battles) {
      state.battles = battles
    }
  },
  actions: {
    getBattlesFromApi(state) {
      axios('http://localhost:3000/battles', {
        method: "GET"
      }).then((response) => {
          state.commit('setBattles', response.data)
        }
      )
    }
  },
}
