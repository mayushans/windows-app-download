import Tools from "../lib/Tools.js";
export default async () => {
  var page = "https://etcher.balena.io/";
  var res = await Tools.githubLatestRelease("balena-io/etcher");
  for (let i = 0; i < res.assets.length; i++) {
    if (res.assets[i].name.indexOf(".exe") >= 0) {
      return {
        name: "etcher",
        view_name: "balenaEtcher",
        view_icon: "etcher.png",
        type: "系统工具",
        page: page,
        version: res.tag_name,
        download_url: res.assets[i].url,
      };
    }
  }
};
