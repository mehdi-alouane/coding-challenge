<template>
  <section>
    <div
      v-swiper:mySwiper="swiperOption"
    >
      <div class="swiper-pagination is-top"/>
      <div class="swiper-wrapper">
        <div
          v-for="(post, index) in currentPosts"
          :key="index"
          class="swiper-slide">
          <div class="thumbnail">
            <img
              :src="post.thumbnail_images.large.url"
            >
            <span class="categorie">{{ post.categories[0].title }}</span>
          </div>
          <h1 class="title">{{ post.title }}</h1>
          <h5 class="date">{{ post.date }}</h5>
          <div
            class="content"
            v-html="post.content"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
import Api from '~/plugins/Api'

if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}

export default {
  data () {
    return {
      currentPosts: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },

  async asyncData ({ app, params }) {
    try {
      var { data } = await Api.get('/get_post/?id=' + params.id)
      let currentPost = data
      var { data } = await Api.get('/get_recent_posts/?page=1')
      let recentPosts = data
      let currentPosts = recentPosts.posts
      currentPosts.unshift(currentPost.post)
      return { currentPosts }
    } catch (err) {
      console.error('post@assyncData: [' + err + ']')
    }
  },

  mounted: async function () {
  },

  methods: {
    changeRoute: function () {
      //this.$router.push({ path: `/posts/${id}` })
    }
  }
}
</script>

<style lang="sass">
.swiper-pagination
  position: relative
  top: 0
  right: 0
  height: 2.6rem
  padding-top: .8rem
  background-color: #7D3183

.swiper-pagination-bullet-active
  background-color: #fff

.swiper-pagination-bullet
  width: 10px
  height: 10px
  background-color: #fff

.swiper-slide
  padding: 0 12px
  margin-top: 5px
  width: 100% !important
  overflow: hidden
  box-sizing: border-box

.thumbnail
  position: relative
  width: 100%

.thumbnail > img
  width: 100%

.thumbnail > .categorie
  position: absolute
  bottom: 0
  right: 0
  padding: 3px 12px
  border-radius: 4px
  background-color: #db0303
  color: #fff
  font-size: .8rem
  font-weight: 600

.title
  font-size: 2.5rem

.content
  font-size: 1.2rem

.date
  direction: ltr
  text-align: right
  color: rgb(46, 46, 46)
</style>
