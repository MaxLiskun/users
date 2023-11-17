<script >
import { RouterLink, RouterView } from 'vue-router'

 export default {
  name:'app',
 
  created(){
    let users = localStorage.getItem('users')
    if (users){
     this.$store.commit('updateSaveUsers', localStorage.getItem('users'))
    }else{
      return
    }
  }

 }
 
</script>

<template>
 <div class="container">
      <header class="header">
      <router-link class="link" to="/allUsers" >all Users</router-link>  
       <router-link class="link" to="/myUsers" >my Users</router-link>   
        
      </header>
      <main>
        <RouterView />
    </main>
 </div>

 
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;

  }

  .header {
    width: 100%;
    display: flex;
    border-bottom: 1px solid black;
    padding: 20px 30px;
    gap: 30px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

  }

  .main {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .link {
    display: block;
    display: flex;
    padding: 10px 60px;
    box-shadow: 0px 0px 5px gray;
    text-transform: uppercase;
    text-decoration: none;
    color: rgb(19, 19, 19);
    transition: all .3s ease;
  }



  .link:hover {
    background-color: rgb(49, 47, 47);
    color: rgb(255, 254, 254);
    transition: all .3s ease;
  }


@media (min-width: 1024px) {
 
  
}
</style>
