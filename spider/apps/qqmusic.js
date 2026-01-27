import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://y.qq.com/download/download.html";
  var res = await Tools.requestGet(url);
  var dom = Tools.dom(res);
  var version = dom("div.product:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > h3:nth-child(2) > span:nth-child(1)")
    .first()
    .html()
    .match(/\d+\.\d+\.\d+/g)[0];
  var x86url = dom("div.product:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(4)").attr("href");
  return {
    name: "qqmusic",
    view_name: "QQ音乐",
    view_icon: "qqmusic.webp",
    page: url,
    type: "音乐播放",
    version: version,
    download_url: x86url,
  };
};
