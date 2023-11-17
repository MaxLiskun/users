<template>
  <div class="container">


    <ul class="users" v-for="user in saveUsers" :key="user.id" v-if="saveUsers.length">

      <li class="users__item">

        <img class="item__avatar" :src="user.avatar" alt="user avatar">

        <div class="item-info">
          <div class="item-info__name">{{ user.first_name }} {{ user.last_name }}</div>
          <div class="item-info__email">{{ user.email }}</div>
          <a class="item-info___send-email" :href="'mailto:' + user.email">Send email</a>
        </div>


        <div class="item__nav">
          <span class="item-nav__add" @click="deleteUser(user.id)">delete-user</span> <br>
          <div class="message" v-if="user.id === deleteUserId">user was delete</div>
          <span class="item-nav__add" @click="toChange(user)">change-user</span>
        </div>


      </li>

    </ul>

    <h1 class="no-users-yet" v-else>You have no save users yet</h1>
  </div>





  <RouterView />
</template>             
      
      //-------------------------------------------------------
<script>
import { RouterView } from 'vue-router'
import axios from 'axios';

export default {
  name: 'myUsers',
  data() {
    return {
      deleteUserId: null,
    }
  },

  methods: {
    deleteUser(id) {

      this.deleteUserId = id
      setTimeout(() => {
        this.deleteUserId === null
        this.$store.dispatch('deleteUser', id)
      }, 800)

    },

    toChange(user) {
      this.$store.commit('setChangeUser', user)
      this.$router.push('/changeUser')
    }

  },

  computed: {
    saveUsers() {
      return this.$store.getters['saveUsers']
    }
  },

}


</script>
      
<style scoped>
.users__item {
  box-shadow: 0px 0px 10px grey;
  border-radius: 5px;
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}

.item__nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-nav__add {
  display: flex;
  box-shadow: 0px 0px 5px grey;
  padding: 5px 25px;
  margin: 2px 5px;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.item-nav__add:hover {
  cursor: pointer;
  background-color: black;
  color: white;
  transition: all 0.3s ease;
}

.no-users-yet {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>