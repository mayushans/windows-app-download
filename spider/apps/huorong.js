import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://www.huorong.cn/5.0.version.json";
  var page = "https://www.huorong.cn/person5.html";
  var res = await Tools.requestGet(url);
  return {
    name: "huorong",
    view_name: "火绒安全",
    view_icon: "huorong.webp",
    type: "系统工具",
    page: page,
    version: res.version,
    download_url: res.urlFull,
  };
};
