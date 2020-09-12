<script>
export default {
  name: 'StreamCard',
  props: {
    stream: Object
  }
};
</script>

<template>
  <li>
    <img :src="stream.video" alt="" />
    <br />
    <router-link :to="{ name: 'StreamDetail', params: { stream: stream } }">{{ stream.name }}</router-link>
    <p>Playing: {{ stream.game }}</p>
  </li>
</template>
