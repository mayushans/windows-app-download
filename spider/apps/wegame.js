import Tools from "../lib/Tools.js";
export default async () => {
  var page = "https://www.wegame.com.cn/";
  var url = "https://www.wegame.com.cn/api/rail/web/data_filter/game_config/query";
  var param = {"data_names":"wegame_home_configs","command":"list_all","params":{"start_page":0,"items_per_pager":50,"filters":[]},"stamp":{},"response_format":0}
  var res = await Tools.requestPost(url,param);
  var durl = await new Promise((resolve, reject) => {
    for(let i = 0; i < res.items.length; i++){
        if(res.items[i].name == "downloadUrl"){
            resolve(res.items[i].value)
        }
    }
    reject()
  })
  var version = durl.match(/\d+\.\d+\.\d+\.\d+/)[0];
  durl = durl.substr(1,durl.length-2)
  return {
    name: "wegame",
    view_name: "WeGame",
    view_icon: "wegame.png",
    page: page,
    type: "游戏",
    version: version,
    download_url: durl,
  };
};
