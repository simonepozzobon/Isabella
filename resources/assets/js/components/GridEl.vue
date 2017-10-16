<template>
  <div class="col-md-4 col-lg-3" ref="col">
    <div class="row pb-4">
      <div class="col">
        <div class="container-fluid img_grid" ref="img_grid">
          <img :src="img" alt="Titolo" class="d-block mx-auto">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <a :href="'/work/'+link"><h2 class="text-center">{{title}}</h2></a>
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  props: ['post'],
  data ()
  {
    return {
        link: '',
        title: '',
        img: ''
    }
  },
  mounted()
  {
      this.link = this.post.data.slug;
      this.title = this.post.data.title;
      this.img = this.post.data.featured_img;
      _.delay(this.resizeCol, 50);
      window.addEventListener('resize', _.debounce(() => {
        this.resizeCol();
      }, 250));
  },
  methods: {
    resizeCol()
    {
      var col = this.$refs['col'].offsetWidth;
      this.$refs['img_grid'].style.height = col+'px';
    },
  }

}
</script>
<style scoped>
  .img_grid {
    overflow: hidden;
  }

  .img_grid img {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>
