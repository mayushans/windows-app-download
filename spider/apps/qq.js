import Tools from "../lib/Tools.js";
export default async () => {
  var page = "https://im.qq.com/pcqq/index.shtml";
  var url = "https://cdn-go.cn/qq-web/im.qq.com_new/latest/rainbow/windowsDownloadUrl.js";
  var res = await Tools.requestGet(url);
  var jsontext = res.match(/\{".+\};/g)[0]
  var data = JSON.parse(jsontext.substring(0,jsontext.length-1))
  return {
    name: "qqnt",
    view_name: "腾讯QQ",
    view_icon: "qq.svg",
    page: page,
    type: "即时通讯", 
    version: data.ntVersion,
    download_url: data.ntDownloadX64Url
  };
};
