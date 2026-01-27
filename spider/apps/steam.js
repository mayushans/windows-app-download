import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://store.steampowered.com/about/";
  var res = await Tools.requestGet(url);
  var dom = Tools.dom(res);
  var downloadUrl = dom(".about_install_steam_link").attr("href");
  return {
    name: "steam",
    view_name: "Steam",
    view_icon: "steam.svg",
    type: "游戏",
    page: url,
    version: '',
    download_url: downloadUrl,
  };
};
