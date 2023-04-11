const fs = require('fs');
var {LocalStorage} = require('node-localstorage');
localStorage = new LocalStorage('./scratch');
var mongoose = require('mongoose');


module.exports.dateTimeStampToDay =  function() {
    var dateToday = new Date();
    var today = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate());

    return Math.floor(today.getTime() / 1000);
}

module.exports.dateTimeStamp =  function() {
    return Math.floor(Date.now() / 1000);
}

module.exports.createFolder = function(path = '', name = 'images') {
    var date = new Date();
    var month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
    var day = (date.getDate() < 10 ? '0' : '') + date.getDate();

    var pathDate = date.getFullYear() + '/' + month + '/' + day;

    var path = path == '' ?  './public/upload/clients/'+name+'/' + pathDate : path; 
    if (!fs.existsSync(path)){
        fs.mkdirSync(path, { recursive: true });
        fs.chmodSync(path, 0777);
    }

    return 'upload/clients/'+name+'/' + pathDate;
}


module.exports.status = function(active = 1) {
    if (active == 1) {
        return '<span class="btn btn-success btn-xs">Active</span>';
    }
    return '<span class="btn btn-danger btn-xs">No Active</span>';
}


module.exports.page = function(totalPage = 1, page = 1, link = '') {
    if (link.indexOf('?') != -1) {
        link = link + "&";
    } else {
        link = link + "?";
    }

    var html = '<ul class="pagination pagination-sm mb-3 float-right" style="justify-content: center;">';

    var activePre = 'noactive-pre';
    if (page > 1) {
        activePre = 'active-pre';
    }

    if (totalPage > 1) {
        html += '<li class="page-item '+activePre+'"><a class="page-link" href="'+link+'page=1"><<</a></li>';
        html += '<li class="page-item '+activePre+'"><a class="page-link" href="'+ ((activePre == 'active-pre') ? link+'page='+(page-1) : '#')+'"><</a></li>';
    }

    startPage  = (page - 2) > 0 ? page - 2 : 1;
    endPage    = (totalPage - page) < 2 ?  totalPage : (page + 2);

    for (i = startPage; i <= endPage; i++) {
        html += '<li class="page-item '+((page == i) ? 'active' : '')+'"><a class="page-link" href="'+ ((page == i) ? '#' : link+'page='+ i )+'">'+ i +'</a></li>';
    }

    if (totalPage - page > 0) {
        html += '<li class="page-item"><a class="page-link" href="'+link+'page='+ (page + 1) +'">></a></li>';
        html += '<li class="page-item"><a class="page-link" href="'+link+'page='+ (totalPage) +'">>></a></li>';
    }

    html += '</ul>';

    return html;
}


module.exports.timeStampToDate = function(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();

    return (month < 10 ? "0"+ month: month) + '/' + (date < 10 ? "0"+ date: date) + '/' + year + ' ' + hour + ':' + (min < 10 ? "0"+ min: min) + ':' + (sec < 10 ? "0"+ sec: sec) ;
}

module.exports.timeStampDate = function(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var am = a.toLocaleString('en-Us', {
        hour: 'numeric', minute: 'numeric', hour12: true
    })

    return month + '/' + date + '/' + year + ' ' + am ;
}

module.exports.dateToDate = function(date) {
    var a = new Date(date);
    var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var am = a.toLocaleString('en-Us', {
        hour: 'numeric', minute: 'numeric', hour12: true
    })

    return date + '/' + month + '/' + year;
}

module.exports.intToDate = function(n, now = 0) {
    if (now == 1) {
        var timeNow = new Date();
        timeNow = (timeNow.getTime() / 1000);
        
        var n = parseInt(n) - timeNow;
        if (n <= 0) {
            return '<span style="color: red">0 Days</span>';
        }
    }

    var day = parseInt(n / (24 * 3600));
 
    n = n % (24 * 3600);
    var hour = parseInt(n / 3600);

    n %= 3600;
    var minutes = n / 60;

    n %= 60;
    var seconds = n;

    if (day <= 5) {
        return "<span style=\"color: red\">"+day + " " + "days " + hour + "" + "h " + minutes.toFixed() + "" + "m " + seconds.toFixed() + "" + "s </span>";
    }
    return day + " " + "days " + hour + "" + "h " + minutes.toFixed() + "" + "m " + seconds.toFixed() + "" + "s ";
}

module.exports.toTimestamp = function(strDate) {
    var datum = Date.parse(strDate);
    return datum/1000;
}

