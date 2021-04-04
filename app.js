const App = {
  data() {
    return {
      placeholderString: 'Введите название покупки',
      title: "Список покупок",
      inputValue: '',
      notes: [],
      buyLast: [],
    };
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    removeNote(idx) {
      this.notes.splice(idx, 1)
    },
    doneNote(idx) {
      this.buyLast.push(this.notes.splice(idx, 1)[0])
    },
    returnNote(idx) {
      this.notes.push(this.buyLast.splice(idx, 1)[0])
    }
  }
};

Vue.createApp(App).mount("#app");
