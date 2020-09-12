<template>
  <div class="home">
    <h1>Stream catalog</h1>
    <h2>Now live</h2>
    <ul>
      <StreamCard v-for="(stream, index) of liveStreams" :stream="stream" :key="index" />
    </ul>
    <h2>Recommended</h2>
    <ul>
      <li v-for="(stream, index) of recommendedStreams" :key="index">
        {{ stream.name }}
      </li>
    </ul>
    <h2>Most followed games</h2>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import StreamCard from '@/components/stream-card.vue';

export default {
  name: 'Catalog',
  components: { StreamCard },
  async created() {
    this.streams = await this.fetchStreams();
  },
  data() {
    return {
      streams: []
    };
  },
  methods: {
    ...mapActions(['fetchStreams'])
  },
  computed: {
    liveStreams() {
      return this.streams.reduce((list, current) => {
        if (current.isLive) list.push(current);
        return list;
      }, []);
    },
    recommendedStreams() {
      // get the 3 best rated streams
      return [...this.streams].sort((current, next) => next.rating - current.ranting).splice(0, 3);
    }
  }
};
</script>
