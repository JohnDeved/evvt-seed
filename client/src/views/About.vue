<template>
  <div class="about">
    <h1>This is an about page</h1>
    <vs-button vs-type="filled">Hello World</vs-button>
            <VueButton
          @click="log('clicked')"
        >Button</VueButton>
    <VueInput icon-left="search" v-model="string" placeholder="Type a message"/>
  </div>
</template>
