<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  async fetch() {
    this.categories = await this.$strapi.find('categories');
  },
  data: function () {
    return {
      categories: [],
    };
  },
};
</script>
