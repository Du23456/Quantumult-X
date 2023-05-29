#更新时间:2023-5-25 21:35

#WPS解锁会员
#原链接：https://raw.githubusercontent.com/ddgksf2013/dev/master/ForOwnUse.conf

# ✅ WPS(国区)
^https:\/\/(vas|account)\.wps\.cn\/(query\/api\/v\d\/list_purchase_info|api\/users\/\d+\/overview) url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/WPSOffice.js
hostname=*.wps.*
