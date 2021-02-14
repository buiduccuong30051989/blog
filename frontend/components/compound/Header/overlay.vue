<template>
  <transition name="l-overlay">
    <div v-show="openMenu" class="l-overlay">
      <div class="l-overlay-inner">
        <ul class="l-navigation">
          <li v-for="category in categories" :key="category.id">
            <nuxt-link
              :to="{
                name: 'categories-slug',
                params: { slug: category.slug },
              }"
              tag="a"
            >
              {{ category.name }}
            </nuxt-link>
          </li>
          <li><nuxt-link to="/">about me</nuxt-link></li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    openMenu: {
      type: [Boolean],
      default: false,
    },
  },
  async fetch() {
    this.categories = await this.$strapi.find('categories');
  },
  data() {
    return {
      categories: [],
    };
  },
};
</script>

<style lang="scss">
@import '~/assets/styles/modules/l-header-overlay.scss';
</style>
