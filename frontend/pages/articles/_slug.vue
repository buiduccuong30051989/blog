<template>
  <div>
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div class="flex-shrink-0">
        <img
          v-if="article.image"
          id="banner"
          class="h-48 w-full object-cover"
          alt=""
          :src="getStrapiMedia(article.image.url)"
        />
      </div>
      <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
          <p class="text-sm font-medium text-indigo-600">
            <a href="#" class="hover:underline"> Article </a>
          </p>
          <a href="#" class="block mt-2">
            <p class="text-xl font-semibold text-gray-900">
              {{ article.title }}
            </p>
            <p
              v-if="article.content"
              id="editor"
              class="mt-3 text-base text-gray-500"
              v-html="$md.render(article.content)"
            ></p>
          </a>
        </div>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <a href="#">
              <span class="sr-only">Roel Aufderehar</span>
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt=""
              />
            </a>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              <a href="#" class="hover:underline"> Roel Aufderehar </a>
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time v-if="article.published_at" datetime="2020-03-16">
                {{ moment(article.published_at).format('MMM Do YY') }}
              </time>
              <span aria-hidden="true"> · </span>
              <span> 6 min read </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { getStrapiMedia } from '../../utils/medias';
import { getMetaTags } from '../../utils/seo';

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
