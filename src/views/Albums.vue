<template>
  <div class="album-list-container">
    <h2 class="title">Albums</h2>
    <ul class="album-list">
      <li v-for="album in albums" :key="album.id" @click="selectAlbum(album.id)" class="album-item">
        {{ album.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const albums = ref([]);

const fetchAlbums = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    albums.value = await response.json();
  } catch (error) {
    console.error("Error fetching albums:", error);
  }
};

const selectAlbum = (albumId) => {
  router.push({ path: `/albums/${albumId}` });
};

onMounted(() => {
  fetchAlbums();
});
</script>

<style scoped>
.album-list-container {
  padding: 20px;
  text-align: center;
}

.title {
  color: #2b2d2e;
  margin-bottom: 20px;
}

.album-list {
  list-style: none;
  padding: 0;
}

.album-item {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #151515;
  border-radius: 5px;
  margin: 5px 0;
  transition: background-color 0.3s;
}

.album-item:hover {
  background-color: #f0f0f0;
}
</style>
