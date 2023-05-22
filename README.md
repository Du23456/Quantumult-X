# Quantumult-X
#重写V2.0
#更新时间   2023年5月10号

# > 58
^https?:\/\/.+?\.58cdn\.com\.cn\/brandads\/ url reject-200
^https?:\/\/app\.58\.com\/api\/home\/invite\/popupAdv url reject-200
^https?:\/\/app\.58\.com\/api\/home\/(advertising|appadv)\/ url reject
^https?:\/\/app\.58\.com\/api\/log\/ url reject
#####4⃣️#####
^https?:\/\/pic\d\.ajkimg\.com\/mat\/\w+\?imageMogr\d\/format\/jpg\/thumbnail\/\d{3}x\d{4}$ url reject
#hostname= *.58cdn.com.cn,app.58.com, *.ajkimg.com

# > 爱奇艺
^https?:\/\/iface\.iqiyi\.com\/api\/getNewAdInfo url reject
^https?:\/\/intl\.iqiyi\.com\/ad_external\/ url reject
^https?:\/\/intl\.iqiyi\.com\/video\/advertise url reject
^https?:\/\/act\.vip\.iqiyi\.com\/interact\/api\/show\.do url reject-200
^https?:\/\/act\.vip\.iqiyi\.com\/interact\/api\/v2\/show url reject-200
^https?:\/\/iface\.iqiyi\.com\/api\/getNewAdInfo url reject-200
^https?:\/\/iface2\.iqiyi\.com\/fusion\/3\.0\/fusion_switch url reject-img
^http:\/\/static-s\.iqiyi\.com\/common\/.+\/Small_video\/a2\/af\/.+\.png url reject
^http:\/\/msga/.cupid/.iqiyi/.com\/scp2\.gif url reject
https?:\/\/ssports\.iqiyi\.com/app\/ url reject
https?:\/\/ssports\.iqiyi\.com/json\/shop\/shopInfo url reject
https?:\/\/.+\.iqiyi\.com\/videos\/other\/20$ url reject
https?:\/\/static\.iqiyi\.com\/js\/common\/.+\.js url reject
https?:\/\/t7z\.cupid\.iqiyi\.com\/show url reject
^https?:\/\/u\d\.iqiyipic\.com\/image\/[\w\/]+\/oad_ url reject
^http:\/\/.+\.iqiyipic\.com\/image\/.+\/ad\/.+\.jpg url reject
https?:\/\/.+\.iqiyipic\.com\/image\/20*_100000 url reject
#####3⃣️#####
^https?:\/\/.*cupid\.iqiyi\.com\/mixer\? url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/iqiyi_open_ads.js
#####1⃣️#####
(^https?:\/\/m\.iqiyi\.com\/v_.*) url 307 https://z1.m1907.cn/?jx=$1
#hostname=iface.iqlyl.com,intl.igiyi.com,act.vip.iqiyi.com,iface2.iqiyi.com,static-s.iqiyi.com,msga.cupid.iqiyi.com,ssports.igiyi.com,*.igiyi.com,t7z.cupid.iqiyi.com,u*iqiyipic.com, m.iqiyi.com, *.iqiyipic.com

# > 爱思助手
^https?:\/\/list-app-m\.i4\.cn\/getopfstadinfo\.xhtml url reject
# hostname=list-app-m.i4.cn

# > 百度
^https?:\/\/fcvbjbcebos.baidu.com\/.+.mp4 url reject
^https?:\/\/cover.baidu.com\/cover\/page\/dspSwitchAds\/ url reject
^https?:\/\/baichuan.baidu.com\/rs\/adpmobile\/launch url reject
^https?:\/\/baichuan\.baidu\.com\/rs\/adpmobile\/launch url reject-img
^https?:\/\/api\d\.tuisong\.baidu\.com url reject-img
^https?:\/\/afd.baidu.com\/afd\/entry url reject
^https?:\/\/mobads\.baidu\.com\/cpro\/ui\/mads.+ url reject
(ps|sv|offnavi|newvector|ulog.imap|newloc)(.map)?.(baidu|n.shifen).com url reject
^https?:\/\/issuecdn\.baidupcs\.com\/issue\/netdisk\/guanggao\/ url reject-200
^https?:\/\/[\s\S]*\.baidu\.com/.*?ad[xs]\.php url reject-img
^https?:\/\/afd\.baidu\.com\/afd\/entry url reject-img
^https?:\/\/als.baidu.com\/clog\/clog url reject
^https?:\/\/fcvbjbcebos\.baidu\.com\/.+?\.mp4 url reject-img
^https?:\/\/t\d{2}\.baidu\.com url reject-img
^https?:\/\/update\.pan\.baidu\.com\/statistics url reject
^https?:\/\/log.+?baidu\.com url reject
^https?:\/\/sa\d\.tuisong\.baidu\.com url reject-img
^https?:\/\/www.baidu.com\/?action=static&ms=1&version=css_page_2@0.*? url 
#hostname=fcvbjbcebos.baidu.com, cover.baidu.com, baichuan.baidu.com, apid.tuisong.baidu.com, afd.baidu.com, mobads.baidu.com, issuecdn.baidupcs.com, *.baidu.com, als.baidu.com, td.baidu.com, update.pan.baidu.com, log.*baidu.com, sad.tuisong.baidu.com, www.baidu.com

