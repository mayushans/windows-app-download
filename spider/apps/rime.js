import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://rime.im/download/";
  var res = await Tools.requestGet(url);
  var dom = Tools.dom(res);
  var durl = dom(".mypage > ul:nth-child(4) > li:nth-child(1) > p:nth-child(1) > a:nth-child(2)").attr("href");
  var version = durl.match(/\d+\.\d+\.\d+/g)[0];
  return {
    name: "rime",
    view_name: "Rime",
    view_icon: "rime.webp",
    type: "输入法",
    page: url,
    version: version,
    download_url: durl,
  };
};
