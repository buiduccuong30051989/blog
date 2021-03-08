<template>
  <div class="p-article">
    <HomeCover />
    <div class="l-content">
      <p class="text-2xl font-medium text-gray-900 mb-4">
        {{ article.title }}
      </p>
      <div
        v-if="article.content"
        id="editor"
        class="text-sm text-gray-700 article-content markdown-body"
        v-html="$md.render(article.content)"
      ></div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { getStrapiMedia } from '@/utils/medias';
import { getMetaTags } from '@/utils/seo';

export default {
  async asyncData({ $strapi, params }) {
    const matchingArticles = await $strapi.find('articles', {
      slug: params.slug,
    });
    return {
      article: matchingArticles[0],
      global: await $strapi.find('global'),
    };
  },
  data() {
    return {
      apiUrl: process.env.strapiBaseUri,
    };
  },
  methods: {
    moment,
    getStrapiMedia,
  },
  head() {
    const { defaultSeo, favicon, siteName } = this.global;

    // Merge default and article-specific SEO data
    const fullSeo = {
      ...defaultSeo,
      metaTitle: this.article.title,
      metaDescription: this.article.description,
      shareImage: this.article.image,
    };

    return {
      titleTemplate: `%s | ${siteName}`,
      title: fullSeo.metaTitle,
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
@import '~/assets/styles/pages/article.scss';
</style>
