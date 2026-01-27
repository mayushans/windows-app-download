import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://7-zip.org/";
  var res = await Tools.requestGet(url);
  var dom = Tools.dom(res);
  var version = dom("body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > p:nth-child(3) > b:nth-child(1)").text().match(/\d+\.\d+/)[0];
  var x64url = url + dom("body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > a:nth-child(1)").attr("href");
  return {
    name: "7zip",
    type: "文件管理",
    view_name: "7-Zip",
    view_icon: "7zip.svg",
    version: version,
    download_url: x64url,
    page: url
  };
};
