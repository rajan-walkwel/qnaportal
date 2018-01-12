<template>
  <div class="layout">
    <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo" @click="navigateTo({name: 'Root'})"></div>
                    <div class="layout-nav">
                        <MenuItem 
                            v-if="!$store.state.isUserLoggedIn"
                            name="1">
                            <Icon type="ios-navigate"></Icon>
                            <span @click="navigateTo({name: 'Register'})">Sign Up</span>
                        </MenuItem>
                        <MenuItem 
                            v-if="!$store.state.isUserLoggedIn"
                            name="2">
                            <Icon type="ios-navigate"></Icon>
                            <span @click="navigateTo({name: 'Login'})">Login</span>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
  </div>
</template>
<script>
export default {
  methods: {
        navigateTo (route) {
            this.$router.push(route)
        }
    }
}
</script>

<style>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    cursor: pointer;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
