<script>
export default {
  name: 'StreamDetail',
  created() {
    // redirect to catalog if no stream was given
    if (!this.$route.params.stream) this.$router.push('/');
  },
  data() {
    return {
      stream: this.$route.params.stream,
      donations: 0,
      interactions: [],
      chat: [],
      message: '',
    };
  },
  methods: {
    addInteraction(event) {
      this.interactions.push(event.target.textContent);
      if (this.interactions.length > 6) {
        this.interactions.shift();
      }
    },
    addDonation() {
      this.donations++;
    },
    addMessage(event) {
      event.preventDefault();

      this.chat.push(this.message);
      this.message = '';
    },
  },
};
</script>

<template>
  <main>
    <h1>{{ stream.name }}</h1>
    <p class="subtitle">is currently playing: {{ stream.game }}</p>

    <section class="stream">
      <img :src="stream.video" alt="" />
      <ul class="stream-interactions">
        <li v-for="(interaction, index) of interactions" :key="index">
          {{ interaction }}
        </li>
      </ul>
    </section>
    <div class="interactions">
      <button @click="addInteraction">👋</button>
      <button @click="addInteraction">💚</button>
    </div>
    <div class="donations">
      <button @click="addDonation">Donate</button>
      <span>{{ donations }}donations</span>
    </div>
    <section class="chat">
      <ul v-if="chat">
        <li v-for="(message, index) of chat" :key="index">
          {{ message }}
        </li>
      </ul>
      <form @submit="addMessage">
        <label for="message"></label>
        <input id="message" type="text" v-model="message" required />
        <button type="submit">Send</button>
      </form>
    </section>
  </main>
</template>
