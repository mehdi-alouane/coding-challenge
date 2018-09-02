<template>
  <section class="container">
    <!-- logo -->
    <logo-area />
    <!-- navbar -->
    <navbar />

    <!-- posts -->
    <div class="section">
      <div
        v-for="content in $store.state.recentPosts"
        :key="content.key">
        <!-- post component -->
        <post :post="content" />
      </div>

      <!-- load more button -->
      <!-- eslint-disable -->
      <div class="button-space">
        <button @click="loadMorePost"
          class="button is-circle">
          <span class="icon">
            <i class="fa fa-plus"></i>
          </span>
        </button>
      </div>

    </div>
  </section>
</template>

<script>
import navbar from '~/components/navbar'
import post from '~/components/post'
import logoArea from '~/components/logoArea'

export default {
  components: { navbar, post, logoArea },
  data: () => ({
    id: 1,
    hasErr: false,
    errMsg: null
  }),
  async created() {
    try {
      await this.$store.dispatch('getRecentPosts', { id: this.id })
    } catch (err) {
      this.hasErr = true
      this.errMsg = err.message
      console.log(err.message)
    }
  },
  methods: {
    async loadMorePost() {
      console.log('clicked')
    }
  }
}
</script>
