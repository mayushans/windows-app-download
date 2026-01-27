import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://music.163.com/api/pc/package/download/latest";
  var page = "https://music.163.com/st/download";
  var res = await Tools.requestGetRedirects(url);
  var version = res.match(/\d+\.\d+\.\d+\.\d+/)[0];
  return {
    name: "neteasemusic",
    type: "音乐播放",
    view_name: "网易云音乐",
    view_icon: "neteasemusic.webp",
    page: page,
    version: version,
    download_url: res,
  };
};
