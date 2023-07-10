#更新时间:2023-7-8 12:00
#喜马拉雅VIP
#surge原项目连接:https://raw.githubusercontent.com/ClydeTime/Surge/main/Script/XMLY/xmly.sgmodule
#原项目链接1:https://raw.githubusercontent.com/WeiRen0/Scripts/main/XMVIPTY1.js
#原项目链接3:https://raw.githubusercontent.com/WeiRen0/Scripts/main/XMVIPTY3.js

#surge线路
^https?:\/\/(mobile|mobilehera|mobwsa|mwsa|m|ar)\.ximalaya\.com\/(mobile\/(v\d\/album\/track|album\/paid\/info)|nyx\/history\/query\/detail|starwar\/task|vip\/(check|tabs|v\d\/recommand)|mobile-(user|album\/album\/page|playpage\/(playpage\/(tabs|recommendInfo)|track))|product\/(promotion|detail\/v1\/basicInfo)|business-vip-|(playlist|rec-association\/recommend)\/album) url script-response-body https://raw.githubusercontent.com/ClydeTime/Surge/main/Script/XMLY/xmly.js
#线路1
;^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+)).*\/(playpage\/tabs\/v2|v1\/album\/track\/ts|v1\/album\/price|v2\/homePage|business-vip-presale-mobile-web\/page\/ts|vip\/v1\/recommand|track\/v3\/baseInfo|v1\/module\/data\/dynamic|basicInfo\/dynamic\/ts).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/XMVIPTY1.js
#线路3
;^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+)).*\/(playpage\/tabs\/v2|v1\/album\/track\/ts|v1\/album\/price|v2\/homePage|business-vip-presale-mobile-web\/page\/ts|vip\/v1\/recommand|track\/v3\/baseInfo|v1\/module\/data\/dynamic|basicInfo\/dynamic\/ts).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/XMVIPTY3.js

hostname=*xima*,*xmcdn*,*.ximalaya.com
