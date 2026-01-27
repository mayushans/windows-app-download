import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://git-scm.com/downloads/win";
  var res = await Tools.githubLatestRelease("git-for-windows/git");
  for (let i = 0; i < res.assets.length; i++) {
    if (res.assets[i].name.indexOf("64-bit.exe") >= 0) {
      return {
        name: "git",
        view_name: "Git",
        view_icon: "git.svg",
        type: "开发工具",
        page: url,
        version: res.tag_name.replace('.windows.1',''),
        url: res.assets[i].url,
      };
    }
  }
};