module.exports.rand = function(length) {
    var result = "";
    var array = ["a", "A", "b", "B", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "y", "w", "t", "u", "v", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(var i=1; i<=length; i++){
        result += array[Math.floor(Math.random() * array.length)];
    }
    return result;
}

module.exports.getDateNow = function(type = 'date'){
    var date = new Date();
    var getDate = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate();


    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + getDate ;
}

module.exports.getIsEncode = async function() {
    var dataOption = await new Promise((reslove, reject) => {
        conn.query('SELECT * from options where type = "encode"', (err, result) => {
            if (err) console.log(err);
            var data = JSON.parse(JSON.stringify(result));
            if (Object.keys(data).length == 1) {
                reslove(data[0]);
            } 
        });
    });

    return dataOption.value;
}


module.exports.pageNode = function(pages, current, url = '', req = {}) {
    var key = ((Object.keys(req.query).length == 0 || typeof req.query.page != 'undefined') ? '?' : '&');

    var html = `<div class="row">`;
    
    if (pages > 0) {
        html += `<nav class="mx-auto">`;
        html += `<ul class="pagination" style="margin-top: 2rem;">`;
      
        if(current == 1) {
            html += `<li class="page-item disabled"><a class="page-link" href="${url}${key}page=1">First</a></li>`;
        } else {
            html += `<li class="page-item"><a class="page-link" href="${url}${key}page=1">First</a></li>`;
        }
        
        var i = (Number(current) > 3 ? Number(current) - 2 : 1)
        if(i !== 1) { 
            html += `<li class="page-item disabled"><a class="page-link" href="${url}#">...</a></li>`;
        }

        for(; i <= (Number(current) + 2) && i <= pages; i++) {
        
            if(i == current) {
                html += `<li class="page-item active"><a class="page-link" href="${url}${key}page=${ i }"> ${ i } </a></li>`;
            } else {
                html += `<li class="page-item"><a class="page-link" href="${url}${key}page=${ i }">${ i }</a></li>`;
            }

            if (i == Number(current) + 2 && i < pages) {
                html += `<li class="page-item disabled"><a class="page-link" href="${url}">...</a></li>`;
            }
        }
        
        if(current == pages) {
            html += `<li class="page-item disabled"><a class="page-link" href="${url}">Last</a></li>`;
        } else {
            html += `<li class="page-item"><a class="page-link" href="${url}${key}page=${ pages }"> Last</a></li>`;
        }
        html += `</ul></nav>`;
    }

    html += `</div>`;

    return html;
}

module.exports.groupPropety = function(table, type_id) {

    let group = table.reduce((r, a) => {
        r[a.type_id] = [...r[a.type_id] || [], a];
        return r;
       }, {});
    return group;
}   

module.exports.heroType = function(type_id = 1) {
    if (type_id == 1) {
        return '<span class="btn btn-xs btn-success">Normal</span>';
    }
    return '<span class="btn btn-xs btn-danger">Special</span>';
}

module.exports.getNameToken = function (token = '') {
    let start = token.substr(0, 4);
    let end = token.substr(-4);

    return start + '......' + end;
}

module.exports.getLang = function() {
    return localStorage.getItem('lang').length != 0 ? localStorage.getItem('lang') : 'vi';
}

/** Update */
/* return 02/10/2022 07:54:50 */
module.exports.dateNow = function() {
    var date = new Date();
    var dateStr = ("00" + date.getDate()).slice(-2) + "/" + ("00" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear() + " ";

        ("00" + date.getHours()).slice(-2) + ":" +
        ("00" + date.getMinutes()).slice(-2) + ":" +
        ("00" + date.getSeconds()).slice(-2);
    
    return dateStr;
}

module.exports.dateNowSubOneBetween = function(type = 'sub') {
    var date = new Date();
    if (type == 'sub') {
        date.setDate(date.getDate() - 1);
    }

    if (type == 'now') {
        date.setDate(date.getDate());
    }
    
    var dateStr = ("00" + (date.getMonth() + 1)).slice(-2) + "/" + ("00" + date.getDate()).slice(-2) + "/" + + date.getFullYear();

    return {dateStr : dateStr + " 00:00:00", dateEnd: dateStr + " 23:59:59"};
}

module.exports.dateNowSub3Day = function() {

    var date = new Date();
    date.setDate(date.getDate()-3);
    var dateStr = ("00" + (date.getMonth() + 1)).slice(-2) + "/" + ("00" + date.getDate()).slice(-2) + "/" + date.getFullYear();

    var dateEnd = new Date();
    var dateEnd = ("00" + (dateEnd.getMonth() + 1)).slice(-2) + "/" + ("00" + dateEnd.getDate()).slice(-2) + "/" + dateEnd.getFullYear();

    return {dateStr, dateEnd};
}

/**
 * 
 * @returns { dateStr: '01/09/2022', dateEnd: '01/10/2022' }
 */
module.exports.dateNowSub1Month = function(month = null) {
    
    if (month) {
        var date = new Date(month);
    } else {
        var date = new Date();
    }
    
    var dateStr = ("00" + (date.getMonth() + 1)).slice(-2) + "/" + "01/" +  date.getFullYear();

    var dayStart = new Date(date.getFullYear(), date.getMonth() +1, 0).getDate();
    var dateEnd = ("00" + (date.getMonth() + 1)).slice(-2) + "/" + dayStart +"/" +  date.getFullYear();

    return {dateStr, dateEnd};
}