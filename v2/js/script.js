Vue.config.devtools = true;
const app = new Vue({
  el: "#root",
  data: {
    discs: [],
  },
  methods: {
    fetchDiscs() {
      axios.get("../../api/discs.php").then((res) => {
        this.discs = res.data;
      });
    },
  },
  mounted() {
    this.fetchDiscs();
  },
});
