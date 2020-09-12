<script>
export default {
  name: 'StreamCard',
  props: {
    stream: Object,
  },
};
</script>

<template>
  <li>
    <router-link class="card" :to="{ name: 'StreamDetail', params: { stream: stream } }">
      <img :src="stream.video" alt="" />
      <br />
      <span class="card-name">{{ stream.name }}</span>
      <span> is playing: {{ stream.game }}</span>
    </router-link>
  </li>
</template>
