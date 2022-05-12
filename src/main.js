import Vue from 'vue'
import App from './App.vue'

// Pages
import About from './components/pages/About';
import Landing from './components/pages/Landing';
import Contact from './components/pages/Contact';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import FormSection from './components/FormSection';
import ImageSection from './components/ImageSection';
import InfoSection from './components/InfoSection';
import Navigation from './components/Navigation';
import ContactTable from './components/ContactTable';

// addons
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'
Vue.use(VueFormGenerator)



Vue.config.productionTip = false;

Vue.component('About', About);
Vue.component('Navigation', Navigation);
Vue.component('Landing', Landing);
Vue.component('Contact', Contact);
Vue.component('Header', Header);
Vue.component('Footer', Footer);
Vue.component('Banner', Banner);
Vue.component('FormSection', FormSection);
Vue.component('ImageSection', ImageSection);
Vue.component('InfoSection', InfoSection);
Vue.component('ContactTable', ContactTable);

new Vue({
  render: h => h(App),
}).$mount('#app')
