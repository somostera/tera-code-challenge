<template>
  <div class="header__nav">
    <ul class="header__navbar">
      <li class="header__item">
        <a href="#" class="header__link">
          <transition name="slide-fade">
            <button
              class="header__button"
              v-if="show"
              key="on"
              @click="show = false"
            >
              <BaseIcon name="x" :color="color" />
            </button>
            <button
              class="header__button"
              v-else
              key="off"
              @click="show = true"
            >
              <BaseIcon name="filter" :color="color" />
            </button>
          </transition>
        </a>
        <!-- Dropdown Menu -->
        <transition name="dropdown">
          <div
            class="dropdown__menu"
            v-bind:class="{ active: show }"
            v-if="show"
          >
            <ul class="dropdown__menu-nav">
              <li
                v-for="option in options"
                :key="option"
                class="dropdown__menu-item"
              >
                <button
                  class="dropdown__menu-button dropdown__menu-text"
                  title="option.value"
                  @click="handleOptionClick(option.value)"
                >
                  {{ option.text }}
                </button>
              </li>
            </ul>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import BaseIcon from './BaseIcon.vue'

export default defineComponent({
  name: 'CustomSelect',
  components: { BaseIcon },
  emits: ['click-option'],
  data() {
    return {
      show: false,
      options: [
        { text: 'Melhores Avaliados', value: 'bestRated' },
        { text: 'Em estoque', value: 'inStock' },
        { text: 'Ordem Alfabética', value: 'alphabeticalOrder' },
        { text: 'Livros Curtidos', value: 'likedBooks' },
        { text: 'Por Categoria', value: 'byCategory' }
      ]
    }
  },
  computed: {
    color() {
      return 'var(--color__text)'
    }
  },
  methods: {
    handleClick() {
      this.show = false
    },
    handleOptionClick(value) {
      this.show = false
      this.$emit('click-option', value)
    }
  }
})
</script>

<style lang="scss">
:root {
  --font__primary: 'Montserrat', sans-serif;
  --color__bg_filter: #fff;
  --color__text_filter: #6c6c6c;

  @media screen {
    &[data-theme='dark'] {
      --color__bg_filter: #403f4c;
      --color__text_filter: #fff;
    }
  }
}

$font__primary: var(--font__primary);
$color__bg_filter: var(--color__bg_filter);
$color__text_filter: var(--color__text_filter);

.header__nav {
  height: 32px;
  position: relative;
}

.header__navbar {
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  list-style: none;
}

.header__button {
  background-color: transparent;
  border: 1px solid transparent;
  color: $color__text_filter;
  cursor: pointer;
  height: 24px;
  position: absolute;
  right: 0;
  top: 0;
  width: 24px;

  &:focus {
    outline: 0;
  }
}

.dropdown__menu {
  background-color: $color__bg_filter;
  border: 1px solid #ddd;
  border-radius: 2px;
  height: 282px;
  position: absolute;
  min-width: 300px;
  overflow-y: auto;
  right: 0;
  top: 100%;
  z-index: 10;

  &-button {
    align-items: center;
    background: $color__bg_filter;
    border: 0;
    border-bottom: 1px solid #eee;
    color: $color__text_filter;
    cursor: pointer;
    display: flex;
    font-family: $font__primary;
    font-size: 16px;
    font-weight: 400;
    justify-content: flex-start;
    padding: 18px 24px;
    text-decoration: none;
    width: 100%;

    &:hover {
      background: #95d9da;
      color: #fff;
    }
  }
}

// Animation Menu Icon
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s;
}
.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(31px);
}
.slide-fade-leave-active {
  transform: translateX(-31px);
}

// Dropdown Menu Animation
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 1s;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
