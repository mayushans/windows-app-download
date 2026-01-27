<script>
import AppItem from '@/components/AppItem.vue';
import appsData from '@/data/apps.json';
export default {
  components: { AppItem },
  data() {
    return {
      list: appsData.apps
    }
  },
  mounted() {
  },
  methods: {
    openLink(url) {
      window.open(url)
    }
  }
}
</script>
<template>
  <div class="cate" v-for="i in list" v-bind:key="i.id">
    <div class="cate-name">{{ i.name }}</div>
    <div class="cate-content">
      <template v-for="a in i.list" v-bind:key="a.id">
        <AppItem :data="a" @page="openLink" @download="openLink"></AppItem>
      </template>
    </div>
  </div>
</template>
<style scoped>
.cate {
  width: var(--content-width);
  margin: 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}
.cate-name {
  padding-left: 4px;
  height: 36px;
  line-height: 36px;
  text-align: left;
  font-size: 20px;
}
.cate-content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
