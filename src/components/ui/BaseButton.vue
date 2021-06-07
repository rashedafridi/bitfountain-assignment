<template>
  <button v-if="!link" :class="mode" @click="$emit('clicked')">
    <slot></slot>
  </button>
  <!-- <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link> -->
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #F8BBD0;
  border: 1px solid #8f857e;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #008a9c;

}

.flat {
  background-color: transparent;
  color: #612700;
  border: none;
}



.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #ffe6d2;
}
</style>
