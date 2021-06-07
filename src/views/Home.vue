<template>
  <div class="home">
    <top-header></top-header>
    <div class="flex-cointainer">
      <base-button>Add devise Model</base-button>
    </div>
    <div class="grid-container">
      <medical-devices-card
        v-for="modelType in modelTypeObj"
        :key="modelType.id"
        :BrandId="modelType.BrandId"
        :Name="modelType.Name"
        :TypeId="modelType.TypeId"
        :Comment="modelType.Comment"
        :Description="modelType.Description"
        @openMedicalDataModul="openMedicalDataModul"
      ></medical-devices-card>
    </div>
    <!-- <base-dialog :show="!!error" title="An error occurred" @close="popModul">
      <p>{{ error }}</p>
    </base-dialog> -->
    <model-data-container
      :show="!!error"
      title="Model Data"
      :modelDataObj="modelDataObj"
      @close="popModul"
    ></model-data-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopHeader from "../components/layout/TopHeader.vue"; // @ is an alias to /src
import MedicalDevicesCard from "../components/ui/MedicalDevicesCard.vue";

import ModelDataContainer from "../components/ui/ModelDataContainer.vue";
export default Vue.extend({
  name: "Home",
  components: {
    "top-header": TopHeader,
    "medical-devices-card": MedicalDevicesCard,
    ModelDataContainer,
  },
  data() {
    return {
      error: false,
      modelTypeObj: [],
      modelDataObj: [],
    };
  },
  created() {
    this.modeltype();
  },
  methods: {
    popModul(): void {
      this.error = !this.error;
      console.log("popModul");
    },
    modeltype(): void {
      fetch("http://163.47.115.230:30000/api/overview/modeltype", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: this.$store.getters.token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.modelTypeObj = data;
          //console.log("this.modelTypeObj",this.modelTypeObj)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    openMedicalDataModul(BrandId:string ,Name:string): void {
      fetch(`http://163.47.115.230:30000/api/overview/modeldata/${BrandId}/${Name}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: this.$store.getters.token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.modelDataObj = data;
          console.log("this.modelDataObj",this.modelDataObj)
          this.popModul()
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
});
</script>
<style scoped>
.grid-container {
  /* width: 100vh; */
  display: grid;
  grid-template-columns: repeat(6,16.5%);
  /* padding: 10px; */
}
.flex-cointainer {
  margin-top: 1rem;
  display: flex;
  justify-content: end;
}


@media (max-width: 1200px) {
.grid-container {
  grid-template-columns: repeat(5,20%);
}
}
@media (max-width: 1024px) {
.grid-container {
  grid-template-columns: repeat(4,25%);
}
}
@media (max-width: 900px) {
.grid-container {
  grid-template-columns: repeat(3,33.3%);
}
}
@media (max-width: 768px) {
.grid-container {
  grid-template-columns: repeat(3,33%);
}
}
@media (max-width: 600px) {
.grid-container {
  grid-template-columns: repeat(2,50%);
}
}
</style>
