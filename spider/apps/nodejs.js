import Tools from "../lib/Tools.js";
export default async () => {
  var page = "https://nodejs.org/";
  var url = "https://nodejs.org/dist/latest/";
  var res = await Tools.requestGet(url);
  var dom = Tools.dom(res);
  var links = dom("a");
  for (let i = 0; i < links.length; i++) {
    if (links[i].attribs.href.indexOf("x64.msi") >= 0) {
      var version = links[i].attribs.href.match(/v\d+\.\d+\.\d+/)[0]
      return {
        name: "nodejs",
        type: "开发工具",
        view_name: "Node.js",
        view_icon: "nodejs.svg",
        page: page,
        version: version,
        download_url: 'https://nodejs.org' + links[i].attribs.href
      };
    }
  }
};
