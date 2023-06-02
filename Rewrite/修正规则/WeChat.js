更新时间：2023-6-2   20:00

原项目链接：https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/WeChat.conf
# > 微信去广告[不包含公众号信息流AD、朋友圈AD]
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url response-body "advertisement_num":\d,"advertisement_info":\[.+\], response-body "advertisement_num":0,"advertisement_info":[],
^https?:\/\/mp\.weixin\.qq\.com\/mp\/(advertisement_report|cps_product_info|wapcommreport|jsreport|jsmonitor|getappmsgext) url reject
^https?:\/\/wxa\.wxs\.qq\.com\/tmpl\/kf\/base_tmpl\.html url reject

原项目链接：https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js

hostname=wxa.wxs.qq.com, mp.weixin.qq.com
