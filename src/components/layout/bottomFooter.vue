<template>
  <footer>
    <div>@ Rashed Afridi © {{ date }}</div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
div {
  color: #C2185B;
  margin-top: 0.5rem;
  padding: 0.5rem;
}
</style>
