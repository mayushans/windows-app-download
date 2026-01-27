import { type } from "os";
import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://www.douyu.com/client";
  var res = await Tools.requestGet(url);
  var dom = Tools.dom(res);
  var version = dom(".pc-content .pc-content-version")
    .first()
    .html()
    .match(/\d+\.\d+\.\d+/g)[0];
  var x86url = dom(".pc-content .pc-client-download").attr("href");
  return {
    name: "douyu",
    type: "直播",
    view_name: "斗鱼直播",
    view_icon: "douyu.webp",
    page: url,
    version: version,
    download_url: x86url,
  };
};
