<template>
  <div class="post">
    <div class="post-content">
      <router-link :to="{ path: `/post/${post.id}` }">
        <img
          :src="post.thumbnail_images.medium_large.url"
          :alt="post.title"
          class="image">
      </router-link>
      <p class="tag is-red is-rounded">{{ post.categories[0].title }}</p>
      <router-link
        :to="{ path: `/posts/${post.id}` }"
        class="title">{{ post.title }}</router-link>
      <div class="post-info">
        <!-- <p class="tag is-red">{{ post.categories[0].title }}</p> -->
        <p class="post-date">{{ post.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/require-default-prop */
export default {
  name: 'Post',
  props: {
    post: null
  }
}
</script>
