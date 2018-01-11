<template>
  <div class="register">
        <h1>register</h1>
        <input 
            type="email" 
            name="email" 
            v-model="email"
            placeholder="Enter Email" />
        <br>
        <input 
            type="password"
            name="password"
            v-model="password"
            placeholder="Enter Password" />
        <br>
        <button @click="register">Register</button>
  </div>
</template>
<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
      return {
          email: 'abc',
          password: '123'
      }
  },
  methods: {
        async register() {
            const response = await AuthenticationService.register({
                email: this.email,
                password: this.password
            })
            console.log('res', response.data)
      }
  },
  watch: {
      email(value) {
          console.log('value', value)
      }
  }
}
</script>

