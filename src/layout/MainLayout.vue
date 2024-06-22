<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="header bg-dark text-light">
      <q-toolbar>
        <q-tabs align="center" class="tabs">
          <q-route-tab to="/todos" label="Todo List" />
          <q-route-tab to="/posts" label="Post" />
          <q-route-tab to="/albums" label="Album" />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="footer bg-dark text-light" height-hint="100">
      <q-toolbar>
        <q-toolbar-title class="footer-title">
          © 2024 Ikhlasul Qalbi
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
// No script setup required for this component
</script>

<style>
.header {
  background-color: #333;
  color: #fff;
}

.footer {
  background-color: #333;
  color: #fff;
  height: 100px;
}

.tabs {
  justify-content: center;
}

.q-tab {
  padding: 0 25px;
  height: 60px;
}

.footer-title {
  text-align: center;
  width: 100%;
}
</style>
