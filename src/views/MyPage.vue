<template>
<div>
  <div v-if="user" class="header">
    <div>
      <h2>{{user.email}}</h2>
    </div>
    <div class="button">
      <p><button @click="logout" class="pure-button pure-button-primary">Logout</button></p>
    </div>
  </div>
  <div v-else>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'mypage',
  data() {
    return{
      title: "",
  desc: "",
  addItem: null,
    }
  },
  

    created() {
    this.$store.dispatch("getUser");
  },
  methods: {
    async logout() {
      try {
        
        this.error = await this.$store.dispatch("logout");
      } catch (error) {
        console.log(error);
      }
    },
    async addNewItem(){
      try {
        console.log(this.title);
        console.log(this.desc);
        let result = await axios.post('/api/items', {
          title: this.title,
          description: this.desc
        });
        
        
        this.addItem = result.data;
        console.log(this.addItem);
      } catch (error) {
        console.log(error);
      }
    },
  
  },
   computed: {
    user() {
       
      return this.$store.state.user;
    }
  }
 
}
</script>

<style scoped>
.pure-button {
  margin: 0px 20px;
}

.header {
  display: flex;
}

.header .button {
  margin-left: 50px;                       
  order: 2;
}
</style>