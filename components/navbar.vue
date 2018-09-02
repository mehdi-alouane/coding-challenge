<template>
  <div class="navbar">
    <!-- eslint-disable -->
    <router-link class="link" to="/">
      <span class="icon">
        <i class="fa fa-home"></i>
      </span>
    </router-link>
    <!-- menu list fetched from api -->
    <div
      v-for="item in $store.state.navbarItems"
      :key="item.id">
      <router-link
        class="link"
        to="">{{ item.label }}</router-link>
    </div>
  </div>
</template>

<script>
import Api from '~/plugins/Api'

export default {
  name: 'NavBar',
  async created() {
    try {
      await this.$store.dispatch('getNavbarList')
    } catch (err) {
      console.log(err.message)
    }
  }
}
</script>
