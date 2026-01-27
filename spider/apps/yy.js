import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://www.yy.com/yyweb/download/getLink?id=120";
  var page = "https://www.yy.com/pcyy/";
  var res = await Tools.requestGet(url);
  var version = res.url.match(/\d+\.\d+\.\d+\.\d+/)[0]
  return {
    name: "yy",
    view_name: "YY语音",
    view_icon: "yy.webp",
    type: "即时通讯",
    page: page,
    version: version,
    download_url: res.url,
  };
};
