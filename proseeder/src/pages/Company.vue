<template>
    <div>
     <nav-bar/>
      <br>
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <b-card :title="companyID"
                    :img-src="company.Logo"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
              <p class="card-text">
              </p>
              <b-button :href="company.Website" variant="primary">Website</b-button>
            </b-card>
          </b-col>
          <b-col cols="8">
            <b-tabs pills>
              <b-tab title="About" active>
                <br>
                <p id="infoBox">{{company.Information}}
                </p>
              </b-tab>
              <b-tab title="Company Metrics" >
                <br>
                <iframe src="https://app.box.com/embed/s/00ocwni27aey4m2gvz3a7sv0e3srw888?sortColumn=date&view=list" width="750" height="400" frameborder="0" allowfullscreen webkitallowfullscreen msallowfullscreen></iframe>              </b-tab>
              <b-tab id="newBox" title="My Investment" >
                <br>
                <b-container class="bv-example-row" cols="6">
                  <b-row>
                    <b-col  cols="4">Round Name</b-col>
                    <b-col cols="6">Column</b-col>
                  </b-row>
                  <b-row>
                    <b-col  cols="4">Round Size</b-col>
                    <b-col cols="6">Column</b-col>
                  </b-row>
                  <b-row>
                    <b-col  cols="4">Last Round Size</b-col>
                    <b-col cols="6">Column</b-col>
                  </b-row>
                  <b-row>
                    <b-col  cols="4">Commitment</b-col>
                    <b-col cols="6">Column</b-col>
                  </b-row>
                  <b-row>
                    <b-col  cols="4">Fully Diluted Ownership</b-col>
                    <b-col cols="6">Column</b-col>
                  </b-row>


                </b-container>

              </b-tab>
            </b-tabs>
          </b-col>

        </b-row>
      </b-container>
    </div>
</template>

<script>
  import firebase from 'firebase';
  import NavBar from '../components/NavBar';
  export default {
        name: "Company",
      props: ['companyID','companyKey'],
      data () {
        return {
          msg: "welcome",
          company: '',
        }
      },
      methods: {
        logout:function() {
          console.log(firebase.auth().currentUser.uid);

          firebase.auth().signOut().then(() => {
            this.$router.replace('/')
        });
        },
        showModal:function(company) {
          console.log(company);
          this.selectedCompany = company;
          this.$refs.companyModal.show()

        },
      },
      components: {
        NavBar,
        'nav-bar': NavBar
      },
      mounted: function () {
          console.log(this.companyID);
        // `this` points to the vm instance
        let ref = firebase.database().ref('Portfolio/'+this.companyID);

        ref.once('value').then(snapshot =>
        {
          this.company=snapshot.val();
            });
        console.log(this.company);

      },

    }

</script>

<style scoped>
  #infoBox {
    text-align: left;
  }
  #newBox {
    text-align: left;
  }
</style>
