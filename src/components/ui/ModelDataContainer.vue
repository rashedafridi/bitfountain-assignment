<template>
  <div to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="show">
        <header>
          <slot name="header">
            <h2>{{ title }}</h2>
          </slot>
        </header>
        <section>
          <search-box></search-box>
          <div class="devise-list-container">
            <div class="no-data" v-if="!isModelData">No data</div>
            <model-data-container
              v-for="modelData in modelDataObj"
              :key="modelData.id"
              :DataType="modelData.DataType"
              :Brand="modelData.Brand"
              :Model="modelData.Model"
              :Name="modelData.Name"
              :DisplayName="modelData.DisplayName"
              :Description="modelData.Description"
              :Status="modelData.Status"
              :GroupId="modelData.GroupId"
              :ProtocolOrder="modelData.ProtocolOrder"
            ></model-data-container>
          </div>
        </section>
        <menu v-if="!fixed">
          <slot name="actions">
            <base-button @clicked="$emit('close')">Close</base-button>
          </slot>
        </menu>
      </dialog>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ModelDataContainer from "./ModelDataCard.vue";
import SearchBox from "./SearchBox.vue";
export default Vue.extend({
  components: {
    "model-data-container": ModelDataContainer,
    SearchBox,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
    modelDataObj: Array,
  },
  computed: {
    isModelData(): boolean {
      return !!this.modelDataObj.length;
    },
  },
  methods: {
    tryClose() {
      this.$emit("close");
    },
    dosom() {
      console.log("clicked");
    },
  },
});
</script>

<style scoped>
.no-data{
  font-size: larger;
  text-align: center;
  margin-top: 2rem;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 10vh;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 87vh;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  overflow-x: hidden;
  background-color: white;
}

header {
  background-color: #C2185B;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  z-index: 400;
  right: 0.3rem;
  bottom: 0.3rem;
  position: absolute;
  display: inline-block;
  /* display: flex;
  justify-content: flex-end; */
  margin: 0;
}
.devise-list-container {
  width: 100%;
  height: 65vh;
  margin-bottom: 0.5rem;
  overflow-y: scroll;
  /* overflow-x: hidden; */
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.dialog-enter-active {
  transition: all 0.3s ease-out;
  
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  dialog {
    /* left: calc(50% - 20rem); */
    /* width: 80rem; */
  }
}
</style>
