import Tools from "../lib/Tools.js";

export default async () => {
  var url = "https://github.com/c0re100/qBittorrent-Enhanced-Edition/releases";
  var res = await Tools.githubLatestRelease(
    "c0re100/qBittorrent-Enhanced-Edition"
  );
  for (let i = 0; i < res.assets.length; i++) {
    if (res.assets[i].name.indexOf("exe") >= 0) {
      return {
        name: "qbittorrent-enhanced",
        view_name: "qBittorrent Enhanced Edition",
        view_icon: "qbittorrent.svg",
        page: url,
        type: "下载工具",
        version: res.tag_name.replace('release-',''),
        download_url: res.assets[i].url,
      };
    }
  }
};
