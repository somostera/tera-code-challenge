<template>
  <div class="filters" :class="`filters-${styleMode}`">
    <input
      class="filters__search-box"
      :class="`filters__search-box-${styleMode}`"
      type="text"
      placeholder="Procure por um livro"
      @change="searchBook($event)"
    >
    <div class="filters__container">
      <input class="filters__search-box category" :class="`filters__search-box-${styleMode}`" type="text" v-if="isCategoryOpen" placeholder="Nome da Categoria">
      <div>
        <div class="filters-dropdown-container" :class="`filters-dropdown-container-${styleMode}`" @click="openDropDown">
          <span class="filters-dropdown" :class="`filters-dropdown-${styleMode}`">Filtros </span>
          <font-awesome-icon class="filters-dropdown-arrow" :class="`filters-dropdown-arrow-${styleMode}`" :icon="['fas', 'angle-down']" />
        </div>
        <div class="dropdown-menu" :class="`dropdown-menu-${styleMode}`" v-if="isDropDownOpen">
          <div
            v-for="option in options"
            :key="option.id"
            @click="handleClick(option.fieldName)"
          >
            {{option.label}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'Filters',

  data() {
    return {
      options: [
        {
          label: 'Melhores avaliados',
          id: 1,
          fieldName: 'topRated'
        },
        {
          label: 'Em estoque',
          id: 2,
          fieldName: 'inStock'
        },
        {
          label: 'Ordem Alfabética',
          id: 3,
          fieldName: 'alphabeticalOrder'
        },
        {
          label: 'Livros curtidos',
          id: 4,
          fieldName: 'likedBooks'
        },
        {
          label: 'Por categoria',
          id: 5,
          fieldName: 'byCategory'
        }
      ],
      isCategoryOpen: false,
      isDropDownOpen: false
    }
  },

  computed: {
    ...mapGetters({styleMode:'styleMode', booksList: 'booksList'}),
  },

  methods: {
    ...mapMutations({setFilteredList: 'SET_FILTERED_LIST'}),

    openDropDown() {
      this.isDropDownOpen = !this.isDropDownOpen
    },

    handleClick(field) {
      console.log(field);
      let filteredList
      if(field === 'topRated') {
        filteredList = this.booksList.filter(element => {
          return element.users_who_liked.length > 0
        })
        this.setFilteredList(filteredList)
      } else
      if(field === 'inStock') {
        filteredList = this.booksList.filter(element => {
          return element.stock > 0
        })
        this.setFilteredList(filteredList)
      } else 
      if(field === 'alphabeticalOrder') {
        filteredList = this.booksList.sort((a,b) => {
          if(a.firstname < b.firstname) { return -1; }
          if(a.firstname > b.firstname) { return 1; }
          return 0;
        })
        this.setFilteredList(filteredList)
      }
    },

    searchBook(event) {
      const searchText = event.target.value
      const filteredList = this.booksList.filter(element => {
        return element.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      })
      this.setFilteredList(filteredList)
    }
  }

}
</script>

<style scoped>
  @import '../style/styleMode.css';

.filters {
  display: flex;
  justify-content: space-between;
  padding: 30px 50px;
  flex-wrap: wrap;
}

.filters-light {
  background: var(--light-mode-body-background)
}

.filters-dark {
  background: var(--dark-mode-body-background)
}

.filters__search-box {
  width: 300px;
  padding: 10px;
}

.filters__search-box {
  height: 20px;
}

.filters-dropdown {
  padding: 0px 50px 0px 20px;
  font-size: 14px;
}

.filters-dropdown-light,
.filters-dropdown-arrow-light {
  color: var(--light-mode-filter-font-color);
}

.filters-dropdown-dark,
.filters-dropdown-arrow-dark {
  color: var(--dark-mode-filter-font-color);
}

.filters-dropdown-arrow {
  border: solid var(--light-mode-border-color);
  border-width: 0px 0px 0px 1px;
  height: 100%;
  padding: 0px 15px;
}

.filters-dropdown-arrow-light {
  color: var(--light-mode-border-color)
}

.filters-dropdown-arrow-dark {
  color: var(--dark-mode-filter-font-color)
}

.filters__search-box-light {
  background: var(--light-mode-filter-background);
  border: 1px solid var(--light-mode-border-color);
  box-shadow: 0.5px 0.5px 5px 1px rgba(195,201,201,0.8);
}

.filters__search-box-dark {
  background: var(--dark-mode-filter-background);
  border: 1px solid var(--dark-mode-border-color);
  box-shadow: 0.5px 0.5px 5px 1px rgba(195,201,201,0.8);
}

.filters__search-box-light::placeholder {
  color: var(--light-mode-filter-font-color);
}

.filters__search-box-light input, select, textarea{
  color: var(--light-mode-filter-font-color);
}

.filters__search-box-dark::placeholder {
  color: var(--dark-mode-filter-font-color);
}

.category {
  width: 200px;
}

.filters__container {
  display: flex;
}

.filters-dropdown-container {
  display: flex;
  align-items: center;
  height: 42px;
  box-shadow: 0.5px 0.5px 5px 1px rgba(195,201,201,0.8);
  margin-left: 10px;
  max-width: 150px;
}

.filters-dropdown-container-light {
  background: var(--light-mode-filter-background);
}

.filters-dropdown-container-dark {
  background: var(--dark-mode-filter-background);
}

.dropdown-menu {
  box-shadow: 0.5px 0.5px 5px 1px rgba(195,201,201,0.8);
  margin-top: 5px;
  position: absolute;
}

.dropdown-menu div {
  padding: 5px;
  cursor: pointer;
}

.dropdown-menu-light div {
  border: solid var(--light-mode-border-color);
  border-width: 0px 0px 1px 0px;
}

.dropdown-menu-dark div {
  border: solid var(--dark-mode-border-color);
  border-width: 0px 0px 1px 0px;
}

.dropdown-menu-light {
  border: 1px solid var(--light-mode-border-color);
  color: var(--light-mode-body-font-color);
  background: var(--light-mode-body-background);
}

.dropdown-menu-dark {
  border: 1px solid var(--dark-mode-border-color);
  color: var(--dark-mode-body-font-color);
  background: var(--dark-mode-body-background);
}

@media (max-width: 571px) {
  .filters-dropdown-container {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>
