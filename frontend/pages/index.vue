<template>
  <div class="p-home" @mousemove="mouseMove">
    <Header />
    <HomeCover />
    <div class="l-content">
      <HomeHeader />
      <div class="l-sumary">
        <div class="l-sumary-top">
          <p>
            Hi there 👋, welcome to my tiny blog. I’m Bui Duc Cuong, born in
            1989. Currently i’m a Frontend Deveoper at
            <a href="#">Sun*</a> (Framgia inc).
          </p>
          <br />
          <p>
            So, most of time, i working with html/css and Javascript also to
            building UI & UX of Website, i love my family, my job, and
            <a href="#">friends</a> too.
          </p>
          <p>Well, there is nothing much to say...</p>
          <br />
          <p>
            You can contact me via my <a href="#">personal email</a>, and here
            is my <a href="#">github</a>.
          </p>
        </div>

        <div class="l-sumary-bottom text-center lg:text-right">
          <p>
            Hopeing this place can bring to you somethings usefuls, then let me
            know by tab here
            <span class="heart-wrap">
              <i
                for="toggle-heart"
                class="heart"
                :class="{ checked: checked }"
                @click="checked = !checked"
                >❤</i
              >
            </span>
            Thank you!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { random } from '../utils/random';
import HomeHeader from '@/components/compound/HomeHeader';
import HomeCover from '@/components/compound/HomeCover';
import Header from '@/components/compound/Header';

export default {
  components: {
    HomeHeader,
    HomeCover,
    Header,
  },
  async fetch() {
    this.categories = await this.$strapi.find('categories');
  },
  data() {
    return {
      checked: false,
      categories: [],
      openMenu: false,
    };
  },
  methods: {
    random,
    mouseMove: function (e) {
      const eye = document.querySelectorAll('.eye');
      const x =
        eye[0].getBoundingClientRect().x +
        eye[0].getBoundingClientRect().width / 2;
      const y =
        eye[0].getBoundingClientRect().y +
        eye[0].getBoundingClientRect().height / 2;
      const rad = Math.atan2(e.pageX - x, e.pageY - y);
      const rot = rad * (180 / Math.PI) * 1 + 240;
      if (Math.abs(x - e.pageX) >= 15 && Math.abs(y - e.pageY) >= 15) {
        for (let i = 0; i < eye.length; ++i) {
          eye[i].style.transform = `rotate(${rot}deg)`;
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/styles/pages/home.scss';
</style>
