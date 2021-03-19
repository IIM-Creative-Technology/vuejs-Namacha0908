<template>
  <div>
    <div class="content" v-for="(posts, index) in this.$store.getters.Post" :key="(posts, index)">
      <img src="https://media.tenor.com/images/f91c978ac010966515a20bf7ec8f231a/tenor.png">
      <div class="contentArticle">
        <h2>{{posts[0]}}</h2>
        <p>{{posts[3]}}</p>
      </div>
      <button v-on:click="deletePost(index)"><img
          src="https://img.icons8.com/cotton/128/000000/delete-sign--v2.png" /></button>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Blog',
    components: {

    }
  }
</script>

<style scoped>

</style>