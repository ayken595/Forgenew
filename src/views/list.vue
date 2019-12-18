<template>
  <div>
    <div class="filters">
      <filters />
    </div>
    <div class="pagination">
      <!--  <p>
        <button @click="firstPage()"> &larr;&larr;</button>
        <button @click="previousPage()">&larr;</button>
        <input class="paginator" type="number" v-model="incurrent" @input="pageInput()" placeholder="Page"/>
        <button @click="nextPage()">&rarr;</button>
        <button @click="lastPage()">&rarr;&rarr;</button>
        {{current}} of {{total}}<br/>
        total records {{ records }}
      </p>-->
    </div>
    <div class="tabelka">
      <table>
        <thead>
          <tr class="column-names">
            <th v-if="showDetailsButton"></th>
            <th v-for="(column, cidx) in columns" :key="cidx">
              <span v-if="!column.is_sortable">{{ column.name }}</span>
              <a v-else href="#" @click.prevent="setColumnSort(column.code)">
                {{ column.name }}
                <template v-if="columnSortName === column.code">
                  <span v-if="columnSortOrder === 'asc'">&uarr;</span>
                  <span v-else>&darr;</span>
                </template>
              </a>
            </th>
          </tr>
          <tr class="column-filters">
            <th v-if="showDetailsButton"></th>
            <th v-for="(column, cidx) in columns" :key="cidx">
              <div v-if="column.is_filterable">
                <div v-if="column.datatype === 'string'">
                  <input type="text" v-model="column.query" @input="onInput()" />
                </div>
                <div v-if="column.datatype === 'boolean'">
                  <select @change="onChange(column, $event)">
                    <option :value="null">All</option>
                    <option :value="true">True</option>
                    <option :value="false">False</option>
                  </select>
                </div>
                <div v-if="typeof column.datatype === 'Object'">
                  <select>
                    <option :value="null">All</option>
                    <option
                      v-for="(type, cdidx) in column.datatype"
                      :key="cdidx"
                      :value="null"
                    >{{ type }}</option>
                  </select>
                  {{column.query}}
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody v-for="(item, id) in listitems" :key="id">
          <tr>
            <td v-if="showDetailsButton">
              <button
                v-if="typeof item.details !== 'undefined'"
                type="button"
                class="btn btn-primary"
                @click.prevent="toggleDetails(item)"
              >V</button>
            </td>
            <td v-for="(column, cidx) in columns" :key="cidx">
              <template v-if="column.code === 'avatar'">
                <img width="80" height="80" :src="item['avatar']" alt />
              </template>
              <template v-else-if="column.code === 'sex'">
                <span v-if="item['sex'] === 'male'">Chop</span>
                <span v-else>Baba</span>
              </template>
              <template v-else-if="column.code === 'name'">
                <router-link :to="`details/${item['id']}`">{{ item[column.code] }}</router-link>
              </template>
              <template v-else>{{ item[column.code] }}</template>
            </td>
            <!-- <td>{{item.id}}</td>
					<td>
						<router-link :to="`details/${item.id}`">{{item.title}}</router-link>
					</td>
            <td>{{item.author}}</td>-->
          </tr>
          <tr v-if="typeof item.details !== 'undefined' && item.detailsVisible">
            <td colspan="999">
              <strong>Opis:</strong>
              {{ item.details.description }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { api } from "../main.js";
import filters from "@/components/filters";
import pagination from "@/components/pagination";

export default {
  name: "list",
  components: {
    filters,
    pagination
  },
  data() {
    return {
      showDetailsButton: true,
      columnSortName: null,
      columnSortOrder: "asc", // asc, desc
      incurrent: null,
      records: 0,
      total: 3,
      current: 1,
      columns: [
        {
          name: "ID",
          code: "id",
          is_sortable: true,
          is_filterable: true,
          datatype: "string",
          query: ""
        },
        {
          name: "",
          code: "avatar",
          is_sortable: false,
          is_filterable: false,
          datatype: "string",
          query: ""
        },
        {
          name: "Name",
          code: "name",
          is_sortable: true,
          is_filterable: true,
          datatype: "string",
          query: ""
        },
        {
          name: "Sex",
          code: "sex",
          is_sortable: true,
          is_filterable: true,
          datatype: ["male", "female"],
          query: null
        },
        {
          name: "Phone",
          code: "phone",
          is_sortable: false,
          is_filterable: true,
          datatype: "string",
          query: ""
        },
        {
          name: "Email",
          code: "email",
          is_sortable: false,
          is_filterable: false,
          datatype: "string",
          query: ""
        },
        {
          name: "Is active",
          code: "is_active",
          is_sortable: true,
          is_filterable: true,
          datatype: "boolean",
          query: null
        }
      ],
      listitems: [],
      filters: []
    };
  },
  computed: {},
  created() {
    this.askForPosts();
  },
  methods: {
    objectToQuery(obj) {
      return Object.keys(obj).reduce((str, key, i) => {
        let delimiter = i === 0 ? "?" : "&";
        let keyname = encodeURIComponent(key);
        let val = encodeURIComponent(obj[key]);
        return [str, delimiter, keyname, "=", val].join("");
      }, "");
    },
    async askForPosts() {
      console.log(this.filters);
      console.log("change page");
      const query = {
        _sort: this.columnSortName,
        _order: this.columnSortOrder,
        _page: this.current,
        q: this.filters.map(val => `${val.code}:${val.query}`).join("||")
      };
      console.log(query, this.objectToQuery(query));
      // google: object to url
      const meta = { current: 1, total: 3 };
      const { ok, data } = await api.get(`posts${this.objectToQuery(query)}`);
      if (ok) {
        this.listitems = data.map(r => ({ ...r, detailsVisible: false }));
        //this.currentPage = meta.current;
        this.total = meta.total;
      }
    },
    setColumnSort(columnCode) {
      if (columnCode === this.columnSortName) {
        this.columnSortOrder = this.columnSortOrder === "asc" ? "desc" : "asc";
      } else {
        this.columnSortName = columnCode;
      }
      this.askForPosts();
    },
    toggleDetails(dataRow) {
      dataRow.detailsVisible = !dataRow.detailsVisible;
    },
    onInput() {
      let filters = this.columns.filter(
        e => e.is_filterable && e.query != "" && e.query != null
      );
      this.filters = filters;
      this.askForPosts();
    },
    pageInput() {
      if (this.incurrent <= this.total && this.incurrent > 0) {
        this.current = this.incurrent;
        this.askForPosts();
      } else {
        this.incurrent = null;
      }
    },
    onChange(column, element) {
      console.log(column, element);
    },
    nextPage() {
      if (this.current < this.total) this.current++;
      this.askForPosts();
      console.log(this.current);
    },
    previousPage() {
      if (this.current > 1) this.current--;
      this.askForPosts();
      console.log(this.current);
    },
    firstPage() {
      this.current = 1;
      this.askForPosts();
      console.log(this.current);
    },
    lastPage() {
      this.current = this.total;
      this.askForPosts();
      console.log(this.current);
    }
  }
};
</script>

<!-- ------======STYLE=====------ -->

<style>
.filters {
  width: 100%;
  margin: auto;
  padding: 5%;
}
.tabelka {
  overflow-x: auto;
}
table {
  width: 90%;
  margin: auto;
  border: 1px solid #fff;
  background-color: #fff;
}
tr,
th {
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #ddd;
  color: #222;
}
.pagination {
  width: 30%;
  margin: auto;
  float: none;
  padding-top: 30px;
  display: block;
}
tr:hover {
  background-color: #ddd;
  color: #000;
}

@media only screen and (max-width: 760px) {
  /* Force table to not be like tables anymore */
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
  }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }
}
</style>
