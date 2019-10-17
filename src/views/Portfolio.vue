<template>
    <v-content>
        <v-container>

            <v-row>
                <v-col v-for="card in cards"
                       :key="card.title"
                       :class="'col-md-' + card.flex">

                    <v-card elevation="12" color="pink">
                        <v-img :src="card.src"
                               height="400px"
                               class="white--text test"
                               gradient="to top right, rgba(0, 0, 0, .33), rgba(26, 35, 126, .77)"
                        >
                            <transition name="bounce"
                                        enter-active-class="animated fadeInUp faster"
                                        leave-active-class="animated fadeOutDown faster">
                                <v-card-title v-show="animateCardTitles"
                                        class="fill-height align-end title-style"
                                        v-text="card.title"
                                ></v-card-title>
                            </transition>

                        </v-img>

                        <v-card-actions>

                            <v-btn absolute top right tile color="pink" elevation="8"
                                   :href="card.url" target="ProjectWindow" :title="'Visit site: ' + card.url">
                                <span>VIEW PROJECT&nbsp;</span>
                                <v-icon>fas fa-long-arrow-alt-right</v-icon>
                            </v-btn>


                            <div class="flex-grow-1"></div>

                            <span>Description</span>

                            <v-btn icon @click="card.showInfo = !card.showInfo" title="Toggle Description">
                                <v-icon v-if="card.showInfo">fas fa-chevron-up</v-icon>
                                <v-icon v-else>fas fa-chevron-down</v-icon>
                            </v-btn>

                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="card.showInfo">
                                <v-card-text class="text-justify">{{ card.description }}</v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>

            </v-row>


        </v-container>
    </v-content>
</template>

<script>
  export default {
    name: "Portfolio",
    data: () => ({
      animateCardTitles: false,
      cards: [
        {
          title: 'SARV·DOI',
          src: require('@/assets/cardBackgrounds/sarvDoi.jpg'),
          url: 'https://doi.geocollections.info',
          flex: 12,
          showInfo: false,
          description: 'Application for showing published and unpublished DOIs in Geoscience Data Repository.',
        },
        {
          title: 'SARV Data Management',
          src: require('@/assets/cardBackgrounds/sarvDataManagement.png'),
          url: 'https://edit.geocollections.info',
          flex: 6,
          showInfo: false,
          description: 'Application made for managing geocollections-related data in Estonia. Various dedicated websites use information which is created and edited here.',
        },
        {
          title: 'Ready Steady Go',
          src: require('@/assets/cardBackgrounds/randomStart.png'),
          url: 'https://random-start.com',
          flex: 6,
          showInfo: false,
          description: 'Ready Set Go is a small and simple application made using Vue. Just click the screen, wait a little bit and you are ready to Go!',
        },
        {
          title: 'Chuck Norris Facts (react)',
          src: require('@/assets/cardBackgrounds/chuckNorrisFactsReact.jpg'),
          url: 'https://enarmustonen.eu/chuck-norris-react',
          flex: 12,
          showInfo: false,
          description: 'Small app to show Chuck Norris jokes. I made it to try React and also see differences between Vue and React.',
        },
        {
          title: 'Chuck Norris Facts (vue)',
          src: require('@/assets/cardBackgrounds/chuckNorrisFacts.jpg'),
          url: 'https://enarmustonen.eu/chuck-norris',
          flex: 6,
          showInfo: false,
          description: 'Small app to show Chuck Norris jokes. I made it to see differences between Vue and React.',
        },
        {
          title: 'EUROCORE',
          src: require('@/assets/cardBackgrounds/eurocore.jpg'),
          url: 'https://eurocore.rocks',
          flex: 6,
          showInfo: false,
          description: 'EUROCORE data portal provides access to the detailed geological datasets collected from ore exploration drill cores. One can find traditional core logs as well as data collected with novel exploration techniques. The data portal allows user to search over wide range of information including geological descriptions, raw analytical data, image files, etc. Data tables and graphs could be exported to the external applications via common spreadsheet and vector graphic formats.',
        },
        {
          title: 'Geoscience Collections of Estonia',
          src: require('@/assets/cardBackgrounds/geocollections.jpg'),
          url: 'https://geocollections.info',
          flex: 12,
          showInfo: false,
          description: 'Database SARV is used for managing geocollections-related data in Estonia. Here one can find information on collection specimens, rock samples, drill cores, localities, references, photo archive etc related to geology.'
        },

      ],
    }),
    mounted() {
      this.animateCardTitles = true
    },
  }
</script>

<style scoped>
    .title-style {
        text-shadow: 0 1px 9px rgba(0, 0, 0, 0.9);
        font-weight: 500;
        letter-spacing: 2px;
    }

    .test:hover {
        opacity: .88;
    }
</style>
