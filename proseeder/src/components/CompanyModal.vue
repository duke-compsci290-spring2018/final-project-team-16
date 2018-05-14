<template>
  <div class="company">

    <!-- Modal Component -->
    <b-modal size="lg" :title="company.Name" hide-footer id="companyModal" >
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <b-img :src="company.Logo" fluid alt="Responsive image" />
          </b-col>
          <b-col cols="8">
            <b-tabs>
              <b-tab title="Company Info" active>
                <br>
                <p id="infoBox">{{company.Information}}
                </p>
              </b-tab>
              <b-tab title="Company Metrics" >
                <br>
                <iframe src="https://ideafundpartners.box.com/s/32qmogunyuc45zb6xs8rll28cl0kdu9i" width="500" height="400" frameborder="0" allowfullscreen webkitallowfullscreen msallowfullscreen></iframe>
              </b-tab>
              <b-tab title="My Investment" >
                <br>Disabled tab!
              </b-tab>
            </b-tabs>
          </b-col>
          <b-col cols="12">
            More Docs
          </b-col>

        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import bModal from 'bootstrap-vue/es/components/modal/modal';
  import bModalDirective from 'bootstrap-vue/es/directives/modal/modal';
  export default {
    name: "company-modal",
    data: function(){
      return {
        email: '',
        password: ''
      }
    },
    props: ['company'],
    methods:{

    },
    components: {
      'b-modal': bModal
    },
    directives: {
      'b-modal': bModalDirective
    }
  }
</script>

<style scoped>
#infoBox {
  text-align: left;
}
</style>
