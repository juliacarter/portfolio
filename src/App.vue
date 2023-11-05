<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import About from './views/About.vue'
import Experience from './views/Experience.vue'
import Education from './views/Education.vue'
import Skills from './views/Skills.vue'

import { ref } from 'vue'
import { useTheme } from 'vuetify'

const tab = ref("about")
const theme = useTheme()

</script>

<template>
  <v-window class="background">
    <v-col class="holder">
      <v-row class="header holder" color="secondary">
        <header>
          <div class="wrapper">
            <v-row class="inner" no-gutters>
              <v-col cols="6">
                <v-row>
                  <v-col cols="1">
                    <v-row class="ma-auto">
                      <a href="https://www.linkedin.com/in/julicarter/"><v-icon icon="fa-brands fa-linkedin"></v-icon></a>
                    </v-row>
                    <v-row class="ma-auto">
                      <a href="https://github.com/henstomper"><v-icon  icon="fa-brands fa-github"></v-icon></a>
                    </v-row>
                  </v-col>
                  <v-col>
                    <div class="text-h2 ma-auto">Julia Carter</div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="3" ms="3">
                <v-tabs class="my-auto" v-model="tab">
                  <v-tab value="about">About Me</v-tab>
                  <v-tab value="experience">Experience</v-tab>
                  <v-tab value="education">Education</v-tab>
                  <v-tab value="skills">Skills</v-tab>
                </v-tabs>
              </v-col>
              <v-col cols="1" class="float-left">
                <v-menu
                  location="bottom"
                >
                  <template v-slot:activator="{ props }">
                    <v-btn
                      color="primary"
                      class="ma-auto"
                      dark
                      v-bind="props"
                    >
                      Theme
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title>Dark Mint Chocolate</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>Vanilla Raspberry Swirl</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>Watermelon Sorbet</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-row>
          </div>
        </header>
      </v-row>
      <v-row class="body holder">
        <v-window v-model="tab" class="w-100">
          <v-window-item value="about">
            <About/>
          </v-window-item>
          <v-window-item value="experience">
            <Experience/>
          </v-window-item>
          <v-window-item value="education">
            <Education/>
          </v-window-item>
          <v-window-item value="skills">
            <Skills/>
          </v-window-item>
        </v-window>
      </v-row>
    </v-col>
  </v-window>
</template>

<style scoped>
header {
  line-height: 2;
  height: 100%;
  width: 100%;
  background-color: rgb(var(--v-theme-secondary));
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
}

.body {
  height: 95vh;
}
.header {
  min-height: 5vh;
  max-height: 75px;
}

.holder {
  margin: 0 !important;
  padding: 0 !important
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.background {
  background: repeating-linear-gradient(
    45deg,
    rgb(var(--v-theme-background-lighten-1)),
    rgb(var(--v-theme-background-lighten-1)) 1px,
    rgb(var(--v-theme-background)) 1px,
    rgb(var(--v-theme-background)) 45px
  )
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    border-bottom: 1px solid var(--color-border);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 75vw;
    margin: 0 2%;
  }

  header .inner {
    width: 75%;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    margin-top: 1rem;
  }
}
</style>
