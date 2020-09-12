<script>
import { mapActions } from 'vuex';
import StreamCard from '@/components/stream-card.vue';

export default {
  name: 'Catalog',
  components: { StreamCard },
  async created() {
    this.streams = await this.fetchStreams();
    this.games = await this.fetchGames();
  },
  data() {
    return {
      streams: [],
      games: [],
    };
  },
  methods: {
    ...mapActions(['fetchStreams', 'fetchGames']),
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
    },
    topFollowedGames() {
      return [...this.games].sort((current, next) => next.followers - current.followers);
    },
  },
};
</script>

<template>
  <main>
    <h1>Stream catalog</h1>
    <h2>Now live</h2>
    <ul class="card-list live">
      <StreamCard v-for="(stream, index) of liveStreams" :stream="stream" :key="index" />
    </ul>
    <div class="side">
      <h2>Top 3 streamers</h2>
      <ol class="card-list">
        <li class="card sorted" v-for="(stream, index) of recommendedStreams" :key="index">
          {{ stream.name }}
        </li>
      </ol>
    </div>
    <div class="side">
      <h2>Most followed games</h2>
      <ul class="card-list">
        <li class="card game" v-for="(game, index) of topFollowedGames" :key="index">
          <span>{{ game.name }}</span> - {{ game.followers }} followers
        </li>
      </ul>
    </div>
  </main>
</template>
