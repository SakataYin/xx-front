<template>
  <div>
    <v-img
        :src="getPath"
    >

    </v-img>
  </div>


</template>

<script>
export default {
  name: "notfount",
  data() {
    return {
      image: require('@/assets/404.png')
    }
  },
  computed: {
    getPath() {
      return this.image;
    }
  }
}
</script>

<style scoped>

</style>