# > 百度网盘
^https?:\/\/pan\.baidu\.com\/rest\/\d\.\d\/pcs\/adx url reject
^https?:\/\/pan\.baidu\.com\/act\/api\/activityentry url reject
^https?:\/\/issuecdn\.baidupcs\.com\/issue\/netdisk\/guanggao url reject
^https?:\/\/update.pan.baidu.com\/statistics url reject
^https:\/\/pan\.baidu\.com\/pmall\/order\/privilege\/info url reject
^https:\/\/pan\.baidu\.com\/rest\/.+\/pcs\/adx url reject
^https:\/\/pan\.baidu\.com\/api\/useractivity\/activity url reject
^http:\/\/pan\.baidu\.com\/act\/.+\/bchannel\/list url reject
^https:\/\/pan\.baidu\.com\/api\/certuser\/get url reject
^https:\/\/ndstatic\.cdn\.bcebos\.com\/activity\/welfare\/js\/.+\.js url reject
^https:\/\/ndstatic\.cdn\.bcebos\.com\/activity\/welfare\/index\.html url reject
^https:\/\/staticsns\.cdn\.bcebos\.com\/amis\/.+/banner.png url reject
^http:\/\/rp\.hpplay\.cn\/logouts url reject
^https:\/\/pan\.baidu\.com\/component\/view\/(1510|1130)\?vip url reject
#####5⃣️#####
^https:\/\/sofire\.baidu\.com\/ios\/.+ url reject
#^https:\/\/issuecdn\.baidupcs\.com\/issue\/netdisk\/ts_ad\/guanggao\/.+ url reject
https:\/\/issuecdn\.baidupcs\.com\/issue\/netdisk\/ts_ad\/ url reject
https:\/\/pan\.baidu\.com\/rest\/2.0\/pcs\/adv\? url reject
# https://pan\.baidu\.com\/act\/api\/activityentry\? - reject
#####3⃣️#####
^https?:\/\/pan\.baidu\.com\/act\/v\d\/(bchannel|welfare)\/list url reject
#####2⃣️#####
^https?:\/\/pan\.baidu\.com\/act\/v\d\/welfare\/list url reject-200
#####1⃣️#####
#百度网盘解锁vip，视频倍速播放    
^https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user url script-response-body https://qxnav.com/rules/QuantumultX/js/backup/js/bdcloud.js
#hostname=pan.baidu.com,issuecdn.baidupcs.com,ndstatic.cdn.bcebos.com,staticsns.cdn.bcebos.com,rp.hpplay.cn,sofire.baidu.com

# > 必胜客
^https?:\/\/res\.pizzahut\.com\.cn\/CRM\/phad\/apphome\/apphome url reject
#####7⃣️#####
# > 必胜客 微信小程序净化
^https:\/\/res\.pizzahut\.com\.cn\/CRM url reject-dict
#hostname=res.pizzahut.com.cn

# > 贝壳
^https?:\/\/apps\.api\.ke\.com\/config\/config\/(bootpage|getactivityconfig) url reject-200
^https?:\/\/app\.api\.ke\.com\/config\/config\/bootpage url reject
#hostname=apps.api.ke.com, app.api.ke.com

# > 斗鱼直播
^https?:\/\/staticlive.douyucdn.cn\/.+\/getStartSend url reject
^https?:\/\/staticlive.douyucdn.cn\/upload\/signs\/ url reject
^https?:\/\/douyucdn.cn\/.+\/appapi\/getinfo url reject
^https?:\/\/rtbapi\.douyucdn\.cn\/japi\/sign\/app\/getinfo url reject-200
^https?:\/\/capi.douyucdn.cn\/lapi\/sign\/app(api)?\/getinfo\?client_sys=ios url reject
^https?:\/\/capi\.douyucdn\.cn\/api\/ios_app\/check_update url reject-img
^https?:\/\/capi\.douyucdn\.cn\/api\/v1\/getStartSend?client_sys=ios url reject-img
^https?:\/\/douyucdn\.cn\/.+?\/appapi\/getinfo url reject-img
^https?:\/\/staticlive\.douyucdn\.cn\/.+?\/getStartSend url reject-img
^https?:\/\/staticlive\.douyucdn\.cn\/upload\/signs\/ url reject-img
#hostname=staticlive.douyucdn.cn, douyucdn.cn, rtbapi.douyucdn.cn, capi.douyucdn.cn

# > 东方财富
^https?:\/\/emdcadvertise\.eastmoney\.com\/infoService\/v2 url reject-200
#hostname=emdcadvertise.eastmoney.com

# > 滴滴出行
https?://res\.xiaojukeji\.com\/resapi\/activity\/mget url reject-dict
https?:\/\/res\.xiaojukeji\.com\/resapi\/activity\/get(Ruled|Preload|PasMultiNotices) url reject
# > 滴滴
^https?:\/\/img-ys011\.didistatic\.com\/static\/ad_oss\/.*.jpg url reject
# 微信小程序个人中心净化 由TEXAS和豆豆提供
^https:\/\/common\.diditaxi\.com\.cn\/common\/v5 url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/scripts/didi.js
# > 滴滴青桔
^https?:\/\/pt-starimg\.didistatic\.com\/static\/starimg\/node\/.*.(jpg|png|gif) url reject-200
^https?:\/\/omgup[0-9]{1}\.xiaojukeji\.com\/api url reject-200
^https?:\/\/omgup*\.xiaojukeji\.com\/api url reject-200
#####7⃣️#####
# > 滴滴打车 小程序净化 感谢#豆豆分享
^https:\/\/conf\.diditaxi\.com\.cn\/homepage\/v1\/core url reject-dict
#hostname=res.xiaojukeji.com, img-ys011.didistatic.com,common.diditaxi.com.cn, pt-starimg.didistatic.com,omgup*.xiaojukeji.com,conf.diditaxi.com.cn

# > 得物
^https:\/\/app\.dewu\.com\/api\/v1\/app\/advertisement url reject
^https?:\/\/cdn\.poizon\.com\/node-common\/.*.jpg url reject-200
#hostname=app.dewu.com,cdn.poizon.com

