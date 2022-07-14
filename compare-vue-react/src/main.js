import * as Vue from 'vue';
// SFC (Single File Component: HTML Template + Style + Script(Logic))
import App from './App.vue';

// Vue v3
const vueApp = Vue.createApp(App);
vueApp.mount('#app' /* container: CSS Selector | DOMNode */);

// React v18
// const root = ReactDOM.createRoot(container /* DOMNode */)
// root.render(<App />);
