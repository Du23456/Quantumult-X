#更新时间:2023-6-1 18:00

#####6⃣️#####
# > 淘宝
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.taobao\.idle\.home\.welcome\/ url reject-200
^https?:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.tmall\.wireless url reject-200
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.advertisementservice\.getadv url reject-200
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimama\.etao\.config\.query\/ url response-body "ems_etao_advertise" response-body ""
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopadvertiseapi\.queryadvertise\/ url reject-200
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.o2o\.ad\.gateway\.get\/ url reject-200
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.trip\.activity\.querytmsresources\/ url reject-200
# 开屏广告
^https?:\/\/gw\.alicdn\.com\/imgextra\/i\d\/.+1125-1602\.jpg url reject-200
^https:\/\/heic\.alicdn\.com\/imgextra\/\w{2}\/[\w!]+-\d-tps-\d{3,4}-\d{4}\.jpg_(1\d{3}|9\d{2})x(1\d{3}|9\d{2})q[59]0\.jpg_\.heic$ url reject
^https:\/\/(heic|gw)\.alicdn\.com\/imgextra\/i\d\/.+-tps-(702-758|1125-1602)\.(heic|jpg|png) url reject-200
#####3⃣️#####
# > alibaba
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.advertisementservice\.getadv\/ url reject
# > amdc
^http:\/\/amdc\.m\.taobao\.com url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/amdc.js

hostname=gw.alicdn.com heic.alicdn.com, guide-acs.m.taobao.com, acs.m.taobao.com