# > 大众点评
^https?:\/\/img\.meituan\.net\/dpmobile\/.*.(gif|jpg) url reject-200
#hostname=img.meituan.net

# > 饿了么
^https:\/\/(nr-op|cube)\.elemecdn\.com\/.+\.jpeg\?x-oss-process=image\/resize,m_fill,w_\d{4,},h_\d{4,}\/($|format,webp\/$) url reject
^https?:\/\/elemecdn.com\/.+\/sitemap url reject
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/640\/h\/\d{3,4} url reject
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/750\/h\/\d{3,4} url reject
^https?:\/\/fuss10\.elemecdn\.com\/.+?\.mp4 url reject-img
^https?:\/\/cube\.elemecdn\.com\/[\w\/]+\.jpeg\?x-oss-process=image\/resize,m_fill,w_1\d{3},h_2\d{3}\/format,webp\/ url reject
^https?:\/\/cube\.elemecdn\.com\/[\w\/]+\.jpeg\?x-oss-process=image\/resize,m_fill,w_6\d{2},h_8\d{2}\/format,webp\/ url reject
^https?:\/\/cube\.elemecdn\.com\/[\w\/]+\.jpeg\?x-oss-process=image\/resize,m_fill,w_\d{3},h_\d{4}\/format,webp\/ url reject
^https?:\/\/cube\.elemecdn\.com\/\w\/\w{2}\/\w+mp4\.mp4\? url reject
^https?:\/\/elemecdn\.com\/.+?\/sitemap url reject-img
^https?:\/\/www1\.elecfans\.com\/www\/delivery\/ url reject
#####4⃣️#####
^https?:\/\/i\.ys7\.com\/api\/ads url reject
#hostname=elemecdn.com,fuss10.elemecdn.com,cube.elemecdn.com,www1.elecfans.com,i.ys7.com

# > 飞常准
^https?:\/\/app\.variflight\.com\/ad\/ url reject
^https?:\/\/app\.variflight\.com\/v\d\/advert\/ url reject
#hostname= app.variflight.com

# > 工商银行
#^https?:\/\/v\.icbc\.com\.cn\/userfiles\/Resources\/WAP\/advertisement\/ url reject-200
# > 工银E生活
^https?:\/\/pv\.elife\.icbc\.com\.cn\/OFSTPV\/utm\.gif url reject-200
# > 工银e生活小程序 有需要自己添加主机名：
^https?:\/\/elife\.icbc\.com\.cn\/OFSTNEWBASE\/floorinfo\/getMantlePages\.do url reject-200
#####2⃣️#####
^https?:\/\/v\.icbc\.com\.cn\/userfiles\/Resources\/WAP\/advertisement.*$ url reject
#hostname=v.icbc.com.cn, pv.elife.icbc.com.cn, elife.icbc.com.cn

# > 谷歌
^https?:\/\/.+\.googleapis.com/.+ad_break url reject-img
^https?:\/\/.+\.googleapis.com/.+log_event url reject-img
^https?:\/\/.+\.googleapis.com/adsmeasurement url reject-img
^https?:\/\/pagead2\.googlesyndication\.com\/pagead\/ url reject-img
# ^https?:\/\/[\w-]+\.googlevideo\.com\/.+&(oad|ctier) url reject
# ^https?:\/\/.+\.googlevideo\.com\/videogoodput url reject-img
# ^https?:\/\/.+?\.googlevideo\.com\/ptracking\?pltype=adhost url reject-img
# ^https?:\/\/.+\.googlevideo\.com\/.+oad= url reject-img
# ^https?:\/\/.+\.googlevideo\.com\/ptracking url reject-img
#hostname=*.googleapis.com,pagead2.googlesyndication.com, *.googlevideo.com

# > 虎牙直播
^https?:\/\/business\.msstatic\.com\/advertiser\/ url reject-200
^https?:\/\/cdnfile1\.msstatic\.com\/cdnfile\/appad\/ url reject-img
#####2⃣️#####
^http?:\/\/business\.msstatic\.com\/advertiser\/material url reject-dict
#hostname=business.msstatic.com, cdnfile1.msstatic.com

# > 航旅纵横
^https?:\/\/discardrp\.umetrip\.com\/gateway\/api\/umetrip\/native url reject-200
#hostname=discardrp.umetrip.com

# > 交管12123
^https:\/\/gab\.122\.gov\.cn\/eapp\/m\/sysquery\/adver$ url reject
^https:\/\/gab\.122\.gov\.cn\/eapp\/m\/sysquery url reject
#hostname= gab.122.gov.cn

