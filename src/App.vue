<template>
  <div id="app">
    <Banner />
    <Header />
    <Navigation
      :currentView="currentView"
      @navChanged="navChanged"
      :items="config.items"/>
    <component class="page" :is="currentView" :sections="componentObject.sections"/>
    <Footer @navChanged="navChanged" :items="config.items"/>
  </div>
</template>

<script>
import config from './js/config';
import Landing from './components/pages/Landing.vue';
import About from './components/pages/About.vue';
import Contact from './components/pages/Contact.vue';
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Header,
    Landing,
    Navigation,
    About,
    Contact
  },
  data: function() {
    return {
      config,
      currentView: 'Landing',
    }
  },
  computed: {
    componentObject: function() {
      return config.items.find(item => item.name === this.currentView)
    }
  },
  methods: {
    navChanged: function(evt) {
      this.currentView = evt.component
    }
  }
}
</script>

<style>
:root {
  --primary: #B0C4B1;
  --secondary: #8A8C88;
  --tertiary: #64545E;
  --light-grey: #f7f7f7;
  --header-height: 120px;
}
@font-face {
  font-family: standardFont;
  src: url('./assets/fonts/Zen_Kaku_Gothic_New/ZenKakuGothicNew-Medium.ttf')  format('truetype');
}
@font-face {
  font-family: regularFont;
  src: url('./assets/fonts/Zen_Kaku_Gothic_New/ZenKakuGothicNew-Regular.ttf')  format('truetype');
}
@font-face {
  font-family: lightFont;
  src: url('./assets/fonts/Zen_Kaku_Gothic_New/ZenKakuGothicNew-Light.ttf')  format('truetype');
}

html, body {
  max-width: 100vw;
  padding: 0;
  margin: 0;
  font-family: standardFont;
}
.page {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.standard {
  background-color: white;
  width: 99.9%;
  max-width: 100%;
  border-bottom: 1px solid black;
}
</style>
