<template>
  <div id="app">
    <vs-navbar v-model="activeItem" class="nabarx">
      <!-- <vs-button vs-type="flat" vs-radius="50%" vs-icon="menu"></vs-button> -->

      <vs-navbar-title>
        Vuesax
      </vs-navbar-title>

      <vs-spacer></vs-spacer>

      <vs-navbar-item index="0">
        <router-link to="/">Home</router-link>
      </vs-navbar-item>

      <vs-navbar-item index="1">
        <router-link to="/about">About</router-link>
      </vs-navbar-item>

    </vs-navbar>

    <router-view />
  </div>
</template>

<style lang="stylus">
#app {
  text-align: center
  color: #2c3e50
}
</style>
