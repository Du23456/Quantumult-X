# > 青桔 微信小程序净化
^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=cms\.htw\.delivery url reject-dict
^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=hm\.fa\.combineHomepageInfo url reject-dict
^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=hm\.fa\.mallRecommend url reject-dict
^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=hm\.fa\.homeConfig url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/scripts/qingju.js
hostname=htwkop.xiaojukeji.com