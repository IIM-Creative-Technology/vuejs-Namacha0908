<template>
  <section>
      <title>Créer une nouvelle page de blog</title>
       <label for="title">Titre de la page :</label>
        <input name="title" type="text" required>
        <label for="meta">Meta Title :</label>
        <input name="meta" type="text" required>
        <label for="img">Ajouter une image</label>
        <input name="img" type="image" required>
        <label for="post">Ajouter une image</label>
        <textarea name="post" required></textarea>
        <input type=submit value="Créer la page">
  </section>
</template>

<script>
export default {
name: 'Create',
}
</script>

<style>

</style>