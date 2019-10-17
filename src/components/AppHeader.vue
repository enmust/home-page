<template>
    <div id="app-header">

        <!-- DRAWER -->
        <v-navigation-drawer
                v-model="drawer"
                app
                clipped
                dark
                disable-resize-watcher
                temporary
        >
            <v-list>
                <v-subheader>ROUTES</v-subheader>
                <v-list-item
                        active-class="pink--text text--lighten-1"
                        v-for="item in routes"
                        :key="item.text"
                        :to="item.path"
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-subheader>OTHER LINKS</v-subheader>
                <v-list-item
                        v-for="item in links"
                        :key="item.text"
                        :href="item.url"
                        target="LinkWindow"
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!-- HEADER -->
        <v-app-bar
                app
                clipped-left
                dark
                fixed
                height="64px"
        >
            <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title class="pr-9 align-center">
                <span class="title">Enar Mustonen</span>
            </v-toolbar-title>

            <v-toolbar-items class="d-none d-md-block">
                <v-btn text title="Home" to="/">Home</v-btn>
                <v-btn text title="Portfolio" to="/portfolio">Portfolio</v-btn>
                <v-btn text title="Education" to="/education">Education</v-btn>
                <v-btn text title="Work experience" to="/work_experience">Work experience</v-btn>
            </v-toolbar-items>

            <div class="flex-grow-1"></div>

            <v-btn icon href="https://www.linkedin.com/in/enar-mustonen-a4888b139/" target="LinkWindow" title="LinkedIn profile">
                <v-icon>fab fa-linkedin</v-icon>
            </v-btn>

            <v-btn icon href="https://github.com/enmust" target="LinkWindow" title="Github profile">
                <v-icon>fab fa-github</v-icon>
            </v-btn>

            <v-btn icon href="http://www.random-start.com/" target="LinkWindow" title="Ready Set Go game">
                <v-icon>fas fa-gamepad</v-icon>
            </v-btn>

        </v-app-bar>

        <!-- Fullscreen landing image -->
        <div class="fullscreen-landing-image" v-if="$route.name === 'Home'">

            <div class="d-flex flex-column justify-center fill-height">

                <transition name="bounce"
                            enter-active-class="animated bounceInLeft faster"
                            leave-active-class="animated bounceOutRight faster">
                    <div v-show="animateTitle" id="responsive-title-1" class="display-3 text-center font-weight-bold">
                        Hey, I am a software developer
                    </div>
                </transition>

                <transition name="bounce"
                            enter-active-class="animated bounceInRight faster"
                            leave-active-class="animated bounceOutLeft faster">
                    <div v-show="animateTitle" id="responsive-title-2" class="display-2 text-center font-weight-bold my-6">
                        <span>and I can solve </span>
                        <span v-for="entity in funnyTextList" :key="entity.text">
                            <transition name="fade" enter-active-class="animated fadeIn faster">
                                <span v-show="entity.showMe" v-html="entity.text"></span>
                            </transition>
                        </span>
                        <span v-show="!funnyTextList[3].showMe"> of your problems.</span>
                    </div>
                </transition>

                <div class="text-center">
                    <v-btn title="Portfolio" tile color="pink" elevation="8" :to="{ path: '/portfolio' }"
                           :small="$vuetify.breakpoint.smAndDown">
                        <span>PORTFOLIO</span>
                    </v-btn>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: "AppHeader",
    data: () => ({
      drawer: null,
      animateTitle: false,
      timeoutID: null,
      funnyTextList: [
        { text: 'all', showMe: true },
        { text: '<s>all</s> some', showMe: false },
        { text: '<s>all</s> <s>some</s> one', showMe: false },
        { text: '<s>all</s> <s>some</s> <s>one of your</s> problems, ok?', showMe: false }
      ],
      routes: [
        { icon: 'fas fa-home', text: 'Home', path: '/' },
        { icon: 'fas fa-portrait', text: 'Portfolio', path: '/portfolio' },
        { icon: 'fas fa-graduation-cap', text: 'Education', path: '/education' },
        { icon: 'fas fa-briefcase', text: 'Work Experience', path: '/work_experience' },
      ],
      links: [
        { icon: 'fab fa-linkedin', text: 'LinkedIn', url: 'https://www.linkedin.com/in/enar-mustonen-a4888b139/' },
        { icon: 'fab fa-github', text: 'Github', url: 'https://github.com/enmust' },
        { icon: 'fas fa-gamepad', text: 'Ready Set Go', url: 'http://www.random-start.com/' },
      ],
    }),

    watch: {
      '$route.path': {
        immediate: true,
        handler: function (newVal, oldVal) {
          if (newVal === '/') {
            this.$nextTick(() => this.animateTitle = true);
            if (this.timeoutID == null) this.startFunnyText();
          } else this.animateTitle = false;
        }
      }
    },

    methods: {
      startFunnyText() {
        for (let i = 1; i < this.funnyTextList.length; i++) {
          this.timeoutID = setTimeout(() => {
            this.funnyTextList[i-1].showMe = false;
            this.funnyTextList[i].showMe = true;
          }, 2000 * i);
        }
      },
    }
  }
