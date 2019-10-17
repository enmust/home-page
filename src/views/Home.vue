<template>
  <v-content>
    <section>
      <v-parallax :src="require('@/assets/black_code_background.jpg')">
        <v-layout
                column
                align-center
                justify-center
                class="white--text">

          <img class="profile-image" :src="require('@/assets/profile_picture.jpg')" alt="profile_picture" height="300px">

          <h1 class="white--text mt-1 mb-2 display-2 text-center">Enar Mustonen</h1>
          <div class="headline text-center">Software Developer</div>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
              align-center
              justify-center
              class="my-5">

        <v-flex xs12 sm8 md6 xl4>
          <v-card flat class="transparent">
            <v-card-text class="text-center">
              <v-icon x-large class="pink--text text--lighten-1">far fa-user</v-icon>
            </v-card-text>

            <v-card-title class="layout justify-center pt-0">
              <div class="headline text-center">About me</div>
            </v-card-title>

            <v-card-text class="text-justify">
              I am a Software Developer from Tallinn, Estonia. So far my main focus has been in
              <router-link :to="{ path: '/portfolio' }" title="Portfolio" class="btn-text-link teal--text text--accent-2">Web Development</router-link>
              from back-end to front-end.
              Although I have more experience in front-end side using different Javascript frameworks like
              <a class="btn-text-link teal--text text--accent-2" title="Vue main page" href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a>,
              <a class="btn-text-link teal--text text--accent-2" title="Angular main page" href="https://angularjs.org/" target="_blank" rel="noopener noreferrer">Angular.js</a> and
              <a class="btn-text-link teal--text text--accent-2" title="React main page" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a>
              Also I am quite eager and keen on learning new technologies and ways of solving problems.
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </section>

    <section>
      <v-parallax :src="require('@/assets/maraton.jpg')">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-center">Besides programming <i class="fas fa-laptop-code pink--text text--lighten-1"></i> I am also doing lots of running <i class="fas fa-running pink--text text--lighten-1"></i></div>
          <div class="subheading text-center">
            Some of my
            <a class="btn-text-link teal--text text--accent-2" title="Running results at marathon100.com" href="https://marathon100.com/tulemused/tulemused/jooks?f%5Bperiod%5D=all&f%5Bgender%5D=m&f%5Bcompetitor%5D%5B0%5D=15879&f%5Bdistance%5D=all&order=date&od=desc#results" target="_blank" rel="noopener noreferrer">
              results
            </a>
          </div>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
              align-center
              justify-center
              class="my-5">

        <v-flex xs12 sm8 md6 xl4>
          <v-card flat class="transparent">
            <v-card-text class="text-center">
              <v-icon x-large class="pink--text text--lighten-1">far fa-address-card</v-icon>
            </v-card-text>

            <v-card-title class="layout justify-center pt-0">
              <div class="headline text-center">Contact me</div>
            </v-card-title>

            <v-card-text class="text-center">
              I am always interested in new opportunities and up for a challenge.
            </v-card-text>

            <v-list class="transparent text-center">
              <v-list-item>
                <v-list-item-action>
                  <v-icon class="pink--text text--lighten-1">fas fa-phone</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title class="text-left">
                    <a class="btn-text-link teal--text text--accent-2" title="Call me" href="tel: +37253471868">+372 53471868</a>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-icon class="pink--text text--lighten-1">far fa-envelope</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title class="text-left">
                    <a class="btn-text-link teal--text text--accent-2" title="Write me" href="mailto:enar.mustonen@gmail.com">enar.mustonen@gmail.com</a>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-icon class="pink--text text--lighten-1">fas fa-map-marker-alt</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title class="text-left">Tallinn, Estonia</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </section>


  </v-content>
</template>

<script>

export default {
  name: 'Home',
};
</script>

<style>
  .profile-image {
    border-radius: 50%;
    box-shadow: 0 0 3px #fff;
    border: 5px solid #fff;
  }

  .v-parallax__image-container {
    opacity: 0.3;
  }

  .btn-text-link {
    text-decoration: none;
  }

  .btn-text-link:hover {
    opacity: 0.8;
  }
</style>
