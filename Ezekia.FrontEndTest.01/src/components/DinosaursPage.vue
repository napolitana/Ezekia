<template>
  <div :class="[$style.page, $style['dinosaurs-page']]">
    <h2 :class="$style.page__title">Dinosaurs</h2>

    <div v-if="!loading" :class="$style.container">
      <card-component
        v-for="item in standardizedData"
        :key="item.id"
        :item="item"
      >
        <template v-slot:badge>
          <i
            :class="['fas fa-dragon', $style['dinosaurs-page__icon']]"
            aria-hidden="true"
          ></i>
        </template>

        <template v-slot:unique-extra-data v-if="item.period">
          <div :class="$style['dinosaurs-page__period']">
            <div :class="$style['dinosaurs-page__period__title']">
              <i class="far fa-calendar" aria-hidden="true"></i>
              <h4>Period:</h4>
            </div>

            <span :class="$style['dinosaurs-page__period__item']">{{
              item.period
            }}</span>
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
    name: 'DinosaursPage',
    components: {
      CardComponent,
      LoadingComponent,
    },
    data() {
      return {
        loading: false,
        dinosaursHighlights: [
          {
            date: '1995-05-22 12:20:00',
            description:
              'Tyrannosauridae (or tyrannosaurids, meaning "tyrant lizards") is a family of coelurosaurian theropod dinosaurs that comprises two subfamilies containing up to thirteen genera, including the eponymous Tyrannosaurus.',
            id: 1,
            image: '',
            name: 'Tyrannosauridae',
            period: 'End Creataceous period',
          },
          {
            date: '1996-03-18 9:22:00',
            description:
              'Scipionyx (pronounced "SHIH-pee-oh-nicks"[1] or "ship-ee-OH-nicks"[2]) is a genus of theropod dinosaur from the Early Cretaceous of Italy, around 113 million years ago.',
            id: 7,
            image: '',
            name: 'Scipionyx',
            news: {
              date: '2020-08-18 18:00:00',
              title:
                'Two new killer dinosaurs have been unearthed on the Isle of Wight',
            },
            period: 'Early Creataceous period',
          },
          {
            date: '1957-04-17 4:10:00',
            description:
              'Herrerasaurus was a genus of saurischian dinosaur from the Late Triassic period. ',
            id: 12,
            image: '',
            name: 'Herrerasaurus',
            news: {
              title:
                'Dinosaur fossil inside its egg reveals ‘bird-like’ hatching posture',
            },
            period: 'Late Triassic period',
          },
        ],
        dinosaursPartners: {
          paleontogyMuseum: {
            createdAt: '2020-06-01 11:45:00',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt congue eros sed fermentum. Quisque mauris diam, gravida vel tristique luctus, sodales vitae quam.',
            image: '',
            name: 'Jurassic Park',
          },
        },
      }
    },
    computed: {
      standardizedData() {
        const { createdAt, info, image, name } =
          this.dinosaursPartners.paleontogyMuseum

        const paleontogyMuseumData = {
          date: createdAt,
          description: info,
          image,
          name,
          id: _.max(this.dinosaursHighlights.map((x) => x.id)) + 1,
          fromPartner: true,
        }

        return _.orderBy(
          [...this.dinosaursHighlights, paleontogyMuseumData],
          'date',
          'desc'
        )
      },
    },
    methods: {
      setImages() {
        this.dinosaursHighlights.forEach((item) => {
          item.image = getRandomImage('dinosaurs')
        })

        this.dinosaursPartners.paleontogyMuseum.image =
          getRandomImage('dinosaurs')
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

  .dinosaurs-page {
    background-image: url('/src/assets/images/dinosaurs/background-image.jpg');
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: darken;

    &__icon {
      color: $badge-color;
      padding: 7px;
      background-color: $dark-grey;
      border-radius: 50%;
      font-size: 2.2rem;
    }

    &__period {
      color: #fff;
      font-size: 1.6rem;

      display: flex;
      gap: 10px;

      &__title {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }
</style>
