const App = {
  data() {
    return {
      placeholderString: 'Введите название покупки',
      title: "Список покупок",
      inputValue: '',
      notes: [],
    };
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNote() {
      this.notes.push(this.inputValue)
      this.inputValue = ''
    },
    removeNote(idx) {
      this.notes.splice(idx, 1)
    }
  }
};

Vue.createApp(App).mount("#app");
