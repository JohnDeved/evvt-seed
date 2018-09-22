<template>
  <div id="app">
    <vs-navbar class="nabarx">
      <!-- <vs-button vs-type="flat" vs-radius="50%" vs-icon="menu"></vs-button> -->

      <div @click="setActive('home')">
        <router-link to="/">
          <vs-navbar-title>
            Vuesax App
          </vs-navbar-title>
        </router-link>
      </div>

      <vs-spacer></vs-spacer>

      <VueInput icon-left="search" class="round" v-model="string" placeholder="Type a message"/>

      <VueGroup v-model="active" class="primary inline small-indicator" indicator>
        <VueGroupButton to="/" class="flat big" value="home">Home</VueGroupButton>
        <VueGroupButton to="/about" class="flat big" value="about">About</VueGroupButton>
      </VueGroup>
    </vs-navbar>

    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    active: ''
  }),
  methods: {
    setActive: function (val) {
      this.active = val
    }
  }
})
</script>

<style lang="stylus">
$primary = #42b983

*
  font-family: Roboto,Avenir,Helvetica,Arial,sans-serif !important


#app
  text-align center
  color white


.vs-navbar-title
  align-self center
  margin-bottom 0
  font-weight 400 !important
  font-size 16px !important
  color: white !important

.vs-navbar
  box-shadow 0 4px 20px 0 rgba(0,0,0,0.25) !important
  margin-bottom 30px

.vs-button
  font-size 14px
  padding 0 14px !important
  height 32px
  vertical-align middle

</style>
