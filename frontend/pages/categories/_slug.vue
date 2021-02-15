<template>
  <div>
    <Header />
    <client-only>
      <div class="p-cat">
        <div class="p-cat__header">
          <h1 class="p-cat__title">{{ category.name }}</h1>
          <img :src="cover" alt="cover" />
        </div>
        <div class="p-cat__content">
          <div class="p-cat__list">
            <Articles :articles="articles || []" />
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import { random } from '@/utils/random';
import Articles from '../../components/Articles';
import { getMetaTags } from '../../utils/seo';
import { getStrapiMedia } from '../../utils/medias';
import { catCoverImage } from '@/utils/constants';
import Header from '../../components/compound/Header';

export default {
  components: {
    Articles,
    Header,
  },
  async asyncData({ $strapi, params }) {
    const matchingCategories = await $strapi.find('categories', {
      slug: params.slug,
    });
    return {
      category: matchingCategories[0],
      articles: await $strapi.find('articles', {
        'category.name': params.slug,
      }),
      global: await $strapi.find('global'),
    };
  },
  data() {
    return {
      cover: catCoverImage[this.random(0, catCoverImage.length)],
    };
  },
  methods: {
    random,
  },
  head() {
    const { defaultSeo, favicon, siteName } = this.global;

    // Merge default and article-specific SEO data
    const fullSeo = {
      ...defaultSeo,
      metaTitle: `${this.category.name} articles`,
      metaDescription: `All articles about ${this.category.name}`,
    };

    return {
      title: fullSeo.metaTitle,
      titleTemplate: `%s | ${siteName}`,
      meta: getMetaTags(fullSeo),
      link: [
        {
          rel: 'favicon',
          href: getStrapiMedia(favicon.url),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/pages/cat.scss';
</style>