</script>

<style scoped>
    /* Overwriting default dark color which is #424242 */
    .theme--dark.v-navigation-drawer {
        background-color: #212121;
    }
    /* Overwriting default dark color which is #424242 */
    .theme--dark.v-sheet {
        background-color: #212121;
        border-color: #212121;
    }
    /* Removing drawer's border */
    .v-navigation-drawer >>> .v-navigation-drawer__border {
        width: unset ;
    }

    .fullscreen-landing-image {
        height: 100vh;
        margin-bottom: -64px;
        background-image: url("../assets/fullscreenBackground/fullscreenRock.jpg");
        background-size: cover;
    }

    #responsive-title-1, #responsive-title-2 {
        text-shadow: 1px 1px 10px #E91E63;
    }

    #responsive-title-2 >>> s {
        text-decoration-color: #E91E63;
        opacity: .6;
    }

    /* Vuetify medium */
    @media (max-width: 1263px) {
        #responsive-title-1 {
            font-size: 3.25rem !important;
            line-height: 3.25rem;
        }
        #responsive-title-2 {
            font-size: 2.5rem !important;
            line-height: 2.625rem;
        }
    }
    /* Vuetify small */
    @media (max-width: 959px) {
        #responsive-title-1 {
            font-size: 2.75rem !important;
            line-height: 2.75rem;
        }
        #responsive-title-2 {
            font-size: 2rem !important;
            line-height: 2.125rem;
        }
    }
    /* Bootstrap small devices */
    @media (max-width: 767.98px) {
        #responsive-title-1 {
            font-size: 2.25rem !important;
            line-height: 2.25rem;
        }
        #responsive-title-2 {
            font-size: 1.5rem !important;
            line-height: 1.625rem;
        }
    }
    /* Vuetify extra small */
    @media (max-width: 599px) {
        #responsive-title-1 {
            font-size: 1.75rem !important;
            line-height: 1.75rem;
        }
        #responsive-title-2 {
            font-size: 1.25rem !important;
            line-height: 1.375rem;
        }
    }
    /* Custom tiny */
    @media (max-width: 499px) {
        #responsive-title-1 {
            font-size: 1.5rem !important;
            line-height: 1.5rem;
        }
        #responsive-title-2 {
            font-size: 1rem !important;
            line-height: 1.125rem;
        }
    }
    /* Custom teeny-tiny */
    @media (max-width: 379px) {
        #responsive-title-1 {
            font-size: 1.3rem !important;
            line-height: 1.3rem;
        }
        #responsive-title-2 {
            font-size: .8rem !important;
            line-height: .925rem;
        }
    }
</style>
