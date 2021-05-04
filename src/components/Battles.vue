<template>
  <h1 class="battles__title">
    Main Battles Table
  </h1>
  <table class="table">
    <thead>
    <tr>
      <th>#</th>
      <th>Date</th>
      <th>Map</th>
      <th>Size</th>
      <th>Players</th>
      <th>Country</th>
      <th>Team</th>
      <th>Result</th>
      <th>Score</th>
    </tr>
    </thead>
    <tbody
        v-for="row in getBattles"
        :key="row.id"
        :row_data="row"
    >
    <tr>
      <td rowSpan="{{ row.rowSpan }}">{{ row.id }}</td>
      <td rowSpan="{{ row.rowSpan }}">{{ row.date }}</td>
      <td rowSpan="{{ row.rowSpan }}">{{ row.map }}</td>
      <td rowSpan="{{ row.rowSpan }}">{{ row.size }}</td>
      <td>{{ row.firstPlayer.nickname }}</td>
      <td>{{ row.firstPlayer.country }}</td>
      <td>{{ row.firstPlayer.team }}</td>
      <td>{{ row.firstPlayer.result }}</td>
      <td>{{ row.firstPlayer.score }}</td>
    </tr>
    <tr
        v-for="playerRow in row.otherPlayers"
        :key="playerRow.nickname"
        :row_data="playerRow"
    >
      <td>{{ playerRow.nickname }}</td>
      <td>{{ playerRow.country }}</td>
      <td>{{ playerRow.team }}</td>
      <td>{{ playerRow.result }}</td>
      <td>{{ playerRow.score }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">

import { store } from "@/store/store";
import { router } from "@/main";

const Battles = {
  name: "Battles",
  computed: {
    getBattles() {
      return store.getters.getBattles.map((battle: any)  => {
        const rowSpan = battle.players.length;
        const firstPlayer = battle.players[0];
        const otherPlayers = battle.players.slice(1);

        return {...battle, rowSpan, firstPlayer, otherPlayers};
      })
    }
  },
  mounted() {
    store.dispatch('getBattlesFromApi');
  },
  methods: {
    goToBattles() {
      router.push('/battles')
    }
  }
};

export default Battles;
</script>

<style scoped>
.battles__title {
  font-weight: 500;
  font-size: 32px;
  line-height: 60px;
  color: white;
  padding-top: 24px;
  margin-bottom: 24px;
}

.table{
  table-layout: fixed;
  width: 100%;
  margin-bottom: 20px;
  color: white;
}

.table th {
  color: #efefef;
  font-weight: bold;
  padding: 5px;
  background: #707070;
}

.table td{
  padding: 5px 10px;
  text-align: center;
}
.table tbody tr:nth-child(odd){
  background: #5b5b5b;
  opacity: 80%;
}

.table tbody tr:nth-child(even){
  background: #393939;
  opacity: 80%;
}
</style>
