<template>
    <div>
        <div class="btn">
            <button class="button">
                <router-link class="router" to="/createpage">Créer une page</router-link>
            </button>
        </div>
        <display-blog></display-blog>
    </div>
</template>
<script>
    import DisplayBlog from "@/components/DisplayBlog";
    export default {
        components: {
            DisplayBlog
        }
    }
</script>
<style>
    .btn {
        display: flex;
        justify-content: center;
    }

    button {
        text-decoration: none;
    }

    .router {
        text-decoration: none;

    }

    button:hover {
        color: red;
    }
</style>