/**
 * lib from calc timestamp
 */

var reg = /\d{1,10}/;
/**
 * get the timestamp at current dat start
 *
 * NOTE: the result start at the timezone (GTM +8) 00:00:00, not the GTM 0.
 * 
 * @param
 *        {number} offset, offset of timezone;
 * @return number
 */
function getDayTimestamp(now, offset) {
    
    now = reg.test(now) ? now : ~~(Date.now() / 1000);
    offset = reg.test(offset) ? offset : 8
            
    var gtm0 = now - (now % 86400); // GTM 0
    
    var dayline = (now - gtm0) / 3600;
    console.log(dayline);
    // 时差跨天
    if (dayline + offset > 24) {
        return gtm0 + 86400 + offset * 3600 * - 1;
    } else {
        return gtm0 + offset * 3600 * - 1;
    }
}
/**
 * get the timestamp at current hour start
 * @param int now         timestamp
 * @return number
 */
function getHourTimestamp(now) {
    now = reg.test(now) ? now : ~~(Date.now() / 1000);
    var diff = now % 3600; // 1 * 60 * 60;
    return now - diff;
}
/**
 * get the timestamp at current minute start
 * @param int now         timestamp
 * @return number
 */
function getMinuteTimestamp(now) {
    now = reg.test(now) ? now : ~~(Date.now() / 1000);
    var diff = now % 60;
    return now - diff;
}

module.exports = {
    getDayTimestamp : getDayTimestamp,
    getHourTimestamp : getHourTimestamp,
    getMinuteTimestamp : getMinuteTimestamp,
}


debugger;
for(var i=1431013800,j=0;j<480;i+=360,j++){
    console.log("%s, %s", new Date(i * 1000), new Date(getDayTimestamp(i) * 1000));
}