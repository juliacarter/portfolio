<template>
  <div class="about">
    <div class="content">
      <v-card>This is a skill page</v-card>
      <v-card>This is another part of a skill page</v-card>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .content {
    padding: 2% 5% 2% 5%;
    margin: 0 auto;
    width: 75vw;
    height: 100%;
    flex-grow: 1;
    color: black;
  }
  .about {
    display:flex;
    flex-direction: column;
    margin: 0 auto;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
