var logdata = [];

async function add(text){
    var d = new Date();
    var dtstr = d.getFullYear() + '-'
    + (d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : ('' + (d.getMonth() + 1))) + '-'
    + (d.getDate() < 10 ? '0' + d.getDate() : ('' + d.getDate())) + ' '
    + (d.getHours() < 10 ? '0' + d.getHours() : ( '' + d.getHours() )) + ':'
    + (d.getMinutes() < 10 ? '0' + d.getMinutes() : ( '' + d.getMinutes() ) ) + ':'
    + (d.getSeconds() < 10 ? '0' + d.getSeconds() : ( '' + d.getSeconds() ) );
    console.log("[" + dtstr + "] " + text + "\n")
    logdata.push({
        time: dtstr,
        msg: text
    })
}

function get(){ 
    return logdata;
}

export default {add,get}