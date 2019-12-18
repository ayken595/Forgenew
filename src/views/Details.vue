<template>
  <div class="container2">
    <div v-if="posts != null">
      <div id="image">
        <carousel />
        <!--<img :src="posts.avatar" alt=""> -->
      </div>
      <div id="data">
        <ul>
          <table>
            <th>
              <tr v-for="(value, name) in posts" v-bind:key="name">({{name}}) :</tr>
            </th>
            <th>
              <tr v-for="(value, name) in posts" v-bind:key="name">{{value}}</tr>
            </th>
          </table>
          <router-link to="/list">
            <button>Return</button>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '../main.js'
import carousel from '@/components/carousel'

export default {
  name: 'posts',
  components: {
    carousel
  },
  data () {
    return {
      posts: null
    }
  },
  async created () {
    const { ok, data } = await api.get(`posts/${this.$route.params.id}`)
    if (ok) {
      this.posts = data
    }
  }
}
</script>

<style>
.container2{
  background-color:#fff;
  padding:50px;
  width:100%;
  min-height: 700px;
}
#image {
  padding-top: 3%;
  margin-left: 125px;
  max-width: 40%;
  padding-bottom: 30px;
  float: left;
}
#data {
  padding-top: 3%;

  margin-left: 100px;
  float: left;
  text-align: left;
  height: relative;
  max-width: 40%;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  max-width: auto;
}

td,
th {
  text-align: left;
  padding: 10px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
@media only screen and (max-width: 768px) {
  #image {
    margin-left: 0px;
    max-width: 100%;
    float: none;
  }
  #data {
    margin-left: 0px;
    float: none;
    max-width: 100%;
  }
}
</style>
