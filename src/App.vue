<template>
  <div id="app">
    <!-- this displays the navbar and tabs when app is running -->
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">Invasion Of Normandy</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <!-- these show up when user is logged in -->
          <b-nav-item v-if="$store.state.isUserLoggedIn" to="/Message"><i style="padding: 5px"> Send Message </i></b-nav-item>
          <b-nav-item v-if="$store.state.isUserLoggedIn" to="/Messages"><i style="padding: 5px"> Messages </i></b-nav-item>
          <b-nav-item v-if="$store.state.isUserLoggedIn" to="/Chat"><i style="padding: 5px"> Chat  Room </i></b-nav-item>
          <b-nav-item v-if="$store.state.isUserLoggedIn" to="/CreateChatMessage"><i style="padding: 5px"> CreateChatMessage </i></b-nav-item>
          <b-nav-item v-if="$store.state.isUserLoggedIn" to="/Users"><i style="padding: 5px"> Users </i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to ="/Welcome"><i style="padding: 5px"> Welcome </i></b-nav-item>
          <b-nav-item to ="/AboutMe"><i style="padding: 5px"> About </i></b-nav-item>
          <b-nav-item to ="/Map"><i style="padding: 5px"> Map </i></b-nav-item>
          <b-nav-item to ="/Legend"><i style="padding: 5px"> Map Legend</i></b-nav-item>
          <b-nav-item v-if="!$store.state.isUserLoggedIn" to="/login"><i style="padding: 5px"> Login </i></b-nav-item>
          <b-nav-item v-if="!$store.state.isUserLoggedIn" to="/register"><i style="padding: 5px"> Register </i></b-nav-item>
          <!-- this displays when user is logged in -->
          <b-nav-item v-if="$store.state.isUserLoggedIn" @click="logout"><i style="padding: 5px"> Logout </i></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    // logs user out
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      window.location.reload()
      this.$router.push('/Map')
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #3a3333;
  }
  .VueTables a {
    cursor: pointer;
  }
</style>
