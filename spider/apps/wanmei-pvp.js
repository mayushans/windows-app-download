import Tools from "../lib/Tools.js";
export default async () => {
  var url = "https://client.wmpvp.com/download/latest.yml";
  var page = "https://pvp.wanmei.com/";
  var res = await Tools.requestGet(url);
  var version = ''
  var path = 'https://client.wmpvp.com/download/';
  var rex = res.split('\n')
  for(let i = 0; i < rex.length; i++){
    if(rex[i].indexOf('version:') >= 0){
        version = rex[i].substring(9)
    }
    if(rex[i].indexOf('path:') >= 0){
        path += rex[i].substring(6)
    }
  }

  return {
    name: "wanmei-pvp",
    view_name: "完美世界PVP",
    view_icon: "wanmei-pvp.webp",
    page: page,
    type: "游戏",
    version: version,
    download_url: path,
  };
};
