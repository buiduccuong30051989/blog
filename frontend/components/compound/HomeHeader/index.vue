<template>
  <div class="l-content-header">
    <div class="header-heading">Hello World</div>
    <div class="header-meow">
      <Meow />
    </div>
    <div class="header-line"></div>
  </div>
</template>

<script>
import Meow from '~/assets/images/meow.svg?inline';

export default {
  components: {
    Meow,
  },
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/modules/l-home-content-header.scss';
</style>
