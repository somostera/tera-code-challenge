<template>
  <div class="sign-in">
    <div class="auth-modal">
       <b-form @submit="onSubmit" @keydown.enter="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Email:"
          label-for="input-1"
          >
          <b-form-input
            id="input-1"
            v-model="user.email"
            type="email"
            required
          >
          </b-form-input>

        </b-form-group>

        <b-form-group>
          <label for="text-password">Senha:</label>
          
          <b-input type="password" id="text-password" v-model="user.password" 
          aria-describedby="password-help-block"></b-input>
        </b-form-group>

        <b-row>
        
        <span class="ml-3" style="font-size: 80%; font-weight: 400;">Criar nova conta:
          <b-link  style="font-size: 90%!important; font-weight: 500!important;" href="/signup" >Cadastrar</b-link></span>

        </b-row>


      <b-button variant="primary" class="mr-2 mt-2" @click="onSubmit" @keydown.enter="onSubmit">Entrar</b-button>

    
    </b-form>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import {userKey, baseApiUrl, showError} from '../../../global'
export default {
    name: 'Signin',
    data(){
        return {
            user: {},
            show: true
        }
    },
    methods:{
        onSubmit(){

           axios.post(`${baseApiUrl}/auth`,  this.user)
            .then(res =>{
              this.$store.commit('setUser', res.data);
              localStorage.setItem(userKey, JSON.stringify(res.data))
              this.$router.push({path: '/'})

          }).catch(showError)
        }
    }
}
</script>

<style>
    .sign-in {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .auth-modal {
        background-color: #FFF;
        width: 400px;
        padding: 35px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dark .auth-modal{
        background: #101520 !important;
        color: #fff;
    }


</style>