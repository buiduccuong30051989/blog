import Vue from 'vue';
import Cloudinary from 'cloudinary-vue';
Vue.use(Cloudinary, {
  configuration: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    fetch_format: 'auto', // auto generate WebP
    secure: true, // https for media
  },
});
