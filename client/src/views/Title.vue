<template>
  <div v-if="loaded">
    {{$route.params.id}}
    {{ data }}
  </div>
</template>

<script lang="ts">
const axios = require('axios')
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  data: () => ({
    id: '',
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

    const { id } = this.$route.params
    const regex = /tt\d{7}/

    if (regex.test(id)) {
      this.id = id

      const { data } = await axios.post('/api/rarbg/list', {
        sort: 'seeders',
        format: 'json_extended',
        limit: '100'
      })
      
      this.data = data
      this.$vs.loading.close()
      this.loaded = true
    } else {
      this.$router.push('/404')
    }
  }
})
</script>