<template>
  <div>
    <nav-bar/>

    <br/>
    <br/>
    <br/>



  <div id="headerRow">
    <b-row class="justify-content-md-center">
      <b-col cols="2">
        Company Logo
      </b-col>
      <b-col cols="2">
        Company Name
      </b-col>

      <b-col cols="2">
      </b-col>
      <b-col cols="2">
        Amount Invested
      </b-col>
      <b-col cols="2">
        Total Invested
      </b-col>
      <b-col>
        ROI
      </b-col>
    </b-row>
  </div>
<!--  <b-col>
                <p-check name="check" color="success" v-model="check"></p-check>
              </b-col> -->

    <b-list-group cols="8">
        <div class="myrow-row" v-for="(company,key) in myPortfolio" horizontal >

          <b-list-group-item>

            <b-row class="justify-content-md-center-myrow">
              <b-col cols="2">
              <b-img class="imageStyle"  :src="portfolio[key].Logo" fluid alt="Responsive image" />
              </b-col>
              <b-col cols="2">
              <div class="biggerText">
                <router-link :to="{ name: 'Company', params: { companyID: portfolio[key].Name,companyKey: key  } }">{{portfolio[key].Name}}</router-link>
              </div>
              </b-col>
              <b-col cols="2">
              </b-col>
              <b-col cols="2">
                ${{company.totalInvestment}}
              </b-col>
              <b-col cols="2">
                ${{company.totalValue}}
              </b-col>
            </b-row>
          </b-list-group-item>
        </div>
      <b-list-group-item variant="light">
        <b-row class="justify-content-md-center-myrow">
          <b-col cols="2">
          </b-col>
          <b-col cols="2">

          </b-col>
          <b-col cols="2">
          </b-col>
          <b-col cols="2">
            ${{totalInvested}}
          </b-col>
          <b-col cols="2">
            ${{totalValue}}
          </b-col>
        </b-row>
      </b-list-group-item>

    </b-list-group>

    <company-selector v-on:reload="reload" :portfolio="portfolio"/>
    <company-modal  :company="selectedCompany" :title="selectedCompany.Name"/>
    <br>
    <b-btn v-b-modal.modal3 >Add Investments </b-btn>

    <br/>
  </div>
</template>
<script>

  import firebase from 'firebase';
  import VueFire from 'vuefire';
  import Vue from 'vue';
  import CompanySelector from '../components/CompanySelector';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';
  import Router from 'vue-router'
  import CompanyModal from "../components/CompanyModal";
  import router from '../Router';
  import NavBar from '../components/NavBar';
  import PrettyInput from 'pretty-checkbox-vue/input';
  import PrettyCheck from 'pretty-checkbox-vue/check';
  import PrettyRadio from 'pretty-checkbox-vue/radio';

  Vue.component('p-input', PrettyInput);
  Vue.component('p-check', PrettyCheck);
  Vue.component('p-radio', PrettyRadio);
  Vue.use(VueFire);
  Vue.use(Router);

  Vue.use(router);


  export default {
        name: "Home",

    data () {
      return {
        msg: "welcome",
        portfolio: {},
        myPortfolio: {},
        selectedCompany: '',
        totalInvested: 0,
        totalValue: 0,
      }
    },
    methods: {
      logout:function() {
        console.log(firebase.auth().currentUser.uid);

        firebase.auth().signOut().then(() => {
          this.$router.replace('/')
        });
      },
      calculateTotals:function() {
        var totalInvested =0;
        var totalValue = 0;
        for (var i =0; i<this.myPortfolio.length; i++)
        {
          totalInvested = totalInvested + this.portfolio[i].totalInvestment;
          totalValue = totalValue + this.portfolio[i].totalValue;

        }
        this.totalInvested = totalInvested;
        this.totalValue = totalValue;
      },
      reload:function() {
        console.log("e");
        const userUID = firebase.auth().currentUser.uid;

        let investments = firebase.database().ref('Users/'+userUID+'/Investments');

        investments.once('value').then(snapshot =>
        {
          this.myPortfolio=snapshot.val();
      });

        this.calculateTotals();
      },
      navigate: function(prop) {
        console.log(prop);
        this.$router.replace('/User'+prop);

      },
      showModal:function(company) {
        console.log(company);
          this.selectedCompany = company;
          this.$refs.companyModal.show()

      },
    },
    created: function () {
      // `this` points to the vm instance
      const userUID = firebase.auth().currentUser.uid;

      let ref = firebase.database().ref('Portfolio');
      let investments = firebase.database().ref('Users/'+userUID+'/Investments');

      investments.once('value').then(snapshot =>
      {
        this.myPortfolio=snapshot.val();
    });
      ref.once('value').then(snapshot =>
      {
        this.portfolio=snapshot.val();
    });
      console.log(this.myPortfolio);
      this.calculateTotals();

    },
    components: {
      'company-modal':CompanyModal,
      CompanySelector,
      NavBar
    },

  }
</script>

<style scoped>
  .row {
    height: 25px;
  }
  .imageStyle {
    height: 25px;
  }
  .headerRow {
    margin-bottom: 10px;

  }
  .biggerText {
    font-size: 18px;
  }

</style>
