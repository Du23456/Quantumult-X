# 淘宝比价
# 原项目链接:https://service.2ti.st/QuanX/Rewrite/jd_tb_price.conf

^http://.+/amdc/mobileDispatch url script-request-body https://service.2ti.st/QuanX/Script/jd_tb_price/main.js
^http://.+/amdc/mobileDispatch url script-response-body https://service.2ti.st/QuanX/Script/jd_tb_price/main.js
^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.data\.get url script-response-body https://service.2ti.st/QuanX/Script/jd_tb_price/main.js

hostname=trade-acs.m.taobao.com
