import Tools from "../lib/Tools.js";
export default async () => {
  var page = "https://imageglass.org/";
  var res = await Tools.githubLatestRelease("d2phap/ImageGlass");

  for (let i = 0; i < res.assets.length; i++) {
    if (res.assets[i].name.indexOf("x64.msi") >= 0) {
      return {
        name: "image-glass",
        view_name: "ImageGlass",
        view_icon: "image-glass.webp",
        type: "图片查看",
        page: page,
        version: res.tag_name,
        download_url: res.assets[i].url,
      };
    }
  }
};
