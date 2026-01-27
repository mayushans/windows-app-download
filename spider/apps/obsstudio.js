import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://obsproject.com/";
  var res = await Tools.requestGet(url);
  var dom = Tools.dom(res);
  var x64url = dom("a.green_btn:nth-child(1)").attr("href");
  var version = x64url.match(/\d+\.\d+\.\d+/)[0];
  return {
    name: "obsstudio",
    type: "直播",
    view_name: "OBS Studio",
    view_icon: "obsstudio.svg",
    page: url,
    version: version,
    download_url: x64url,
  };
};
