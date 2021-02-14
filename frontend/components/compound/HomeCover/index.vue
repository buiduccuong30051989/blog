<template>
  <div class="l-cover">
    <Header />
    <img :src="cover" alt="cover" />
    <div class="l-cover-footer">
      <p>
        This blog was made by me, using strapi & nuxt js with ❤. I create this
        blog because, i want to open my World, to share my though, what i feel,
        what i saw, my experience, my dream, my hope, my happiness also...just
        in my view point only. And then all the things will be the memories,
        those memories that i really want to remmember.
        <br />Fun fact, you can feed <a href="#">the heart</a> as much as you
        want :*
      </p>
    </div>
  </div>
</template>

<script>
import { random } from '@/utils/random';
import { homeCoverImages } from '@/utils/constants';
import Header from '../Header';
// import Compass from '~/assets/images/compass.svg?inline';
// import Close from '~/assets/images/close.svg?inline';
// import Overlay from './overlay';

export default {
  components: {
    Header,
  },
  data() {
    return {
      openMenu: false,
    };
  },
  computed: {
    cover: function () {
      return homeCoverImages[this.random(0, homeCoverImages.length)];
    },
  },
  methods: {
    random,
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/modules/l-home-cover.scss';
</style>
