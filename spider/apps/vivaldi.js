import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://vivaldi.com/zh-hans/download/?platform=windows";
  var res = await Tools.requestGet(url);
  var dom = Tools.dom(res);
  var x64url = dom(".dldrop > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)").attr("href");
  var version = x64url.match(/\d+\.\d+\.\d+\.\d+/)[0]
  return {
    name: "vivaldi",
    view_name: "Vivaldi浏览器",
    view_icon: "vivaldi.svg",
    page: url,
    type: "浏览器",
    version: version,
    download_url: x64url,
  };
};
