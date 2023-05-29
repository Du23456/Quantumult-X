#更新时间:2023-5-10 23:00

# > 有道词典
^https?:\/\/oimage([a-z])([0-9])\.ydstatic\.com\/.+adpublish url reject
^https?:\/\/oimage\w\d\.ydstatic\.com\/image\?.+?=adpublish url reject-img
^https?:\/\/dsp-impr2\.youdao\.com\/adload url reject-200
^https?:\/\/impservice\.dictapp\.youdao\.com\/imp\/request url reject-img
^https?:\/\/oral\.youdao\.com\/oral\/adInfo url reject-img
#####1⃣️#####
# 网易有道词典+解锁VIP    
^https:\/\/dict\.youdao\.com\/vip\/user\/status url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wyydcd.js
hostname=oimage*.ydstatic.com, dsp-impr2.youdao.com,impservice.dictapp.youdao.com,oral.youdao.com,dict.youdao.com
