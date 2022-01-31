<template>
  <div :class="[$style.card, item.fromPartner ? $style['card--external'] : '']">
    <div :class="$style.card__figure">
      <div :class="$style.card__badge">
        <slot name="badge"></slot>
      </div>

      <img
        :src="item.image.src"
        :alt="item.image.alt"
        width="360"
        height="254"
        :class="$style.card__figure__image"
      />

      <span
        v-html="item.image.author"
        :class="$style.card__figure__author"
      ></span>

      <span
        :class="[
          $style.card__figure__date,
          item.fromPartner ? $style['card__figure__date--external'] : '',
        ]"
        >{{ item.date }}</span
      >
    </div>

    <div :class="$style.card__content">
      <small v-if="item.fromPartner" :class="$style.card__content__from">
        Content From our Partner</small
      >

      <h3 :class="$style.card__content__title">
        {{ item.name }}
      </h3>

      <p :class="$style.card__content__description">
        {{ item.description }}
      </p>

      <slot name="unique-extra-data" />

      <div v-if="item.news" :class="$style.card__content__news">
        <hr :class="$style.separator" />
        <div :class="$style.card__content__news__title">
          <i class="fas fa-newspaper" aria-hidden="true"></i>
          <h4>News:</h4>
        </div>

        <div :class="$style.card__content__news__item" tabindex="0">
          <span>{{ item.news.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardComponent',
    components: {},
    mixins: [],
    props: {
      item: Object,
    },
    data() {
      return {}
    },
    computed: {
      newsDate() {
        // Highlight's news item date
      },
    },
    methods: {},
    created() {},
  }
</script>

<style lang="scss" module>
  .card {
    position: relative;

    cursor: pointer;

    border: 1px solid #44444a;
    background-color: $background-color;
    // box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);

    font-family: $primary-font;
    font-size: 1.6rem;
    line-height: 1.4;

    width: 100%;

    @include breakpoint(phablet) {
      width: 50%;
    }

    @include breakpoint(tablet) {
      width: 33.3%;
    }

    &:hover::before {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(24, 24, 25, 0.45);
      z-index: 1;
    }

    &__badge {
      position: absolute;
      right: -15px;
      top: -15px;

      z-index: 2;
    }

    &__img {
      max-width: 100%;
      height: auto;
    }

    &__figure {
      position: relative;

      &__image {
        width: 100%;
      }

      &__date {
        padding: 5px 10px;
        background-color: $primary-color;

        position: absolute;
        left: 0;
        bottom: 2px;

        color: #fff;

        &--external {
          background-color: $secondary-color;
        }
      }

      &__author {
        position: absolute;
        top: 0;
        left: 0;

        z-index: 2;

        color: rgba(255, 255, 255, 0.4);

        font-family: $primary-font;
        font-size: 1.2rem;

        padding: 5px 15px;

        a {
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;

          &:hover {
            color: $primary-color;
          }
        }
      }
    }

    &__content {
      margin-top: 15px;

      padding: 15px;

      display: flex;
      flex-direction: column;
      gap: 10px;

      &__from {
        color: $grey;
        font-style: italic;
        text-transform: uppercase;
      }

      &__title {
        font-size: 1.8rem;
        font-weight: 600;
        color: $light-grey;
      }

      &__description {
        color: $grey;
      }

      &__news {
        color: #fff;
        font-size: 1.6rem;
        font-style: italic;
        z-index: 2;

        &__title {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        &__item {
          color: $link-color;
          padding-left: 10px;
          margin-left: 2px;
          margin-top: 5px;
          border-left: 2px solid $link-color;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    &--external {
      border-color: $secondary-color;
    }
  }
</style>
