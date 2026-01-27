import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://download.kugou.com/";
  var res = await Tools.requestGet(url);
  var dom = Tools.dom(res);
  var version = dom("div.recommend_products:nth-child(1) > span:nth-child(1)")
    .text()
    .match(/\d+\.\d+\.\d+/g)[0];
  var dumpurl = dom("div.recommend_products:nth-child(1) > a:nth-child(4)").attr("href");
  var x86url = await Tools.requestGetRedirects(url + dumpurl)
  return {
    name: "kugou",
    type: "音乐播放",
    view_name: "酷狗音乐",
    view_icon: "kugou.png",
    page: url,
    version: version,
    download_url: x86url,
  };
};
