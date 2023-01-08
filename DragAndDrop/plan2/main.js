const app = new Vue({
  el: "#app",
  data: {
    message: "HTML Drag&Drop in vue.js page",
    lists: [
      {
        id: 1,
        name: "ProductA",
        category: "A",
      },
      {
        id: 2,
        name: "ProductB",
        category: "B",
      },
      {
        id: 3,
        name: "ProductC",
        category: "B",
      },
      {
        id: 4,
        name: "ProductD",
        category: "C",
      },
      {
        id: 5,
        name: "ProductE",
        category: "A",
      },
    ],
  },
  computed: {
    CategoryA() {
      return this.lists.filter((list) => list.category == "A");
    },
    CategoryB() {
      return this.lists.filter((list) => list.category == "B");
    },
    CategoryC() {
      return this.lists.filter((list) => list.category == "C");
    },
  },
  methods: {
    dragList(event, dragId) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.setData("list-id", dragId);
    },
    dropList(event, dropCategory) {
      const dragId = event.dataTransfer.getData("list-id");
      const dragList = this.lists.find((list) => list.id == dragId);
      dragList.category = dropCategory;
    },
  },
});
