<script setup>
import GroupNav from './components/GroupNav.vue'
import AppContainer from './components/AppContainer.vue'
import AppsView from './views/AppsView.vue';
</script>

<template>
  <GroupNav></GroupNav>
  <AppContainer>
    <AppsView></AppsView>
  </AppContainer>
  <div class="copyright">The Code on <a href="https://github.com/mayushans/windows-app-download">windows-app-download</a>. Developed by <a href="https://www.mayushan.com">MaYushan</a>.</div>
</template>
<style scoped>
.copyright {
  width: 100%;
  height: 32px;
  padding: 16px 0;
  line-height: 32px;
  text-align: center;
  font-size: 14px;
  color: rgba(60, 60, 60, 0.7);
  user-select: none;
  background-color: #f9f9f9;
}
.copyright a {
  color: #33a06f;
  text-decoration: none;
}
</style>

