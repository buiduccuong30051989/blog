<template>
  <div>
    <div class="l-header">
      <div class="c-logo">
        <h2>tiny-things</h2>
      </div>
      <button class="c-menu-btn" @click="openMenu = !openMenu">
        <Compass v-show="!openMenu" />
        <Close v-show="openMenu" />
      </button>
    </div>
    <Overlay :open-menu="openMenu" />
  </div>
</template>

<script>
import Compass from '~/assets/images/compass.svg?inline';
import Close from '~/assets/images/close.svg?inline';
import Overlay from './overlay';
export default {
  components: {
    Compass,
    Close,
    Overlay,
  },
  data() {
    return {
      openMenu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/modules/l-header.scss';
</style>
