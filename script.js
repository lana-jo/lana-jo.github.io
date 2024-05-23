const { createApp, ref } = Vue

createApp({
  data() {
    return {
      menu: [
        {key: 'profile', value: true},
        {key: 'skills', value: false},
        {key: 'experiece', value: false},
        {key: 'portfolio', value: false},
      ],
      skills: [
        './img/html.png',
        './img/css.png',
        './img/js.png',
        './img/php.png',
        './img/laravel.png',
        './img/kotlin.png',
      ]
    }
  },
  methods: {
    active(p) {
      this.menu.map(m => m.value = m.key == p ? true : false)
    }
  },
}).mount('#app')