<template>
  <div>

    <!-- Modal Component -->
    <b-modal :ok-disabled="fullSignUp" @ok="signUp" id="modal1" ok-title="Sign Up" title="Create an Account">
      <div>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password"  v-model="password" placeholder="Password"><br>
        </div>
    </b-modal>
  </div>
</template>

<script>
  import firebase from 'firebase'

  import bModal from 'bootstrap-vue/es/components/modal/modal';
  import bModalDirective from 'bootstrap-vue/es/directives/modal/modal';
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {
    name: "signup-modal",
    components: {
    'b-modal': bModal
  },
  directives: {
    'b-modal': bModalDirective
  },
  data: function(){
    return{
      email:'',
      password:'',
      uid: '',
      portfolio:{},
      selected: [],
    }
  },
  methods:{
    signUp: function(event){

      console.log(this.email);
      event.preventDefault();

        /*
      firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
        (user) => {
          firebase.database().ref(`/Users/${user.uid}/`)
                    .set({ Email: this.email});
          this.fullSignUp = true;
          this.uid = user.uid;


    },
        (err) =>  {
          alert('Oops.'+err.message)
        }
      );
*/
    },
    selectCompanies: function() {

    },
  },
    created: function() {
      let ref = firebase.database().ref('Portfolio');
      ref.once('value').then(snapshot =>
      {
        this.portfolio=snapshot.val();
    });
    }
  }
</script>

<style scoped>

</style>