# > 京东
^https?:\/\/m15\.360buyimg\.com\/mobilecms\/jfs\/t1\/202220\/24\/21575\/134711\/625b821bE5d642d73\/77636692989bd2be\.jpg url reject
^https?:\/\/m\.360buyimg\.com\/mobilecms\/s1125x2436_jfs\/t1\/96405\/17\/28473\/168578\/625cd144E7997a990\/8233ce8a10c4e463\.jpg url reject
^https?:\/\/m\.360buyimg\.com\/mobilecms\/s1125x2436_jfs\/t1\/182114\/23\/23904\/121433\/62593c9cEd77c4519\/2e3f4c518b771094\.jpg url reject
^https?:\/\/m\.360buyimg\.com\/mobilecms\/s1125x2436_jfs\/t1\/202971\/34\/26906\/282671\/6319c862E1818d3fa\/0597464cf6bc8e2f\.jpg url reject
^https?:\/\/m\.360buyimg\.com\/mobilecms\/s1125x2436_jfs\/t1\/143222\/27\/29233\/141967\/631b1f8cE3a112e54\/d3fe0b2f9f0a9f30\.jpg url reject
^https?:\/\/m\.360buyimg\.com\/mobilecms\/s1125x2436_jfs url reject
^https?:\/\/m15\.360buyimg\.com\/mobilecms\/jfs\/t1\/197429\/22/22400\/119193\/62562ef0Eff59b4d4 url reject
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=start$ url reject-array
^https?://union.click.jd.com/jda? url request-header ^(.+?\s).+?(\s[\s\S]+?Host:).+?(\r\n) request-header $1/jda?adblock=$2union.click.jd.com$3
^https?://union.click.jd.com/sem.php? url request-header ^(.+?\s).+?(\s[\s\S]+?Host:).+?(\r\n) request-header $1/sem.php?adblock=$2union.click.jd.com$3
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/(aladdin\/na\/m\/getLoadingPicture|aladdin\/na\/m\/getLoadingPicture) url reject
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/aladdin\/na\/m\/getLoadingPicture url reject
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/base\/(new)?na\/m\/adInfo url reject
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/base\/na\/m\/adInfo url reject
^https?:\/\/bdsp-x\.jd\.com\/adx\/ url reject
^https?:\/\/api\.m\.jd.com\/client\.action\?functionId=(start|queryMaterialAdverts) url reject
^https?:\/\/(bdsp-x|dsp-x)\.jd\.com\/adx\/ url reject
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=start$ url reject-200
^https?:\/\/img\d+\.360buyimg\.com\/jddjadvertise\/ url reject
^https?:\/\/m15\.360buyimg\.com\/mobilecms\/jfs\/t1\/197429\/22\/22400\/119193\/62562ef0Eff59b4d4 url reject
^https?:\/\/m15\.360buyimg\.com\/mobilecms\/jfs\/t1\/220846\/5\/16214\/41327 url reject
^https?:\/\/m15\.360buyimg\.com\/mobilecms\/jfs\/t1\/202818 url reject
^https?:\/\/storage\.360buyimg\.com\/kepler-app url reject-img
^https?:\/\/m\.360buyimg\.com\/mobilecms\/s640x1136_jfs\/ url reject-img
#####5⃣️#####
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=start$ url reject-array
#hostname=m15.360buyimg.com,m.360buyimg.com,api.m.jd.com,union.click.jd.com,ms.jr.jd.com,bdsp-x.jd.com,dsp-x.jd.com,img*.360buyimg.com,storage.360buyimg.com

# > 今日头条
^https:\/\/p\d.pstatp.com\/origin url reject
^https:\/\/pb\d.pstatp.com\/origin url reject
#hostname=*.pstatp.com

# > 快手
^https:\/\/open\.e\.kuaishou\.com\/rest\/e\/v3\/open\/univ$ url reject
#hostname=open.e.kuaishou.com

# > 肯德基
^https?:\/\/res\.kfc\.com\.cn\/CRM\/kfcad\/apphome5\/apphome url reject-200
^https?:\/\/res\.kfc\.com\.cn\/CRM\/kfcad\/apphome6\/\w+\.json\? url reject-dict
#####7⃣️#####
# > 肯德基 微信小程序净化
^https:\/\/orders\.kfc\.com\.cn\/preorder-portal\/api\/v2\/coupon url reject-dict
^https:\/\/dynamicad\.kfc\.com\.cn\/api url reject-dict
^https:\/\/res\.kfc\.com\.cn\/CRM\/kfcad\/custom_v2\/wxapp url reject-dict
^https:\/\/orders\.kfc\.com\.cn\/preorder-portal\/api\/v2\/activity url reject-dict
#####3⃣️#####
^https?:\/\/res.kfc.com.cn\/advertisement\/ url reject
#hostname=res.kfc.com.cn, orders.kfc.com, dynamicad.kfc.com

# > 美团
^https?:\/\/img\.meituan\.net\/(?>adunion|display|midas)\/.+?\.(gif|jpg|jpg\.webp)$ url reject-200
^https?:\/\/p\d\.meituan\.net\/wmbanner\/[A-Za-z0-9]+?\.jpg url reject-200
^https?:\/\/p\d\.meituan\.net\/movie\/[A-Za-z0-9]+?\.jpg\?may_covertWebp url reject-200
^https?:\/\/s3plus\.meituan\.net\/.+?\/linglong\/ url reject
^https?:\/\/s3plus\.meituan\.net\/v1\/mss_a002 url reject-img
^https?:\/\/www\.meituan\.com\/api\/v\d\/appstatus\? url reject
^https?:\/\/wmapi\.meituan\.com\/api\/v\d+\/loadInfo\? url reject
^https?:\/\/wmapi\.meituan\.com\/api\/v\d\/startpicture url reject
^https?:\/\/flowplus\.meituan\.net\/v\d\/\w+\/linglong\/\d+\.(gif|jpg|mp4) url reject
^https?:\/\/(s3plus|flowplus)\.meituan\.net\/v\d\/\w+\/linglong\/\w+\.(gif|jpg|mp4) url reject
^https?:\/\/apimobile\.meituan\.com\/appupdate\/mach\/checkUpdate? url reject
^https?:\/\/img\.meituan\.net\/(adunion|display|midas)\/\w+\.(gif|jpg|jpg\.webp)$ url reject
^https?:\/\/p\d.meituan.net\/movie\/.*?\?may_covertWebp url reject-img
^https?:\/\/p\d{1}\.meituan\.net\/(adunion|display|mmc|wmbanner)\/ url reject
# > 美团外卖
^https?:\/\/wmapi\.meituan\.com\/api\/v7\/startpicture url reject-200
^https?:\/\/img\.meituan\.net\/bizad\/.*.jpg url reject-200
#####3⃣️#####
^https?:\/\/peisongapi\.meituan\.com\/client\/getInitiateImage url reject
^https?:\/\/p\d\.meituan\.net\/(bizad|wmbanner)\/\w+\.jpg url reject
^https?:\/\/img\.meituan\.net\/(bizad|brandCpt)\/\w+\.(png|jpg) url reject
^https?:\/\/.*\.meituan\.com\/api\/v\d\/(openscreen\?ad|appstatus\?ad|loadInfo\?|startpicture) url reject
^http:\/\/s3plus\.meituan\.net\/.*\/brandcpt-vedio\/.*\?time url reject
#hostname=img.meituan.net,p*.meituan.net,s3plus.meituan.net,www.meituan.com,wmapi.meituan.com,flowplus.meituan.net,apimobile.meituan.com,peisongapi.meituan.com

