import axios from "axios";
import { Module } from "vuex";
import { User, rootStore } from "@/store/store";

export type UsersState = {
  users: User[];
}

export type UsersModule = Module<UsersState, rootStore>

export const usersModule: UsersModule = {
  state() {
    return {
      users: []
    }
  },
  getters: {
    getUsers(state) {
      return state.users;
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    }
  },
  actions: {
    getUsersFromApi(state) {
      axios('http://localhost:3000/users', {
        method: "GET"
      }).then((response) => {
          state.commit('setUsers', response.data)
        }
      )
    }
  }
}
