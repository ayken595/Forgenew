<template>
  <section>
    <div class="container" style="min-height:0px;">
      <div class="onethree">
        <table style="max-width:300px">
          <td>Activity</td>
          <tr>
            <select
              name="Activity"
              @change="onChange($event)"
              class="form-control"
              v-model="key"
              style="min-width:300px"
            >
              <option value="1">Active</option>
              <option value="2">In-active</option>
              <option value="3">In-Work</option>
            </select>
          </tr>
          <td>Brand</td>
          <tr>
            <select
              name="Activity"
              @change="onChange($event)"
              class="form-control"
              v-model="key"
              style="min-width:300px"
            >
              <option value="1">Chujke</option>
              <option value="2">Abibas</option>
              <option value="3">Rejbok</option>
            </select>
          </tr>
          <td>Language</td>
          <tr>
            <select
              name="Language"
              @change="onChange($event)"
              class="form-control"
              v-model="key"
              style="min-width:300px"
            >
              <option value="1">Eng</option>
              <option value="2">Pl</option>
              <option value="3">Fr</option>
            </select>
          </tr>
        </table>
        <!--SEARCH BY FILTER -->
        <input
          class="form-control"
          type="text"
          v-model="searchQuery"
          placeholder="Search"
          style="display:block; margin:auto;"
        />
      </div>
      <div class="onethree">
        Price<br/>
        <div style="display:flex;justify-content:space-between;">
        <span>{{numbers[0]}}</span> 
        <span>{{numbers[1]}}</span>

        </div>
        <b-field>
          <b-slider v-model="numbers" :min="1" :max="3000" :step="5" ticks></b-slider>
        </b-field>
      </div>
      <div style="clear:both"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      numbers: [1, 3000],
      selectedOptions: [],
      searchQuery: ""
    };
  },
  computed: {
    filteredResources() {
      console.log(searchQuery);
      if (this.searchQuery) {
        return this.filter(item => {
          return item.title.startsWith(this.searchQuery);
        });
      } else {
        return this.askForPosts();
      }
    }
  }
};
</script>
<style>
.scope {
  max-width: 30%;
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

@media only screen and (max-width: 1024px){
  .onethree{
    float:none;
    margin:0px;
    width:100%;
  }
}

</style>
