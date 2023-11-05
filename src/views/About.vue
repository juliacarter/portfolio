<script>

import face from "../assets/face.png"

export default {
  data: function () {
    return {
      face: face
    }
  }
}

</script>



<template>
  <div>
    <div class="content">
      <v-row class="w-100">
        <v-col>
          <v-img
          :src="face"
          class="bordered-image"></v-img>
        </v-col>
        <v-col>
          <v-row>
            <v-card 
            class="item pa-2 ma-2"
            color="primary"
            rounded=0
            cols="4"
            variant='elevated'
            >
              <v-card-text>
                Hello! My name's Julia! I'm a software developer with a Bachelor's in Computer Science and two years of professional experience in both frontend and backend development.
              </v-card-text>
            </v-card>
          </v-row>
          <v-row>
          <v-card
          class="item pa-2 ma-2"
          color="secondary"
          rounded=0
          variant='elevated'>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu lobortis elementum nibh tellus molestie nunc non. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Erat velit scelerisque in dictum non consectetur a erat nam. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Dictum varius duis at consectetur lorem. Id eu nisl nunc mi ipsum faucibus. Nec feugiat nisl pretium fusce.
            </v-card-text>
          </v-card>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>