<template>
  <div class="about">
    <h1>This is an about page</h1>
    <vs-button vs-color="primary" vs-type="border">Primary</vs-button>
    <vs-button vs-type="filled">Button</vs-button>
    <VueButton>Button</VueButton>
    <VueInput icon-left="search" v-model="string" placeholder="Type a message" />

    <div class="space"></div>

    <vs-row vs-align="flex-start" vs-type="flex" vs-justify="space-around" vs-w="12">

      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <VueFormField title="Type a message" subtitle="The message shouldn't be more than 100 characters.">
          <VueInput v-model="string" placeholder="Type a message" />
        </VueFormField>
      </vs-col>

      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <VueFormField title="Invalid message" status-icon>
          <VueInput v-model="string" placeholder="Type a message" status="danger" icon-right="error" />
          <span slot="subtitle">The message is invalid</span>
        </VueFormField>
      </vs-col>

    </vs-row>
    
    <div class="space"></div>

    <vs-row vs-align="flex-start" vs-type="flex" vs-justify="space-around" vs-w="12">

      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <VueFormField title="Warning message" subtitle="The message is valid" status-icon>
          <VueInput v-model="string" placeholder="Type a message" status="warning" icon-right="warning" />
        </VueFormField>
      </vs-col>

      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <VueFormField title="Valid message" subtitle="The message is valid" status-icon>
          <VueInput v-model="string" placeholder="Type a message" status="success" icon-right="check_circle" />
        </VueFormField>
      </vs-col>

    </vs-row>
    
    <div class="space"></div>

    <vs-row vs-justify="center">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
        <vs-card>
          <div slot="header">
            <h3>
              Hello world !
            </h3>
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button>hello</vs-button>
              <VueButton>Button</VueButton>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>

    <vs-row vs-justify="center">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
        <vs-card>
          <div slot="header">
            <h3>
              Hello world !
            </h3>
          </div>
          <div slot="media">
            <img src="https://i.redd.it/7gs0gzf11up01.png">
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button>hello</vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    string: ''
  })
})
</script>