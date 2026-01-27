import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://store.epicgames.com/zh-CN/download";
  var durl = "https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi"
  return {
    name: "epic",
    view_name: "Epic Games Launcher",
    view_icon: "epic.svg",
    type: "游戏",
    page: url,
    version: '',
    download_url: durl,
  };
};
