import Tools from "../lib/Tools.js";
export default async () => {
  var page = "https://peazip.github.io/";
  var res = await Tools.githubLatestRelease("peazip/PeaZip");
  for (let i = 0; i < res.assets.length; i++) {
    if (
      res.assets[i].name.toLowerCase().indexOf("win64") >= 0 &&
      res.assets[i].name.indexOf("exe") >= 0
    ) {
      return {
        name: "pearzip",
        view_name: "PearZip",
        view_icon: "pearzip.svg",
        page: page,
        type: "文件管理",
        version: res.tag_name,
        download_url: res.assets[i].url,
      };
    }
  }
};
