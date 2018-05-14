<template>

  <div id="upBotton">
    <input type="file" multiple accept="image/*" @change="detectFiles($event.target.files)">
    <div class="progress-bar" :style="{ width: progressUpload + '%'}">{{ progressUpload }}%</div>
  </div>

</template>

<script>
  import firebase from 'firebase'
  import {uuid} from 'vue-uuid'
  export default {
    name: "upload-image",
    data() {
      return {
        progressUpload: 0,
        file: File,
        uploadTask: '',
        downloadURL: ''
      }
    },
    props: [
      'location',
      'userId'
    ],
    methods: {
      detectFiles(fileList) {
        Array.from(Array(fileList.length).keys()).map(x => {
          this.upload(fileList[x])
      })
      },
      upload(file) {
        let loc = uuid.v1();
        var storageRef = firebase.storage().ref();
        // get input element user used to select local image
        this.uploadTask = storageRef.child(loc).put(file);
        this.uploadTask.then(snapshot => {
          this.downloadURL = this.uploadTask.snapshot.downloadURL;
        this.$emit('url', this.downloadURL);
      }).then(() => this.addImage()).then(() => this.changeImageState());
      },
      addImage() {
        // now that image has been stored in Firebase, create a reference to it in database
        let userId = firebase.auth().currentUser.uid;
        let userRef = firebase.database().ref('Users' + '/' + userId + '/' + this.location);
        console.log(this.downloadURL);
        userRef.set({
          url: this.downloadURL
        });
        // reset input values so user knows to input new data
      },
      changeImageState() {
        console.log("hello");
        this.$emit('newImage',this.downloadURL);
      },
    },
    watch: {
      uploadTask: function () {
        this.uploadTask.on('state_changed', sp => {
          this.progressUpload = Math.floor(sp.bytesTransferred / sp.totalBytes * 100)
      })
      }
    }
  }
</script>

<style>
  .progress-bar {
    margin: 10px 0;
  }
  #upBotton{
    margin: 10px;
  }
</style>
