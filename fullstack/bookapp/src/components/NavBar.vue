<template>
  <div>
    <header class="navbar container">
      <div class="left-side">
        <button id="menu-mobile" @click="openNav()" v-if="logged">
          <img src="@/assets/menu-light.svg" />
        </button>
        <p class="nav-title">Livraria do cowboy</p>
      </div>
      <p class="dark-mode" v-if="!darkmode" @click="toggleTheme()">Dark mode</p>
      <p class="dark-mode" v-else @click="toggleTheme()">Light mode</p>
    </header>

    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()"
        >&times;</a
      >
      <p class="text-btn" @click="toForm()">Adicionar Livro</p>
      <p class="text-btn" @click="logout()">Sair</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {}
  },

  computed: {
    logged() {
      return this.$store.state.logged
    },

    darkmode() {
      return this.$store.state.darkmode
    }
  },

  methods: {
    closeNav() {
      document.getElementById('mySidenav').style.width = '0'
    },

    logout() {
      this.closeNav()
      this.$store.dispatch('logoutUser')
      this.$router.push('/entrar').catch(() => {})
    },

    openNav() {
      document.getElementById('mySidenav').style.width = '250px'
    },

    toForm() {
      this.closeNav()
      this.$router.push('/formulario').catch(() => {})
    },

    toggleTheme() {
      this.$store.dispatch('setDarkmode', !this.darkmode)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

.dark-mode {
  font-size: 18px;
}

.left-side {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.navbar {
  /* NavBar */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  height: 74px;

  background: $primary;
  @include shadow;
}

.navbar p {
  color: #ffffff;
}

.nav-title {
  font-size: 28px;
}

#menu-mobile {
  display: inline-block;
  background: none;
  border: none;
  margin: 10px 20px 0 0;
}

#menu-mobile:focus {
  outline: none;
}
#menu-mobile img {
  pointer-events: none;
}

/* Side menu */

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: $primary;
  @include shadow;
  overflow-x: hidden;
  transition: 0.2s;
  padding-top: 60px;
}

.sidenav p,
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #f1f1f1;
  display: block;
  transition: 0.3s;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media only screen and (max-width: 600px) {
  .nav-title {
    font-size: 18px;
  }

  .dark-mode {
    font-size: 14px;
  }

  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
