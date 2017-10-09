<template>
  <div id="app">
     <!--<img src="./assets/logo.png">-->
    <!--<h1>{{mes}}</h1>-->
    <!--<h2 v-bind:title="mes">属性值绑定，鼠标悬停几秒钟查看此处动态绑定的提示信息！</h2>-->
    <!--<h3 v-if="seen">v-if 能不能看到</h3>-->
    <!--<ul>-->
      <!--<li v-for="todo in todos">{{todo.text}}</li>-->
    <!--</ul>-->
    <!--<button v-on:click="change">绑定截取字符串事件</button>-->
    <!--<input type="text" v-model="mes"/>-->
    <!--<ul>-->
      <!--<li><router-link to="/first">点我跳转第一页</router-link></li>-->
      <!--<li><router-link to="/second">点我跳转第二页</router-link></li>-->
    <!--</ul>-->
    <!--<navbar></navbar>-->
     <router-view></router-view>
  </div>
</template>

<script>
  import navbar from './components/Navbar.vue'
export default {
    name: 'app',
    data () {
      return {
        mes: 'helloMAX页面打开时间是 ' + new Date().toLocaleString(),
        seen: true,
        todos: [
          {text: '学习javascript'},
          {text: '学习 VUE'},
          {text: '学习 jquery'},
          {text: '学习 牛项目'}
        ]

      }
    },
    methods: {
      change: function () {
        this.mes = this.mes.slice(7, -1)
      }
    },
    components: {
      navbar
    }// 把first组件挂在到app.vue
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
