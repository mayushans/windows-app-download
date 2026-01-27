import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://pc.weixin.qq.com/";
  var res = await Tools.requestGet(url);
  var dom = Tools.dom(res);
  var version = dom(".download-text").html().split(" ").pop();
  var x64url = dom("#downloadButton").attr("href");
  return {
    name: "wechat",
    view_name: "微信电脑版",
    view_icon: "wechat.svg",
    page: url,
    type: "即时通讯",
    version: version,
    download_url: x64url,
  };
};
