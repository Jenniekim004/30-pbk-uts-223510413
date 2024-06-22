<template>
  <div class="task-manager">
    <h1 class="title">Add Album</h1>
    <form @submit.prevent="addTask" class="task-form">
      <div class="input-container">
        <input v-model="newTask" placeholder="Nama Album" required class="task-input" />
        <button type="submit" class="add-button">Tambahkan</button>
      </div>
    </form>
    <div v-if="tasks.length > 0" class="task-list">
      <h2 class="list-title">Daftar Album</h2>
      <ul>
        <li v-for="task in filteredTasks" :key="task.id" class="task-item">
          <label class="task-label">
            <input type="checkbox" @change="toggleComplete(task)" :checked="task.completed" />
            <span class="checkmark"></span>
            <span class="task-name" :class="{ completed: task.completed }">{{ task.name }}</span>
            <span class="task-date">{{ task.date }}</span>
            <span class="task-status">{{ task.completed ? "Ready" : "Not Ready" }}</span>
          </label>
          <button @click="removeTask(task)" class="remove-button">Hapus</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p class="no-tasks">Tidak Ada Album:</p>
    </div>
    <div class="filters">
      <h2 class="list-title">Filter</h2>
      <button @click="filter = 'all'" :class="{ active: filter === 'all' }">Semua</button>
      <button @click="filter = 'active'" :class="{ active: filter === 'active' }">Not Ready</button>
      <button @click="filter = 'completed'" :class="{ active: filter === 'completed' }">Selesai</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      tasks: [],
      filter: "all",
    };
  },
  computed: {
    filteredTasks() {
      if (this.filter === "active") {
        return this.tasks.filter(task => !task.completed);
      } else if (this.filter === "completed") {
        return this.tasks.filter(task => task.completed);
      } else {
        return this.tasks;
      }
    },
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push({
          id: Date.now(),
          name: this.newTask,
          completed: false,
        });
        this.newTask = "";
      }
    },
    removeTask(task) {
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    },
    toggleComplete(task) {
      task.completed = !task.completed;
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
