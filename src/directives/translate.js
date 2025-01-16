export default {
  beforeMount(el, binding, vnode) {
    const appContext = vnode.appContext;
    console.log('VNode AppContext:', appContext); // Logga l'intero contesto

    const i18n = appContext?.config.globalProperties?.i18n;
    if (!i18n) {
      console.warn('Vue i18n non è inizializzato correttamente. Assicurati che sia registrato in main.js.');
      return;
    }

    const translationKey = binding.value;
    el.textContent = i18n.t(translationKey);
  },
};
