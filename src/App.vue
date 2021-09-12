<template>
  <QRCodeStyling />
  <div class="section is-small has-text-left">
    <h1 class="title">Attendance Forms</h1>
    <ol type="1">
      <li>Follow the relevant link (below) to fill in the event name for your attendance form</li>
        <li>Copy the link using the popup at the bottom of Google Sheets</li>
        <li>Paste the copied link into the text box on this page</li>
        <li>Download your QR code and print!</li>
    </ol>
    </div>
  <div class="section is-small has-text-left">
    <h2 class="title">Forms!</h2>
    <ul>
      <li><a class="tag is-large is-info" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/1mBYws_dxEeOmWux2hmsDrDiZ30JLD8Vnoc1KoA5sJJU/prefill">LLC 2021</a></li>
      <li><a class="tag is-large is-alert" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/1XtsWaPwDSXAT_XKiqJwLI_Wf6gCCERMos0gT6fWm17w/copy?usp=sharing">Click to get your own copy of the attendance form template</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import QRCodeStyling from './components/QRCodeStyling.vue';

@Options({
  components: {
    QRCodeStyling,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}
</style>
