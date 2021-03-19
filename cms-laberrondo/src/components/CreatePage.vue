<template>
    <div>
        <h1><strong>Créer une nouvelle page de Blog</strong></h1>
        <div class="content">
            <div class="form">
                <div class="info">
                    <label>Titre de la page</label>
                    <input class="" type="text" placeholder="Votre titre de page..." v-model="title" required>
                </div>

                <div class="info">
                    <label>Meta title</label>
                    <input class="" type="text" placeholder="Votre sous-titre..." v-model="metaTitle">
                </div>

                <div class="info">
                    <label>Meta description</label>
                    <input class="" type="text" placeholder="Votre description..." v-model="desc">
                </div>

                <div class="info">
                    <label for="content">Corps du post</label>
                    <textarea name="content" v-model="content"></textarea>
                </div>

                <router-link to="/admin"><input type="submit" v-on:click='newPost()'></router-link>
            </div>

            <div class="img">
                <div class="upload">
                    <img
                        src="https://cdn.shopify.com/s/files/1/0226/5389/4728/products/poster-marvel-iron-man-profil_480x.jpg?v=1572036883">

                    <input type="file">


                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: '',
                metaTitle: '',
                desc: '',
                content: '',
            }
        },
        methods: {
            newPost() {
                this.$store.dispatch('addArticle', [this.title, this.metaTitle, this.Desc, this.content])
            },
        }
    }
</script>
<style scoped>
    .content {
        display: flex;
        justify-content: space-between;
        border-color: black;
    }
</style>