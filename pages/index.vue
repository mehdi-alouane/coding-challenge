<template>
  <section class="container">
    <!-- logo -->
    <logo-area />
    <!-- navbar -->
    <navbar />
  </section>
</template>

<script>
import navbar from '~/components/navbar'
import logoArea from '~/components/logoArea'

export default {
  components: { navbar, logoArea },
  data: () => ({
    id: 1
  }),
}
</script>
