<template>
  <div class="sign-up">
     <div class="auth-modal">
           <b-form @submit="onSubmit">
            <h2> Criar uma conta</h2>
                <div class="form-sign-up">

                    
                    <b-form-group id="input-name" label="Nome:" label-for="input-2">
                        <b-form-input
                        id="input-name"
                        v-model="user.name"
                        required
                        placeholder="Enter name"
                        ></b-form-input>
                    </b-form-group>


                    <b-form-group
                        id="input-email"
                        label="Email:"
                        label-for="input-1"
                    >
                        <b-form-input
                        id="input-email"
                        v-model="user.email"
                        type="email"
                        required
                        placeholder="Enter email"
                        ></b-form-input>

                    </b-form-group>


                    <label for="text-password">Senha:</label>
                    
                    <b-input type="password" id="text-password" v-model="user.password" 
                    aria-describedby="password-help-block"></b-input>
                    
        
                    <b-form-group>
                      <b-button class="mr-2 mt-4" variant="primary" @click="onSubmit">Criar conta</b-button>
                    </b-form-group>

                </div>


              
    </b-form>
     </div>
  </div>
</template>

<script>
import axios from 'axios'
import {showError,baseApiUrl} from '../../../global.js'
export default {
    name: 'Signup',
    data(){
        return {
            user: {}
        }
    },
    methods:{
        onSubmit(){
        
            axios.post(`${baseApiUrl}/users`, this.user)
            .then(() =>{
              this.$toasted.global.defaultSuccess();
              this.user = {}
               this.$router.push({path: '/signin'})
            })
            .catch(showError)

        },
        onReset(){
            this.user ={}
        }
    }
}
</script>
<style>
    .sign-up {
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