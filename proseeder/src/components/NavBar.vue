<template>
  <b-navbar toggleable="md" type="light" variant="light">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">
      <img id="navImage" src="https://charlottebusinessresources.com/wp-content/uploads/IDEA-Fund-Partners.jpg" alt="BV">
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item @click="navigate('Home')">My Portfolio</b-nav-item>
        <b-nav-item @click="navigate('Portfolio')" >Full Portfolio</b-nav-item>

        <b-nav-item @click="navigate('News')" >News</b-nav-item>
        <b-nav-item @click="navigate('Dealflow')" >Current Deals</b-nav-item>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">




        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item @click="navigate('Profile')">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';
  import firebase from 'firebase';


  export default {
    name: "nav-bar",
    methods: {
      logout:function() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('/')
      })
      },
      navigate:function(loc) {
        this.$router.replace('/'+loc)

      },
    }
  }
</script>

<style scoped>
#navImage {
  height: 40px;
}
</style>
