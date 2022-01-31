<template>
  <div :class="[$style.page, $style['wildlife-page']]">
    <h2 :class="$style.page__title">Wildlife</h2>

    <div v-if="!loading" :class="$style.container">
      <card-component
        v-for="item in standardizedData"
        :key="item.id"
        :item="item"
      >
        <template v-slot:badge>
          <i
            :class="['fas fa-hippo', $style['wildlife-page__icon']]"
            aria-hidden="true"
          ></i>
        </template>

        <template
          v-slot:unique-extra-data
          v-if="item.endangeredStatus || item.location || item.specie"
        >
          <div :class="$style['wildlife-page__info']">
            <i
              :class="['fas fa-info', $style['wildlife-page__info__icon']]"
              aria-hidden="true"
            ></i>

            <div>
              <p v-if="item.location">
                <strong>Location: </strong>{{ item.location }}
              </p>
              <p v-if="item.specie">
                <strong>Specie: </strong>{{ item.specie }}
              </p>
              <p v-if="item.endangeredStatus">
                <strong>Endangered status: </strong>{{ item.endangeredStatus }}
              </p>
            </div>
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
    name: 'WildlifePage',
    components: {
      CardComponent,
      LoadingComponent,
    },
    data() {
      return {
        loading: false,
        wildlifeHighlights: [
          {
            date: '1957-07-21 12:20:00',
            description:
              'The tiger is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside.',
            id: 1,
            image: '',
            name: 'Tiger',
            location:
              'Siberian temperate forests to subtropical and tropical forests on the Indian subcontinent, Indochina and Sumatra',
            specie: 'Panthera tigris',
            endangeredStatus: 'Endangered',
          },
          {
            date: '1984-07-09 9:22:00',
            description:
              'A rhinoceros, commonly abbreviated to rhino, is a member of any of the five extant species (or numerous extinct species) of odd-toed ungulates in the family Rhinocerotidae.',
            id: 7,
            image: '',
            name: 'White rhinoceros',
            news: {
              date: '2021-12-15 18:00:00',
              title: '24 rhinos found dead in South Africa in two weeks',
            },
            location: 'Africa, South and Southeast Asia',
            specie: 'Ceratotherium simum',
            endangeredStatus: 'Near threatened',
          },
          {
            date: '2016-07-14 4:10:00',
            description:
              'The giraffe is a tall African mammal belonging to the genus Giraffa. Specifically, It is an even-toed ungulate. It is the tallest living terrestrial animal and the largest ruminant on Earth. ',
            id: 12,
            image: '',
            name: 'Giraffe',
            news: {
              title:
                'Giraffe dies at L.A. Zoo after delivery of stillborn calf',
            },
          },
        ],
        wildlifePartners: {
          biologicalMuseum: {
            createdAt: '1920-06-01 11:45:00',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt congue eros sed fermentum. Quisque mauris diam, gravida vel tristique luctus, sodales vitae quam.',
            image: '',
            name: 'Tarzan',
          },
        },
      }
    },
    computed: {
      standardizedData() {
        const { createdAt, info, image, name } =
          this.wildlifePartners.biologicalMuseum

        const biologicalMuseumData = {
          date: createdAt,
          description: info,
          image,
          name,
          id: _.max(this.wildlifeHighlights.map((x) => x.id)) + 1,
          fromPartner: true,
        }

        return _.orderBy(
          [...this.wildlifeHighlights, biologicalMuseumData],
          'date',
          'desc'
        )
      },
    },
    methods: {
      setImages() {
        this.wildlifeHighlights.forEach((item) => {
          item.image = getRandomImage('wildlife')
        })

        this.wildlifePartners.biologicalMuseum.image =
          getRandomImage('wildlife')
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

  .wildlife-page {
    background-image: url('/src/assets/images/wildlife/background-image.jpg');
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: darken;

    &__icon {
      color: $badge-color;
      padding: 7px;
      background-color: $dark-grey;
      border-radius: 50%;
      font-size: 2.2rem;
    }

    &__info {
      display: flex;
      gap: 15px;

      color: $grey;

      &__icon {
        color: #fff;
        padding: 5px 10px;
        border-radius: 50%;
        border: 1px solid #44444a;
      }

      strong {
        font-weight: 600;
        color: $primary-color;
      }
    }
  }
</style>
