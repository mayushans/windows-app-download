import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://www.voidtools.com/zh-cn/";
  var res = await Tools.requestGet(url);
  var dom = Tools.dom(res);
  var version = dom('#dl').text().match(/\d+\.\d+\.\d+\.\d+/)[0]
  var downloadUrl = "https://www.voidtools.com" + dom("a.button:nth-child(21)").attr("href");
  return {
    name: "everything",
    view_name: "Everything",
    view_icon: "everything.webp",
    type: "文件管理",
    page: url,
    version: version,
    download_url: downloadUrl,
  };
};
