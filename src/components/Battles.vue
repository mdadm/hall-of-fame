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
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>2021-03-01</td>
      <td>Ardenns</td>
      <td>256x256</td>
    </tr>
    <tr>
      <td>2</td>
      <td>2021-03-02</td>
      <td>Forgotten Fields</td>
      <td>256x256</td>
    </tr>
    <tr>
      <td>3</td>
      <td>2021-03-03</td>
      <td>The Bridge</td>
      <td>128x128</td>
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

  }

  .table tbody tr:nth-child(even){
    background: #696868;
  }
</style>