# > 美团众包
^https?:\/\/peisongapi\.meituan\.com\/client\/getInitiateImage url reject-200
#hostname=peisongapi.meituan.com

# > 芒果TV
^https?:\/\/pcvideoyd\.titan\.mgtv\.com\/pb\/ url reject-img
#####2⃣️#####
^https?:\/\/nuc\.api\.mgtv.com\/Logout url reject-200
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/ url reject-200
^https?:\/\/sf3-fe-tos\.pglstatp-toutiao\.com\/obj\/ad-pattern\/renderer\/package\.json url reject-200
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/server_bidding\/pre_fetch\/ url reject-200
&src\=mgtv&suuid\=.*&testversion\=&ticket\=[A-Z0-9]{32} url 302 &src=mgtv&suuid=430bab112551f8b3d4b1fa60b3576f4d&testversion=&ticket=D8DBDC5C65D535DABAAE6484AEB7A90C
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/stats\/batch\/ url reject-200
^https?:\/\/mob\.bz\.mgtv\.com\/odin\/c1\/channel\/ads\?_ url reject-200
^https?:\/\/mobile\.da\.mgtv\.com\/json\/app\/bdboot url reject-200
^https?:\/\/mobile\.api\.mgtv\.com\/mobile\/config\?_support url reject-200
^https?:\/\/sf3-fe-tos\.pglstatp-toutiao\.com\/obj\/ad-pattern\/renderer\/ url reject-200
#hostname=pcvideoyd.titan.mgtv.com,nuc.api.mgtv.com,api-access.pangolin-sdk-toutiao.com,sf3-fe-tos.pglstatp-toutiao.com,mob.bz.mgtv.com,mobile.da.mgtv.com,mobile.api.mgtv.com

# > 麦当劳
^https?:\/\/api\.mcd\.cn\/bff\/portal\/home\/splash url reject-200
#####7⃣️#####
# > 麦当劳 微信小程序净化
^https:\/\/api\.mcd\.cn\/bff\/portal\/home\/hotActivity url reject-dict
#hostname=api.mcd.cn, img.mcd.cn

# > 农业银行 #开屏广告
^https?:\/\/enjoy\.cdn-static\.abchina\.com\/yx-engine-web\/file\/download\/(9ce31|1bf6e) url reject-200
^https?:\/\/enjoy\.cdn-static\.abchina\.com\/yx-engine-web\/file\/download\/6bd18.*? url reject-200
#hostname=enjoy.cdn-static.abchina.com

# > 拼多多
^https?:\/\/api\.(pinduoduo|yangkeduo)\.com\/api\/cappuccino\/splash url reject
# 多多买菜 # 开屏广告 感谢@豆豆分享
^https:\/\/mobile\.yangkeduo\.com\/proxy\/api\/api\/express\/post\/waybill\/red_packet\/goods_list$ url response-body "list":\[.+\] response-body "list":[]
#hostname=api.pinduoduo.com,mobile.yangkeduo.com

#qq空间广告屏蔽
#####5⃣️#####
^http:\/\/c\.gdt\.qq\.com\/gdt_clickwap\.fcg\?viewid url reject
^http:\/\/pgdt\.gtimg\.cn\/gdt\/0\/.+\.jpg url reject
^http:\/\/v\.gdt\.qq\.com\/gdt_stats\.fcg\?viewid url reject
^http:\/\/rpt\.gdt\.qq\.com\/creative_view\?viewid url reject
^http:\/\/pgdt\.gtimg\.cn\/gdt\/.+\.png url reject
^http:\/\/pgdt\.gtimg\.cn\/gdt\/.+\.jpg url reject
^http:\/\/pgdt\.gtimg\.cn\/.+\/snscosdownload\/SH\/reserved\/.+ url reject
#hostname=c.gdt.qq.com, pgdt.gtimg.cn, v.gdt.qq.com, rpt.gdt.qq.com

# > 全民K歌
^https?:\/\/y\.gtimg\.cn\/music\/common\/\/upload\/kg_ad\/.+?\d{3,4}x\d{4} url reject-200
#hostname=y.gtimg.cn

# > 青桔 微信小程序净化
^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=cms\.htw\.delivery url reject-dict
^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=hm\.fa\.combineHomepageInfo url reject-dict
^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=hm\.fa\.mallRecommend url reject-dict
^https:\/\/htwkop\.xiaojukeji\.com\/gateway\?api=hm\.fa\.homeConfig url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/scripts/qingju.js

# > 同花顺
^https?:\/\/adm\.10jqka\.com\.cn\/interface\/ad\/recommend url reject-200
# 同花顺至尊版 感谢@梭哈 All in分享
^https:\/\/stat\.10jqka\.com\.cn\/q\?ld=mobile&id=ad url reject-dict

