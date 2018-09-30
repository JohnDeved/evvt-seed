<template>
  <div class="home" v-if="loaded">
    <vs-table :data="data">
      <template slot="header">
        <h3>
          Torrents
        </h3>
      </template>
      <template slot="thead">
        <vs-th>
          Title
        </vs-th>
        <vs-th>
          Category
        </vs-th>
        <vs-th>
          S
        </vs-th>
        <vs-th>
          L
        </vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr class="pointer" :key="indextr" v-for="(tr, indextr) in data" >
          <vs-td :data="data[indextr].title">
            {{data[indextr].title}}
          </vs-td>

          <vs-td :data="data[indextr].category">
            {{data[indextr].category}}
          </vs-td>

          <vs-td :data="data[indextr].seeders">
            {{data[indextr].seeders}}
          </vs-td>

          <vs-td :data="data[indextr].leechers">
            {{data[indextr].leechers}}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
    <!-- {{data}} -->
  </div>
</template>

<script lang="ts">
// import axios from 'axios' // breaks vscode for some reason
const axios = require('axios')
import Vue from 'vue'
import { mapState } from 'vuex'
import List from '@/components/List.vue'

export default Vue.extend({
  name: 'home',
  components: {
    List
  },

  data: () => ({
    data: [],
    loaded: false
  }),
  computed: {
    ...mapState({
      background: (state: any) => state.background
    })
  },
  async mounted () {
    this.$vs.loading({
      background: this.background,
      color: 'white',
      type: 'corners'
    })

    const { data } = await axios.post('/api/rarbg/list', {
      sort: 'seeders',
      format: 'json_extended'
    })
    
    this.data = data
    console.log(data)
    this.$vs.loading.close()
    this.loaded = true
  }
})
</script>
