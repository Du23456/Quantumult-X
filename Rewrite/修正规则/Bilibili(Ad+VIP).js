#更新时间:2023-5-25 21:35

#去广告原项目
#https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/Bilibili.conf
#解锁4K画质原项目
#暂无

# ～ BiliBili_哔哩哔哩_视频播放下方商品推广@ddgksf2013
^https?:\/\/api\.bili(api|bili)\.(net|com)\/pgc\/season\/app\/related\/recommend\? url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_屏蔽直播页顶部轮播图@ddgksf2013
^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-interface\/v2\/index\/feed url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_屏蔽直播间商品广告浮窗[还有一个域名]@ddgksf2013
^https?:\/\/api\.live\.bilibili\.com\/xlive\/e-commerce-interface\/v\d\/ecommerce-user\/get_shopping_info\? url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_屏蔽广告浮窗@ddgksf2013
^https?:\/\/api\.bilibili\.com\/pgc\/activity\/deliver\/material\/receive url reject-dict
# ～ BiliBili_哔哩哔哩_屏蔽IP请求@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/resource\/ip url reject
# ～ BiliBili_哔哩哔哩_屏蔽DefaultWord@ddgksf2013
^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.interface\.v1\.Search\/Default url reject
# ～ BiliBili_哔哩哔哩_屏蔽首页右上活动@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/resource\/top\/activity url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_观影页面去广告@ddgksf2013
^https?:\/\/api\.(bilibili|biliapi)\.(com|net)\/pgc\/page\/cinema\/tab\? url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_应用开屏去广告@bm7
^https://app.bilibili.com/x/v2/splash/show url reject-dict
# ～ BiliBili_哔哩哔哩_应用开屏广告预加载@yjqiang
^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_热搜发现@ddgksf2013
^https://app.bilibili.com/x/v2/search/square url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_Defaultword@ddgksf2013
^https://app.bilibili.com/x/v2/search/defaultwords url reject-dict
# ～ BiliBili_哔哩哔哩_Material_Ad@ddgksf2013
^https?:\/\/api\.bilibili\.com\/x\/vip\/ads\/material\/report url reject-dict
# ～ BiliBili_哔哩哔哩_小卡片广告@ddgksf2013
^https://api.bilibili.com/pgc/season/player/cards url reject-dict
# ～ BiliBili_哔哩哔哩_漫画去广告@ddgksf2013
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/(Flash|ListFlash|GetActivityTab) url reject-dict
# ～ BiliBili_哔哩哔哩_推荐去广告@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_追番去广告@ddgksf2013
^https?:\/\/api\.(bilibili|biliapi)\.(com|net)\/pgc\/page\/bangumi url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_直播去广告@bm7
^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_标签页处理@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_我的页面处理@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_UP主推荐广告[适配ipad端]@app2smile@ddgksf2013
^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.view\.v1\.View\/View$ url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto.js
# ～ BiliBili_哔哩哔哩_动态页面去广告@app2smile@kokoryh@ddgksf2013
^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.dynamic\.v2\.Dynamic\/DynAll$ url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto.js
# ～ BiliBili_哔哩哔哩_启动时开启直连模式[自行启用]@ddgksf2013
;^https?:\/\/app\.bilibili\.com\/x\/resource\/domain url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_startup_direct.js
# ～ BiliBili_哔哩哔哩_繁体CC字幕转中文简体[自行启用hostname=aisubtitle.hdslb.com,i0.hdslb.com]@ddgksf2013
;^https?:\/\/.*\.hdslb\.com\/bfs\/subtitle\/.+\.json url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_cc.js
# ～ BiliBili_哔哩哔哩_去除统一设置的皮肤[注释留存]@ddgksf2013
;^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\? url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
#解锁4K清晰度
^http[s]?:\/\/((app)|(passport)|(api))\.bilibili\.com\/x\/.*(account\/mine\?|passport-login|vip|show\/tab|account\/myinfo\?).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/BLBLVIP.js
^http[s]?:\/\/((app)|(passport)|(api))\.bilibili\.com\/(bilibili|x\/v2|x\/vip|x\/resource|x\/passport).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/BZTK.js
hostname=-broadcast.chat.bilibili.com, -*cdn*.biliapi.net, -*tracker*.biliapi.net, app.bilibili.com, api.live.bilibili.com, *.bilibili.com, *.bilibili.*, grpc.biliapi.net,*biliapi.net,*.biliapi.*
