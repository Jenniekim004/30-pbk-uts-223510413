<template>
  <div class="background-image"></div>
  <div>
    <header>
      <nav class="navbar">
        <ul class="nav-list">
          <li class="nav-item">
            <button @click="showTodos" :class="{ active: activeMenu === 'todos' }">
              TODOS
            </button>
          </li>
          <li class="nav-item">
            <button @click="showPosts" :class="{ active: activeMenu === 'posts' }">
              POST
            </button>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Todos v-if="activeMenu === 'todos'" />
      <Posts v-else-if="activeMenu === 'posts'" />
    </main>
  </div>
  <div id="app">
    <header class="header">
      <h1 class="header__title">Selamat Datang</h1>
      <p class="header__subtitle">Ikhlasul Qalbi 2024</p>
    </header>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import Posts from "./components/Post.vue";

export default {
  components: {
    Todos,
    Posts,
  },
  data() {
    return {
      activeMenu: "",
    };
  },
  methods: {
    showTodos() {
      this.activeMenu = "todos";
    },
    showPosts() {
      this.activeMenu = "posts";
    },
  },
};
</script>


<style scoped>


.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.nav-item {
  margin: 0 1em;
}

.nav-item button {
  background: none;
  color: rgb(11, 11, 11);
  border: none;
  padding: 0.5em 1em;
  cursor: pointer;
  font-size: 1em;
}

.nav-item button:hover,
.nav-item button.active {
  background-color: #aaafe3;
  border-radius: 5px;
}

main {
  padding: 1em;
}



.title {
  text-align: center;
}

.task-form {
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.task-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.add-button {
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  background-color: hwb(243 65% 13%);
  color: rgb(10, 10, 10);
  cursor: pointer;
}

.add-button:hover {
  background-color: hwb(242 80% 1%);
}

.filters {
  text-align: center;
  margin-top: 20px;
}

.filters button {
  margin: 0 5px;
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  color: #111010;
  cursor: pointer;
}

.filters button:hover {
  background-color: #c6b4e4;
}

.filters button.active {
  background-color: #c6b4e4;
  color: rgb(0, 0, 0);
}


.task-list {
  margin-bottom: 20px;
}

.list-title {
  margin-bottom: 10px;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 5px;
}

.task-label {
  display: flex;
  align-items: center;
}

.task-name {
  flex: 1;
  margin-left: 10px;
}

.task-name.completed {
  text-decoration: line-through;
}

.task-date {
  margin-left: 10px;
}

.task-status {
  margin-left: 10px;
}

.remove-button {
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  background-color: #040404;
  color: white;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #000000;
}

.no-tasks {
  text-align: center;
}
</style>