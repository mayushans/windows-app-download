import axios from "axios";
import * as cheerio from 'cheerio';

function Tools() {}

Tools.requestGet = async (url, config) => {
  var axiosConfig = {
    method: "get",
    url: url,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      "Accept-Encoding": "gzip, deflate",
      "Content-Type": "keep-alive",
    },
  };
  if (config != null) {
    var configKeys = Object.keys(config);
    for (let i = 0; i < configKeys.length; i++) {
      axiosConfig[configKeys[i]] = config[configKeys[i]];
    }
  }
  var res = await axios(axiosConfig);
  if (res.status == 200) {
    return res.data;
  }
  return false;
};

Tools.requestPost = async (url, param, config) => {
  var axiosConfig = {
    method: "get",
    url: url,
    data: param,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      "Accept-Encoding": "gzip, deflate",
      "Content-Type": "keep-alive",
    },
  };
  if (config != null) {
    var configKeys = Object.keys(config);
    for (let i = 0; i < configKeys.length; i++) {
      axiosConfig[configKeys[i]] = config[configKeys[i]];
    }
  }
  var res = await axios(axiosConfig);
  if (res.status == 200) {
    return res.data;
  }
  return false;
};

Tools.requestGetRedirects = async (url, config) => {
  var axiosConfig = {
    method: "get",
    url: url,
    maxRedirects: 0,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      "Accept-Encoding": "gzip, deflate",
      "Content-Type": "keep-alive",
    },
    validateStatus: function (status) {
      return status >= 200 && status <= 302;
    },
  };
  if (config != null) {
    var configKeys = Object.keys(config);
    for (let i = 0; i < configKeys.length; i++) {
      axiosConfig[configKeys[i]] = config[configKeys[i]];
    }
  }
  var res = await axios(axiosConfig);
  if (res.status == 302) {
    return res.headers.location;
  }
  return false;
};

Tools.dom = (html) => {
  return cheerio.load(html);
};

Tools.githubLatestRelease = async (project) => {
  var url = "https://api.github.com/repos/" + project + "/releases/latest";
  var res = await Tools.requestGet(url);
  var assets = [];
  for(let i = 0; i < res.assets.length; i++){
    assets.push({
      name: res.assets[i].name,
      url: res.assets[i].browser_download_url
    })
  }
  return {
    name: res.name,
    tag_name: res.tag_name,
    assets: assets
  }
};

export default Tools;
