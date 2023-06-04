# 京东比价
# 原项目链接:https://service.2ti.st/QuanX/Rewrite/jd_tb_price.conf

^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://service.2ti.st/QuanX/Script/jd_tb_price/main.js

hostname = api.m.jd.com
