# > 百度网盘
^https?:\/\/pan\.baidu\.com\/rest\/\d\.\d\/pcs\/adx url reject
^https?:\/\/pan\.baidu\.com\/act\/api\/activityentry url reject
^https?:\/\/issuecdn\.baidupcs\.com\/issue\/netdisk\/guanggao url reject
^https?:\/\/update.pan.baidu.com\/statistics url reject
^https:\/\/pan\.baidu\.com\/pmall\/order\/privilege\/info url reject
^https:\/\/pan\.baidu\.com\/rest\/.+\/pcs\/adx url reject
^https:\/\/pan\.baidu\.com\/api\/useractivity\/activity url reject
^http:\/\/pan\.baidu\.com\/act\/.+\/bchannel\/list url reject
^https:\/\/pan\.baidu\.com\/api\/certuser\/get url reject
^https:\/\/ndstatic\.cdn\.bcebos\.com\/activity\/welfare\/js\/.+\.js url reject
^https:\/\/ndstatic\.cdn\.bcebos\.com\/activity\/welfare\/index\.html url reject
^https:\/\/staticsns\.cdn\.bcebos\.com\/amis\/.+/banner.png url reject
^http:\/\/rp\.hpplay\.cn\/logouts url reject
^https:\/\/pan\.baidu\.com\/component\/view\/(1510|1130)\?vip url reject
#####5⃣️#####
^https:\/\/sofire\.baidu\.com\/ios\/.+ url reject
^https:\/\/issuecdn\.baidupcs\.com\/issue\/netdisk\/ts_ad\/guanggao\/.+ url reject
https:\/\/issuecdn\.baidupcs\.com\/issue\/netdisk\/ts_ad\/ url reject
https:\/\/pan\.baidu\.com\/rest\/2.0\/pcs\/adv\? url reject
#####3⃣️#####
^https?:\/\/pan\.baidu\.com\/act\/v\d\/(bchannel|welfare)\/list url reject
#####2⃣️#####
^https?:\/\/pan\.baidu\.com\/act\/v\d\/welfare\/list url reject-200
#####1⃣️#####
#百度网盘解锁vip，视频倍速播放    
^https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user url script-response-body https://qxnav.com/rules/QuantumultX/js/backup/js/bdcloud.js
hostname=pan.baidu.com,issuecdn.baidupcs.com,ndstatic.cdn.bcebos.com,staticsns.cdn.bcebos.com,rp.hpplay.cn,sofire.baidu.com

 