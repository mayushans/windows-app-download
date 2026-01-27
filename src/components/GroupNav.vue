<script>
export default {
  data() {
    return {
      links: [
        // {
        //   url: '/',
        //   name: '应用'
        // }
      ]
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<template>
  <div class="header">
    <div class="header-content">
      <div class="site-info">
        <div class="site-logo">
          <img src="/public/favicon.svg" />
        </div>
        <div class="site-name">Windows 应用下载</div>
      </div>
      <div class="nav">
        <div
          class="nav-item"
          v-for="i in links"
          v-bind:key="i.url"
          v-bind:class="{ selected: false }"
        >
          <RouterLink :to="i.url">{{ i.name }}</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header {
  width: 100%;
  height: 55px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: solid 1px var(--border-color);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  background-color: var(--background-color-alpha);
  backdrop-filter: var(--backdrop-filter-blur);
  z-index: 10;
}
.header-content {
  width: var(--content-width);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

@media screen and (max-width: 450px) {
  .header-content {
    padding: 0 12px;
    width: auto;
    flex-grow: 1;
  }
}

.site-info {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.site-logo {
  width: 24px;
  height: 24px;
}
.site-logo > img {
  width: 24px;
  height: 24px;
}
.site-name {
  margin-left: 8px;
  font-size: 16px;
}
.nav {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.nav-item {
  margin-left: 16px;
  font-size: 16px;
  padding: 4px 16px;
  border-radius: 4px;
}
.nav-item.selected {
  background-color: var(--background-color-selected);
}
.nav-item > a {
  text-decoration: none;
  color: var(--color-foreground);
}
.nav-item > a:hover {
  color: var(--color-foreground-link-hover);
}
</style>
