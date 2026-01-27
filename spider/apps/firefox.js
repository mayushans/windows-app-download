import Tools from "../lib/Tools.js";
export default async () => {
  var url =
    "https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN";
  var page = "https://www.mozilla.org/zh-CN/firefox/all/";
  var res = await Tools.requestGetRedirects(url);
  var version = res.match(/releases\/(\d+\.(\d+\.)*\d+)\//g)[0]
  
  return {
    name: "firefox",
    view_name: "Firefox",
    view_icon: "firefox.svg",
    type: "浏览器",
    page: page,
    version: version.substring(9,version.length - 1),
    download_url: res,
  };
};
