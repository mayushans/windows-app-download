import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://www.videolan.org/vlc/download-windows.html";
  var res = await Tools.requestGet(url);
  var dom = Tools.dom(res)
  var url2 = dom('ul.dropdown-menu:nth-child(3) > li:nth-child(3) > a:nth-child(1)').attr('href')
  var version = url2.match(/\/\d+\.\d+\.\d+/g)[0].substring(1)
  return {
    name: "vlc",
    view_name: "VLC Media Player",
    view_icon: "vlc.svg",
    page: url,
    type: "媒体播放器",
    version: version,
    download_url: url2,
  };
};
