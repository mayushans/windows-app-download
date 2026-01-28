// import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://www.huya.com/download/";
  // var res = await Tools.requestGet(url);
  // var dom = Tools.dom(res);
  //var dlurl = dom("a[eid=click/download/user/pcbutton]").attr("href");
  var dlurl = "https://download.huya.com/huya_pc_w_package/HuyaMiniLoader.exe";
  // 虎牙下载连接获取存在限制，使用固定链接
  return {
    name: "huya",
    view_name: "虎牙直播",
    view_icon: "huya.webp",
    type: "直播",
    page: url,
    version: '',
    download_url: dlurl,
  };
};
