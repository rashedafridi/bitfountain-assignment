<template>
  <div class="card" @click="$emit('openMedicalDataModul',BrandId ,Name)">
    <h1>{{Name}}</h1>
    <h2> <b>BrandId: </b> {{BrandId || "No data"}}</h2>
    <div><span><b>TypeId: </b>{{TypeId|| "No data"}}</span> <span> </span><b>Comment: </b> {{Comment|| "No data"}} </div>
    <p><b>Description: </b>{{Description|| "No data"}}</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props:{
    BrandId :String,
    Name:String,
    TypeId:Number,
    Comment:String,
    Description:String,
  },
  methods: {
    tryClose() {
      this.$emit("close");
    },
  },
})
</script>
<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem 0.5rem;
  /* margin-top: 2rem; */
  max-width: 80rem;
  background-color: #fff0f5;
  overflow: hidden;
}
.card:hover {
  margin-top: -0.3rem;
  margin-bottom: 0.8rem;
}
</style>