# > 腾讯QQ音乐
^https:\/\/us\.l\.qq\.com\/exapp url reject
^https?:\/\/y\.gtimg\.cn\/music\/common\/upload\/t_splash_info\/ url reject
^https?:\/\/.+?\/music\/common\/upload\/t_splash_info\/ url reject
^https?:\/\/y\.gtimg\.cn\/music\/common\/\/upload\/kg_ad/.*?\d{4}\.jpg url reject-img
^https?:\/\/y\.gtimg\.cn\/music\/common\/upload\/targeted_ads url reject-img
^https?:\/\/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/music\/common\/upload\/t_splash_info\/ url reject

# > 腾讯广告
^https?:\/\/btrace\.qq\.com url reject-200
^https?:\/\/api2\.helper\.qq\.com\/game\/buttons url reject-img
^https?:\/\/\w+\.beacon\.qq\.com url reject
^https?:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg url reject
^https?:\/\/lives\.l\.qq\.com\/livemsg\?sdtfrom= url reject-img
^https?:\/\/imgcache\.qq\.com\/qqlive\/ url reject-img
^https?:\/\/mtteve\.beacon\.qq\.com\/analytics url reject-img
^https?:\/\/vv\.video\.qq\.com\/getvmind\? url reject-200
^https?:\/\/ssl\.kohsocialapp\.qq\.com:10001\/game\/buttons url reject-200
^https?:\/\/qt\.qq\.com\/lua\/mengyou\/get_splash_screen_info url reject-200
^https?:\/\/3gimg\.qq\.com\/tencentMapTouch\/app\/activity\/ url reject-200
^https?:\/\/3gimg\.qq\.com\/tencentMapTouch\/splash\/ url reject-200
^https?:\/\/.+?\.l\.qq\.com url reject
^https?:\/\/\w+\.gdt\.qq\.com url reject
^https?:\/\/y\.gtimg\.cn\/music\/.*?_Ad/\d+\.png url reject-img
^https?:\/\/splashqqlive\.gtimg\.com\/website\/\d{6} url reject-img
^https?:\/\/qzonestyle\.gtimg\.cn\/qzone\/biz\/gdt\/mob\/sdk\/ios\/v2\/ url reject-img
^https?:\/\/discuz\.gtimg\.cn\/cloud\/scripts\/discuz_tips\.js url reject-img
^https?:\/\/bla\.gtimg\.com\/qqlive\/\d{6}.+?\.png url reject-img
^https?:\/\/mmgr\.gtimg\.com\/gjsmall\/qiantu\/upload\/ url reject-img
^https?:\/\/mmgr\.gtimg\.com\/gjsmall\/qqpim\/public\/ios\/splash\/.+?\/\d{4}_\d{4} url reject-img

