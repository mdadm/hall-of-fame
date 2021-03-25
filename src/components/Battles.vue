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
      <th>Teams</th>
      <th>Result</th>
      <th>Score</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td rowspan="2">1</td>
      <td rowspan="2">2021-03-01</td>
      <td rowspan="2">Ardenns</td>
      <td rowspan="2">128x128</td>
      <td>User1</td>
      <td>USSR</td>
      <td>1</td>
      <td>win</td>
      <td>10000</td>
    </tr>
    <tr>
      <td>User2</td>
      <td>Germany</td>
      <td>2</td>
      <td>lose</td>
      <td>8500</td>
    </tr>
    <tr>
      <td rowspan="4">2</td>
      <td rowspan="4">2021-03-02</td>
      <td rowspan="4">Forgotten Fields</td>
      <td rowspan="4">256x256</td>
      <td>User1</td>
      <td>USSR</td>
      <td>1</td>
      <td>win</td>
      <td>10000</td>
    </tr>
    <tr>
      <td>User2</td>
      <td>Germany</td>
      <td>2</td>
      <td>lose</td>
      <td>8500</td>
    </tr>
    <tr>
      <td>User3</td>
      <td>Japan</td>
      <td>1</td>
      <td>win</td>
      <td>5500</td>
    </tr>
    <tr>
      <td>User4</td>
      <td>USA</td>
      <td>2</td>
      <td>lose</td>
      <td>7600</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Battles"
}
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
    background: #5f5e5e;
  }

  .table td{
    padding: 5px 10px;
    text-align: center;
  }
  .table tbody tr:nth-child(odd){
    background: #777777;
    opacity: 80%;
  }

  .table tbody tr:nth-child(even){
    background: #535252;
    opacity: 80%;
  }
</style>
