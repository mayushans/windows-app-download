import { type } from "os";
import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://www.centbrowser.cn/";
  var res = await Tools.requestGet(url);
  var dom = Tools.dom(res);
  var version = dom("div.content > div:nth-child(2) > p:nth-child(1)")
    .text()
    .match(/\d+\.\d+\.\d+\.\d+/g)[0];
  var x86url = dom("div.content > div:nth-child(1) > a:nth-child(2)").attr("href");
  return {
    name: "centbrowser",
    type: "浏览器",
    view_name: "Cent Browser",
    view_icon: "cent_browser.svg",
    page: url,
    version: version,
    url: x86url,
  };
};
