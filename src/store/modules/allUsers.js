import axios from "axios";

export default {
  state: {

    usersFromApi: [],
    saveUsers: [],

    changeUser: null,

  },
  actions: {
    
 async getUsersFromApi(ctx){

      try {
          const res = await axios.get('https://reqres.in/api/users')
          ctx.commit('setUsers', res.data.data)
      } catch (error) {
           console.log(error);
           return
      }

    
  
    },

  addUser(ctx,id){
    const user = ctx.state.usersFromApi.find(user => user.id === id)
    //console.log(user)
   const usersFromLocalStorage = localStorage.getItem('users')
   let parseUsers = JSON.parse(usersFromLocalStorage || '[]')
 
   if(parseUsers.length > 0){
    const candidate = parseUsers.find(el => el.id === user.id)
              if(candidate){
                console.log('Такий користувач уже є в localStorage')
                ctx.commit('updateSaveUsers', localStorage.getItem('users'))
                
              } else{
                console.log('Додаєм користувача в localStorage');
                parseUsers.push(user);
                localStorage.setItem('users', JSON.stringify(parseUsers));
                ctx.commit('updateSaveUsers', localStorage.getItem('users'))
              }
   }else{
    console.log('Немає користувачів в localStorage. Додаєм першого користувача');
    localStorage.setItem('users', JSON.stringify([user]));
    
    ctx.commit('updateSaveUsers', localStorage.getItem('users'))
   }
 
    
  },
//================================================================
  deleteUser(ctx, id){
    const usersFromLocalStorage = localStorage.getItem('users')
    let parseUsers = JSON.parse(usersFromLocalStorage || '[]')


  const index = parseUsers.findIndex(user => user.id === id)
  if(index !== -1 ){
    parseUsers.splice(index, 1)
    localStorage.setItem('users', JSON.stringify(parseUsers));
    console.log(`Користувач с id ${id} видален з localStorage`);

    ctx.commit('updateSaveUsers', localStorage.getItem('users'))

  }else{
    console.log(`Користувач з id ${id} не знайден в localStorage`);
  }
  },

  //================================================================
  changeUser(ctx, newUser){
    const usersFromLocalStorage = localStorage.getItem('users')
    let parseUsers = JSON.parse(usersFromLocalStorage || '[]')


  const index = parseUsers.findIndex(user => user.id === newUser.id)


  if(index !== -1 ){
    parseUsers[index] = newUser
    localStorage.setItem('users', JSON.stringify(parseUsers));
    //console.log(`Користувач з id ${newUser.id} змінений в localStorage`);

    ctx.commit('updateSaveUsers', localStorage.getItem('users'))
   
  }else{
    return
    //console.log(`Користувач з id ${newUser.id} не знайден в localStorage`);
  }


  }
 
  },

  mutations: {
    setUsers(state,users){
     state.usersFromApi = users
    
     
    },
    updateSaveUsers(state,users){
   const parsedUsers = JSON.parse(users)
     state.saveUsers = parsedUsers
    },

    setChangeUser(state, user){
  
     state.changeUser = user
     console.log(state.changeUser)
    }
  },

  getters: {

    usersFromApi(state){
   
      return state.usersFromApi
    },
    
    saveUsers(state){
   return state.saveUsers
    },

    userChange(state){
      return state.changeUser

    }
   
}

}