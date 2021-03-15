<template>
  <div>
      <form>
          <label for="mail">Email :</label>
          <input name="mail" type="email" required>
           <label for="password">Mot de passe :</label>
          <input name=password type="password" required>
          <button>Se connecter !</button>
          <p>Pas encore de compte ? <a href="#">S'inscrire</a></p>
      </form>
  </div>
</template>

<script>
export default {
    name: 'sign-in'
   
    
}

</script>

<style>

</style>