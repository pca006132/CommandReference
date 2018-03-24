<template>
  <div id="app">
    <b-navbar variant="dark" type="dark" sticky="true" toggleable="md">
      <b-navbar-brand href="#intro">
        <img src="./assets/logo.png" style="width:1.5em;" class="d-inline-block align-top">
        命令快车
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav="true" id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/faq">FA Q</b-nav-item>
          <b-nav-item to="/contribution">贡献 </b-nav-item>
          <b-nav-item to="#searchbar" class="d-md-none">搜索</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container fluid="true" id="container">
      <b-row fluid="true">

        <b-col class="col-12 col-md-9 bd-content" id="content">
          <img src="./assets/logo.png">
          <h1 id="intro">命令快车——您的命令参考索引</h1>
        </b-col>

        <b-col class="col-12 col-md-3 order-md-first" id="searchbar">
          <hr class="d-md-none" />
          <b-card title="标题搜索">
            <b-form-group>
              <b-form-input id="search" v-model="search_str" type="text"></b-form-input>
            </b-form-group>
          </b-card>
          <b-card title="筛选Tag">
            <b-badge href="#" variant="primary">Primary</b-badge>
            <b-badge href="#" variant="secondary">Secondary</b-badge>
            <b-badge href="#" variant="success">Success</b-badge>
            <b-badge href="#" variant="danger">Danger</b-badge>
            <b-badge href="#" variant="warning">Warning</b-badge>
            <b-badge href="#" variant="info">Info</b-badge>
            <b-badge href="#" variant="light">Light</b-badge>
            <b-badge href="#" variant="dark">Dark</b-badge>

            <hr />
            <b-button variant="primary">重置</b-button>
          </b-card>
          <b-card title="选择版本">
            <b-form-select v-model="version_selected" :options="options"></b-form-select>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      version_selected: 'all',
      options: [
        {value: 'all', text: '任意版本'},
        {value: 13, text: '1.13'}
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, "Microsoft Yahei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#container {
  padding: 1.5em;
}
#searchbar {
  @media only screen and (min-width : 768px) {
    border-right: 1px solid gray;
    min-height: 85vh;
  }
}
.card {
  margin-bottom: 2em;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>