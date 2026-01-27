import { type } from "os";
import Tools from "../lib/Tools.js";
export default async () => {
  var page = "https://www.google.com/intl/zh-CN/chrome/?standalone=1";
  var url = "https://versionhistory.googleapis.com/v1/chrome/platforms/win/channels/stable/versions"
  var res = await Tools.requestGet(url)
  var version = res.versions[0].version
  return {
    name: "chrome",
    type: "浏览器",
    view_name: "Google Chrome",
    view_icon: "chrome.svg",
    page: page,
    version: version,
    download_url: 'https://dl.google.com/chrome/install/ChromeStandaloneSetup64.exe',
  };
};
