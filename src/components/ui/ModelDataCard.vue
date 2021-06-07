<template>
  <div class="card">
    <h1>{{DisplayName}}</h1>
    <div><span><b>brand:</b> {{Brand||"no data"}}</span> <span ><b>Model:</b> {{Model||"no data"}}</span></div>
    <p> <b> Description: </b>{{Description||"no data"}}</p>
    <div><b>Status:</b> {{Status||"no data"}}, <b>GroupId: </b>{{GroupId||"no data"}}, <b>ProtocolOrder:</b> {{ProtocolOrder||"no data"}}</div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    DataType: String,
    Brand: String,
    Model: String,
    Name: String,
    DisplayName: String,
    Description: String,
    Status: String,
    GroupId: String,
    ProtocolOrder: String,
  },
});
</script>
<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  margin-top: 2rem;
  max-width: 80rem;
  color: #212121;
  background-color: #f0d8e1;
}
.card h1{
  text-align: center;
}

</style>
