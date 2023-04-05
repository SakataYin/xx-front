<template>
  <v-app>
    <bar></bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
import bar from "@/components/bar.vue";

export default {
  created() {
  },
  data() {
    return {}
  },
  methods: {},
  components: {
    bar
  }
}
</script>
