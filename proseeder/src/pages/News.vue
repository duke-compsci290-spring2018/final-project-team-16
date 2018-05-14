<template>

    <div >
      <nav-bar/>
      <br/>
      <br/>
      <b-row>
        <b-col cols="5">
        <b-list-group class="somePadding">
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              Cras justo odio
              <b-badge variant="primary" pill>14</b-badge>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              Dapibus ac facilisis in
              <b-badge variant="primary" pill>2</b-badge>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              Morbi leo risus
              <b-badge @click="expand" variant="primary" pill>1</b-badge>
            </b-list-group-item>
        </b-list-group>
        </b-col>

        <b-col class="somePadding"  cols="5">
          <b-card>
            <h5>
              Company Updates
            </h5>
            <ul>
            <li>hello
            </li>
              <li>hello
            </li>

            </ul>
          </b-card>
        </b-col>
      </b-row>
    </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';
  import NavBar from '../components/NavBar';

  export default {
        name: "news.vue",
    components: {
      NavBar
    },
    data () {
      return {
       expand: false,
      }
    },
    }
</script>

<style scoped>
  .somePadding {
    margin: 30px;
  }
</style>
