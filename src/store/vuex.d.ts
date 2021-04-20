import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { User, Battle } from "@/store/store";

declare module '@vue/runtime-core' {
  interface State {
    users: User[],
    battles: Battle[]
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