# > 腾讯视频
^https://news.l.qq.com\/app\? url reject
^https?:\/\/btrace.qq.com url reject-200
^https?:\/\/vv\.video\.qq\.com\/getvmind\? url reject-200
^http:\/\/.+/\?tk=9901afb195dcf9a34db6088a4a221dba38b3d980e4db86009f8a08be4d4099ee323f6e7f03b881db21133b1bf2ae5bc5 url reject
#^http:\/\/video\.dispatch\.tc\.qq\.com\/.+\.mp4 url reject
^http:\/\/.+\/vmind\.qqvideo\.tc\.qq\.com\/.+\.mp4 url reject
^http:\/\/wa\.gtimg\.com\/adxcdn\/.+\.jpg url reject
^https?:\/\/.+?\/omts.tc.qq.com\/ url reject
^https?:\/\/.+?\/variety.tc.qq.com\/ url reject
^https?:\/\/.+?\.tc\.qq\.com\/.+?_p20\d_ url reject
^https?:\/\/(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/.+?\.tc\.qq\.com\/.+?p201\.1\.mp4\? url reject-200
^https?:\/\/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/.+\.tc\.qq\.com\/.+p201\.1\.mp4\? url reject
^https?:\/\/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/[a-z.]+\.tc\.qq\.com\/[\w\W]+=v3004 url reject
^https?:\/\/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/[a-z.]+\.tc\.qq\.com\/[\w\W]+_p20\d url reject
^https?:\/\/[\s\S]*\/.+?\.tc\.qq\.com/.*?p201.1\.mp4 url reject-img
^https?:\/\/video\.dispatch\.tc\.qq\.com\/\w+\.p20\d\.1\.mp4 url reject
#####1⃣️#####
(^https?:\/\/m\.v\.qq\.com\/x\/(m\/)?play.*) url 307 https://z1.m1907.cn/?jx=$1

# > 微信 腾讯乘车码小程序
^https:\/\/ccmsupport-sz\.tenpay\.com\/cgi-bin\/common\/ccm_page_element.cgi url reject

# > 淘宝
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.taobao\.idle\.home\.welcome\/ url reject-200
^https?:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.tmall\.wireless url reject-200
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.advertisementservice\.getadv url reject-200
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimama\.etao\.config\.query\/ url response-body "ems_etao_advertise" response-body ""
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopadvertiseapi\.queryadvertise\/ url reject-200
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.o2o\.ad\.gateway\.get\/ url reject-200
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.trip\.activity\.querytmsresources\/ url reject-200
# 开屏广告
^https?:\/\/gw\.alicdn\.com\/imgextra\/i\d\/.+1125-1602\.jpg url reject-200
^https:\/\/heic\.alicdn\.com\/imgextra\/\w{2}\/[\w!]+-\d-tps-\d{3,4}-\d{4}\.jpg_(1\d{3}|9\d{2})x(1\d{3}|9\d{2})q[59]0\.jpg_\.heic$ url reject
^https:\/\/(heic|gw)\.alicdn\.com\/imgextra\/i\d\/.+-tps-(702-758|1125-1602)\.(heic|jpg|png) url reject-200

# > 唯品会
^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/activity\/advertisement\/get url reject-200
# APP+小程序弹窗广告
^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/layout\/productList\/eventData\/v url reject-200
# 右下角悬浮窗，需手动关闭广告一次
^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/activity\/coupon\/float_entrance\/get\?api_key url reject-200
#####3⃣️#####
https://b.appsimg.com/upload/momin/ url reject
https://mapi.appvipshop.com/vips-mobile/rest/activity/advertisement/get url reject
^https:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/iosAdInfo\/report url reject

# > 携程
^https?:\/\/m\.ctrip\.com\/restapi\/soa2\/13916\/scjson\/tripAds url reject-200
^https:\/\/mbd\.baidu\.com\/newspage\/api\/getmobads\?page\=landingshare url reject
#####5⃣️#####
^https:\/\/ma-adx\.ctrip\.com\/_ma\.gif url reject
^https:\/\/m\.ctrip\.com\/restapi\/.+\/json\/tripAds url reject
^https:\/\/m\.ctrip\.com\/html5\/webresource\/js\/iscroll\.js$ url reject
#####7⃣️#####
# > 携程旅行 微信小程序净化
^https:\/\/m\.ctrip\.com\/restapi\/soa2\/13916\/tripAds url reject-dict
^https:\/\/m\.ctrip\.com\/restapi\/soa2\/12673\/queryWeChatHotEvent url reject-dict
^https:\/\/m\.ctrip\.com\/restapi\/soa2\/13012\/getWaterflowInfo url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/scripts/T3.js

# > 闲鱼 此域名以无法MITM：gw.alicdn.com
^https?:\/\/gw\.alicdn\.com\/tfs\/.+?\d{4}-\d{4}\/[a-z]{3}$ url reject-200
^https?:\/\/gw\.alicdn\.com\/tfs\/TB1.+?750-\d{4} url reject-200
^https?:\/\/heic\.alicdn\.com\/tps\/i4\/.+?\.jpg_1200x1200q90\.jpg_\.heic$ url reject-200
^https?:\/\/asp\.cntv\.myalicdn\.com\/.+?\?maxbr=850 url reject-200
^https?:\/\/(?>heic|gw)\.alicdn\.com\/tfs\/TB1.+?-\d{4}-\d{4}\.jpg_1200x1200q90\.jpg_\.\w{3,4}$ url reject-200
^https?:\/\/(gw|heic)\.alicdn\.com\/\w{2}s\/[\w\/.-]+\.jpg_(9\d{2}|\d{4}) url reject
^https?:\/\/(gw|heic)\.alicdn\.com\/imgextra\/\w{2}\/[\w!]+-\d-tps-\d{3,4}-\d{4}\.jpg_(1\d{3}|9\d{2})x(1\d{3}|9\d{2})q\d0\.jpg_\.(heic|webp)$ url reject
^https?:\/\/(gw|heic)\.alicdn\.com\/imgextra\/.+\d{4}-\d{4}\.jpg_(9\d{2}|\d{4}) url reject
^https:\/\/gw.alicdn.com\/mt\/ url reject
^https:\/\/gw.alicdn.com\/tfs\/.+\d{3,4}-\d{4} url reject

# > 小米
^https?:\/\/api\.m\.mi\.com\/v\d\/app\/start url reject-200
^https?:\/\/api\.jr\.mi\.com\/v\d\/adv\/ url reject-200
^https?:\/\/api\.jr\.mi\.com\/jr\/api\/playScreen url reject-200
^https?:\/\/api-mifit.+?\.huami\.com\/discovery\/mi\/discovery\/.+?_ad\? url reject-200
^https?:\/\/home\.mi\.com\/cgi-op\/api\/v\d\/recommendation\/banner url reject
^https?:\/\/(api-mifit|api-mifit-\w+)\.huami\.com\/discovery\/mi\/discovery\/\w+_ad\? url reject
^https?:\/\/api-mifit\.huami\.com\/discovery\/mi\/discovery\/homepage_ad\? url reject-img
^https?:\/\/api-mifit\.huami\.com\/discovery\/mi\/discovery\/sleep_ad\? url reject-img
^https?:\/\/api-mifit\.huami\.com\/discovery\/mi\/discovery\/sport_summary_ad\? url reject-img
^https?:\/\/api-mifit\.huami\.com\/discovery\/mi\/discovery\/sport_training_ad\? url reject-img
^https?:\/\/api-mifit\.huami\.com\/discovery\/mi\/discovery\/step_detail_ad\? url reject-img
^https?:\/\/api-mifit\.huami\.com\/discovery\/mi\/discovery\/training_video_ad\? url reject-img
# > 小米商城
^https?:\/\/api\.m\.mi\.com\/v1\/app\/start url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/weibo.js
# > 小米有品
^https:\/\/shopapi\.io\.mi\.com\/mtop\/mf\/resource\/homePage\/pageConfig url reject-200
# > 小米运动
^https:\/\/api-mifit-cn2\.huami\.com\/discovery\/mi\/cards\/startpage_ad url reject
# > 米家
^https:\/\/home\.mi\.com\/cgi-op\/api\/v1\/recommendation\/(banner|myTab)\? url reject-dict

# > 星巴克 微信小程序净化
#####7⃣️#####
^https:\/\/3pp\.starbucks\.com\.cn\/wxmem\/popup url reject-dict
^https:\/\/3pp\.starbucks\.com\.cn\/wxmem\/index\/banner url reject-dict
^https:\/\/3pp\.starbucks\.com\.cn\/wxmem\/index\/global url reject-dict

# > Youtube
#####4⃣️#####
^https?:\/\/api\.catch\.gift\/api\/v\d\/pagead\/ url reject
#####1⃣️#####
# YouTube去广告    系统大于iOS15     
# 仅去除首页瀑布流广告/播放页推荐列表广告(非贴片广告)
^https:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next)\? url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/youtube.js
# YouTube视频广告  
(^https?:\/\/[\w-]+\.googlevideo\.com\/(?!dclk_video_ads).+?)&ctier=L(&.+?),ctier,(.+) $1$2$3 302
^https?:\/\/[\w-]+\.googlevideo\.com\/(?!(dclk_video_ads|videoplayback\?)).+&oad url reject
^https?:\/\/youtubei\.googleapis\.com\/youtubei\/v\d\/player\/ad_break url reject
^https?:\/\/(www|s)\.youtube\.com\/api\/stats\/ads url reject
^https?:\/\/(www|s)\.youtube\.com\/(pagead|ptracking) url reject
^https?:\/\/s\.youtube\.com\/api\/stats\/qoe\?adcontext url reject
hostname= -redirector*.googlevideo.com,*.googlevideo.com,www.youtube.com,s.youtube.com,youtubei.googleapis.com


