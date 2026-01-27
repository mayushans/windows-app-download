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
  color: var(--color-foreground-light);
  user-select: none;
  background-color: var(--background-color-hover);
}
.copyright a {
  color: var(--color-foreground-link);
  text-decoration: none;
}
</style>

