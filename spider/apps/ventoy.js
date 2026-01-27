import Tools from "../lib/Tools.js";

export default async () => {
  var page = "https://www.ventoy.net/cn/download.html";
  var res = await Tools.githubLatestRelease("ventoy/Ventoy");

  for (let i = 0; i < res.assets.length; i++) {
    if (res.assets[i].name.indexOf("windows") >= 0) {
      return {
        name: "ventoy",
        view_name: "Ventoy",
        view_icon: "ventoy.png",
        page: page,
        type: "系统工具",
        version: res.tag_name,
        download_url: res.assets[i].url,
      };
    }
  }
};
