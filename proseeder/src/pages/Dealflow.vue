<template>
  <div>
    <nav-bar/>
    <br>
    <br>

    <b-container>

    <b-col class="pot" align-v="center">




      <b-card  class="somePadding" title="Some Company"
              sub-title="Series X">
        <p class="card-text">
          Rockets,drones,blockchain, cloud, everything, it's a deal          </p>
     </p>
        <b-btn variant="primary"> Information </b-btn>

        <b-btn variant="success" v-if="follow" @click="follow=!follow"> Follow </b-btn>
        <b-btn variant="outline-success" v-if="!follow" @click="follow=!follow"> Followed </b-btn>

        <div v-if="committed">
        <label class="somePadding" v-if="!follow && committed">$Commited</label>
        </div>

        <div v-if="!committed">
          <b-form-input v-if="!follow"  class="somePadding" v-model="text1"
                        type="number"
                        placeholder="Commitment "></b-form-input>
          <b-btn v-if="!follow" @click="committed=!committed"> Commit Investment </b-btn>
        </div>

      </b-card>
    </b-col>
    </b-container>
  </div>
</template>

<script>

  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';

  import NavBar from '../components/NavBar';

  export default {
        name: "dealflow.vue",
    data () {
      return {
        msg: "welcome",
        company: '',
        follow: true,
        committed: false,
      }
    },
    components: {

      'nav-bar': NavBar,
    },
    }
</script>

<style scoped>
.pot {
  width: 100%;
  display: flex;
  align-items: center;
}
  .somePadding {
    margin: 10px;
  }
</style>
