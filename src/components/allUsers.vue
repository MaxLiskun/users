<template>
 

<div class="container">
  

    <ul class="users" v-for="user in usersFromApi" :key="user.id">

        <li class="users__item">

                <img class="item__avatar" :src="user.avatar" alt="user avatar">

                <div class="item-info">
                      <div class="item-info__name">{{ user.first_name}} {{ user.last_name }}</div>
                      <div class="item-info__email">{{ user.email }}</div>
                      <a   class="item-info___send-email" :href="'mailto:' + user.email">Send email</a>
                </div>
                
                  
                <div class="item__nav">
                    <span class="item-nav__add" @click="addUser(user.id)">add-user</span>
                    <div class="message" v-if="user.id === addWordId">user is add</div>
                </div>
    
        
         </li>

    </ul>
</div>

   
    <RouterView />
  </template>             
  
  //-------------------------------------------------------
  <script>
  import { RouterLink, RouterView } from 'vue-router'
  
  
  export default {
    name: 'allUsers',
    data() {
      return {
        addWordId: null,
      }
    },
  
    methods: {
     addUser(id){
      this.$store.dispatch('addUser', id)
      this.addWordId = id
      setTimeout(()=>{this.addWordId = null},1000)
     }
    },
  
  
  mounted(){
    this.$store.dispatch('getUsersFromApi')
  },

  computed:{
    usersFromApi(){
     return this.$store.getters['usersFromApi']
    }
  },
  }
  </script>
  
  <style scoped>
  .users__item{
box-shadow: 0px 0px 10px grey ;
border-radius: 5px;
margin: 20px 0px;
display: flex;
justify-content:space-between;
align-items: center;
width: 100%;
height: 100%;
flex-wrap: wrap;
}

.item__nav{
display: flex;
align-items: center;
justify-content: center;
}
.item-nav__add{
display: flex;
box-shadow: 0px 0px 5px grey ;
padding: 5px 25px;
margin: 2px 5px;
justify-content: center;
align-items: center;
transition: all 0.3s ease;
}

.item-nav__add:hover{
cursor: pointer;
background-color: black;
color: white;
transition: all 0.3s ease;
}
  </style>