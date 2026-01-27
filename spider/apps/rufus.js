import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://rufus.ie/zh/";
  var res = await Tools.githubLatestRelease("pbatard/rufus");
  for (let i = 0; i < res.assets.length; i++) {
    if (res.assets[i].name.indexOf("p.exe") >= 0) {
      return {
        name: "rufus",
        view_name: "Rufus",
        view_icon: "rufus.png",
        page: url,
        type: "系统工具",
        version: res.tag_name,
        download_url: res.assets[i].url,
      };
    }
  }
};
