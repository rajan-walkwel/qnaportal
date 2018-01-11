<template>
  <div class="register">
        <Row>
        <Col span="12" offset="6">
        <div style="background:#eee;padding: 20px">
            <Card :bordered="false">
                <h3 slot="title">REGISTER USER</h3>
                <Input v-model="user.email" icon="ios-person-outline" placeholder="Enter Email..." style="width: 200px"></Input>
                <Input v-model="user.password" icon="ios-locked-outline" placeholder="Enter Password..." style="width: 200px"></Input>
                <Button type="primary" :loading="loading2" icon="checkmark-round" @click="register">
                    <span v-if="!loading2">Sign Up</span>
                    <span v-else>Loading...</span>
                </Button>
            </Card>
        </div>
        </Col>
        </Row>
        <br>
        <Row>
            <Col span="12" offset="6"><Alert type="error" v-if="error">{{error}}</Alert></Col>
        </Row>
  </div>
</template>
<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
      return {
        user: {
            email: '',
            password: '',
        },
        error: null,
        loading2: false
      }
  },
  methods: {
        async register() {
            try {
                this.loading2 = true
                const response = await AuthenticationService.register({
                    email: this.user.email,
                    password: this.user.password
                })
                setTimeout(() => {
                    this.loading2 = false
                    this.$Message.info('Successfully registered')
                    this.error = null
                }, 2000);
            } catch (error) {
                setTimeout(() => {
                    this.loading2 = false
                    this.error = error.response.data.error
                }, 2000);
            }
      }
  },
  watch: {
      email(value) {
          console.log('value', value)
      }
  }
}
</script>
<style scoped>
.error {
    color: red;
}
input{
    background-color: transparent !important;
    border: none;
}
</style>

