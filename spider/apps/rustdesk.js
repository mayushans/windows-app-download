import Tools from "../lib/Tools.js";

export default async () => {
  var url = "https://rustdesk.com/";
  var res = await Tools.githubLatestRelease('rustdesk/rustdesk')
  for (let i = 0; i < res.assets.length; i++) {
    if (
      res.assets[i].name.indexOf("x86_64") >= 0 &&
      res.assets[i].name.indexOf(".exe") >= 0
    ) {
      return {
        name: "rustdesk",
        view_name: "RustDesk",
        view_icon: "rustdesk.svg",
        page: url,
        type: "系统工具",
        version: res.name,
        download_url: res.assets[i].url,
      };
    }
  }
};
