import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://github.com/easymodo/qimgv";
  var res = await Tools.githubLatestRelease("easymodo/qimgv");
  for (let i = 0; i < res.assets.length; i++) {
    if (
      res.assets[i].name.indexOf("exe") >= 0
      && res.assets[i].name.indexOf("video") < 0
    ) {
      return {
        name: "qimgv",
        view_name: "QImgv",
        view_icon: "qimgv.webp",
        page: url,
        type: "图片查看",
        version: res.tag_name,
        download_url: res.assets[i].url,
      };
    }
  }
};
