Vue.config.devtools = true;
const app = new Vue({
  el: "#root",
  data: {
    discs: [],
    selectedGenre: "",
  },
  methods: {
    fetchDiscs() {
      axios.get(`../api/discs.php?genre=${this.selectedGenre}`).then((res) => {
        this.discs = res.data;
      });
    },
  },
  mounted() {
    this.fetchDiscs();
  },
});
