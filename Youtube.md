# > Youtube
#####4⃣️#####
^https?:\/\/api\.catch\.gift\/api\/v\d\/pagead\/ url reject
#####1⃣️#####
# YouTube去广告    系统大于iOS15     
# 仅去除首页瀑布流广告/播放页推荐列表广告(非贴片广告)
^https:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next)\? url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/youtube.js
# YouTube视频广告  
(^https?:\/\/[\w-]+\.googlevideo\.com\/(?!dclk_video_ads).+?)&ctier=L(&.+?),ctier,(.+) $1$2$3 302
^https?:\/\/[\w-]+\.googlevideo\.com\/(?!(dclk_video_ads|videoplayback\?)).+&oad url reject
^https?:\/\/youtubei\.googleapis\.com\/youtubei\/v\d\/player\/ad_break url reject
^https?:\/\/(www|s)\.youtube\.com\/api\/stats\/ads url reject
^https?:\/\/(www|s)\.youtube\.com\/(pagead|ptracking) url reject
^https?:\/\/s\.youtube\.com\/api\/stats\/qoe\?adcontext url reject
hostname=-redirector*.googlevideo.com,*.googlevideo.com,www.youtube.com,s.youtube.com,youtubei.googleapis.com