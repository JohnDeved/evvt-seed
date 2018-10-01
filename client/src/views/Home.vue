<template>
  <div class="home" v-if="loaded">
    <vs-table :data="data">
      <template slot="header">
        <h3>
          Popular Torrents
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
        <vs-tr :key="indextr" v-for="(tr, indextr) in data" @click="$router.push('/title/' + tr.episode_info.imdb)">
          <vs-td :data="tr">
            <a class="pointer" @click="$router.push('/title/' + tr.episode_info.imdb)">
                {{tr.title}}
            </a>
          </vs-td>

          <vs-td :data="tr.category">
            {{tr.category}}
          </vs-td>

          <vs-td :data="tr.seeders">
            {{tr.seeders}}
          </vs-td>

          <vs-td :data="tr.leechers">
            {{tr.leechers}}
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
      format: 'json_extended',
      limit: '100'
    })
    
    this.data = data
    console.log(data)

    this.$vs.loading.close()
    this.loaded = true
  }
})
</script>
