
<template>
  <div class="signin">

    <!-- Modal Component -->
    <b-modal @ok="handleSubmit" id="modal3" title="Add Your Companies">
        <b-form-group label="Select your companies">
          <b-form-checkbox-group id="checkboxes1" name="flavour1" v-model="selected" :options="portfolio">

          </b-form-checkbox-group>
        </b-form-group>
    </b-modal>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import bModal from 'bootstrap-vue/es/components/modal/modal';
  import bModalDirective from 'bootstrap-vue/es/directives/modal/modal';


  export default {
    name: "company-selector",
    data: function(){
      return {
        email: '',
        password: '',
        selected: [],
      }
    },
    props: ['portfolio'],
    methods:{
      handleSubmit() {
        const userUID = firebase.auth().currentUser.uid;
        console.log(userUID);
        console.log(this.selected);
        for (var i= 0; i<this.selected.length; i++)
        {
          let ref = firebase.database().ref('Users/'+userUID+'/Investments/').child(this.selected[i]).set({
            totalInvestment: 0,
            totalValue: 0,
            boxApiLink: '',
            salesForceApiLink: '',
          });

        }

        this.$emit('reload',userUID);

      },
    },
    components: {
      'b-modal': bModal
    },
    directives: {
      'b-modal': bModalDirective
    },

  }
</script>

<style scoped>

</style>