# > 有道词典
^https?:\/\/oimage([a-z])([0-9])\.ydstatic\.com\/.+adpublish url reject
^https?:\/\/oimage\w\d\.ydstatic\.com\/image\?.+?=adpublish url reject-img
^https?:\/\/dsp-impr2\.youdao\.com\/adload url reject-200
^https?:\/\/impservice\.dictapp\.youdao\.com\/imp\/request url reject-img
^https?:\/\/oral\.youdao\.com\/oral\/adInfo url reject-img
#####1⃣️#####
# 网易有道词典+解锁VIP     dict.youdao.com
^https:\/\/dict\.youdao\.com\/vip\/user\/status url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wyydcd.js


# > 招商银行
^https?:\/\/webappcfg\.paas\.cmbchina\.com\/v\d\/func\/getmarketconfig url reject-200

# > 中国银行
^https:\/\/mbs\.boc\.cn\/ubas-mgateway-static\/images\/advertType\/.+.jpg url reject-200
# > 中国银行 缤纷生活
^https?:\/\/mlife\.jf365\.boc\.cn\/AppPrj\/FirstPic\.do\?txnId=2PIC000001 url reject-200

# > 中国移动
^https?:\/\/client\.app\.coc\.10086\.cn\/biz-orange\/DN\/init\/startInit url reject-200
# 多个悬浮窗 感谢#热心网友分享
^https:\/\/(client\.app\.coc|h\.app\.coc|app)\.10086\.cn\/biz-orange\/DN\/emotionMarket url reject
# > 中国移动云盘
^https?:\/\/mcmm\.caiyun\.feixin\.10086\.cn:80\/mcmm\/api\/IAdvert url reject-200
^https?:\/\/mcmm\.caiyun\.feixin\.10086\.cn:80\/mcmm\/api\/v\d\/getAdverts url reject-200
^https?:\/\/middle\.yun\.139\.com\/openapi\/cardConfig\/queryCardInfoV3 url reject-200
^https:\/\/ad\.mcloud\.139\.com\/advertapi\/adv-filter\/adv-filter\/AdInfoFilter\/getAdInfos url reject-dict
#####4⃣️#####
^https?:\/\/clientaccess\.10086\.cn\/biz-orange\/DN\/init\/startInit url reject
^https?:\/\/wap\.js\.10086\.cn\/jsmccClient\/cd\/market_content\/api\/v\d\/market_content\.page\.query url reject
#####2⃣️#####
^https?:\/\/client\.app\.coc\.10086\.cn\/biz-orange\/DN\/explorePage\/getAdverList url reject-200

# > 中国联通
^https?:\/\/m\.client\.10010\.com\/uniAdmsInterface\/getWelcomeAd url reject-200
^https?:\/\/m\.client\.10010\.com\/mobileService\/(activity|customer)\/(accountListData|get_client_adv|get_startadv) url reject-img
^https?:\/\/m\.client\.10010\.com\/mobileService\/customer\/getclientconfig\.htm url reject-dict
^https?:\/\/m\.client\.10010\.com\/uniAdmsInterface\/(getHomePageAd|getWelcomeAd) url reject-img
^https?:\/\/[^(apple|10010)]+\.(com|cn)\/(a|A)d(s|v)?(\/|\.js) url reject-img
^https?:\/\/m1\.ad\.10010\.com\/noticeMag\/images\/imageUpload\/2\d{3} url reject-img
^https?:\/\/res\.mall\.10010\.cn\/mall\/common\/js\/fa\.js?referer= url reject-img

# > 中国电信
^https?:\/\/cloud\.189\.cn\/include\/splash\/ url reject
^https?:\/\/zt-app\.go189\.cn\/zt-app\/welcome\/.*?Animation url reject-img

# > 作业帮
^https?:\/\/syh\.zybang\.com\/com\/adx\/impress url reject-200

# > 字节跳动
^https?:\/\/.+/img\/ad\.union\.api\/ url reject-200
# ^https?:\/\/.+\.pstatp\.com\/img\/ad url reject-200
^https?:\/\/.+\.(amemv|musical|snssdk|tiktokv)\.(com|ly)\/(api|motor)\/ad\/ url reject-200
^https?:\/\/dsp\.toutiao\.com\/api\/xunfei\/ads\/ url reject-200
^https?:\/\/.+\.snssdk\.com\/motor\/operation\/activity\/display\/config\/V2\/ url reject-200
^https?:\/\/[\w-]+\.amemv\.com\/aweme\/v\d\/ad\/ url reject
^https?:\/\/[\w-]+\.snssdk\.com\/.+_ad\/ url reject
^https?:\/\/.+?\/img\/ad\.union\.api\/ url reject
^https?:\/\/.+\.amemv\.com\/.+app_log url reject-img
^https?:\/\/.+\.amemv\.com\/.+report url reject-img
^https?:\/\/.+\.amemv\.com\/.+stats url reject-img