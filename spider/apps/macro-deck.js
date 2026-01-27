import Tools from "../lib/Tools.js";
export default async () => {
  var page = "https://macro-deck.app/";
  var res = await Tools.githubLatestRelease("Macro-Deck-App/Macro-Deck");
  for (let i = 0; i < res.assets.length; i++) {
    if (res.assets[i].name.indexOf("exe") >= 0) {
      return {
        name: "macro-deck",
        type: "外设驱动",
        view_name: "Macro Deck",
        view_icon: "macro-deck.webp",
        page: page,
        download_url: res.assets[i].url,
        version: res.tag_name,
      };
    }
  }
};
