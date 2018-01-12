<template>
  <div id="app">
    <Layout>
      <page-header />
      <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
        <router-view/>
      </Content>
    </Layout>
  </div>
</template>

<script>
import PageHeader from "@/components/Header";
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ivu-input {
    margin-bottom: 10px !important;
}
</style>
