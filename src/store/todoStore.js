import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref([
    { id: 0, description: 'Master HTML', completed: true, editing: false },
    { id: 1, description: 'Master JavaScript', completed: true, editing: false },
    { id: 2, description: 'Master Vue', completed: false, editing: false },
  ]);
  let nextId = 3;

  const newTaskDescription = ref('');
  const showIncomplete = ref(false);

  const filteredTasks = computed(() => {
    return showIncomplete.value
      ? tasks.value.filter(task => !task.completed)
      : tasks.value;
  });

  function addTask() {
    if (newTaskDescription.value.trim() === '') {
      alert('Task description cannot be empty!');
    } else {
      tasks.value.unshift({
        id: nextId++,
        description: newTaskDescription.value,
        completed: false,
        editing: false,
      });
      newTaskDescription.value = '';
      saveTasks();
    }
  }

  function toggleCompletion(task) {
    if (!task.editing) {
      task.completed = !task.completed;
      saveTasks();
    }
  }

  function deleteTask(task) {
    tasks.value = tasks.value.filter(t => t.id !== task.id);
    saveTasks();
  }

  function startEditing(task) {
    task.editing = true;
    task.completed = false;
  }

  function finishEditing(task) {
    if (task.description.trim() === '') {
      alert('Description cannot be empty!');
    } else {
      task.editing = false;
      saveTasks();
    }
  }

  function cancelEditing(task) {
    task.editing = false;
  }

  function saveTasks() {
    localStorage.setItem('taskList', JSON.stringify(tasks.value));
  }

  function loadTasks() {
    const savedTasks = localStorage.getItem('taskList');
    tasks.value = savedTasks ? JSON.parse(savedTasks) : [];
  }

  loadTasks();

  return {
    tasks,
    newTaskDescription,
    showIncomplete,
    filteredTasks,
    addTask,
    toggleCompletion,
    deleteTask,
    startEditing,
    finishEditing,
    cancelEditing,
  };
});
