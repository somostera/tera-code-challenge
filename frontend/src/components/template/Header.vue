<template>
 <b-navbar toggleable="sm" type="dark" variant="info">

    <b-navbar-brand href="/">Livraria do Cowboy</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
          <b-nav-item  @click="modeDark" right>Dark Mode</b-nav-item> 
      </b-navbar-nav>
          
  </b-navbar>

</template>

<script>

import {mapState} from 'vuex'
export default {
    name: "Header",
    props: ['mode'],
    computed: mapState(['isDark']),
    methods:{
        modeDark(){
            this.isDark === 'light' ? this.$store.commit('setIsDark', 'dark') : this.$store.commit('setIsDark', 'light')
        }
    }
}
</script>

<style scoped>
    *{
        
		font-family: Arial, Helvetica, sans-serif;
        font-size: 1.4rem;
        
    }
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
            *{font-size: 1.0rem;}   
            .navbar-nav > li{
            display: flex;
            flex-direction: column;
            padding-left: 7px !important;
            margin-bottom: 0;
            list-style: none;
            background-color:#3cdbdb!important;
            color: #fff;
        }

    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        *{font-size: 1rem;}
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        *{font-size: 1rem;}
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        *{font-size: 1rem;}
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        *{font-size: 1.1rem;}
    }

    @media only screen and (min-width: 1400px) {
        *{font-size: 1.4rem;}
    }

   .bg-info {
         background-color:#3cdbdb !important;
    }
    
    .header{
        grid-area: header;
        background-color:#3cdbdb!important  ;
        font-weight: 100;


        display: flex;
        justify-content: space-between;


    } 

    .navbar-brand{
        background-color:#3cdbdb !important;
        font-family: 'Fredoka One', cursive;
    }
    .navbar-dark .navbar-nav .nav-link {
        font-size: 0.95em;
        color:#fff;
        font-family: "Arial", sans-serif;
    }

     .navbar-dark .navbar-nav .nav-link:hover{
        background-color:	#3cdbdb !important;
        color: #fff;
    }

    .navbar{
         background-color:#3cdbdb!important;
        color: #fff;
    }

    .navbar{
        z-index: 9999;
    }

    .dark header {
         background: #15202B;
    }

    .dark header nav .nav-link:hover {
        background: #101520;
    }

    .dark .bg-info {
         background: #101520;
    }

    .dark .navbar-brand{
        background: #101520 !important;
        font-family: 'Fredoka One', cursive;
    }
    .dark .navbar-dark .navbar-nav .nav-link {
        font-size: 0.95em;
        color:#fff;
        font-family: "Arial", sans-serif;
    }

    .dark .navbar-dark .navbar-nav .nav-link:hover{
        background: #101520 !important;
        color: #fff;
    }

    .dark .navbar{
        background: #101520 !important;
        color: #fff;
    }

    .dark .nav-link{
        background: #101520 !important;
        color: #fff;
    }

    .dark .navbar-nav > li{
         background: #101520 !important;
        color: #fff;
    }




</style>