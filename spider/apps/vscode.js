import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user";
  var page = "https://code.visualstudio.com/Download";
  var res = await Tools.requestGetRedirects(url);
  var version = res.match(/\d+\.\d+\.\d+/)[0]

  return {
    name: "vscode",
    view_name: "VSCode",
    view_icon: "vscode.svg",
    page: page,
    type: "开发工具",
    version: version,
    download_url: res,
  };
};
