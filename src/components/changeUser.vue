<template>
  <div class="change-container">

    <div class="change-container__first-name item">
      <label for="first-name">First name</label>
      <input type="text" id="First-name" placeholder="First name" v-model="userFirsName">
    </div>


    <div class="change-container__last-name item">
      <label for="last-name">Last name</label>
      <input type="text" id="Last-name" placeholder="Last name" v-model="userLastName">
    </div>


    <div class="change-container__email item">
      <label for="email">Email</label>
      <input type="text" id="email" placeholder="Email" v-model="userEmail">
    </div>


    <div class="change-container__image-path item">
      <label for="imagePath">Image Path</label>
      <input type="text" id="imagePath" v-model="imagePath" placeholder="Image Path">

    </div>

    <div class="item">
      <div class="change-container__button" @click="changeUser">Change</div>
      <div class="message" v-if="userChangeToggle === true">User changed</div>
      <div class="message" v-if="userEmptyFields === true">fill in all fields</div>
    </div>

  </div>











  <RouterView />
</template>             
      
     
<script>
import { RouterView } from 'vue-router'


export default {
  name: 'changeUser',
  data() {
    return {
      userFirsName: '',
      userLastName: '',
      userEmail: '',
      imagePath: '',


      userChangeToggle: false,
      userEmptyFields: false,
    }
  },

  methods: {
    changeUser() {
      if (this.userFirsName.length && this.userLastName.length && this.userEmail.length && this.imagePath.length) {
        let newUser = {
          first_name: this.userFirsName.trim(),
          last_name: this.userLastName.trim(),
          email: this.userEmail.trim(),
          avatar: this.imagePath.trim(),
          id: this.userChange.id,
        }
        this.$store.dispatch('changeUser', newUser)
        this.userChangeToggle = true
        setTimeout(() => {
          this.userChangeToggle = false
          this.$router.push('/myUsers')
        }, 800)
      } else {
        this.userEmptyFields = true
        setTimeout(() => {
          this.userEmptyFields = false
        }, 1000)
        console.log('Заповніть усі поля')
      }
    },

  },

  mounted() {
    const userChange = this.$store.getters['userChange'];

    if (userChange) {
      this.userFirsName = userChange.first_name;
      this.userLastName = userChange.last_name;
      this.userEmail = userChange.email;
      this.imagePath = userChange.avatar;
    }


  },


  computed: {
    userChange() {
      return this.$store.getters['userChange']
    }
  },

}
</script>
      
<style scoped>
.change-container {
  display: flex;
  flex-direction: column;


  gap: 10px;
  margin: 10px;
  width: 100%;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

label {
  display: block;
  font-size: 24px;
  margin: 5px 10px;


}

input {
  display: block;
  width: 70%;
  padding: 15px 10px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 5px gray;
  font-size: 20px;
}

.change-container__button {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px grey;
  padding: 10px 90px;
  border-radius: 5px;
  transition: all .8s ease;
}

.change-container__button:hover {
  background-color: black;
  color: white;
  transition: all .8s ease;
  cursor: pointer;
}
</style>