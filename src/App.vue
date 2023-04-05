<template>
    <v-app class="grey lighten-4">
      <bar></bar>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
</template>

<script>
import bar from "@/components/bar.vue";

export default {
  name: 'App',

  data: () => ({

  }),
  methods: {

  },
  components: {
    bar
  }
};
</script>
