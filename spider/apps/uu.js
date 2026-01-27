import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://adl.netease.com/d/g/uu/c/gw/js";
  var page = "https://uu.163.com/";
  var res = await Tools.requestGet(url);
  var x86url = res.match(/https:\/\/\S+\.exe\S+"/)[0].replace('"','')
  var version = x86url.match(/\d+\.\d+\.\d+/)[0]
  return {
    name: "uu",
    view_name: "UU加速器",
    view_icon: "uu.webp",
    page: page,
    type: "游戏",
    version: version,
    download_url: x86url,
  };
};
