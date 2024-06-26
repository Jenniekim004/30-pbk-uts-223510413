<template>
  <div class="album-details-container">
    <h2 class="title">Choose Album:</h2>
    <select v-model="selectedAlbum" @change="fetchPhotos" class="album-select">
      <option v-for="album in albums" :key="album.id" :value="album.id">
        {{ album.title }}
      </option>
    </select>
    <h2 class="title">Photos in Album {{ selectedAlbum }}</h2>
    <div class="photo-grid">
      <img
        v-for="photo in photos"
        :key="photo.id"
        :src="photo.thumbnailUrl"
        :alt="photo.title"
        class="photo-thumbnail"
        @click="() => showPhoto(photo.url)"
      />
    </div>

    <q-dialog v-model="isModalOpen" persistent>
      <q-card>
        <q-card-section>
          <img :src="selectedPhotoUrl" alt="Selected Photo" class="full-photo" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" @click="isModalOpen = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { QDialog, QCard, QCardSection, QCardActions, QBtn } from 'quasar';

const route = useRoute();
const selectedAlbum = ref(route.params.id || null);
const albums = ref([]);
const photos = ref([]);
const isModalOpen = ref(false);
const selectedPhotoUrl = ref('');

const fetchAlbums = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    albums.value = await response.json();
    if (!selectedAlbum.value && albums.value.length > 0) {
      selectedAlbum.value = albums.value[0].id;
      fetchPhotos();
    }
  } catch (error) {
    console.error('Error fetching albums:', error);
  }
};

const fetchPhotos = async () => {
  if (!selectedAlbum.value) return;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${selectedAlbum.value}/photos`);
    photos.value = await response.json();
  } catch (error) {
    console.error('Error fetching photos:', error);
  }
};

const showPhoto = (url) => {
  selectedPhotoUrl.value = url;
  isModalOpen.value = true;
};

onMounted(() => {
  fetchAlbums();
  if (selectedAlbum.value) {
    fetchPhotos();
  }
});
</script>

<style scoped>
.album-details-container {
  padding: 20px;
  text-align: center;
  background: linear-gradient(to bottom, #070707, #19191a);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.title {
  color: #433e3e;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
}

.album-select {
  margin: 0 auto;
  display: block;
  width: 50%;
  padding: 10px;
  font-size: 18px;
  border-radius: 10px;
  border: 1px solid #1f2021;
  background-color: #050505;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s, box-shadow 0.3s;
}

.album-select:hover,
.album-select:focus {
  border-color: #0f0f10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.photo-thumbnail {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 2px solid #000000;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.photo-thumbnail:hover {
  transform: scale(1.1);
  border-color: #000000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.full-photo {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 10px;
}
</style>
