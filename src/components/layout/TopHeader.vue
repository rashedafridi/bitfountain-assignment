<template>
<div>
  <header>
    <nav>
      <h1>
        <router-link to="/">medical devices</router-link>
      </h1>
      <ul>
        <!-- <li>
          <router-link to="/">All </router-link>
        </li> -->
        <li v-if="isLoggedIn">
          <button @click="logout">Logout</button>
        </li>
        <li v-else>
          <router-link to="/auth">Login</router-link>
        </li>
      </ul>
    </nav>
   
  </header>
     <search-box></search-box>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import SearchBox from "../ui/SearchBox.vue";
export default Vue.extend({
  components: { SearchBox },
  computed: {
    isLoggedIn(): boolean {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout(): void { 
      this.$store.dispatch("logout");
      this.$router.replace("/auth");
    },
  },
});
</script>
<style scoped>
header {
  width: 100%;
  height: 4rem;
  background-color: #793a00;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #ffeed2;
  border-radius: 5px;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
  color: aliceblue;
}


</style>
