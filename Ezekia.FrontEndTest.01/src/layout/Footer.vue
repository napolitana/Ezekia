<template>
  <div :class="$style.footer" role="contentinfo">
    <div :class="$style.container">
      <nav :class="$style.footer__section">
        <h5 :class="$style.footer__section__title">Pages</h5>
        <ul>
          <li
            v-for="(page, index) in pages"
            :key="index"
            tabindex="0"
            :class="$style['footer__section__list__item--link']"
            @click="$emit('setActivePage', page)"
            @keydown.enter="$emit('setActivePage', page)"
          >
            {{ page }}
          </li>
        </ul>
      </nav>

      <div :class="$style.footer__section">
        <h5 :class="$style.footer__section__title">Partners</h5>
        <ul :class="$style.footer__section__list">
          <li :class="$style['footer__section__list__item--link']" tabindex="0">
            Mauna Kea Observatories
          </li>
          <li :class="$style['footer__section__list__item--link']" tabindex="0">
            Jurassic Park
          </li>
          <li :class="$style['footer__section__list__item--link']" tabindex="0">Tarzan</li>
          <li :class="$style['footer__section__list__item--link']" tabindex="0">
            Free Willy
          </li>
        </ul>
      </div>

      <div :class="$style.footer__section">
        <h5 :class="$style.footer__section__title">Contact us</h5>
        <ul :class="$style.footer__section__list">
          <li :class="$style.footer__section__list__item">
            <i class="fas fa-phone-alt" aria-hidden="true"></i> (XX) XXXXX-XXXX
          </li>
          <li :class="$style.footer__section__list__item">
            <i class="far fa-envelope" aria-hidden="true"></i
            >frontendtest@email.com
          </li>
        </ul>
      </div>

      <div :class="$style.footer__section">
        <h5 :class="$style.footer__section__title">Quick links</h5>
        <ul :class="$style.footer__section__list">
          <li :class="$style['footer__section__list__item--link']" tabindex="0">
            Information Notice
          </li>
          <li :class="$style['footer__section__list__item--link']" tabindex="0">
            Cookie Policy
          </li>
          <li :class="$style['footer__section__list__item--link']" tabindex="0">
            Service Agreement
          </li>
        </ul>
      </div>
    </div>

    <hr :class="$style.separator" />

    <div :class="[$style.container, $style.footer__additional]">
      <span> &#169 2022</span>
      <p :class="$style.footer__additional__address">
        <i class="fas fa-map-marker-alt" aria-hidden="true"></i>Executives Place
        Ltd., Churchill House, 137-139 Brent Street London NW4 4DJ
      </p>
      <ul :class="$style.footer__additional__media">
        <li :class="$style.footer__additional__media__item" tabindex="0">
          <i class="fab fa-linkedin" aria-hidden="true"></i>
        </li>
        <li :class="$style.footer__additional__media__item" tabindex="0">
          <i class="fab fa-instagram" aria-hidden="true"></i>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LayoutFooter',
    props: {
      pages: {
        type: Array,
        required: true,
      },
    },
  }
</script>

<style lang="scss" module>
  .footer {
    background-color: $background-color;

    font-family: $primary-font;
    font-size: 1.6rem;

    padding-bottom: 30px;

    &__section {
      color: $grey;
      line-height: 1.6;
      flex-grow: 1;

      &__title {
        font-size: 1.8rem;
        font-weight: 600;
        color: $light-grey;
      }

      &__list {
        &__item {
          display: flex;
          align-items: center;
          gap: 5px;

          &--link {
            &:hover {
              color: $primary-color;
              cursor: pointer;
            }
          }
        }
      }
    }

    &__additional {
      display: flex;
      align-items: center;
      justify-content: space-between;

      color: $grey;

      &__address{
        display: flex;
        gap: 5px;
      }

      &__media{
        display: flex;
        gap: 5px;

        &__item{
          font-size: 2.4rem;
        color: #fff;

        cursor: pointer;

        &:hover{
          color: $primary-color;
        }
        }
      }
    }
  }
</style>
