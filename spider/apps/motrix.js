import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://motrix.app/download";
  var res = await Tools.githubLatestRelease("agalwood/Motrix");
  for (let i = 0; i < res.assets.length; i++) {
    if (res.assets[i].name.indexOf("x64.exe") >= 0) {
      return {
        name: "motrix",
        type: "下载工具",
        view_name: "Motrix",
        view_icon: "motrix.png",
        page: url,
        version: res.tag_name,
        download_url: res.assets[i].url,
      };
    }
  }
};
