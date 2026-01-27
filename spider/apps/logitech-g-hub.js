import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://www.logitechg.com/zh-cn/innovation/g-hub.html";
  var downloadUrl = "https://download01.logi.com/web/ftp/pub/techsupport/gaming/lghub_installer.exe";
  return {
    name: "logitech-g-hub",
    type: "外设驱动",
    view_name: "Logitech G HUB",
    view_icon: "logitech-g-hub.webp",
    page: url,
    version: '',
    download_url: downloadUrl,
  };
};
