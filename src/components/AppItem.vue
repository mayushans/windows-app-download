<script>
import LinkIcon from './icons/LinkIcon.vue';
import DownloadIcon from './icons/DownloadIcon.vue'
export default {
  components: { LinkIcon, DownloadIcon },
  props: {
    data: Object
  }
}
</script>
<template>
  <div class="app-item">
    <div class="app-logo">
      <img :src="'./icons/' + data.view_icon" />
    </div>
    <div class="app-info">
      <div class="app-name">{{ data.view_name }}</div>
      <div class="app-desc">{{ data.version != '' ? '版本: ' + data.version : '' }}</div>
      <div class="app-action">
        <div class="app-action-item" @click="$emit('page', data.page)">
          <LinkIcon></LinkIcon>
        </div>
        <div class="app-action-item" @click="$emit('download', data.download_url)">
          <DownloadIcon></DownloadIcon>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.app-item {
  width: 280px;
  height: 88px;
  padding: 8px;
  margin: 4px;
  border-radius: 8px;
  box-sizing: border-box;
  border: solid 1px var(--border-color);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  user-select: none;
}
.app-logo {
  align-self: center;
}
.app-logo,
.app-logo > img {
  width: 72px;
  height: 72px;
  border-radius: 14px;
  object-fit: contain;
}
.app-info {
  overflow: hidden;
  padding-left: 8px;
  align-self: stretch;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.app-name {
  align-self: stretch;
  flex-shrink: 0;
  height: 16px;
  line-height: 14px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.app-desc {
  align-self: stretch;
  flex-grow: 1;
  padding-top: 10px;
  line-height: 14px;
  font-size: 10px;
  word-wrap: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
}
.app-action {
  align-self: flex-end;
  margin-top: -28px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.app-action-item {
  width: 20px;
  height: 20px;
  padding: 4px;
  border-radius: 4px;
  margin-left: 4px;
  box-sizing: content-box;
}
.app-action-item:hover {
  background-color: var(--background-color-hover);
}
.app-action-item > svg {
  width: 20px;
  height: 20px;
  fill: var(--color-foreground-light);
}
</style>
