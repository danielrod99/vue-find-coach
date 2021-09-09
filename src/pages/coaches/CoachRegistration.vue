<template>
  <base-card>
    <h2>Register as a Coach now!</h2>
    <coach-form @saved-data="savedData"></coach-form>
  </base-card>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components:{
    CoachForm
  },
  methods:{
    savedData(formData){
      this.$store.dispatch('coaches/registerCoach',formData);
      this.$router.replace('/coaches');
    }
  }
}
</script>

<style>

</style>