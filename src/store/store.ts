import { createStore } from "vuex";
import { BattlesModule, battlesModule} from "@/store/modules/BattlesModule";
import { UsersModule, usersModule } from "@/store/modules/UsersModule";

export type Player = {
  nickname: string;
  country: string;
  team: number;
  result: number;
  score: number;
}

export type Battle = {
  "id": number;
  "date": string;
  "map":  string;
  "size": string;
  "players": Player[];
}

export type User = {
  "id": number
  "nickname": string;
  "register_date": string;
  "total_battles": number;
  "win_battles": number;
  "total_score": number;
}

export type rootStore = {
  battles: Battle[];
  users: User[];
  modules: {
    battles: BattlesModule;
    users: UsersModule;
  }
}

export const store = createStore<rootStore>({
  modules: {
    battles: battlesModule,
    users: usersModule,
  }
})
