<template>
  <section>
    <div class="container">
      <div class="onethree">
        <table class="onethree" style="max-width:150px; border-top:0px solid #222 border-collapse: collapse;
  border-radius: 0;
  overflow: hidden;">
          <td>Activity</td>
          <tr>
            <b-select
              rounded
              name="Activity"
              @change="onChange($event)"
              class="form-control"
              v-model="key"
              style="min-width:150px"
            >
              <option value="1">Active</option>
              <option value="2">In-active</option>
              <option value="3">In-Work</option>
            </b-select>
          </tr>
          <td>Brand</td>
          <tr>
            <b-select
              name="Activity"
              @change="onChange($event)"
              class="form-control"
              v-model="key"
              style="min-width:150px"
              rounded
            >
              <option value="1">Chujke</option>
              <option value="2">Abibas</option>
              <option value="3">Rejbok</option>
            </b-select>
          </tr>
          <td>Language</td>
          <tr>
            <b-select
              name="Language"
              @change="onChange($event)"
              class="form-control"
              v-model="key"
              size:7
              rounded
            >
              <option value="1">Eng</option>
              <option value="2">Pl</option>
              <option value="3">Fr</option>
            </b-select>
          </tr>
        </table>
        <!--SEARCH BY FILTER -->
        <b-field>
            <b-input placeholder="Search everywhere..."  style="padding-top:30px; max-width:200px;"></b-input>
        </b-field>
      </div>
      <div class="onethree">
        Price<br/>
        <div style="display:flex;justify-content:space-between;">
        <span>{{numbers[0]}}</span>
        <span>{{numbers[1]}}</span>

        </div>
        <b-field>
          <b-slider :key="minmax" v-model="numbers" :min="1" :max="3000" :step="5" ticks></b-slider>
        </b-field>
      </div>
      <div style="clear:both"></div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      numbers: [1, 3000],
      searchQuery: '',
      selectedOptions: [],
      minmax: ''
    }
  },
  computed: {

  }
}
</script>
<style>
.container{
  background-color:#fff;
  padding:50px;
  width:100%;
  border-top:1px solid #666;
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
}
.scope {
  max-width: 20%;
}
.selector {
  float: left;
}
.active {
  display: none;
}
.allfilters {
  margin: auto;
  width: 300px;
  margin-left: 75px;
}
.onethree{
  float:left;
  width:40%;
  display:block;
  margin:auto;
}
.onethree tr:nth-child(even){
  background-color: #fff;
}

@media only screen and (max-width: 1024px){
  .onethree{
    float:none;
    margin:0px;
    width:100%;
  }
}

</style>
