import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePostStore = defineStore('postStore', () => {
  const loading = ref(false);
  const currentUser = ref(null);
  const currentUserName = ref('');
  const userList = ref([]);
  const postList = ref([]);

  const getUsers = async () => {
    try {
      loading.value = true;
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      userList.value = data;
    } catch (error) {
      console.error('Error fetching user list:', error);
    } finally {
      loading.value = false;
    }
  };

  const getPosts = async () => {
    if (!currentUser.value) return;
    loading.value = true;
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${currentUser.value}`);
      const data = await response.json();
      postList.value = data;
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    currentUser,
    currentUserName,
    userList,
    postList,
    getUsers,
    getPosts,
  };
});
