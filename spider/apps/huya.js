import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://www.huya.com/download/";
  var res = await Tools.requestGet(url);
  var dom = Tools.dom(res);
  var x86url = dom("a[eid=click/download/user/pcbutton]").attr("href");
  return {
    name: "huya",
    view_name: "虎牙直播",
    view_icon: "huya.webp",
    type: "直播",
    page: url,
    version: '',
    download_url: x86url,
  };
};
