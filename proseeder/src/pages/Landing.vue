<template>
  <div>
    <h1>
      Proseeder.
    </h1>

    <p>
      Check your investments.
    </p>
    <b-btn v-b-modal.modal1>Sign Up </b-btn>
    <b-btn v-b-modal.modal2>Sign In </b-btn>

    <signup-modal/>
    <signin-modal/>


  </div>
</template>

<script>
   import SignUpModal from '../components/SignUpModal';
   import SignInModal from '../components/SignInModal';

    export default {
        name: "Landing",
      components:
        {
          signupModal: SignUpModal,
          signinModal: SignInModal
        }
    }
</script>

<style scoped>

</style>
