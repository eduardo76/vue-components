import zCampoTexto from "./components/zCampoTexto.vue";
import zCounter from "./components/zCounter.vue";

const zComponentes = {
 install(Vue, options) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
  Vue.component("zCampoTexto", zCampoTexto);
  Vue.component("zCounter", zCounter);
 }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(zComponentes);
}

export default zComponentes;