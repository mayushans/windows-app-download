import Tools from "../lib/Tools.js";
export default async () => {
  var page = "https://ungoogled-software.github.io/ungoogled-chromium-binaries/";
  var url = "https://ungoogled-software.github.io/ungoogled-chromium-binaries/releases/windows/64bit/"
  var res = await Tools.requestGet(url);
  var dom = Tools.dom(res);
  var version = dom("body > ul:nth-child(4) > li:nth-child(1) > a:nth-child(1)").text().match(/\d+\.\d+\.\d+\.\d+/)[0];
  var url2 = "https://ungoogled-software.github.io" + dom("body > ul:nth-child(4) > li:nth-child(1) > a:nth-child(1)").attr('href')
  var res2 = await Tools.requestGet(url2)
  var dom2 = Tools.dom(res2)
  var durl = dom2('body > ul:nth-child(6) > li:nth-child(1) > a:nth-child(1)').attr('href')

  return {
    name: "ungoogled-chromium",
    view_name: "Ungoogled Chromium",
    view_icon: "chromium.svg",
    type: "浏览器",
    page: page,
    version: version,
    download_url: durl,
  };
};
