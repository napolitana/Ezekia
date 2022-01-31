<template>
  <div :class="[$style.page, $style['space-page']]">
    <h2 :class="$style.page__title">Space</h2>

    <div v-if="!loading" :class="$style.container">
      <card-component
        v-for="item in standardizedData"
        :key="item.id"
        :item="item"
      >
        <template v-slot:badge>
          <div>
            <img
              src="/src/assets/images/space/star.png"
              alt="A small yellow star."
            />
          </div>
        </template>

        <template v-slot:unique-extra-data v-if="item.quiz">
          <div :class="$style['space-page__quiz']">
            <div :class="$style['space-page__quiz__title']">
              <i class="fas fa-question-circle" aria-hidden="true"></i>
              <h4>Quiz</h4>
            </div>

            <a
              href="#"
              @click.prevent
              :class="$style['space-page__quiz__item']"
              >{{ item.quiz }}</a
            >
          </div>
        </template>
      </card-component>
    </div>

    <div v-else :class="$style.page__loading">
      <loading-component />
    </div>
  </div>
</template>

<script>
  import CardComponent from './CardComponent.vue'
  import LoadingComponent from './LoadingComponent.vue'

  import { getRandomImage } from '@/mocks/images'

  export default {
    name: 'SpacePage',
    components: {
      CardComponent,
      LoadingComponent,
    },
    mixins: [],
    props: {},
    data() {
      return {
        loading: false,
        spaceHighlights: [
          {
            date: '2020-04-20 12:20:00',
            description:
              'Asteroids are minor planets, especially of the inner Solar System. Larger asteroids have also been called planetoids.',
            id: 1,
            image: '',
            name: 'Asteroids',
          },
          {
            date: '2020-05-20 15:50:00',
            description:
              'A comet is an icy, small Solar System body that, when passing close to the Sun, warms and begins to release gases, a process called outgassing.',
            id: 9,
            image: '',
            name: 'Comets',
          },
          {
            date: '2020-05-01 9:22:00',
            description:
              'The term planet is ancient, with ties to history, astrology, science, mythology, and religion.',
            id: 7,
            image: '',
            name: 'Planets',
            news: {
              date: '2020-08-18 18:00:00',
              title: 'Attend our talk about Jupiter with Dr. Hogarth',
            },
            quiz: 'https://planetquiz.space',
          },
          {
            date: '2020-07-05 4:10:00',
            description:
              'A meteor shower is a celestial event in which a number of meteors are observed to radiate, or originate, from one point in the night sky.',
            id: 12,
            image: '',
            name: 'Meteor showers',
            news: {
              title: 'The Lyrids will peak at on April 21-22 2021, at night',
            },
          },
        ],
        spacePartners: {
          observatory: {
            createdAt: '2020-06-01 11:45:00',
            info: 'The Mauna Kea Observatories (MKO) are a number of independent astronomical research facilities and large telescope observatories that are located at the summit of Mauna Kea on the Big Island of Hawaiʻi, United States.',
            image: '',
            name: 'Mauna Kea Observatories',
          },
        },
      }
    },
    computed: {
      standardizedData() {
        const { createdAt, info, image, name } = this.spacePartners.observatory
        const observatoryData = {
          date: createdAt,
          description: info,
          image,
          name,
          id: _.max(this.spaceHighlights.map((x) => x.id)) + 1,
          fromPartner: true,
        }

        return _.orderBy(
          [...this.spaceHighlights, observatoryData],
          'date',
          'desc'
        )
      },
    },
    methods: {
      setImages() {
        this.spaceHighlights.forEach((item) => {
          item.image = getRandomImage('space')
        })

        this.spacePartners.observatory.image = getRandomImage('space')
      },
    },
    created() {
      this.setImages()

      // Here the partner API would be consumed
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
  }
</script>

<style lang="scss" module>
  @import '../assets/scss/page';

  .space-page {
    background-image: url('/src/assets/images/space/background-image.jpg');
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: darken;

    &__quiz {
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
        display: inline-block;

        color: $link-color;
        text-decoration: none;

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
</style>
