<template>
  <div :class="[$style.page, $style['ocean-page']]">
    <h2 :class="$style.page__title">Ocean</h2>

    <div v-if="!loading" :class="$style.container">
      <card-component
        v-for="item in standardizedData"
        :key="item.id"
        :item="item"
      >
        <template v-slot:badge>
          <i
            :class="['fas fa-fish', $style['ocean-page__icon']]"
            aria-hidden="true"
          ></i>
          <i
            :class="['fas fa-water', $style['ocean-page__icon']]"
            aria-hidden="true"
          ></i>
        </template>
        <!-- Here we can add any extra unique info
        <template v-slot:unique-extra-data ">        
        </template> -->
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
    name: 'OceanPage',
    components: {
      CardComponent,
      LoadingComponent,
    },
    data() {
      return {
        loading: false,
        oceanHighlights: [
          {
            date: '2021-08-08 12:20:00',
            description:
              'Clownfish or anemonefish are fishes from the subfamily Amphiprioninae in the family Pomacentridae. Thirty species are recognized: one in the genus Premnas, while the remaining are in the genus Amphiprion.',
            id: 1,
            image: '',
            name: 'Clownfish',
          },
          {
            date: '1984-07-09 9:22:00',
            description:
              'Whales are a widely distributed and diverse group of fully aquatic placental marine mammals. They are an informal grouping within the infraorder Cetacea, which usually excludes dolphins and porpoises. ',
            id: 7,
            image: '',
            name: 'Whale',
            news: {
              date: '2021-12-20 14:10:00',
              title: 'The project trying to save entangled whales',
            },
          },
          {
            date: '2016-07-14 4:10:00',
            description:
              'Paracanthurus hepatus is a species of Indo-Pacific surgeonfish. A popular fish in marine aquaria, it is the only member of the genus Paracanthurus. A number of common names are attributed to the species, including regal tang, palette surgeonfish, blue tang, royal blue tang, hippo tang, blue hippo tang, flagtail surgeonfish, Pacific regal blue tang, and blue surgeonfish.',
            id: 12,
            image: '',
            name: 'Royal Blue Tang',
          },
        ],
        oceanPartners: {
          marineMuseum: {
            createdAt: '1920-06-01 11:45:00',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt congue eros sed fermentum. Quisque mauris diam, gravida vel tristique luctus, sodales vitae quam.',
            image: '',
            name: 'Free Willy',
          },
        },
      }
    },
    computed: {
      standardizedData() {
        const { createdAt, info, image, name } = this.oceanPartners.marineMuseum

        const marineMuseumData = {
          date: createdAt,
          description: info,
          image,
          name,
          id: _.max(this.oceanHighlights.map((x) => x.id)) + 1,
          fromPartner: true,
        }

        return _.orderBy(
          [...this.oceanHighlights, marineMuseumData],
          'date',
          'desc'
        )
      },
    },
    methods: {
      setImages() {
        this.oceanHighlights.forEach((item) => {
          item.image = getRandomImage('ocean')
        })

        this.oceanPartners.marineMuseum.image = getRandomImage('ocean')
      },
    },
    created() {
      this.setImages()

      // Here the partner API would be consumed
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1500)
    },
  }
</script>

<style lang="scss" module>
  @import '../assets/scss/page';

  .ocean-page {
    background-image: url('/src/assets/images/ocean/background-image.jpg');
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: darken;

    &__icon {
      color: $badge-color;
      padding: 7px;
      background-color: $dark-grey;
      border-radius: 50%;
      font-size: 2.2rem;
    }
  }
</style>
