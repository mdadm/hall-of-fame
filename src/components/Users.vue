<template>
 <div>
   <div class="users-table__title">
     Users Table
   </div>
   <table class="table">
     <thead>
     <tr>
       <th>#</th>
       <th>Nickname</th>
       <th>Register Date</th>
       <th>Battles</th>
       <th>Win</th>
       <th>Total Score</th>
     </tr>
     </thead>
     <tbody>
     <tr
        v-for="row in getUsers"
        :key="row.id"
        :row_data="row"
     >
       <td>{{ row.id }}</td>
       <td>{{ row.nickname }}</td>
       <td>{{ row.register_date }}</td>
       <td>{{ row.total_battles }}</td>
       <td>{{ row.win_battles }}</td>
       <td>{{ row.total_score }}</td>
     </tr>
     </tbody>
   </table>
 </div>
</template>

<script lang="ts">

import { store } from "@/store/store";

const Users = {
  name: "Users",
  computed: {
    getUsers() {
      return store.getters.getUsers
    }
  },
  mounted() {
    store.dispatch('getUsersFromApi');
  }
};

export default Users;
</script>

<style scoped>

.users-table__title {
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
