<template>
  <v-content>
    <v-container class="fill-height justify-center">
      <v-timeline class="fill-height" style="width: 100%" :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
            v-for="entity in education"
            :key="entity.title"
            :color="entity.color"
            small
        >
          <template v-slot:opposite>
            <span
                :class="`headline font-weight-bold ${entity.color}--text`"
                v-text="entity.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${entity.color}--text`">{{ entity.title }}</h2>
            <div>
              {{ entity.text }}
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: "Education",
    data: () => ({
      education: [
        {
          color: 'pink',
          year: '2015 - ...',
          title: 'Tallinn University of Technology',
          text: "Unfinished bachelor's degree in Informatics. During the 4th semester I started working full-time as a software developer. "
        },
        {
          color: 'blue',
          year: '2012 - 2015',
          title: 'Pärnu Koidula Gymnasium',
          text: '10th to 12th grade in which I had more in depth English and Mathematics classes. ' +
            'At 11th and 12th grade is the time I got interested in programming and at this time around I wrote my first lines of code'
        },
        {
          color: 'green',
          year: '2003 - 2012',
          title: 'Paikuse Basic School',
          text: '1st to 9th grade.'
        },
      ],
    }),
  }
</script>

<style scoped>

</style>
