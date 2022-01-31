<template>
  <header :class="$style.header" role="banner">
    <div :class="$style.header__logo">
      <i
        :class="['fas fa-globe-europe', $style.header__logo__icon]"
        aria-hidden="true"
      ></i>

      <h1 :class="$style.header__logo__title">National History Museum</h1>
    </div>

    <div
      role="navigation"
      aria-label="Menu"
      :class="$style.header__nav"
      tabindex="0"
    >
      <span
        v-if="toggleMenu"
        tabindex="0"
        @click="menuDropdownOpen = !menuDropdownOpen"
        @keydown.enter="menuDropdownOpen = !menuDropdownOpen"
        :class="$style.header__nav__icon"
      >
        <i class="fas fa-bars" aria-hidden="true"></i>
      </span>

      <ul
        v-if="menuDropdownOpen || (!toggleMenu && !menuDropdownOpen)"
        :class="[
          $style.header__nav__navbar,
          menuDropdownOpen ? $style['header__nav__navbar--dropdown-open'] : '',
        ]"
      >
        <li
          v-for="(page, index) in pages"
          :key="index"
          tabindex="0"
          :class="[
            $style.header__nav__navbar__item,
            page === active ? $style['header__nav__navbar__item--active'] : '',
          ]"
          @click="setActivePage(page)"
          @keydown.enter="setActivePage(page)"
        >
          {{ page }}
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'LayoutHeader',
    emits: ['setActivePage'],
    props: {
      pages: {
        type: Array,
        required: true,
      },
      active: {
        type: [String],
      },
    },
    data() {
      return {
        toggleMenu: false,
        menuDropdownOpen: false,
      }
    },
    methods: {
      setActivePage(page) {
        this.$emit('setActivePage', page)
        if (this.menuDropdownOpen) this.menuDropdownOpen = false
      },
    },
    created() {
      if (window.innerWidth < 992) this.toggleMenu = true

      const _this = this
      window.addEventListener('resize', function (e) {
        if (e.target.innerWidth < 992) {
          _this.toggleMenu = true
        } else {
          _this.toggleMenu = false
        }
      })
    },
  }
</script>

<style lang="scss" module>
  .header {
    position: fixed;
    top: 0;
    z-index: 99999;

    width: 100%;
    height: 40px;
    padding: 10px 20px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: $background-color;

    color: $light-grey;

    &__logo {
      display: flex;
      align-items: center;
      gap: 10px;

      &__icon {
        font-size: 3rem;
      }

      &__title {
        font-family: $secondary-font;
        font-size: 2.8rem;
        letter-spacing: 0.3rem;

        @include breakpoint(mobile) {
          font-size: 1.8rem;
        }
      }
    }

    &__nav {
      position: relative;

      &__icon {
        font-size: 2.4rem;
        cursor: pointer;

        &:hover {
          color: $primary-color;
        }
      }

      &__navbar {
        display: flex;
        gap: 15px;

        &--dropdown-open {
          flex-direction: column;
          position: absolute;
          margin-top: 10px;
          right: -16px;
          text-align: end;
          background-color: $background-color;
          padding: 0 15px 10px 15px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }

        &__item {
          font-family: $primary-font;
          font-size: 1.8rem;

          cursor: pointer;

          &:hover,
          &--active {
            color: $primary-color;
          }
        }
      }
    }
  }
</style>
