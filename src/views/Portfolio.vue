<template>
  <v-content>
    <v-container>
      <v-alert class="my-2" type="info" border="left" dismissible>
        This list contains only live projects. I have also worked on and made
        quite a lot of smaller test applications mainly to play around with
        different technologies.
      </v-alert>

      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :class="'col-md-' + card.flex"
        >
          <v-card elevation="12" color="pink">
            <v-img
              :src="card.src"
              height="400px"
              class="white--text test"
              gradient="to top right, rgba(0, 0, 0, .33), rgba(26, 35, 126, .77)"
            >
              <transition
                name="bounce"
                enter-active-class="animated fadeInUp faster"
                leave-active-class="animated fadeOutDown faster"
              >
                <v-card-title
                  v-show="animateCardTitles"
                  class="fill-height align-end title-style"
                  v-text="card.title"
                ></v-card-title>
              </transition>
            </v-img>

            <v-card-actions>
              <v-btn
                absolute
                top
                right
                tile
                color="pink"
                elevation="8"
                :href="card.url"
                target="ProjectWindow"
                :title="'Visit site: ' + card.url"
              >
                <span>VIEW PROJECT&nbsp;</span>
                <v-icon>fas fa-long-arrow-alt-right</v-icon>
              </v-btn>

              <div class="flex-grow-1"></div>

              <v-btn
                text
                @click="card.showInfo = !card.showInfo"
                title="Toggle Description"
                class="text-none"
              >
                <span>Description</span>
                <v-icon right v-if="card.showInfo">fas fa-chevron-up</v-icon>
                <v-icon right v-else>fas fa-chevron-down</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="card.showInfo">
                <v-card-text class="text-justify">{{
                  card.description
                }}</v-card-text>
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
        title: "TURBA",
        src: require("@/assets/cardBackgrounds/turvas.jpg"),
        url: "https://turvas.geoloogia.info",
        flex: 6,
        showInfo: false,
        description:
          "An application that thoroughly introduces Estonian peat data."
      },
      {
        title: "GeoCASe-prototype",
        src: require("@/assets/cardBackgrounds/geocasePrototype.jpg"),
        url: "http://geocase.geocollections.info",
        flex: 6,
        showInfo: false,
        description:
          "A small prototype made to showcase some features and functionalty which would already surpass the existing application http://www.geocase.eu/. Whole project which will include new Website and API is set to start on the summer of 2020."
      },
      {
        title: "SARV·DOI",
        src: require("@/assets/cardBackgrounds/sarvDoi.jpg"),
        url: "https://doi.geocollections.info",
        flex: 12,
        showInfo: false,
        description:
          "An application for showing published and unpublished DOIs in Geoscience Data Repository."
      },
      {
        title: "SARV Data Management",
        src: require("@/assets/cardBackgrounds/sarvDataManagement.png"),
        url: "https://edit.geocollections.info",
        flex: 7,
        showInfo: false,
        description:
          "An application made for managing geocollections-related data in Estonia. Various dedicated websites use information which is created and edited here."
      },
      {
        title: "Chuck Norris Facts (react)",
        src: require("@/assets/cardBackgrounds/chuckNorrisFactsReact.jpg"),
        url: "https://enarmustonen.eu/chuck-norris-react",
        flex: 5,
        showInfo: false,
        description:
          "A small app made in react.js framework to show Chuck Norris jokes. I made it to try React and also see differences between Vue and React."
      },
      {
        title: "Chuck Norris Facts (vue)",
        src: require("@/assets/cardBackgrounds/chuckNorrisFacts.jpg"),
        url: "https://enarmustonen.eu/chuck-norris",
        flex: 12,
        showInfo: false,
        description:
          "A small app made in vue.js framework to show Chuck Norris jokes. I made it to see differences between Vue and React."
      },
      {
        title: "Ready Steady Go",
        src: require("@/assets/cardBackgrounds/randomStart.png"),
        url: "https://random-start.com",
        flex: 5,
        showInfo: false,
        description:
          "Ready Set Go is a small and simple application made using Vue. Just click the screen, wait a little bit and you are ready to Go!"
      },
      {
        title: "EUROCORE",
        src: require("@/assets/cardBackgrounds/eurocore.jpg"),
        url: "https://eurocore.rocks",
        flex: 7,
        showInfo: false,
        description:
          "EUROCORE data portal provides access to the detailed geological datasets collected from ore exploration drill cores. One can find traditional core logs as well as data collected with novel exploration techniques. The data portal allows user to search over wide range of information including geological descriptions, raw analytical data, image files, etc. Data tables and graphs could be exported to the external applications via common spreadsheet and vector graphic formats."
      },
      {
        title: "Estonian geocollections information system public API",
        src: require("@/assets/cardBackgrounds/apiBackground.png"),
        url: "https://api.geocollections.info/",
        flex: 6,
        showInfo: false,
        description: "This is the public API for geocollections data. "
      },
      {
        title: "Geoscience Collections of Estonia",
        src: require("@/assets/cardBackgrounds/geocollections.jpg"),
        url: "https://geocollections.info",
        flex: 6,
        showInfo: false,
        description:
          "Database SARV is used for managing geocollections-related data in Estonia. Here one can find information on collection specimens, rock samples, drill cores, localities, references, photo archive etc related to geology."
      }
    ]
  }),
  mounted() {
    this.animateCardTitles = true;
  }
};
</script>

<style scoped>
.title-style {
  text-shadow: 0 1px 9px rgba(0, 0, 0, 0.9);
  font-weight: 500;
  letter-spacing: 2px;
}

.test:hover {
  opacity: 0.88;
}
</style>
