<template>
  <v-content>
    <v-container class="fill-height justify-center">
      <v-timeline class="fill-height" style="width: 100%" :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
            color="green lighten-1"
            fill-dot
            right
        >
          <v-card>
            <v-card-title class="green lighten-1">
              <v-icon
                  dark
                  class="mr-4"
                  large
              >
                fas fa-laptop-code
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">Software Developer <span class="years">(2017 - ...)</span></h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12">
                  Working as a software developer in Tallinn University of Technology under the Department of Geology.
                  <br>
                  So far I have worked on many different projects from start to finish which can be found under the
                  <router-link class="link" :to="{ path: '/portfolio' }">Portfolio</router-link> tab.
                  <br>

                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item
            color="cyan lighten-1"
            fill-dot
            left
            small
        >
          <v-card>
            <v-card-title class="cyan lighten-1 justify-end">
              <h2 class="display-1 mr-4 white--text font-weight-light">IT Specialist <span class="years">(2018 - 2019) 8 months</span></h2>
              <v-icon
                  dark
                  large
              >fas fa-users</v-icon>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12">
                  As I was serving my compulsory military service I had an opportunity to serve as an IT specialist.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: "WorkExperience"
  }
</script>

<style scoped>
  .link {
    color: #64ffda;
    text-decoration: none;
  }

  .link:hover {
    opacity: 0.8;
  }

  .years {
    font-size: 18px;
  }
</style>
