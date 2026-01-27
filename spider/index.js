import fs from 'fs'
import log from './lib/Log.js'

function nowtimeformat() {
  var date = new Date(Date.now())
  var Y = date.getFullYear() + '-'
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  return Y + M + D + h + m + s
}
var starttime = nowtimeformat()
var oldapplist = {}
if (fs.existsSync('./src/data/apps.json')) {
  const datafile = './src/data/apps.json'
  var olddata = JSON.parse(fs.readFileSync(datafile, 'utf-8'))
  fs.writeFileSync('./src/data/apps_old.json', JSON.stringify(olddata))
  for (let i in olddata.apps) {
    for (let j in olddata.apps[i].list) {
      oldapplist[olddata.apps[i].list[j].name] = olddata.apps[i].list[j]
    }
  }
}
var appsnew = [];

(async () => {
  var dird = fs.readdirSync('./spider/apps')
  var list = []
  for (let i in dird) {
    if (/\.js$/.test(dird[i])) list.push(dird[i].substring(0, dird[i].length - 3))
  }
  log.add('列表为: ' + list.join(','))

  for (let i = 0; i < list.length; i++) {
    try {
      log.add(list[i] + ' 开始执行')
      var res = await (await import('./apps/' + list[i] + '.js')).default()
      res.check_time = nowtimeformat()
      res.status = 'success'
      appsnew.push(res)
      log.add(list[i] + ' 执行成功')
    } catch (e) {
      log.add(list[i] + ' 执行失败')
      if(oldapplist[list[i]] != undefined){
        var tmapp = oldapplist[list[i]]
        tmapp.status = 'error'
        appsnew.push(tmapp)
        log.add(list[i] + ' 使用旧数据')
      }
      log.add(list[i] + ' - ' + String(e))
    }
  }
  // console.log(log.get())
  var appformat = []
  for(let i in appsnew){
    let type = appsnew[i].type || '其他'
    if(appformat[type] == undefined){
      appformat[type] = []
    }
    appformat[type].push(appsnew[i])
  }
  var outdata = { last_update: starttime, apps: [] }
  for(let i in appformat){
    outdata.apps.push({ name: i, list: appformat[i] })
  }

  fs.writeFileSync('./src/data/apps.json', JSON.stringify(outdata))
  log.add('全部执行完毕')
  fs.writeFileSync('./public/spider_log.json', JSON.stringify(log.get()))
})()
