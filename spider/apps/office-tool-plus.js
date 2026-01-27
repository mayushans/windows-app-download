import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://otp.landian.vip/zh-cn/download.html";
  var res = await Tools.githubLatestRelease("YerongAI/Office-Tool");
  for (let i = 0; i < res.assets.length; i++) {
    if (
      res.assets[i].name.indexOf("runtime") >= 0 &&
      res.assets[i].name.indexOf("x64.zip") >= 0
    ) {
      return {
        name: "office-tool-plus",
        view_name: "Office Tool Plus",
        view_icon: "otp.png",
        page: url,
        type: "办公软件",
        version: res.tag_name,
        download_url: res.assets[i].url,
      };
    }
  }
};
