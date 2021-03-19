<template>
  <div>
<div class="content" v-for="(posts, index) in this.$store.getters.Post" :key="(posts, index)">
  <img src="https://media.tenor.com/images/f91c978ac010966515a20bf7ec8f231a/tenor.png">
  <div class="contentPost">
    <h2>{{posts[0]}}</h2>
    <p>
      {{posts[3]}}
    </p>
  </div>
  <button class="edition">Éditer</button>
  <button class="delete" v-on:click="deletePost(index)"><img src="https://img.icons8.com/cotton/128/000000/delete-sign--v2.png"/></button>
</div>
  </div>
</template>
<style>
.content{
  display: flex;
  align-items: center;
  margin: 10%;
  border: solid 5px black;
}

.edition {
    height: 50px;
}

.delete {
    margin: 20px;
    height: 140px;
}

.contentPost {
    margin: 20px 50px; 
}
</style>
<script>

  export default {
    name: 'display-blog',
    methods: {
      deletePost(index) {
            this.$store.getters.Post.splice(index, 1)
        },
    }
  }
  
</script>