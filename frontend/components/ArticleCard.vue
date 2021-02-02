<template>
  <nuxt-link
    :key="article.id"
    :to="{ name: 'articles-slug', params: { slug: article.slug } }"
    class="uk-link-reset"
  >
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div class="flex-shrink-0">
        <img :src="getStrapiMedia(article.image.url)" />
      </div>
      <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
          <p class="text-sm font-medium text-indigo-600">
            <a v-if="article.category" href="#" class="hover:underline">
              {{ article.category.name }}
            </a>
          </p>
          <a href="#" class="block mt-2">
            <p class="text-xl font-semibold text-gray-900">
              {{ article.title }}
            </p>
            <!-- <p
              v-if="article.content"
              id="editor"
              class="mt-3 text-base text-gray-500"
              v-html="$md.render(article.content)"
            ></p> -->
          </a>
        </div>
        <!-- <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <a href="#">
              <span class="sr-only">{{ article.author.name }}</span>
              <img
                class="h-10 w-10 rounded-full"
                :src="getStrapiMedia(article.author.picture.url)"
                :alt="article.title"
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
        </div> -->
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { getStrapiMedia } from '../utils/medias';

export default {
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    getStrapiMedia,
  },
};
</script>
