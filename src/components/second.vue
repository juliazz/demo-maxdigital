<template>
    <div id="secondcomponent">
        <h1>I am second another page</h1>
        <a> written by {{ author }} </a>
        <p> 第二个子组件hi啊</p>
      <ul>
        <li v-for="article in articles">{{article.title}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          author: 'Max',
          articles: []
        }
      },
      moutend: function () {
        this.$http.jsonp('https://api.douban.con/v2/movie/top250?count=10', {}, {
          headers: {
          },
          emulateJSON: true
        }).then(function (response) {
          // 这里是处理正确的回调
          this.articles = response.data.subjects
        }, function (response) {
          console.log(response)
        }
        )
      }
    }
</script>

<style>
</style>
