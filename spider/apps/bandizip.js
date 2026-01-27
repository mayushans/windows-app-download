import Tools from "../lib/Tools.js";
export default async () => {
  var page = "http://www.bandisoft.com/bandizip/";
  var url = "http://www.bandisoft.com/bandizip/dl.php?web";
  var res = await Tools.requestGetRedirects(url);
  var versionUrl = "http://www.bandisoft.com/bandizip/history/"
  var vres = await Tools.requestGet(versionUrl)
  var dom = await Tools.dom(vres)
  var version = dom('div.row:nth-child(4) > div:nth-child(1)').text()
  return {
    name: "bandizip",
    type: "文件管理",
    view_name: "Bandi Zip",
    view_icon: "bandizip.svg",
    version: version,
    download_url: res,
    page: page
  };
};
