#!/usr/bin/env node

/**
 * 受不了算每次改代码算时间戳了.
 */

var util = require('./index.js');

var Helper = require('./lib/shell_argv_helper.js');

Helper.init();

var params = Helper.getMap();

var content = (params.contents || ~~(Date.now() / 1000));

var timezone = ~~(params.options.t || 8);

var d = new Date(content * 1000);

console.log('\ntimestamp: %s; timezone:%s; \n', content, timezone);

var originContent = ~~content;
var tmpD = null;
var str_i;
for (var i = -7; i <= 7; i++) {
    
    content = originContent + i * 86400;
    tmpD = new Date(content * 1000);
    
    if(i === 0){
        str_i = ' 0';
    }else{
        str_i = i > 0 ? "+" + i : i;
    }
    
    console.log(' %s : timestamp: [ %s ], GTM: [ %s ]; DAY: [ %s ]; HOUR: [ %s ]; MINUTE: [ %s ];', str_i, content, tmpD.toLocaleString(), util.getDayTimestamp(content), util.getHourTimestamp(content), util.getMinuteTimestamp(content));
}