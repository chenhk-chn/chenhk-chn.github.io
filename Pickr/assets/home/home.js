(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* 严格对齐 AppStore/metadata/1.1.0/*.json 与 Scripts/screenshots/copy-1.1.0.json */
  var COPY = {
    "zh-Hans": {
      "nav.aria": "主导航",
      "foot.aria": "页脚链接",
      "compare.aria": "切换原图与压缩示例",
      "compare.demo": "示例",

      "meta.title": "Pickr · 把相册厘清，为新回忆留出空间 | iPhone 与 iPad 照片整理工具",
      "meta.description": "拍下的日子，值得被好好安放。Pickr 帮你按月整理照片与视频，压缩前先对比，按地点重温旅途精选，整理时把想分享的片刻收进相册。已在 App Store 上架。",
      "nav.how": "按月整理",
      "nav.compression": "照片视频压缩",
      "nav.albums": "地点精选",
      "nav.slip": "免费与会员",
      "nav.faq": "常见问题",
      "nav.moreApps": "更多作品",
      "nav.langLabel": "语言",
      "nav.download": "下载",

      "hero.eyebrow": "适用于 iPhone 与 iPad",
      "hero.l1": "把相册厘清",
      "hero.l2": "为新回忆留出空间",
      "hero.support": "按月整理照片与视频，压缩大文件，按地点重温值得留下的片刻。",
      "hero.storeBtn": "在 App Store 下载",
      "hero.moreBtn": "了解工作方式",
      "hero.meta": "已在 App Store 正式上架 · 你的照片，由你决定",

      "ch1.eyebrow": "按月整理 · 整理时收集",
      "ch1.h1": "把相册整理到今天",
      "ch1.h2": "想分享的片刻，整理时就选好",
      "ch1.sub": "按月份回看照片与视频，挑选想留下的，标记准备删除的。每次整理一个月，随时停下，下次继续。",
      "ch1.t1a": "从最近的月份开始",
      "ch1.t1b": "随时停下，下次继续",
      "ch1.t1desc": "支持按月份、随机月份或专项整理视频与截图。想删除的照片先进入「待确认」，由你复核后再执行，不会因为一次滑动就立即删除。",
      "ch1.t2a": "点按「加入」收进相册",
      "ch1.t2b": "不必整理完再从头寻找",
      "ch1.t2desc": "整理照片时，把想发朋友圈、留作纪念或分享给朋友的照片顺手收进本机「我的相册」，选好后一键存为系统相簿，留待分享。",
      "ch1.s1n": "相似照片对比",
      "ch1.s1b": "连拍与同一角度的照片在本机自动归组，同屏比对对焦与表情，轻松选出想留下的那一张。",
      "ch1.s2n": "待确认集中复核",
      "ch1.s2b": "想删除的照片先放入「待确认」列表，由你摊开检查后再执行，一次滑动绝不会立即删图。",
      "ch1.s3n": "系统最近删除兜底",
      "ch1.s3b": "确认删除后移入系统「照片 → 最近删除」保留 30 天，期间随时可以找回原片。",

      "ch2.eyebrow": "照片视频压缩",
      "ch2.h1": "让照片与视频更轻",
      "ch2.h2": "为新回忆留出空间",
      "ch2.sub": "查看照片与视频预计可节省的大小，选择压缩方案，完成后对比原片与压缩版，再决定是否替换。压缩版先保存，确认替换时才删除原片。",
      "ch2.badgeOrig": "原图预览 · 示例",
      "ch2.badgeHeic": "压缩预览 · 示例",
      "ch2.badgeSave": "效果示意",
      "ch2.modeOrig": "原图",
      "ch2.modeHeic": "压缩",
      "ch2.c1a": "切换预览，了解对比方式",
      "ch2.c1b": "看清细节再决定是否替换",
      "ch2.c1desc": "图片仅用于演示对比操作，不代表实际压缩效果。请在 App 内对比自己的照片，再决定是否替换。",
      "ch2.pillSafe": "先保存后替换",
      "ch2.c2n": "压缩版先保存，拍摄时间与地点完整保留",
      "ch2.c2b": "只有在你确认替换时才会把原片移入系统「最近删除」；照片原有的拍摄日期、GPS 坐标、收藏状态及所属相册均完整保留，具体影响会在操作前清晰说明。",

      "ch3.eyebrow": "地点精选 · 离线与同步",
      "ch3.h1": "重温一座城",
      "ch3.h2": "从一组照片开始",
      "ch3.sub": "按拍摄地点和日期浏览照片精选，重新看见旅途中的风景，也发现日常里值得留下的片刻。选好的照片可以存为「照片」App 中的相簿。",
      "ch3.tag1": "按地点浏览精选",
      "ch3.albumsa": "重新看见旅途中的风景",
      "ch3.albumsb": "未选中的照片仍保留原处",
      "ch3.albumsdesc": "地点精选按拍摄地点与日期自动汇总值得重温的片刻，选好后一键存为系统相簿。地点精选并非那几天的全部照片，未被选中的照片不会删除，仍保留在原处。",
      "ch3.tag2": "离线整理 · iCloud 同步",
      "ch3.offlinea": "离线继续整理",
      "ch3.offlineb": "进度随你同行",
      "ch3.offlinedesc": "出发前准备好离线内容，可自选预览清晰度与「仅 Wi-Fi」下载；暂时没有网络也能继续整理已准备的照片与视频。会员可通过 iCloud 同步整理进度与已压缩状态，在自己的其他设备上继续整理。",

      "slip.eyebrow": "关于使用与隐私",
      "slip.h1": "日常浏览与整理免费开放",
      "slip.h2": "进阶能力按需解锁",
      "slip.sub": "Pickr 不上传你的照片。没有注册账号，没有广告，提供月度、年度与一次性买断三种会员方案。",
      "slip.free": "免费使用",
      "slip.pro": "Pickr 会员",
      "slip.g1": "浏览、整理与离线准备",
      "slip.g2": "压缩、存为相簿与多端同步",
      "slip.r1n": "按月浏览、整理页筛选与待确认保存",
      "slip.r1d": "浏览与筛选免费；「待确认」中的更改可免费保存 7 次，每次不限张数，失败或取消不计次数。",
      "slip.r2n": "相似照片对比与「我的相册」收集",
      "slip.r2d": "同屏对比相似照片轻松选出想留的一张；整理时点按「加入」把想分享的照片收进本机清单。",
      "slip.r3n": "提前准备离线内容",
      "slip.r3d": "出发前准备好离线内容，暂时没有网络也能继续整理已准备的照片与视频。",
      "slip.r4n": "无限次保存与照片视频压缩",
      "slip.r4d": "不限次数保存「待确认」更改；查看预计可节省空间，压缩后对比原片再决定是否替换。",
      "slip.r5n": "地点精选筛选与存为系统相簿",
      "slip.r5d": "按拍摄地点和日期筛选照片精选，将选好的地点精选或「我的相册」一键存为系统相簿。",
      "slip.r6n": "iCloud 同步整理进度与已压缩状态",
      "slip.r6d": "通过个人 iCloud 同步整理进度与哪些项目已压缩，在自己的 iPhone 与 iPad 上接着整理。",
      "slip.bar": "Pickr 不上传你的照片 · 待确认项目、「我的相册」清单与离线内容仅保留在本设备",

      "faq.eyebrow": "解答与支持",
      "faq.head": "常见问题",
      "faq.q1": "免费可以用多少？",
      "faq.a1": "浏览、整理页筛选、相似照片对比和离线准备均可免费使用；「待确认」中的更改可免费保存 7 次，每次不限张数，失败或取消不计次数。压缩、存为相簿、地点精选筛选及 iCloud 同步需要会员。",
      "faq.q2": "照片会被上传到服务器吗？",
      "faq.a2": "不会。Pickr 不上传你的照片，照片文件是否同步由系统「iCloud 照片」设置决定。待确认项目、「我的相册」清单与离线内容仅保留在本设备。",
      "faq.q3": "滑动时误标了删除怎么办？",
      "faq.a3": "想删除的照片会先进入「待确认」，由你复核后再执行，不会因为一次滑动就立即删除。即使确认删除后，系统「最近删除」仍会保留 30 天。",
      "faq.q4": "压缩会直接覆盖原片吗？",
      "faq.a4": "不会直接覆盖。压缩版会先保存，你可以对比原片与压缩版后再决定是否替换；只有在你确认替换时才删除原片，具体影响会在操作前说明。",
      "faq.q5": "支持哪些设备与系统版本？",
      "faq.a5": "Pickr 已在 App Store 正式上架，同时支持 iPhone 与 iPad（需 iOS / iPadOS 17.0 或更新版本；地点精选需 iOS 18 或更新版本）。",
      "faq.q6": "隐私政策、使用条款与技术支持在哪里查看？",
      "faq.a6": "你可以在本站查阅",
      "faq.privacy": "隐私政策",
      "faq.support": "技术支持",

      "links.eyebrow": "更多独立作品与友情链接",
      "links.h1": "同样克制、专注的独立工具",
      "links.h2": "本机优先，各自安放生活的一角",
      "links.placrDesc": "给照片补上缺失的地点。按拍摄时间分组，参考同时段照片智能建议位置并批量写入。",
      "links.placrMeta": "Mac · iPhone · iPad",
      "links.siftrDesc": "阅读 AI Agent 为你整理的私人每日简报。连接个人云盘，本地全文检索与离线阅读。",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "拍一下，这顿就记好了。从照片估算一餐热量并与 Apple 健康联动，无需称重与填表。",
      "links.mealrMeta": "iPhone · Apple 健康",
      "links.homeTitle": "个人主站 · chenhk.cn",
      "links.homeDesc": "访问开发者 Haokun Chen 的个人主页，了解全部独立软件作品、研究与技术文章。",

      "cta.h1": "拍下的日子，值得被好好安放",
      "cta.h2": "从一个月份开始，为下一段生活留出空间",
      "cta.note": "前往 App Store 免费下载 Pickr，适用于 iPhone 与 iPad",

      "foot.statement": "Pickr · 你的照片，由你决定",
      "foot.mainSite": "个人主站",
      "foot.trademark": "Apple、Apple 标志、iPhone、iPad、iCloud 及 App Store 是 Apple Inc. 在美国及其他国家和地区的注册商标。",
      "foot.legal": "© 2026 Pickr · 独立开发",

      "alt.home": "Pickr 整理首页展示",
      "alt.compression": "Pickr 照片视频压缩页展示",
      "alt.albums": "Pickr 地点精选相册展示",
      "alt.review": "Pickr 整理时加入我的相册展示",
      "alt.offline": "Pickr 离线整理设置展示",
      "alt.card1": "微距叶脉画质对比样张",
      "alt.card2": "山与湖风光样张",
      "alt.card3": "街角咖啡馆旅行样张"
    },

    "zh-Hant": {
      "nav.aria": "主要導覽",
      "foot.aria": "頁尾連結",
      "compare.aria": "切換原圖與壓縮範例",
      "compare.demo": "範例",

      "meta.title": "Pickr · 整理照片，為新回憶留出空間 | iPhone 與 iPad 照片整理工具",
      "meta.description": "拍下的日子，值得好好珍藏。Pickr 幫你按月整理照片與影片，壓縮後先比較再替換，按地點重溫精選，整理時收集想分享的照片。已在 App Store 上架。",
      "nav.how": "按月整理",
      "nav.compression": "照片影片壓縮",
      "nav.albums": "地點精選",
      "nav.slip": "免費與會員",
      "nav.faq": "常見問題",
      "nav.moreApps": "更多作品",
      "nav.langLabel": "語言",
      "nav.download": "下載",

      "hero.eyebrow": "適用於 iPhone 與 iPad",
      "hero.l1": "整理照片",
      "hero.l2": "為新回憶留出空間",
      "hero.support": "按月整理照片與影片，壓縮大型檔案，按地點重溫值得珍藏的片刻。",
      "hero.storeBtn": "在 App Store 下載",
      "hero.moreBtn": "了解工作方式",
      "hero.meta": "已在 App Store 正式上架 · 你的照片，由你決定",

      "ch1.eyebrow": "按月整理 · 整理時收集",
      "ch1.h1": "把相簿整理到今天",
      "ch1.h2": "想分享的片刻，整理時就選好",
      "ch1.sub": "按月份回看照片與影片，挑選想留下的，標記準備刪除的。每次整理一個月，隨時停下，下次繼續。",
      "ch1.t1a": "從最近的月份開始",
      "ch1.t1b": "隨時停下，下次繼續",
      "ch1.t1desc": "支援按月份、隨機月份或專項整理影片與截圖。想刪除的照片會先進入「待確認」，由你重新檢查後再刪除，不會因為一次滑動就立即刪除。",
      "ch1.t2a": "點按「加入」收進相簿",
      "ch1.t2b": "不必整理完再從頭找起",
      "ch1.t2desc": "整理照片時，把想分享或留作紀念的照片收進這部裝置上的「我的相簿」，挑選好後存為系統相簿，留待分享。",
      "ch1.s1n": "相似照片比較",
      "ch1.s1b": "連拍與同一角度的照片在本機自動歸組，同螢幕比對對焦與表情，輕鬆挑出想留下的那一張。",
      "ch1.s2n": "待確認集中複核",
      "ch1.s2b": "想刪除的照片先放入「待確認」清單，由你檢查後再刪除，一次滑動絕不會立即刪圖。",
      "ch1.s3n": "系統最近刪除兜底",
      "ch1.s3b": "確認刪除後移入系統「照片 → 最近刪除」保留 30 天，期間隨時可以復原原始檔。",

      "ch2.eyebrow": "照片影片壓縮",
      "ch2.h1": "讓照片與影片更輕",
      "ch2.h2": "為新回憶留出空間",
      "ch2.sub": "先看看照片與影片的檔案預計能縮小多少，再選擇壓縮方案。完成後比較原始檔與壓縮版，再決定是否替換。",
      "ch2.badgeOrig": "原圖預覽 · 範例",
      "ch2.badgeHeic": "壓縮預覽 · 範例",
      "ch2.badgeSave": "效果示意",
      "ch2.modeOrig": "原圖",
      "ch2.modeHeic": "壓縮",
      "ch2.c1a": "切換預覽，了解比較方式",
      "ch2.c1b": "看清細節再決定是否替換",
      "ch2.c1desc": "圖片僅用於示範比較操作，不代表實際壓縮效果。請在 App 內比較自己的照片，再決定是否替換。",
      "ch2.pillSafe": "先儲存後替換",
      "ch2.c2n": "壓縮版先儲存，拍攝時間與地點完整保留",
      "ch2.c2b": "壓縮版會先儲存，只有在你確認替換時才會刪除原始檔；照片原有的拍攝日期、GPS 座標、收藏狀態及所屬相簿均完整保留。",

      "ch3.eyebrow": "地點精選 · 離線與同步",
      "ch3.h1": "重溫一座城",
      "ch3.h2": "從一組照片開始",
      "ch3.sub": "按拍攝地點與日期瀏覽照片精選，重新看見旅途中的風景，也發現日常裡值得留下的片刻。選好的照片可存為「照片」App 中的相簿。",
      "ch3.tag1": "按地點瀏覽精選",
      "ch3.albumsa": "重新看見旅途中的風景",
      "ch3.albumsb": "未入選的照片仍保留原處",
      "ch3.albumsdesc": "地點精選按拍攝地點與日期挑選照片，把值得重溫的片刻存為相簿。地點精選不包含那些日子的所有照片；未入選的照片不會刪除，仍保留在原處。",
      "ch3.tag2": "離線整理 · iCloud 同步",
      "ch3.offlinea": "離線繼續整理",
      "ch3.offlineb": "進度隨你同行",
      "ch3.offlinedesc": "出發前先準備好離線內容，即使暫時沒有連線，也能繼續整理已準備好且仍保留在本機的照片與影片。會員可透過 iCloud 同步整理進度與已壓縮狀態。",

      "slip.eyebrow": "關於使用與隱私",
      "slip.h1": "日常瀏覽與整理免費開放",
      "slip.h2": "進階能力按需解鎖",
      "slip.sub": "Pickr 不會上傳你的照片。沒有註冊帳號，沒有廣告，提供月度、年度與一次性買斷三種會員方案。",
      "slip.free": "免費使用",
      "slip.pro": "Pickr 會員",
      "slip.g1": "瀏覽、整理與離線準備",
      "slip.g2": "壓縮、存為相簿與多端同步",
      "slip.r1n": "按月瀏覽、整理頁篩選與待確認儲存",
      "slip.r1d": "瀏覽與篩選免費；「待確認」中的變更可免費儲存 7 次，每批不限張數，失敗或取消不計次數。",
      "slip.r2n": "相似照片比較與「我的相簿」收集",
      "slip.r2d": "同螢幕比較相似照片輕鬆挑出想留的一張；整理時點按「加入」把想分享的照片收進本機清單。",
      "slip.r3n": "提前準備離線內容",
      "slip.r3d": "出發前準備好離線內容，暫時沒有網路也能繼續整理已準備的照片與影片。",
      "slip.r4n": "無限次儲存與照片影片壓縮",
      "slip.r4d": "不限次數儲存「待確認」變更；查看檔案預計能縮小多少，壓縮後比較再決定是否替換。",
      "slip.r5n": "地點精選篩選與存為系統相簿",
      "slip.r5d": "按拍攝地點與日期篩選照片精選，將選好的地點精選或「我的相簿」存為系統相簿。",
      "slip.r6n": "iCloud 同步整理進度與已壓縮狀態",
      "slip.r6d": "透過個人 iCloud 同步整理進度與已壓縮狀態，在自己的其他裝置上繼續整理。",
      "slip.bar": "Pickr 不會上傳你的照片 · 待確認項目、「我的相簿」清單與離線內容僅保留在本裝置",

      "faq.eyebrow": "解答與支援",
      "faq.head": "常見問題",
      "faq.q1": "免費可以用多少？",
      "faq.a1": "瀏覽、整理頁篩選、相似照片比較與離線準備免費；「待確認」中的變更可免費儲存 7 次，每批不限張數，僅成功儲存才計次。壓縮、存為相簿、地點精選篩選及 iCloud 同步需付費會員。",
      "faq.q2": "照片會被上傳到伺服器嗎？",
      "faq.a2": "不會。Pickr 不會上傳你的照片，照片檔案是否同步由系統的「iCloud 照片」設定決定。待確認項目、「我的相簿」清單與離線內容僅保留在本裝置。",
      "faq.q3": "滑動時誤標了刪除怎麼辦？",
      "faq.a3": "想刪除的照片會先進入「待確認」，由你重新檢查後再刪除，不會因為一次滑動就立即刪除。即使確認刪除後，系統「最近刪除」仍會保留 30 天。",
      "faq.q4": "壓縮會直接覆蓋原始檔嗎？",
      "faq.a4": "不會直接覆蓋。壓縮版會先儲存，只有在你確認替換時才會刪除原始檔，操作前會說明具體影響。",
      "faq.q5": "支援哪些裝置與系統版本？",
      "faq.a5": "Pickr 已在 App Store 正式上架，同時支援 iPhone 與 iPad（需 iOS / iPadOS 17.0 或更新版本；地點精選需 iOS 18 或更新版本）。",
      "faq.q6": "隱私權政策、使用條款與技術支援在哪裡查看？",
      "faq.a6": "你可以在本站查閱",
      "faq.privacy": "隱私權政策",
      "faq.support": "技術支援",

      "links.eyebrow": "更多獨立作品與友情連結",
      "links.h1": "同樣克制、專注的獨立工具",
      "links.h2": "本機優先，各自安放生活的一角",
      "links.placrDesc": "給照片補上缺失的地點。按拍攝時間分組，參考同時段照片智慧建議位置並批次寫入。",
      "links.placrMeta": "Mac · iPhone · iPad",
      "links.siftrDesc": "閱讀 AI Agent 為你整理的私人每日簡報。連接個人雲端空間，本機全文檢索與離線閱讀。",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "拍一下，這餐就記好了。從照片估算一餐熱量並與 Apple 健康連動，無需秤重與填表。",
      "links.mealrMeta": "iPhone · Apple 健康",
      "links.homeTitle": "個人主站 · chenhk.cn",
      "links.homeDesc": "造訪開發者 Haokun Chen 的個人主頁，了解全部獨立軟體作品、研究與技術文章。",

      "cta.h1": "拍下的日子，值得好好珍藏",
      "cta.h2": "從一個月份開始，為下一段生活留出空間",
      "cta.note": "前往 App Store 免費下載 Pickr，適用於 iPhone 與 iPad",

      "foot.statement": "Pickr · 你的照片，由你決定",
      "foot.mainSite": "個人主站",
      "foot.trademark": "Apple、Apple 標誌、iPhone、iPad、iCloud 及 App Store 是 Apple Inc. 在美國及其他國家和地區的註冊商標。",
      "foot.legal": "© 2026 Pickr · 獨立開發",

      "alt.home": "Pickr 整理首頁展示",
      "alt.compression": "Pickr 照片影片壓縮頁展示",
      "alt.albums": "Pickr 地點精選相簿展示",
      "alt.review": "Pickr 整理時加入我的相簿展示",
      "alt.offline": "Pickr 離線整理設定展示",
      "alt.card1": "微距葉脈畫質對比樣張",
      "alt.card2": "山與湖風光樣張",
      "alt.card3": "街角咖啡館旅行樣張"
    },

    en: {
      "nav.aria": "Main navigation",
      "foot.aria": "Footer links",
      "compare.aria": "Switch between original and compressed previews",
      "compare.demo": "Demo",

      "meta.title": "Pickr · Catch up with your camera roll, make room for new memories",
      "meta.description": "Sort photos and videos by month on iPhone and iPad. Compare before compressing, rediscover cities in a few photos, and choose what to share as you go. Available on the App Store.",
      "nav.how": "Monthly Sort",
      "nav.compression": "Compression",
      "nav.albums": "Place Highlights",
      "nav.slip": "Free & Membership",
      "nav.faq": "FAQ",
      "nav.moreApps": "More Apps",
      "nav.langLabel": "Language",
      "nav.download": "Download",

      "hero.eyebrow": "For iPhone and iPad",
      "hero.l1": "Catch up with your camera roll",
      "hero.l2": "Make room for new memories",
      "hero.support": "Sort photos by month, compress large files, and rediscover memories by place.",
      "hero.storeBtn": "Download on the App Store",
      "hero.moreBtn": "How it works",
      "hero.meta": "Available on the App Store · Your photos. Your choice.",

      "ch1.eyebrow": "Sort by Month · Collect as You Go",
      "ch1.h1": "Take it a month at a time",
      "ch1.h2": "Moments worth sharing, chosen as you go",
      "ch1.sub": "Look back through photos and videos by month. Choose what to keep, mark what you’re ready to delete, pause whenever you like, and continue later.",
      "ch1.t1a": "Start with the latest month",
      "ch1.t1b": "Pause anytime, continue later",
      "ch1.t1desc": "Photos marked for deletion wait in Pending for your confirmation. Review them before making changes—a swipe never deletes a photo on its own.",
      "ch1.t2a": "Tap Add while sorting",
      "ch1.t2b": "No need to search again later",
      "ch1.t2desc": "Collect photos in My Albums as you sort—whether for a social post, a keepsake, or a friend—then save your selection as an album in Photos.",
      "ch1.s1n": "Compare Similar Photos",
      "ch1.s1b": "Compare bursts and similar shots side by side on-device to easily choose which one to keep.",
      "ch1.s2n": "Confirm Before Deleting",
      "ch1.s2b": "Items marked for deletion wait in Pending so you can review the whole batch before committing.",
      "ch1.s3n": "30-Day Recently Deleted Safety",
      "ch1.s3b": "Confirmed removals move to iOS Recently Deleted where they remain recoverable for 30 days.",

      "ch2.eyebrow": "Photo & Video Compression",
      "ch2.h1": "Lighter photos and videos",
      "ch2.h2": "Room for new memories",
      "ch2.sub": "See how much space compression could save, choose a setting, then compare the original and compressed versions before deciding whether to replace the original.",
      "ch2.badgeOrig": "Original preview · Demo",
      "ch2.badgeHeic": "Compressed preview · Demo",
      "ch2.badgeSave": "Illustrative preview",
      "ch2.modeOrig": "Original",
      "ch2.modeHeic": "Compressed",
      "ch2.c1a": "Try the comparison preview",
      "ch2.c1b": "Compare detail before replacing",
      "ch2.c1desc": "These images illustrate the comparison controls, not actual compression results. Compare your own photos in the app before deciding whether to replace them.",
      "ch2.pillSafe": "Save First, Replace Later",
      "ch2.c2n": "Compressed version saved first, metadata preserved",
      "ch2.c2b": "The compressed file is saved first and the original is removed only when you confirm replacement. Capture date, GPS coordinates, and album membership stay intact.",

      "ch3.eyebrow": "Place Highlights · Offline & Sync",
      "ch3.h1": "Rediscover a city",
      "ch3.h2": "in a few photos",
      "ch3.sub": "Browse photo highlights by where and when they were taken. Rediscover a favorite view from a trip or an everyday moment worth keeping.",
      "ch3.tag1": "Place-Based Highlights",
      "ch3.albumsa": "A few photos can bring a whole city back",
      "ch3.albumsb": "Unselected photos stay right where they are",
      "ch3.albumsdesc": "Save your selection as an album in Photos. Place-based highlights don’t include every photo from those days; anything not selected stays untouched.",
      "ch3.tag2": "Offline Prep · iCloud Sync",
      "ch3.offlinea": "Take a break",
      "ch3.offlineb": "Pick up where you left off",
      "ch3.offlinedesc": "Prepare offline content before you go and sort without a connection. With a Pickr membership, iCloud syncs your review progress and compression status across your devices.",

      "slip.eyebrow": "Access & Privacy",
      "slip.h1": "Generously free for everyday sorting",
      "slip.h2": "Membership for advanced tools",
      "slip.sub": "Pickr doesn’t upload your photos. No accounts and no ads, with monthly, annual, and lifetime membership options.",
      "slip.free": "Free Access",
      "slip.pro": "Pickr Membership",
      "slip.g1": "Browsing, Sorting & Offline Prep",
      "slip.g2": "Compression, Albums & iCloud Sync",
      "slip.r1n": "Monthly browsing, sorting & 7 free batch saves",
      "slip.r1d": "Browsing and sorting are free. Save pending changes in 7 successful batches for free with no item limit per batch (failed or canceled attempts don’t count).",
      "slip.r2n": "Similar photo comparison & My Albums",
      "slip.r2d": "Compare similar shots side by side and gather photos to share in My Albums on this device.",
      "slip.r3n": "Offline content preparation",
      "slip.r3d": "Prepare a month’s photos and videos in advance to continue sorting without a network connection.",
      "slip.r4n": "Unlimited batch saves & compression",
      "slip.r4d": "Unlimited Pending saves plus photo and video compression with side-by-side original comparison.",
      "slip.r5n": "Place highlights filtering & saving albums to Photos",
      "slip.r5d": "Refine place-based selections and save My Albums or Place Highlights directly as albums in Apple Photos.",
      "slip.r6n": "iCloud progress & compression status sync",
      "slip.r6d": "Sync your review progress and which items have already been compressed across your iPhone and iPad.",
      "slip.bar": "Pickr doesn’t upload your photos · Pending changes, My Albums & offline content stay on this device only",

      "faq.eyebrow": "Questions & Support",
      "faq.head": "Common questions",
      "faq.q1": "How much can I use for free?",
      "faq.a1": "Browsing, reviewing photos, comparing similar photos, and preparing offline content are free. You can save pending changes in 7 successful batches for free, with no item limit per batch. Compression, saving albums, refining place highlights, and iCloud sync require membership.",
      "faq.q2": "Are my photos uploaded to any server?",
      "faq.a2": "Never. Pickr doesn’t upload your photos. Whether photo files sync is determined by your system’s iCloud Photos settings. Pending changes, My Albums, and offline content stay on this device only.",
      "faq.q3": "What if I swipe by mistake?",
      "faq.a3": "Photos marked for deletion wait in Pending for your confirmation; a swipe never deletes a photo on its own. Confirmed deletions stay in iOS Recently Deleted for 30 days.",
      "faq.q4": "Does compression overwrite my original photo immediately?",
      "faq.a4": "No. The compressed version is saved first, and the original is deleted only when you confirm replacement after comparing.",
      "faq.q5": "Which devices and iOS versions are supported?",
      "faq.a5": "Pickr is available on the App Store for iPhone and iPad running iOS / iPadOS 17.0 or later (Place-based highlights require iOS 18 or later).",
      "faq.q6": "Where can I read the privacy policy, EULA, or get help?",
      "faq.a6": "Read our ",
      "faq.privacy": "Privacy Policy",
      "faq.support": "Support",

      "links.eyebrow": "More Independent Apps & Links",
      "links.h1": "Crafted with the same focus and restraint",
      "links.h2": "On-device first, built for everyday clarity",
      "links.placrDesc": "Give photos their missing place. Group photos by time, get smart location suggestions from nearby shots, and batch write coordinates.",
      "links.placrMeta": "Mac · iPhone · iPad",
      "links.siftrDesc": "Read daily briefings curated by your AI Agent. Connect your own WebDAV cloud with local full-text search and offline reading.",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "Snap a meal and keep moving. Estimate calories from a photo with Apple Health integration—no weighing or tedious forms.",
      "links.mealrMeta": "iPhone · Apple Health",
      "links.homeTitle": "Main Site · chenhk.cn",
      "links.homeDesc": "Visit Haokun Chen’s personal website for all independent apps, research, and notes.",

      "cta.h1": "The days you capture deserve to be cherished",
      "cta.h2": "Start with a month and make room for what comes next",
      "cta.note": "Download Pickr on the App Store for iPhone and iPad",

      "foot.statement": "Pickr · Your photos. Your choice.",
      "foot.mainSite": "Author Site",
      "foot.trademark": "Apple, the Apple logo, iPhone, iPad, iCloud, and App Store are trademarks of Apple Inc., registered in the U.S. and other countries and regions.",
      "foot.legal": "© 2026 Pickr · Independent software",

      "alt.home": "Pickr monthly home screen",
      "alt.compression": "Pickr compression screen",
      "alt.albums": "Pickr place highlights screen",
      "alt.review": "Pickr Add to My Albums sheet",
      "alt.offline": "Pickr offline preparation screen",
      "alt.card1": "Macro leaf detail sample photo",
      "alt.card2": "Mountain and lake travel sample photo",
      "alt.card3": "Street corner cafe sample photo"
    },

    ja: {
      "nav.aria": "メインナビゲーション",
      "foot.aria": "フッターリンク",
      "compare.aria": "元画像と圧縮画像のプレビューを切り替え",
      "compare.demo": "デモ",

      "meta.title": "Pickr · 写真を整え、新しい思い出に余白を | iPhone・iPad 写真整理アプリ",
      "meta.description": "写真に残した日々を大切に。月ごとに写真と動画を整理し、圧縮後は比べてから置換。場所別のセレクションや整理中のアルバム収集に対応。App Store で配信中。",
      "nav.how": "月別整理",
      "nav.compression": "写真・動画圧縮",
      "nav.albums": "場所別セレクション",
      "nav.slip": "無料とメンバーシップ",
      "nav.faq": "よくある質問",
      "nav.moreApps": "その他のアプリ",
      "nav.langLabel": "言語",
      "nav.download": "入手",

      "hero.eyebrow": "iPhone と iPad に対応",
      "hero.l1": "写真を整え",
      "hero.l2": "新しい思い出に余白を",
      "hero.support": "写真や動画を月ごとに整理。大きなファイルを圧縮し、撮影場所から思い出を振り返れます。",
      "hero.storeBtn": "App Store からダウンロード",
      "hero.moreBtn": "使い方をみる",
      "hero.meta": "App Store で配信中 · あなたの写真。決めるのは、あなた。",

      "ch1.eyebrow": "月別整理 · 整理中に収集",
      "ch1.h1": "あの日から今日まで、ひと月ずつ整理",
      "ch1.h2": "シェアしたい瞬間は、整理しながら選んでおこう",
      "ch1.sub": "写真と動画を月ごとに振り返り、残したいものを選び、削除したいものに印をつける。いつでも中断して、次は続きから再開できます。",
      "ch1.t1a": "最新の月から自分のペースで",
      "ch1.t1b": "いつでも中断、次は続きから",
      "ch1.t1desc": "削除候補はまず「確認待ち」へ。見直してから削除するので、ひとスワイプですぐに消えることはありません。",
      "ch1.t2a": "整理中に「追加」をタップ",
      "ch1.t2b": "あとから探し直す必要なし",
      "ch1.t2desc": "SNS でシェアしたい写真も記念の一枚も、この端末の「マイアルバム」に集め、選び終えたら「写真」アプリのアルバムに保存できます。",
      "ch1.s1n": "似た写真を比較",
      "ch1.s1b": "連写や似た構図の写真を並べて比較し、残したい一枚を簡単に選べます。",
      "ch1.s2n": "「確認待ち」で見直してから削除",
      "ch1.s2b": "削除候補はまとめて一覧で確認してから実行するため、誤操作を防げます。",
      "ch1.s3n": "「最近削除した項目」に30日間保持",
      "ch1.s3b": "削除確定後も iOS の「最近削除した項目」に30日間残るため、いつでも復元できます。",

      "ch2.eyebrow": "写真・動画の圧縮",
      "ch2.h1": "写真も動画も軽くして",
      "ch2.h2": "新しい思い出に空きを",
      "ch2.sub": "ファイルサイズをどれくらい小さくできるか目安を確認。圧縮後は元の写真・動画と比べてから、置き換えるかどうかを決められます。",
      "ch2.badgeOrig": "元画像プレビュー · デモ",
      "ch2.badgeHeic": "圧縮プレビュー · デモ",
      "ch2.badgeSave": "操作イメージ",
      "ch2.modeOrig": "元画像",
      "ch2.modeHeic": "圧縮",
      "ch2.c1a": "プレビューを切り替えて比較",
      "ch2.c1b": "ディテールを確かめてから置換",
      "ch2.c1desc": "画像は比較操作のイメージで、実際の圧縮結果ではありません。アプリでご自身の写真を比較してから、置き換えるかを決められます。",
      "ch2.pillSafe": "先に保存、確認後に置換",
      "ch2.c2n": "圧縮ファイルを先に保存、撮影日時や位置情報も保持",
      "ch2.c2b": "圧縮したファイルを先に保存し、置き換えを確定したときにだけ元の写真・動画を削除します。撮影日時や GPS 位置情報も引き継がれます。",

      "ch3.eyebrow": "場所別セレクション · オフラインと同期",
      "ch3.h1": "あの街をもう一度",
      "ch3.h2": "選りすぐりの写真から",
      "ch3.sub": "撮影場所と日付ごとにまとまった写真のセレクションで、旅先の景色も、何気ない日常の大切な瞬間も、もう一度。",
      "ch3.tag1": "場所別セレクション",
      "ch3.albumsa": "旅先の景色をアルバムに保存",
      "ch3.albumsb": "選ばれなかった写真も元の場所に",
      "ch3.albumsdesc": "選んだ写真は「写真」アプリのアルバムに保存できます。場所別セレクションにすべての写真が含まれるわけではなく、選ばれなかった写真も削除されず元の場所に残ります。",
      "ch3.tag2": "オフライン準備 · iCloud 同期",
      "ch3.offlinea": "オフラインでも整理は続く",
      "ch3.offlineb": "進み具合も、一緒に",
      "ch3.offlinedesc": "出かける前にオフラインで使う写真と動画を準備。一時的に通信できなくても整理を続けられます。有料メンバーは iCloud で整理の進み具合と圧縮済み状態を自分のほか端末と同期できます。",

      "slip.eyebrow": "ご利用とプライバシーについて",
      "slip.h1": "閲覧と毎日の整理は無料",
      "slip.h2": "高度な機能はメンバーシップで",
      "slip.sub": "Pickr があなたの写真をアップロードすることはありません。アカウント登録も広告もありません。",
      "slip.free": "無料機能",
      "slip.pro": "有料メンバーシップ",
      "slip.g1": "閲覧・写真選び・オフライン準備",
      "slip.g2": "圧縮・アルバム保存・iCloud 同期",
      "slip.r1n": "月別閲覧・仕分けと「確認待ち」7回無料保存",
      "slip.r1d": "「確認待ち」にまとめた変更は7回まで無料で保存可能（1回の枚数無制限、失敗やキャンセルは数えません）。",
      "slip.r2n": "似た写真の比較と「マイアルバム」リスト",
      "slip.r2d": "似た写真の比較や、整理中に共有したい写真を端末内の「マイアルバム」に集める機能は無料です。",
      "slip.r3n": "オフライン用の事前準備",
      "slip.r3d": "出発前に写真と動画を準備し、通信できない場所でも整理を継続。",
      "slip.r4n": "回数無制限の保存と写真・動画の圧縮",
      "slip.r4d": "無制限の保存に加え、削減目安の確認と圧縮後の比較置換に対応。",
      "slip.r5n": "場所別セレクションの絞り込みとアルバム保存",
      "slip.r5d": "場所別セレクションや「マイアルバム」を「写真」アプリのアルバムとして保存。",
      "slip.r6n": "iCloud による進み具合・圧縮済み状態の同期",
      "slip.r6d": "個人の iCloud 経由で iPhone と iPad 間の整理進捗を同期。",
      "slip.bar": "写真の外部アップロードなし · 「確認待ち」「マイアルバム」オフライン内容は端末内にのみ保存",

      "faq.eyebrow": "サポートと回答",
      "faq.head": "よくある質問",
      "faq.q1": "無料でどこまで使えますか？",
      "faq.a1": "閲覧、整理画面での写真選び、似た写真の比較、オフライン準備は無料です。「確認待ち」の変更は7回まで無料で保存できます（1回の枚数無制限）。圧縮、アルバム保存、場所別セレクションの絞り込み、iCloud 同期には有料メンバーシップが必要です。",
      "faq.q2": "写真がサーバーにアップロードされますか？",
      "faq.a2": "いいえ。Pickr があなたの写真をアップロードすることはありません。写真ファイルの同期はシステムの「iCloud 写真」設定に従います。",
      "faq.q3": "間違えて削除スワイプしてしまったら？",
      "faq.a3": "削除候補はまず「確認待ち」に入り、ひとスワイプですぐに消えることはありません。削除確定後も iOS の「最近削除した項目」に30日間残ります。",
      "faq.q4": "圧縮すると元の写真はすぐ消えますか？",
      "faq.a4": "いいえ。圧縮したファイルを先に保存し、元の写真・動画と比べて置き換えを確定したときにだけ元のファイルを削除します。",
      "faq.q5": "対応機種と OS バージョンは？",
      "faq.a5": "iOS / iPadOS 17.0 以降の iPhone と iPad に対応しています（場所別セレクションは iOS 18 以降で利用可能）。",
      "faq.q6": "プライバシーポリシーや利用規約はどこにありますか？",
      "faq.a6": "サイト内の ",
      "faq.privacy": "プライバシーポリシー",
      "faq.support": "サポートページ",

      "links.eyebrow": "その他の個人開発アプリ",
      "links.h1": "同じくシンプルで、集中できる独立ツール",
      "links.h2": "端末内処理を大切にしたアプリシリーズ",
      "links.placrDesc": "位置情報のない写真に場所を補完。撮影時間でグループ化し、前後の写真から場所を提案して一括書き込み。",
      "links.placrMeta": "Mac · iPhone · iPad",
      "links.siftrDesc": "AI エージェントがまとめた日刊ブリーフィングを快適に読むリーダー。個人 WebDAV 連携・オフライン対応。",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "撮るだけで食事記録。写真からカロリーを推定し Apple ヘルスケアと連携。計量や手入力は不要です。",
      "links.mealrMeta": "iPhone · ヘルスケア連携",
      "links.homeTitle": "個人サイト · chenhk.cn",
      "links.homeDesc": "開発者 Haokun Chen のホームページ。すべての個人開発アプリや技術記事をご覧いただけます。",

      "cta.h1": "写真に残した日々を、大切にしまっておこう",
      "cta.h2": "まずはひと月分から、これからの思い出のために余白を",
      "cta.note": "App Store から Pickr を無料ダウンロード（iPhone・iPad 対応）",

      "foot.statement": "Pickr · あなたの写真。決めるのは、あなた。",
      "foot.mainSite": "開発者サイト",
      "foot.trademark": "Apple、Apple ロゴ、iPhone、iPad、iCloud、および App Store は、米国およびその他の国と地域で登録された Apple Inc. の商標です。",
      "foot.legal": "© 2026 Pickr · 個人開発",

      "alt.home": "Pickr の整理ホーム画面",
      "alt.compression": "Pickr の圧縮画面",
      "alt.albums": "Pickr の場所別セレクション画面",
      "alt.review": "Pickr のマイアルバム追加画面",
      "alt.offline": "Pickr のオフライン準備画面",
      "alt.card1": "葉脈のマクロ撮影サンプル",
      "alt.card2": "山と湖の風景サンプル",
      "alt.card3": "街角のカフェの旅行サンプル"
    },

    ko: {
      "nav.aria": "주 탐색",
      "foot.aria": "하단 링크",
      "compare.aria": "원본과 압축 예시 전환",
      "compare.demo": "예시",

      "meta.title": "Pickr · 사진을 정리해 새 추억을 위한 공간을 | iPhone 및 iPad 사진 정리 도구",
      "meta.description": "사진에 담긴 날들, 소중하게 간직하세요. 한 달씩 사진과 동영상을 정리하고, 압축 후 비교해 원본 교체를 결정하세요. 장소별 사진과 공유 앨범 수집까지. App Store 출시.",
      "nav.how": "월별 정리",
      "nav.compression": "사진·동영상 압축",
      "nav.albums": "장소별 추천",
      "nav.slip": "무료 및 멤버십",
      "nav.faq": "자주 묻는 질문",
      "nav.moreApps": "더 많은 앱",
      "nav.langLabel": "언어",
      "nav.download": "다운로드",

      "hero.eyebrow": "iPhone 및 iPad 지원",
      "hero.l1": "사진을 가지런히 정리해",
      "hero.l2": "새 추억을 위한 공간을",
      "hero.support": "사진과 동영상을 월별로 정리하고, 큰 파일을 압축하고, 촬영 장소별로 추억을 다시 만나세요.",
      "hero.storeBtn": "App Store에서 다운로드",
      "hero.moreBtn": "작동 방식 보기",
      "hero.meta": "App Store 정식 출시 · 내 사진, 내가 결정해요",

      "ch1.eyebrow": "월별 정리 · 정리하며 수집",
      "ch1.h1": "쌓인 사진을 한 달씩, 오늘까지",
      "ch1.h2": "나누고 싶은 순간은, 정리하면서 미리 골라요",
      "ch1.sub": "사진과 동영상을 월별로 돌아보며 남길 것은 고르고, 지울 것은 표시하세요. 언제든 멈췄다가 이어서 할 수 있어요.",
      "ch1.t1a": "한 번에 한 달씩 내 속도에 맞춰",
      "ch1.t1b": "언제든 멈추고 이어서 정리",
      "ch1.t1desc": "삭제할 사진은 먼저 ‘확인 대기’에 모여요. 다시 확인한 뒤에 삭제하므로, 화면을 한 번 쓸어 넘기는 것만으로 바로 지워지지 않아요.",
      "ch1.t2a": "정리하다가 ‘담기’로 바로 수집",
      "ch1.t2b": "처음부터 다시 찾을 필요 없이",
      "ch1.t2desc": "SNS에 올리고 싶거나 친구에게 보여 주고 싶은 사진을 이 기기의 ‘내 앨범’에 모아 두고, 다 고른 뒤 앨범으로 저장해 두세요.",
      "ch1.s1n": "비슷한 사진 비교",
      "ch1.s1b": "비슷한 사진을 나란히 비교하며 간직할 베스트 사진 한 장을 쉽게 골라요.",
      "ch1.s2n": "‘확인 대기’에서 검토 후 삭제",
      "ch1.s2b": "지울 항목을 한눈에 다시 확인한 뒤에 삭제하므로 실수로 지울 걱정이 없어요.",
      "ch1.s3n": "iOS 최근 삭제된 항목 30일 보관",
      "ch1.s3b": "최종 삭제 후에도 시스템 ‘최근 삭제된 항목’에 30일간 보관되어 언제든 복구할 수 있어요.",

      "ch2.eyebrow": "사진 및 동영상 압축",
      "ch2.h1": "사진과 동영상을 가볍게",
      "ch2.h2": "새 추억을 위한 공간을",
      "ch2.sub": "파일 크기를 얼마나 줄일 수 있을지 예상치를 확인하고 압축 방식을 고르세요. 압축이 끝나면 원본과 압축본을 비교한 뒤 교체할지 결정할 수 있어요.",
      "ch2.badgeOrig": "원본 미리보기 · 예시",
      "ch2.badgeHeic": "압축 미리보기 · 예시",
      "ch2.badgeSave": "작동 예시",
      "ch2.modeOrig": "원본",
      "ch2.modeHeic": "압축",
      "ch2.c1a": "미리보기를 전환해 비교해 보세요",
      "ch2.c1b": "디테일을 확인한 뒤 교체 결정",
      "ch2.c1desc": "비교 조작을 보여 주는 예시 이미지로, 실제 압축 결과가 아닙니다. 앱에서 자신의 사진을 비교한 뒤 교체할지 결정하세요.",
      "ch2.pillSafe": "먼저 저장 후 교체",
      "ch2.c2n": "압축본을 먼저 저장하고 촬영 날짜와 위치 보존",
      "ch2.c2b": "압축본을 먼저 저장하고, 직접 교체를 확정했을 때만 원본을 삭제해요. 촬영 일시와 GPS 위치 좌표, 앨범 소속이 그대로 유지됩니다.",

      "ch3.eyebrow": "장소별 추천 · 오프라인 및 동기화",
      "ch3.h1": "사진을 펼치면",
      "ch3.h2": "그 도시가 다시 눈앞에",
      "ch3.sub": "촬영 장소와 날짜별로 골라 모은 사진을 살펴보세요. 여행지의 풍경을 다시 만나고 일상 속 간직하고 싶은 순간도 발견할 수 있어요.",
      "ch3.tag1": "장소별 추천 사진",
      "ch3.albumsa": "여행지의 풍경을 다시 만나고",
      "ch3.albumsb": "선택되지 않은 사진도 원래 자리에",
      "ch3.albumsdesc": "선택한 사진은 ‘사진’ 앱의 앨범으로 저장할 수 있어요. 장소별 추천에 모든 사진이 담기지는 않으며, 선택되지 않은 사진도 삭제되지 않고 그대로 남아요.",
      "ch3.tag2": "오프라인 준비 · iCloud 동기화",
      "ch3.offlinea": "오프라인에서도 정리는 계속",
      "ch3.offlineb": "진행 상황은 다음 기기로",
      "ch3.offlinedesc": "출발 전에 오프라인 콘텐츠를 준비해 두면 인터넷이 없어도 계속 정리할 수 있어요. 유료 회원은 iCloud로 정리 진행 상황과 압축 완료 여부를 다른 기기와 동기화할 수 있어요.",

      "slip.eyebrow": "이용 및 개인정보 안내",
      "slip.h1": "일상 둘러보기와 정리는 무료",
      "slip.h2": "고급 기능은 멤버십으로",
      "slip.sub": "Pickr는 사진을 업로드하지 않아요. 계정 가입도 광고도 없으며 월간·연간·평생 멤버십을 지원합니다.",
      "slip.free": "무료 이용",
      "slip.pro": "Pickr 멤버십",
      "slip.g1": "둘러보기, 사진 고르기 및 오프라인 준비",
      "slip.g2": "압축, 앨범 저장 및 iCloud 동기화",
      "slip.r1n": "월별 정리 및 ‘확인 대기’ 7회 무료 저장",
      "slip.r1d": "‘확인 대기’에 모인 변경 사항은 7회까지 무료로 저장할 수 있어요(1회당 사진 수 무제한, 실패나 취소는 제외).",
      "slip.r2n": "비슷한 사진 비교 및 ‘내 앨범’ 목록",
      "slip.r2d": "비슷한 사진을 비교하고 정리 중 공유할 사진을 기기 내 ‘내 앨범’에 모아 두기 무료 제공.",
      "slip.r3n": "오프라인 콘텐츠 준비",
      "slip.r3d": "출발 전 사진과 동영상을 미리 준비해 인터넷 없이도 계속 정리.",
      "slip.r4n": "무제한 저장 및 사진·동영상 압축",
      "slip.r4d": "횟수 제한 없는 저장과 원본 비교 후 교체하는 고화질 압축.",
      "slip.r5n": "장소별 추천 필터 및 ‘사진’ 앱 앨범 저장",
      "slip.r5d": "장소별 추천 사진 필터와 ‘내 앨범’을 시스템 ‘사진’ 앱의 앨범으로 바로 저장.",
      "slip.r6n": "iCloud 진행 상황 및 압축 완료 동기화",
      "slip.r6d": "개인 iCloud를 통해 iPhone과 iPad에서 정리 진행 상황을 이어가기.",
      "slip.bar": "사진 외부 업로드 없음 · 확인 대기 항목, ‘내 앨범’ 목록, 오프라인 콘텐츠는 이 기기에만 보관",

      "faq.eyebrow": "질문 및 지원",
      "faq.head": "자주 묻는 질문",
      "faq.q1": "무료로 어디까지 쓸 수 있나요?",
      "faq.a1": "둘러보기, 정리 화면에서 사진 고르기, 비슷한 사진 비교, 오프라인 준비는 무료예요. ‘확인 대기’ 변경 사항은 7회까지 무료로 저장할 수 있어요(장수 제한 없음). 압축, 앨범 저장, 장소별 추천 필터, iCloud 동기화는 유료 멤버십이 필요해요.",
      "faq.q2": "사진이 서버로 업로드되나요?",
      "faq.a2": "아니요. Pickr는 사진을 업로드하지 않아요. 사진 파일 동기화 여부는 시스템의 ‘iCloud 사진’ 설정에 따라 결정돼요.",
      "faq.q3": "실수로 삭제 방향으로 밀면 바로 지워지나요?",
      "faq.a3": "삭제할 사진은 먼저 ‘확인 대기’에 모이며 화면을 한 번 쓸어 넘기는 것만으로 바로 지워지지 않아요. 최종 삭제 후에도 iOS ‘최근 삭제된 항목’에 30일간 보관돼요.",
      "faq.q4": "압축하면 원본이 바로 덮어써지나요?",
      "faq.a4": "아니요. 압축본을 먼저 저장하고, 원본과 비교한 뒤 직접 교체를 확정했을 때만 원본을 삭제해요.",
      "faq.q5": "어떤 기기와 OS 버전을 지원하나요?",
      "faq.a5": "iOS / iPadOS 17.0 이상을 실행하는 iPhone 및 iPad를 지원해요(장소별 추천 사진은 iOS 18 이상).",
      "faq.q6": "개인정보 처리방침과 이용 약관은 어디서 보나요?",
      "faq.a6": "이 사이트에서 ",
      "faq.privacy": "개인정보 처리방침",
      "faq.support": "지원 페이지",

      "links.eyebrow": "더 많은 인디 앱 및 링크",
      "links.h1": "같은 철학으로 만든 간결하고 집중된 도구",
      "links.h2": "기기 내 처리 우선, 일상의 한구석을 정돈하는 앱",
      "links.placrDesc": "사진에 빠진 위치 정보를 채워 넣으세요. 촬영 시간별로 묶어 주변 사진의 위치를 제안하고 일괄 기록합니다.",
      "links.placrMeta": "Mac · iPhone · iPad",
      "links.siftrDesc": "AI 에이전트가 정리한 일일 브리핑 리더. 개인 WebDAV 클라우드 연결 및 오프라인 읽기를 지원합니다.",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "사진 한 장으로 끝내는 식단 기록. 사진으로 칼로리를 추정하고 Apple 건강과 연동합니다.",
      "links.mealrMeta": "iPhone · Apple 건강",
      "links.homeTitle": "개인 웹사이트 · chenhk.cn",
      "links.homeDesc": "개발자 Haokun Chen의 홈페이지에서 모든 인디 앱과 기술 아티클을 확인하세요.",

      "cta.h1": "사진에 담긴 날들, 소중하게 간직하세요",
      "cta.h2": "한 달치 사진부터 천천히, 앞으로의 일상을 담을 공간을",
      "cta.note": "App Store에서 Pickr 무료 다운로드 (iPhone 및 iPad 지원)",

      "foot.statement": "Pickr · 내 사진, 내가 결정해요",
      "foot.mainSite": "개발자 홈",
      "foot.trademark": "Apple, Apple 로고, iPhone, iPad, iCloud 및 App Store는 미국 및 기타 국가와 지역에 등록된 Apple Inc.의 상표입니다.",
      "foot.legal": "© 2026 Pickr · 인디 개발",

      "alt.home": "Pickr 정리 홈 화면",
      "alt.compression": "Pickr 압축 화면",
      "alt.albums": "Pickr 장소별 추천 화면",
      "alt.review": "Pickr 내 앨범 담기 화면",
      "alt.offline": "Pickr 오프라인 준비 화면",
      "alt.card1": "잎맥 접사 원본 샘플",
      "alt.card2": "산과 호수 풍경 샘플",
      "alt.card3": "모퉁이 카페 여행 샘플"
    }
  };

  var SUPPORTED = ["zh-Hans", "zh-Hant", "en", "ja", "ko"];
  var currentLang = "zh-Hans";

  function detectLang() { return PickrRouting.readLanguage(); }

  function applyLang(lang, updateURL = false) {
    var code = SUPPORTED.indexOf(lang) !== -1 ? lang : "zh-Hans";
    currentLang = code;
    var dict = COPY[code] || COPY["zh-Hans"];

    document.documentElement.lang = code;
    if (dict["meta.title"]) {
      document.title = dict["meta.title"];
    }
    var descMeta = document.querySelector('meta[name="description"]');
    if (descMeta && dict["meta.description"]) {
      descMeta.setAttribute("content", dict["meta.description"]);
    }

    var textNodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < textNodes.length; i++) {
      var key = textNodes[i].getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        textNodes[i].textContent = dict[key];
      }
    }

    document.querySelectorAll("[data-i18n-aria]").forEach(function (node) {
      var label = dict[node.getAttribute("data-i18n-aria")];
      if (label) node.setAttribute("aria-label", label);
    });

    var altNodes = document.querySelectorAll("[data-i18n-alt]");
    for (var j = 0; j < altNodes.length; j++) {
      var altKey = altNodes[j].getAttribute("data-i18n-alt");
      if (dict[altKey] !== undefined) {
        altNodes[j].setAttribute("alt", dict[altKey]);
      }
    }

    /* 1. 响应式 <picture>（首屏 Hero 与地点精选：桌面双端 / 手机单 iPhone） */
    var respPictures = document.querySelectorAll("picture[data-responsive-shot]");
    for (var p = 0; p < respPictures.length; p++) {
      var prefix = respPictures[p].getAttribute("data-responsive-shot");
      if (!prefix) continue;
      var sourceEl = respPictures[p].querySelector("source");
      var imgEl = respPictures[p].querySelector("img");
      if (sourceEl) {
        sourceEl.setAttribute("srcset", "assets/home/" + code + "/" + prefix + "-phone.webp");
      }
      if (imgEl) {
        imgEl.setAttribute("src", "assets/home/" + code + "/" + prefix + "-duo.webp");
      }
    }

    /* 2. 单设备特写 / 破框半身 iPhone 图（各语种 WebP） */
    var singleShots = document.querySelectorAll("img[data-single-shot]");
    for (var s = 0; s < singleShots.length; s++) {
      var fileName = singleShots[s].getAttribute("data-single-shot");
      if (fileName) {
        singleShots[s].setAttribute("src", "assets/home/" + code + "/" + fileName + "?v=20261024a");
      }
    }


    var storeUrl = PickrRouting.storeURL(new URLSearchParams(location.search).get("store"));
    var storeLinks = document.querySelectorAll("a[data-store-link]");
    for (var u = 0; u < storeLinks.length; u++) {
      storeLinks[u].setAttribute("href", storeUrl);
    }

    var links = document.querySelectorAll("a[data-localized-link]");
    for (var l = 0; l < links.length; l++) {
      var base = links[l].getAttribute("data-localized-link");
      if (base) {
        links[l].setAttribute("href", base + "?lang=" + encodeURIComponent(code));
      }
    }

    var select = document.querySelector("[data-language-select]");
    if (select && select.value !== code) {
      select.value = code;
    }

    PickrRouting.rememberLanguage(code, updateURL);
  }

  /* ---------- 原图 vs HEIC 交互开关 ---------- */
  function initHeicCompare() {
    var card = document.querySelector("[data-heic-compare]");
    if (!card) return;

    var switchBtn = card.querySelector("[data-heic-switch]");
    var stage = card.querySelector("[data-compare-stage]");
    var mainImg = card.querySelector("[data-compare-img]");
    var loupeImg = card.querySelector("[data-compare-loupe-img]");
    var modeOrig = card.querySelector("[data-mode-orig]");
    var modeHeic = card.querySelector("[data-mode-heic]");

    var ORIG_SRC = "assets/home/demo-01-leaf.webp";
    var HEIC_SRC = "assets/home/demo-01-leaf-heic.webp";

    var preload = new Image();
    preload.src = HEIC_SRC;

    function setHeicMode(enabled) {
      card.classList.toggle("is-heic", enabled);
      if (switchBtn) {
        switchBtn.setAttribute("aria-checked", enabled ? "true" : "false");
      }
      var targetSrc = enabled ? HEIC_SRC : ORIG_SRC;
      if (mainImg) mainImg.setAttribute("src", targetSrc);
      if (loupeImg) loupeImg.setAttribute("src", targetSrc);
      if (modeOrig) modeOrig.classList.toggle("active", !enabled);
      if (modeHeic) modeHeic.classList.toggle("active", enabled);
    }

    function toggle() {
      var next = !card.classList.contains("is-heic");
      setHeicMode(next);
    }

    if (switchBtn) {
      switchBtn.addEventListener("click", toggle);
    }
    if (stage) {
      stage.addEventListener("click", toggle);
      stage.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          toggle();
        }
      });
    }
  }

  /* ---------- 章节元素错峰入场 ---------- */
  function initReveal() {
    var groups = document.querySelectorAll(".sec .inner");
    var allTargets = [];

    for (var g = 0; g < groups.length; g++) {
      var items = groups[g].querySelectorAll(
        ".sec-head-wrap, .bento-crop-card, .step-card, .single-phone-showcase, .sample-card, .albums-hero-block, .offline-bento-banner, .tier-card, .privacy-pill-banner, .faq-card, .app-link-card, .cta-banner"
      );
      for (var i = 0; i < items.length; i++) {
        items[i].classList.add("reveal");
        items[i].style.setProperty("--d", ((i % 4) * 0.05).toFixed(2) + "s");
        allTargets.push(items[i]);
      }
    }

    if (!("IntersectionObserver" in window)) {
      for (var k = 0; k < allTargets.length; k++) {
        allTargets[k].classList.add("in");
      }
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        for (var e = 0; e < entries.length; e++) {
          if (entries[e].isIntersecting) {
            entries[e].target.classList.add("in");
            io.unobserve(entries[e].target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );

    for (var m = 0; m < allTargets.length; m++) {
      io.observe(allTargets[m]);
    }
  }

  var initialLang = detectLang();
  applyLang(initialLang);
  initHeicCompare();
  initReveal();

  var selectEl = document.querySelector("[data-language-select]");
  if (selectEl) {
    selectEl.addEventListener("change", function (ev) {
      applyLang(ev.target.value, true);
    });
  }
})();
