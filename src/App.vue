<script setup>
import { ref, onMounted, computed, watch } from 'vue'


const todos = ref([])
const name = ref('')

const input_content = ref('')
const input_category = ref(null)
const todos_asc = computed(() => todos.value.sort((a, b) => {
  return b.createdAt - a.createdAt
}))

const addTodo = () => {
  if (input_content.value.trim() === '' || input_category.value === null) {
    return
  }
  todos.value.push({
    content: input_content.value,
    category: input_category.value,
    done: false,
    createdAt: new Date().getTime()
  })
}

watch(name, (newVal) => {
	localStorage.setItem('name', newVal)
})
watch(todos, (newVal) => {
	localStorage.setItem('todos', JSON.stringify(newVal))
}, {
	deep: true
})

input_content.value = ''
input_category.value = null

const removeTodo = (todo) => {
	todos.value = todos.value.filter((t) => t !== todo)
}

onMounted(() => {
  name.value = localStorage.getItem('name') || ''
  todos.value =JSON.parse(localStorage.getItem('todos')) || []
})
</script>

<template>
<main class="app">
    <section class="greeting">
      <h2 class="title">
        Hai <input type="text" placeholder="Nama Kamu" v-model="name"/>
      </h2>
    </section>

    <section class="create-todo">
      <h3>Buat Todo-List</h3>

        <form @submit.prevent="addTodo">
          <h4>Kita Mulai Dari Mana?</h4>
          <input type="text"
                  placeholder="Isi Keperluan"
                  v-model="input_content"/>
          <h4>Pilih Kategori</h4>
          <div class="options">
            <label>
              <input type="radio"
                     name="category"
                     value="business"
                     v-model="input_category" />
              <span class="bubble Sayuran"></span>
              <div>Sayuran</div>
            </label>

            <label>
              <input type="radio"
                     name="category"
                     value="personal"
                     v-model="input_category" />
              <span class="bubble Minuman"></span>
              <div>Minuman</div>
            </label>

            <label>
              <input type="radio"
                     name="category"
                     value="friends-family"
                     v-model="input_category" />
              <span class="bubble Sabun/Detergent"></span>
              <div>Sabun/Detergent</div>
            </label>
          </div>
          <input type="submit" value="Tambahkan Todo-List">

        </form>
    </section>

    <section class="todo-list">
			<h3>TODO LIST</h3>
			<div class="list" id="todo-list">

				<div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`">
					<label>
						<input type="checkbox" v-model="todo.done" />
						<span :class="`bubble ${
							todo.category == 'business'
								? 'business'
								: 'personal'
						}`"></span>
					</label>

					<div class="todo-content">
						<input type="text" v-model="todo.content" />
					</div>

					<div class="actions">
						<button class="delete" @click="removeTodo(todo)">Hapus</button>
					</div>
				</div>

        <div id="app">
  <header class="header">
    <h1 class="header__title">Selamat Datang</h1>
    <p class="header__subtitle">Ikhlasul Qalbi 2024</p>
  </header>
</div>




			</div>
		</section>

</main>
</template>