<template>
  <div>
    <nav-bar :uid=user.uid />

    <div  class="container">
      <div class="row">
        <div class="col-4">
          <!-- User image -->
          <b-img left rounded="circle"  width="250" height="250" bclass="m-1" :src="user.picture"/>
          <upload-image :userId="user.uid" location="Profile"/>
        </div>

        <div class="col-8" id="ProfileBlock">
          <h1>
            Welcome, {{user.name}}!
          </h1>
          <b-form  @submit="onSubmit" @reset="onReset" >
            <b-form-group id="exampleInputGroup1"
                          label="Name:"
                          label-for="exampleInput1">
              <div v-if="changeName">
                <b-form-input id="exampleInput1"
                              type="text"
                              v-model="form.name"
                              required
                              @keyup="onSubmit"
                              placeholder="Username">
                </b-form-input>
              </div>
              <div v-if="!changeName">
                <label @dblclick="changeName=!changeName" >{{user.name}}</label>
              </div>
            </b-form-group>
          </b-form>
        </div>
      </div>
    </div>






  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';
  import firebase from 'firebase';
  import NavBar from '../components/NavBar';
  import UploadImage from '../components/UploadImage';


  export default {
    components: {
      UploadImage,
      NavBar},
    name: "Profile",
    data () {
      return {
        form: {
          name: '',
        },
        user: {
          name: '',
          uid: '',
          picture:'',
        },
        changeName: false,
        hasPicture: true,
        newImageTitle: '',
        showSurvey: false,
        components: {
          NavBar,
          UploadImage
        }
      }
    },
    methods: {
      onSubmit:function(event) {
        event.preventDefault();
        if (this.form.name) {
          let thisUser = firebase.database().ref('Users' + '/' + this.user.uid).child('Name');
          thisUser.set(
            this.form.name);
          this.changeName = false;
        }
      },
      removePicture() {
        let myref= firebase.database().ref('Users'+'/'+this.user.uid).child('Profile').child('url');
        myref.remove();
        this.user.picture = '';
      },
      onReset:function() {
        this.form.name = '';
      },
    },
    created: function() {
      let uid = firebase.auth().currentUser.uid;
      let thisUser = firebase.database().ref('Users'+'/'+uid);
      this.user.uid = uid;
      thisUser.on('value', (snapshot) => {
        this.user.name = snapshot.val().Name;
      if (snapshot.val().Profile)
      {
        if (snapshot.val().Profile.url)
        {
          this.user.picture = snapshot.val().Profile.url;
        }
        else {
          this.hasPicture = false;
        }
      }
      else {
        this.hasPicture = false;
      }
    });
    },
  }
</script>

<style scoped>
  #ProfileBlock{
    margin-top: 30px;
  }
</style>
