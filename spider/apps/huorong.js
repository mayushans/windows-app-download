import Tools from "../lib/Tools.js";
export default async () => {
  var page = "https://www.huorong.cn/person";
  var res = await Tools.requestGet(page);
  var dom = Tools.dom(res);
  var dmurl = dom('div.personal_ban_info_li:nth-child(1) > div:nth-child(1) > a:nth-child(1)').attr("data-url");
  var drurl = await Tools.requestGetRedirects(dmurl);
  var version = drurl.match(/\d+\.\d+\.\d+\.\d+/)[0];
  return {
    name: "huorong",
    view_name: "火绒安全",
    view_icon: "huorong.webp",
    type: "系统工具",
    page: page,
    version: version,
    download_url: drurl,
  };
};
