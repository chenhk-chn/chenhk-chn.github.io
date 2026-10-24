(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* 与 AppStore/store-listing.md 的各语言描述保持同一套口径 */
  var COPY = {
    "zh-Hans": {
      "nav.aria": "主导航",
      "foot.aria": "页脚链接",
      "compare.aria": "切换确认写入与写入记录示意",
      "compare.demo": "示意",

      "meta.title": "Placr · 给照片补上缺失的地点 | Mac、iPhone 与 iPad 照片地理标记工具",
      "meta.description": "相机拍下了照片，iPhone 记住了地点。Placr 把两者重新连在一起：缺少位置的照片按拍摄时间分组，参考同一时段的照片建议地点，确认后批量写入，随时可以恢复。",
      "nav.how": "分组与建议",
      "nav.write": "确认写入",
      "nav.search": "搜索与同步",
      "nav.slip": "免费与解锁",
      "nav.faq": "常见问题",
      "nav.moreApps": "更多作品",
      "nav.langLabel": "语言",
      "nav.download": "下载",

      "hero.l1": "给照片补上缺失的地点",
      "hero.l2": "让回忆回到它发生的地方",
      "hero.support": "扫描一次照片图库，把缺少位置的照片按拍摄时间分组，参考同一时段的照片建议地点，确认后批量写入。写入留有记录，随时可以恢复。",
      "hero.storeBtn": "在 App Store 查看",
      "hero.moreBtn": "了解工作方式",
      "hero.meta": "Mac 版已在 App Store 上架 · iPhone 与 iPad 版即将推出",

      "ch1.eyebrow": "按时间分组 · 就近参考",
      "ch1.h1": "只处理缺位置的照片",
      "ch1.h2": "按拍摄时间一组组看过来",
      "ch1.sub": "扫描一次「照片」图库，缺少位置的照片（包括视频）按拍摄时间自动分组。按月份逐组审阅，随时停下，下次继续。",
      "ch1.t1a": "从缺少位置的照片开始",
      "ch1.t1b": "按月份浏览，随时停下",
      "ch1.t1desc": "Placr 只挑出没有 GPS 位置的照片，按拍摄时间分组排队。可以按月份、参考条件和处理进度筛选，分错组的照片也能单独移出。",
      "ch1.t2a": "同一时段的照片就是参考",
      "ch1.t2b": "比如同行的 iPhone 照片",
      "ch1.t2desc": "拍摄时间相近、已经带有位置的照片会显示在一旁，直接采用它的位置；也可以在 Apple 地图上搜索地点，或手动输入坐标。",
      "ch1.s1n": "就近给出建议",
      "ch1.s1b": "同一时段已带位置的照片自动成为候选；参考照片直接显示在旁边，一眼就能核对。",
      "ch1.s2n": "逐组确认候选",
      "ch1.s2b": "每组先保存候选位置，批量确认页再检查一遍照片与地点，全对才进入写入。",
      "ch1.s3n": "一次写入，留有记录",
      "ch1.s3b": "批量确认后统一写回「照片」；每次写入都留下本地操作记录，之后随时可以恢复。",

      "ch2.eyebrow": "确认写入 · 记录与恢复",
      "ch2.h1": "写入之前，再确认一次",
      "ch2.h2": "写完之后，随时可恢复",
      "ch2.sub": "Placr 不会自动修改照片。候选位置先逐组保存，批量确认页检查无误后才写入；每次写入都留下操作记录，写错了可以恢复。",
      "ch2.modeBefore": "确认写入",
      "ch2.modeAfter": "写入记录",
      "ch2.c1a": "切换示意，看看写入的走向",
      "ch2.c1b": "确认一次，批量写入，留有记录",
      "ch2.c1desc": "截图演示「确认写入」与「写入记录」两个页面。每批写入都会记录当时的位置与时间，在记录页可以整批恢复。",
      "ch2.pillMeta": "只改位置",
      "ch2.pillSafe": "记录可恢复",
      "ch2.c2n": "只写入位置，照片本身不被改动",
      "ch2.c2b": "拍摄时间、照片内容与其他信息都保持原样，不删除照片。恢复时只有当照片位置仍是当时写入的值才会还原，不会覆盖你后来在「照片」中做出的修改。",

      "ch3.eyebrow": "搜索与坐标 · iCloud 同步",
      "ch3.h1": "建议不合适",
      "ch3.h2": "就自己找到那个地方",
      "ch3.sub": "用 Apple 地图搜索地点，或手动输入坐标；找到的地方会带着拍摄时间一起写入。审阅进度通过 iCloud 在你的设备间同步。",
      "ch3.tag1": "地图搜索 · 手动坐标",
      "ch3.searcha": "在地图上找到正确的地方",
      "ch3.searchb": "搜不到就输入坐标",
      "ch3.searchdesc": "搜索由 Apple 地图完成，结果带地名与坐标；也可以按 WGS-84 手动输入经纬度。写入的位置会保留照片的拍摄时间，并附上大致精度。",
      "ch3.tag2": "iCloud 同步 · 三端接力",
      "ch3.synca": "在 Mac 上开始",
      "ch3.syncb": "在 iPhone 上继续",
      "ch3.syncdesc": "审阅进度与写入记录通过你自己的 iCloud 私有数据库同步，不需要注册账号。Mac、iPhone、iPad 随处继续，照片本身仍留在各自设备上。",

      "slip.eyebrow": "关于使用与隐私",
      "slip.h1": "浏览、建议与搜索免费开放",
      "slip.h2": "保存次数按需解锁",
      "slip.sub": "Placr 不上传你的照片，没有注册账号，没有广告，也没有订阅。免费版每 7 天可以保存 20 个候选组；一次性购买即可永久解除限制。",
      "slip.free": "免费使用",
      "slip.pro": "无限保存",
      "slip.g1": "分组、建议与搜索",
      "slip.g2": "一次购买，永久解除限制",
      "slip.r1n": "按月份浏览与筛选",
      "slip.r1d": "只列出缺少位置的照片，按拍摄时间自动分组；按月份、参考条件和进度筛选都免费。",
      "slip.r2n": "就近参考与地图搜索",
      "slip.r2d": "同一时段的照片给出位置建议；Apple 地图搜索与手动输入坐标同样免费。",
      "slip.r3n": "每 7 天免费保存 20 组候选",
      "slip.r3d": "每组不限张数，失败或取消不计次数；iCloud 进度同步也包含在免费版里。",
      "slip.r4n": "不限次数保存候选组",
      "slip.r4d": "一次性购买后，候选组的保存不再受 7 天 20 组的限制，适合一次补完整个图库。",
      "slip.r5n": "不是订阅",
      "slip.r5d": "一次购买永久有效，不自动续订；价格以 App Store 显示为准。",
      "slip.r6n": "支持家人共享",
      "slip.r6d": "解锁与全家共享，Mac、iPhone、iPad 一并生效。",
      "slip.bar": "Placr 不上传你的照片 · 只写入位置，操作记录与审阅进度只保留在本设备和你自己的 iCloud",

      "faq.eyebrow": "解答与支持",
      "faq.head": "常见问题",
      "faq.q1": "免费可以用多少？",
      "faq.a1": "浏览、分组、就近建议、地图搜索和 iCloud 进度同步都免费；候选组的保存每 7 天可免费进行 20 次，每组不限张数，失败或取消不计次数。一次性购买可永久解除限制。",
      "faq.q2": "照片会被上传到服务器吗？",
      "faq.a2": "不会。照片内容、缩略图和文件名始终留在设备上。地点搜索会把文字和附近地点的坐标发给 Apple 地图；开启 iCloud 同步后，审阅进度只写入你自己的 iCloud 私有数据库。",
      "faq.q3": "写错了位置怎么办？",
      "faq.a3": "每次写入都留有操作记录。在记录页选择那次写入并恢复即可；只有当照片的位置仍是当时写入的值时才会还原，不会覆盖你后来在「照片」中做出的修改。",
      "faq.q4": "会改动照片本身吗？",
      "faq.a4": "只写入位置，不改照片内容、拍摄时间与其他元数据，也不删除照片。没有 GPS 位置的视频同样可以补上位置。",
      "faq.q5": "支持哪些设备与系统版本？",
      "faq.a5": "Placr 适用于 Mac、iPhone 与 iPad，需要 macOS 26、iOS 26 或 iPadOS 26。Mac 版已在 App Store 上架，iPhone 与 iPad 版即将推出；一笔购买在全平台通用。",
      "faq.q6": "隐私政策、使用条款与技术支持在哪里查看？",
      "faq.a6": "你可以在本站查阅",
      "faq.privacy": "隐私政策",
      "faq.support": "技术支持",

      "links.eyebrow": "更多独立作品与友情链接",
      "links.h1": "同样克制、专注的独立工具",
      "links.h2": "本机优先，各自安放生活的一角",
      "links.pickrDesc": "把相册厘清，为新回忆留出空间。按月整理照片与视频，压缩前先对比，按地点重温旅途精选。",
      "links.pickrMeta": "iPhone · iPad",
      "links.siftrDesc": "阅读 AI Agent 为你整理的私人每日简报。连接个人云盘，本地全文检索与离线阅读。",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "拍一下，这顿就记好了。从照片估算一餐热量并与 Apple 健康联动，无需称重与填表。",
      "links.mealrMeta": "iPhone · Apple 健康",
      "links.homeTitle": "个人主站 · chenhk.cn",
      "links.homeDesc": "访问开发者 Haokun Chen 的个人主页，了解全部独立软件作品、研究与技术文章。",

      "cta.h1": "相机拍下了照片",
      "cta.h2": "Placr 帮它回到拍摄的地方",
      "cta.note": "前往 App Store 了解 Placr，适用于 Mac、iPhone 与 iPad",

      "foot.statement": "Placr · 位置写入，由你确认",
      "foot.mainSite": "个人主站",
      "foot.trademark": "Apple、Apple 标志、Mac、iPhone、iPad、iCloud 及 App Store 是 Apple Inc. 在美国及其他国家和地区的注册商标。",
      "foot.legal": "© 2026 Placr · 独立开发",

      "alt.home": "Placr 在 Mac 与 iPhone 上的审阅界面",
      "alt.review": "iPhone 上半屏特写：按月份审阅缺位置的照片",
      "alt.confirm": "iPhone 上半屏特写：为照片组确认候选地点",
      "alt.single": "iPhone 展示待写入批次的确认页面",
      "alt.before": "确认写入页面的示意图",
      "alt.duo": "Placr 在 iPhone 与 Mac 上的更改位置界面",
      "alt.place": "更改位置面板示意",
      "alt.map": "地图选点示意",
      "alt.sync": "iPhone 上半屏特写：iCloud 同步状态"
    },

    "zh-Hant": {
      "nav.aria": "主要導覽",
      "foot.aria": "頁尾連結",
      "compare.aria": "切換確認寫入與寫入記錄示意",
      "compare.demo": "示意",

      "meta.title": "Placr · 為照片補上缺少的地點 | Mac、iPhone 與 iPad 照片地理標記工具",
      "meta.description": "相機拍下了照片，iPhone 記住了地點。Placr 把兩者重新連在一起：缺少位置的照片依拍攝時間分組，參考同一時段的照片建議地點，確認後批次寫入，隨時可以還原。",
      "nav.how": "分組與建議",
      "nav.write": "確認寫入",
      "nav.search": "搜尋與同步",
      "nav.slip": "免費與解鎖",
      "nav.faq": "常見問題",
      "nav.moreApps": "更多作品",
      "nav.langLabel": "語言",
      "nav.download": "下載",

      "hero.l1": "為照片補上缺少的地點",
      "hero.l2": "讓回憶回到它發生的地方",
      "hero.support": "掃描一次照片圖庫，把缺少位置的照片依拍攝時間分組，參考同一時段的照片建議地點，確認後批次寫入。寫入留有記錄，隨時可以還原。",
      "hero.storeBtn": "在 App Store 檢視",
      "hero.moreBtn": "了解工作方式",
      "hero.meta": "Mac 版已在 App Store 上架 · iPhone 與 iPad 版即將推出",

      "ch1.eyebrow": "依時間分組 · 就近參考",
      "ch1.h1": "只處理缺位置的照片",
      "ch1.h2": "依拍攝時間一組組看過來",
      "ch1.sub": "掃描一次「照片」圖庫，缺少位置的照片（包括影片）依拍攝時間自動分組。依月份逐組審閱，隨時停下，下次繼續。",
      "ch1.t1a": "從缺少位置的照片開始",
      "ch1.t1b": "依月份瀏覽，隨時停下",
      "ch1.t1desc": "Placr 只挑出沒有 GPS 位置的照片，依拍攝時間分組排隊。可以依月份、參考條件和處理進度篩選，分錯組的照片也能單獨移出。",
      "ch1.t2a": "同一時段的照片就是參考",
      "ch1.t2b": "比如同行的 iPhone 照片",
      "ch1.t2desc": "拍攝時間相近、已經帶有位置的照片會顯示在一旁，直接採用它的位置；也可以在 Apple 地圖上搜尋地點，或手動輸入座標。",
      "ch1.s1n": "就近給出建議",
      "ch1.s1b": "同一時段已帶位置的照片自動成為候選；參考照片直接顯示在旁邊，一眼就能核對。",
      "ch1.s2n": "逐組確認候選",
      "ch1.s2b": "每組先儲存候選位置，批次確認頁再檢查一遍照片與地點，全對才進入寫入。",
      "ch1.s3n": "一次寫入，留有記錄",
      "ch1.s3b": "批次確認後統一寫回「照片」；每次寫入都留下本機操作記錄，之後隨時可以還原。",

      "ch2.eyebrow": "確認寫入 · 記錄與還原",
      "ch2.h1": "寫入之前，再確認一次",
      "ch2.h2": "寫完之後，隨時可還原",
      "ch2.sub": "Placr 不會自動修改照片。候選位置先逐組儲存，批次確認頁檢查無誤後才寫入；每次寫入都留下操作記錄，寫錯了可以還原。",
      "ch2.modeBefore": "確認寫入",
      "ch2.modeAfter": "寫入記錄",
      "ch2.c1a": "切換示意，看看寫入的走向",
      "ch2.c1b": "確認一次，批次寫入，留有記錄",
      "ch2.c1desc": "截圖演示「確認寫入」與「寫入記錄」兩個頁面。每批寫入都會記錄當時的位置與時間，在記錄頁可以整批還原。",
      "ch2.pillMeta": "只改位置",
      "ch2.pillSafe": "記錄可還原",
      "ch2.c2n": "只寫入位置，照片本身不被改動",
      "ch2.c2b": "拍攝時間、照片內容與其他資訊都保持原樣，不刪除照片。還原時只有當照片位置仍是當時寫入的值才會還原，不會覆蓋你後來在「照片」中做出的修改。",

      "ch3.eyebrow": "搜尋與座標 · iCloud 同步",
      "ch3.h1": "建議不合適",
      "ch3.h2": "就自己找到那個地方",
      "ch3.sub": "用 Apple 地圖搜尋地點，或手動輸入座標；找到的地方會帶著拍攝時間一起寫入。審閱進度透過 iCloud 在你的裝置間同步。",
      "ch3.tag1": "地圖搜尋 · 手動座標",
      "ch3.searcha": "在地圖上找到正確的地方",
      "ch3.searchb": "搜尋不到就輸入座標",
      "ch3.searchdesc": "搜尋由 Apple 地圖完成，結果帶地名與座標；也可以按 WGS-84 手動輸入經緯度。寫入的位置會保留照片的拍攝時間，並附上大致精度。",
      "ch3.tag2": "iCloud 同步 · 三端接力",
      "ch3.synca": "在 Mac 上開始",
      "ch3.syncb": "在 iPhone 上繼續",
      "ch3.syncdesc": "審閱進度與寫入記錄透過你自己的 iCloud 私有資料庫同步，不需要註冊帳號。Mac、iPhone、iPad 隨處繼續，照片本身仍留在各自裝置上。",

      "slip.eyebrow": "關於使用與隱私",
      "slip.h1": "瀏覽、建議與搜尋免費開放",
      "slip.h2": "儲存次數按需解鎖",
      "slip.sub": "Placr 不會上傳你的照片，沒有註冊帳號，沒有廣告，也沒有訂閱。免費版每 7 天可以儲存 20 個候選群組；一次性購買即可永久解除限制。",
      "slip.free": "免費使用",
      "slip.pro": "無限儲存",
      "slip.g1": "分組、建議與搜尋",
      "slip.g2": "一次購買，永久解除限制",
      "slip.r1n": "依月份瀏覽與篩選",
      "slip.r1d": "只列出缺少位置的照片，依拍攝時間自動分組；依月份、參考條件和進度篩選都免費。",
      "slip.r2n": "就近參考與地圖搜尋",
      "slip.r2d": "同一時段的照片給出位置建議；Apple 地圖搜尋與手動輸入座標同樣免費。",
      "slip.r3n": "每 7 天免費儲存 20 組候選",
      "slip.r3d": "每組不限張數，失敗或取消不計次數；iCloud 進度同步也包含在免費版裡。",
      "slip.r4n": "不限次數儲存候選群組",
      "slip.r4d": "一次性購買後，候選群組的儲存不再受 7 天 20 組的限制，適合一次補完整個圖庫。",
      "slip.r5n": "不是訂閱",
      "slip.r5d": "一次購買永久有效，不自動續訂；價格以 App Store 顯示為準。",
      "slip.r6n": "支援家人共享",
      "slip.r6d": "解鎖與全家共享，Mac、iPhone、iPad 一併生效。",
      "slip.bar": "Placr 不會上傳你的照片 · 只寫入位置，操作記錄與審閱進度只保留在本裝置和你自己的 iCloud",

      "faq.eyebrow": "解答與支援",
      "faq.head": "常見問題",
      "faq.q1": "免費可以用多少？",
      "faq.a1": "瀏覽、分組、就近建議、地圖搜尋和 iCloud 進度同步都免費；候選群組的儲存每 7 天可免費進行 20 次，每組不限張數，失敗或取消不計次數。一次性購買可永久解除限制。",
      "faq.q2": "照片會被上傳到伺服器嗎？",
      "faq.a2": "不會。照片內容、縮圖和檔名始終留在裝置上。地點搜尋會把文字和附近地點的座標發給 Apple 地圖；開啟 iCloud 同步後，審閱進度只寫入你自己的 iCloud 私有資料庫。",
      "faq.q3": "寫錯了位置怎麼辦？",
      "faq.a3": "每次寫入都留有操作記錄。在記錄頁選擇那次寫入並還原即可；只有當照片的位置仍是當時寫入的值時才會還原，不會覆蓋你後來在「照片」中做出的修改。",
      "faq.q4": "會改動照片本身嗎？",
      "faq.a4": "只寫入位置，不改照片內容、拍攝時間與其他元資料，也不刪除照片。沒有 GPS 位置的影片同樣可以補上位置。",
      "faq.q5": "支援哪些裝置與系統版本？",
      "faq.a5": "Placr 適用於 Mac、iPhone 與 iPad，需要 macOS 26、iOS 26 或 iPadOS 26。Mac 版已在 App Store 上架，iPhone 與 iPad 版即將推出；一筆購買在全平台通用。",
      "faq.q6": "隱私權政策、使用條款與技術支援在哪裡查看？",
      "faq.a6": "你可以在本站查閱",
      "faq.privacy": "隱私權政策",
      "faq.support": "技術支援",

      "links.eyebrow": "更多獨立作品與友情連結",
      "links.h1": "同樣克制、專注的獨立工具",
      "links.h2": "本機優先，各自安放生活的一角",
      "links.pickrDesc": "把相簿釐清，為新回憶留出空間。按月整理照片與影片，壓縮前先對比，按地點重溫旅途精選。",
      "links.pickrMeta": "iPhone · iPad",
      "links.siftrDesc": "閱讀 AI Agent 為你整理的私人每日簡報。連接個人雲端空間，本機全文檢索與離線閱讀。",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "拍一下，這餐就記好了。從照片估算一餐熱量並與 Apple 健康連動，無需秤重與填表。",
      "links.mealrMeta": "iPhone · Apple 健康",
      "links.homeTitle": "個人主站 · chenhk.cn",
      "links.homeDesc": "造訪開發者 Haokun Chen 的個人主頁，了解全部獨立軟體作品、研究與技術文章。",

      "cta.h1": "相機拍下了照片",
      "cta.h2": "Placr 幫它回到拍攝的地方",
      "cta.note": "前往 App Store 了解 Placr，適用於 Mac、iPhone 與 iPad",

      "foot.statement": "Placr · 位置寫入，由你確認",
      "foot.mainSite": "個人主站",
      "foot.trademark": "Apple、Apple 標誌、Mac、iPhone、iPad、iCloud 及 App Store 是 Apple Inc. 在美國及其他國家和地區的註冊商標。",
      "foot.legal": "© 2026 Placr · 獨立開發",

      "alt.home": "Placr 在 Mac 與 iPhone 上的審閱介面",
      "alt.review": "iPhone 上半螢幕特寫：依月份審閱缺位置的照片",
      "alt.confirm": "iPhone 上半螢幕特寫：為照片群組確認候選地點",
      "alt.single": "iPhone 展示待寫入批次的確認頁面",
      "alt.before": "確認寫入頁面的示意圖",
      "alt.duo": "Placr 在 iPhone 與 Mac 上的更改位置介面",
      "alt.place": "更改位置面板示意",
      "alt.map": "地圖選點示意",
      "alt.sync": "iPhone 上半螢幕特寫：iCloud 同步狀態"
    },

    "zh-HK": {
      "nav.aria": "主導覽",
      "foot.aria": "頁尾連結",
      "compare.aria": "切換確認寫入與寫入記錄示意",
      "compare.demo": "示意",

      "meta.title": "Placr · 為相片補上缺少的地點 | Mac、iPhone 與 iPad 相片地理標記工具",
      "meta.description": "相機拍下了相片，iPhone 記住了地點。Placr 把兩者重新連在一起：缺少位置的相片按拍攝時間分組，參考同一時段的相片建議地點，確認後批次寫入，隨時可以還原。",
      "nav.how": "分組與建議",
      "nav.write": "確認寫入",
      "nav.search": "搜尋與同步",
      "nav.slip": "免費與解鎖",
      "nav.faq": "常見問題",
      "nav.moreApps": "更多作品",
      "nav.langLabel": "語言",
      "nav.download": "下載",

      "hero.l1": "為相片補上缺少的地點",
      "hero.l2": "讓回憶返到它發生嘅地方",
      "hero.support": "掃描一次相片圖庫，把缺少位置的相片按拍攝時間分組，參考同一時段的相片建議地點，確認後批次寫入。寫入留有記錄，隨時可以還原。",
      "hero.storeBtn": "喺 App Store 檢視",
      "hero.moreBtn": "了解運作方式",
      "hero.meta": "Mac 版已喺 App Store 上架 · iPhone 與 iPad 版即將推出",

      "ch1.eyebrow": "按時間分組 · 就近參考",
      "ch1.h1": "只處理缺位置的相片",
      "ch1.h2": "按拍攝時間一組組睇過",
      "ch1.sub": "掃描一次「相片」圖庫，缺少位置的相片（包括影片）按拍攝時間自動分組。按月份逐組審閱，隨時停低，下次繼續。",
      "ch1.t1a": "由缺少位置的相片開始",
      "ch1.t1b": "按月份瀏覽，隨時停低",
      "ch1.t1desc": "Placr 只挑出冇 GPS 位置的相片，按拍攝時間分組排隊。可以按月份、參考條件同處理進度篩選，分錯組嘅相片亦可以單獨移出。",
      "ch1.t2a": "同一時段嘅相片就係參考",
      "ch1.t2b": "例如同行嘅 iPhone 相片",
      "ch1.t2desc": "拍攝時間相近、已經帶位置嘅相片會顯示喺一旁，直接採用佢嘅位置；亦可以喺 Apple 地圖上搜尋地點，或者手動輸入座標。",
      "ch1.s1n": "就近畀出建議",
      "ch1.s1b": "同一時段已帶位置嘅相片自動成為候選；參考相片直接顯示喺旁邊，一眼就可以核對。",
      "ch1.s2n": "逐組確認候選",
      "ch1.s2b": "每組先儲存候選位置，批次確認頁再檢查一次相片同地點，全部正確先至寫入。",
      "ch1.s3n": "一次寫入，留有記錄",
      "ch1.s3b": "批次確認後統一寫回「相片」；每次寫入都留低本機操作記錄，之後隨時可以還原。",

      "ch2.eyebrow": "確認寫入 · 記錄與還原",
      "ch2.h1": "寫入之前，再確認一次",
      "ch2.h2": "寫完之後，隨時可還原",
      "ch2.sub": "Placr 唔會自動修改相片。候選位置先逐組儲存，批次確認頁檢查無誤先至寫入；每次寫入都留有操作記錄，寫錯咗可以還原。",
      "ch2.modeBefore": "確認寫入",
      "ch2.modeAfter": "寫入記錄",
      "ch2.c1a": "切換示意，睇下寫入嘅走向",
      "ch2.c1b": "確認一次，批次寫入，留有記錄",
      "ch2.c1desc": "截圖演示「確認寫入」同「寫入記錄」兩個頁面。每批寫入都會記錄當時嘅位置同時間，喺記錄頁可以成批還原。",
      "ch2.pillMeta": "只改位置",
      "ch2.pillSafe": "記錄可還原",
      "ch2.c2n": "只寫入位置，相片本身唔會被改動",
      "ch2.c2b": "拍攝時間、相片內容同其他資料都保持原樣，唔會刪除相片。還原時只有當相片位置仍然係當時寫入嘅值先會還原，唔會覆蓋你之後喺「相片」做出嘅修改。",

      "ch3.eyebrow": "搜尋與座標 · iCloud 同步",
      "ch3.h1": "建議唔啱用",
      "ch3.h2": "就自己搵返嗰個地方",
      "ch3.sub": "用 Apple 地圖搜尋地點，或者手動輸入座標；搵到嘅地方會帶住拍攝時間一齊寫入。審閱進度透過 iCloud 喺你嘅裝置之間同步。",
      "ch3.tag1": "地圖搜尋 · 手動座標",
      "ch3.searcha": "喺地圖上搵返正確嘅地方",
      "ch3.searchb": "搜尋唔到就輸入座標",
      "ch3.searchdesc": "搜尋由 Apple 地圖完成，結果附有地名同座標；亦可以按 WGS-84 手動輸入經緯度。寫入嘅位置會保留相片嘅拍攝時間，並附上大致精度。",
      "ch3.tag2": "iCloud 同步 · 三端接力",
      "ch3.synca": "喺 Mac 開始",
      "ch3.syncb": "喺 iPhone 繼續",
      "ch3.syncdesc": "審閱進度同寫入記錄透過你自己嘅 iCloud 私有資料庫同步，唔使註冊帳戶。Mac、iPhone、iPad 隨時接續，相片本身仍然留喺各自裝置。",

      "slip.eyebrow": "關於使用與私隱",
      "slip.h1": "瀏覽、建議與搜尋免費開放",
      "slip.h2": "儲存次數按需要解鎖",
      "slip.sub": "Placr 唔會上載你嘅相片，冇註冊帳戶，冇廣告，亦冇訂閱。免費版每 7 日可以儲存 20 個候選群組；一次性購買即可以永久解除限制。",
      "slip.free": "免費使用",
      "slip.pro": "無限儲存",
      "slip.g1": "分組、建議與搜尋",
      "slip.g2": "一次購買，永久解除限制",
      "slip.r1n": "按月份瀏覽與篩選",
      "slip.r1d": "只列出缺少位置嘅相片，按拍攝時間自動分組；按月份、參考條件同進度篩選都免費。",
      "slip.r2n": "就近參考與地圖搜尋",
      "slip.r2d": "同一時段嘅相片畀出位置建議；Apple 地圖搜尋同手動輸入座標同樣免費。",
      "slip.r3n": "每 7 日免費儲存 20 組候選",
      "slip.r3d": "每組不限張數，失敗或者取消唔計次數；iCloud 進度同步都包括喺免費版入面。",
      "slip.r4n": "不限次數儲存候選群組",
      "slip.r4d": "一次性購買之後，候選群組嘅儲存唔再受 7 日 20 組嘅限制，適合一次過補完整個圖庫。",
      "slip.r5n": "唔係訂閱",
      "slip.r5d": "一次購買永久有效，唔會自動續訂；價格以 App Store 顯示為準。",
      "slip.r6n": "支援家人共享",
      "slip.r6d": "解鎖同全家共享，Mac、iPhone、iPad 一併生效。",
      "slip.bar": "Placr 唔會上載你嘅相片 · 只寫入位置，操作記錄同審閱進度只留喺本裝置同你自己嘅 iCloud",

      "faq.eyebrow": "解答與技術支援",
      "faq.head": "常見問題",
      "faq.q1": "免費可以用幾多？",
      "faq.a1": "瀏覽、分組、就近建議、地圖搜尋同 iCloud 進度同步都免費；候選群組嘅儲存每 7 日可免費進行 20 次，每組不限張數，失敗或者取消唔計次數。一次性購買可以永久解除限制。",
      "faq.q2": "相片會被上載到伺服器嗎？",
      "faq.a2": "唔會。相片內容、縮圖同檔名一直留喺裝置上。地點搜尋會把文字同附近地點嘅座標發畀 Apple 地圖；開啟 iCloud 同步之後，審閱進度只會寫入你自己嘅 iCloud 私有資料庫。",
      "faq.q3": "寫錯咗位置點算？",
      "faq.a3": "每次寫入都留有操作記錄。喺記錄頁揀返嗰次寫入仲原就得；只有當相片嘅位置仍然係當時寫入嘅值先會還原，唔會覆蓋你之後喺「相片」做出嘅修改。",
      "faq.q4": "會改動相片本身嗎？",
      "faq.a4": "只寫入位置，唔改相片內容、拍攝時間同其他元資料，亦唔會刪除相片。冇 GPS 位置嘅影片同樣可以補返位置。",
      "faq.q5": "支援邊啲裝置同系統版本？",
      "faq.a5": "Placr 適用於 Mac、iPhone 同 iPad，需要 macOS 26、iOS 26 或者 iPadOS 26。Mac 版已喺 App Store 上架，iPhone 同 iPad 版即將推出；一筆購買全平台通用。",
      "faq.q6": "私隱政策、使用條款同技術支援喺邊度睇？",
      "faq.a6": "你可以喺本站查閱",
      "faq.privacy": "私隱政策",
      "faq.support": "技術支援",

      "links.eyebrow": "更多獨立作品與友情連結",
      "links.h1": "同樣克制、專注嘅獨立工具",
      "links.h2": "本機優先，各自安放生活嘅一角",
      "links.pickrDesc": "把相簿釐清，為新回憶留出空間。按月整理相片與影片，壓縮前先對比，按地點重溫旅途精選。",
      "links.pickrMeta": "iPhone · iPad",
      "links.siftrDesc": "閱讀 AI Agent 為你整理嘅私人每日簡報。連接個人雲端，本機全文檢索與離線閱讀。",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "影一下，呢餐就記好。從相片估算一餐熱量並同 Apple 健康聯動，唔使磅重同填表。",
      "links.mealrMeta": "iPhone · Apple 健康",
      "links.homeTitle": "個人主站 · chenhk.cn",
      "links.homeDesc": "到訪開發者 Haokun Chen 嘅個人主頁，了解全部獨立軟件作品、研究同技術文章。",

      "cta.h1": "相機拍下咗相片",
      "cta.h2": "Placr 幫佢返到拍攝嘅地方",
      "cta.note": "前往 App Store 了解 Placr，適用於 Mac、iPhone 與 iPad",

      "foot.statement": "Placr · 位置寫入，由你確認",
      "foot.mainSite": "個人主站",
      "foot.trademark": "Apple、Apple 標誌、Mac、iPhone、iPad、iCloud 及 App Store 是 Apple Inc. 在美國及其他國家和地區的註冊商標。",
      "foot.legal": "© 2026 Placr · 獨立開發",

      "alt.home": "Placr 喺 Mac 同 iPhone 上嘅審閱介面",
      "alt.review": "iPhone 上半螢幕特寫：按月份審閱缺位置嘅相片",
      "alt.confirm": "iPhone 上半螢幕特寫：為相片群組確認候選地點",
      "alt.single": "iPhone 展示待寫入批次嘅確認頁面",
      "alt.before": "確認寫入頁面嘅示意圖",
      "alt.duo": "Placr 喺 iPhone 同 Mac 上嘅更改位置介面",
      "alt.place": "更改位置面板示意",
      "alt.map": "地圖選點示意",
      "alt.sync": "iPhone 上半螢幕特寫：iCloud 同步狀態"
    },

    "ja": {
      "nav.aria": "メインナビゲーション",
      "foot.aria": "フッターリンク",
      "compare.aria": "書き込み確認と書き込み記録の例を切り替え",
      "compare.demo": "例",

      "meta.title": "Placr · 写真に足りない場所を戻す | Mac・iPhone・iPad 写真ジオタグツール",
      "meta.description": "カメラは写真を撮り、iPhoneは場所を覚えていた。Placrはその2つをもう一度つなぎます。位置情報のない写真を撮影時刻でグループ化し、同じ時間帯の写真から場所を提案。確認してからまとめて書き込み、いつでも元に戻せます。",
      "nav.how": "グループと提案",
      "nav.write": "書き込み確認",
      "nav.search": "検索と同期",
      "nav.slip": "無料と解除",
      "nav.faq": "よくある質問",
      "nav.moreApps": "その他のアプリ",
      "nav.langLabel": "言語",
      "nav.download": "入手",

      "hero.l1": "写真に足りない場所を戻す",
      "hero.l2": "思い出を、その場所へ帰す",
      "hero.support": "フォトライブラリを一度だけスキャンし、位置情報のない写真を撮影時刻でグループ化。同じ時間帯の写真を手がかりに場所を提案し、確認してからまとめて書き込みます。書き込みは記録され、いつでも元に戻せます。",
      "hero.storeBtn": "App Store で見る",
      "hero.moreBtn": "使い方をみる",
      "hero.meta": "Mac 版は App Store で配信中 · iPhone・iPad 版は近日公開",

      "ch1.eyebrow": "撮影時刻でグループ化 · 近くの写真から提案",
      "ch1.h1": "位置情報のない写真だけを",
      "ch1.h2": "撮影時刻ごとに、ひとグループずつ",
      "ch1.sub": "「写真」ライブラリを一度スキャンすると、位置情報のない写真（動画も）が撮影時刻ごとに自動でグループ化されます。月ごとに確認し、いつでも中断して続きから再開できます。",
      "ch1.t1a": "位置情報のない写真から始める",
      "ch1.t1b": "月ごとに眺めて、いつでも中断",
      "ch1.t1desc": "Placr は GPS 位置情報のない写真だけを取り上げ、撮影時刻ごとに並べます。月・参照条件・処理状況で絞り込め、誤ったグループに入った写真は個別に外せます。",
      "ch1.t2a": "同じ時間帯の写真が手がかり",
      "ch1.t2b": "たとえば同行の iPhone の写真",
      "ch1.t2desc": "撮影時刻が近く、すでに位置情報のある写真がそばに表示され、その場所をそのまま採用できます。Apple マップで場所を検索したり、座標を手入力したりもできます。",
      "ch1.s1n": "近くの写真から提案",
      "ch1.s1b": "同じ時間帯の位置情報付き写真が自動で候補に。参照写真がすぐ横に表示されるので、ひと目で確認できます。",
      "ch1.s2n": "グループごとに候補を確認",
      "ch1.s2b": "まず各グループの候補場所を保存し、一括確認画面で写真と場所をもう一度チェックしてから書き込みへ。",
      "ch1.s3n": "まとめて書き込み、記録を残す",
      "ch1.s3b": "一括確認後に「写真」へ書き込み。毎回の書き込みは端末内に記録され、あとからいつでも元に戻せます。",

      "ch2.eyebrow": "書き込み確認 · 記録と復元",
      "ch2.h1": "書き込む前に、もう一度確認",
      "ch2.h2": "書き込んだあとも、いつでも戻せる",
      "ch2.sub": "Placr が写真を自動で書き換えることはありません。候補場所をグループごとに保存し、一括確認画面で確認してはじめて書き込まれます。書き込みは毎回記録され、間違えても元に戻せます。",
      "ch2.modeBefore": "書き込み確認",
      "ch2.modeAfter": "書き込み記録",
      "ch2.c1a": "切り替えて、書き込みの流れをみる",
      "ch2.c1b": "確認して、まとめて書き込み、記録を残す",
      "ch2.c1desc": "「書き込み確認」と「書き込み記録」の2つの画面の例です。書き込みごとに当時の場所と日時が記録され、記録画面からまとめて元に戻せます。",
      "ch2.pillMeta": "場所だけ書き込み",
      "ch2.pillSafe": "記録から復元",
      "ch2.c2n": "書き込むのは場所だけ。写真そのものは変わらない",
      "ch2.c2b": "撮影日時や写真の内容、ほかの情報はそのまま。写真を削除することもありません。復元は、写真の場所が当時書き込んだ値のままのときだけ行われ、あとで「写真」で加えた変更を上書きしません。",

      "ch3.eyebrow": "検索と座標 · iCloud 同期",
      "ch3.h1": "提案が合わないときは",
      "ch3.h2": "自分でその場所を探せばいい",
      "ch3.sub": "Apple マップで場所を検索するか、座標を手入力します。見つけた場所は撮影日時と一緒に書き込まれ、審閲の進み具合は iCloud で端末間を同期します。",
      "ch3.tag1": "マップ検索 · 座標入力",
      "ch3.searcha": "地図の上で正しい場所を見つける",
      "ch3.searchb": "検索で出なければ座標を入力",
      "ch3.searchdesc": "検索は Apple マップが担い、結果には地名と座標が付きます。WGS-84 の緯度経度を手入力することもできます。書き込んだ場所には写真の撮影日時が保たれ、おおよその精度も付きます。",
      "ch3.tag2": "iCloud 同期 · 3台でつづく",
      "ch3.synca": "Mac で始めて",
      "ch3.syncb": "iPhone でつづける",
      "ch3.syncdesc": "審閲の進み具合と書き込み記録は、あなた自身の iCloud プライベートデータベースに同期されます。アカウント登録は不要。Mac・iPhone・iPad のどれでも続きから。写真そのものは各自の端末に残ります。",

      "slip.eyebrow": "ご利用とプライバシー",
      "slip.h1": "閲覧・提案・検索は無料",
      "slip.h2": "保存回数は必要な分だけ解除",
      "slip.sub": "Placr があなたの写真をアップロードすることはありません。アカウント登録も広告もサブスクリプションもありません。無料版は7日ごとに20グループの候補を保存でき、買い切り購入で永久に制限を解除できます。",
      "slip.free": "無料で利用",
      "slip.pro": "無制限保存",
      "slip.g1": "グループ化・提案・検索",
      "slip.g2": "一度の購入で、永久に制限を解除",
      "slip.r1n": "月ごとの閲覧と絞り込み",
      "slip.r1d": "位置情報のない写真だけを撮影時刻で自動グループ化。月・参照条件・進み具合での絞り込みも無料です。",
      "slip.r2n": "近くの写真からの提案とマップ検索",
      "slip.r2d": "同じ時間帯の写真が場所を提案。Apple マップの検索と座標の手入力も無料です。",
      "slip.r3n": "7日ごとに20グループの候補を無料保存",
      "slip.r3d": "1グループの枚数は無制限で、失敗やキャンセルは数えません。iCloud 進行同期も無料版に含まれます。",
      "slip.r4n": "保存回数の制限なし",
      "slip.r4d": "買い切り購入のあとは「7日で20グループ」の制限がなくなり、ライブラリ全体を一気に埋めるのに向いています。",
      "slip.r5n": "サブスクリプションではありません",
      "slip.r5d": "一度の購入で永久に有効。自動更新はありません。価格は App Store の表示に準じます。",
      "slip.r6n": "ファミリー共有に対応",
      "slip.r6d": "解除は家族と共有され、Mac・iPhone・iPad すべてで有効です。",
      "slip.bar": "Placr は写真をアップロードしません · 書き込むのは場所だけで、操作記録と審閲の進み具合はこの端末とあなた自身の iCloud にのみ保存",

      "faq.eyebrow": "サポートと回答",
      "faq.head": "よくある質問",
      "faq.q1": "無料でどこまで使えますか？",
      "faq.a1": "閲覧、グループ化、近くの写真からの提案、マップ検索、iCloud 進行同期はすべて無料です。候補グループの保存は7日ごとに20回まで無料で、1回の枚数は無制限、失敗やキャンセルは数えません。買い切り購入で永久に制限を解除できます。",
      "faq.q2": "写真がサーバーにアップロードされますか？",
      "faq.a2": "されません。写真の内容、サムネイル、ファイル名は端末に残ります。場所検索では入力した文字と近くの場所の座標を Apple マップへ送ります。iCloud 同期をオンにすると、審閲の進み具合はあなた自身の iCloud プライベートデータベースにのみ書き込まれます。",
      "faq.q3": "間違った場所を書き込んだら？",
      "faq.a3": "書き込みは毎回操作記録に残ります。記録画面でその書き込みを選んで元に戻せます。写真の場所が当時書き込んだ値のままのときだけ戻されるので、あとで「写真」で加えた変更が上書きされることはありません。",
      "faq.q4": "写真そのものは変わりますか？",
      "faq.a4": "書き込むのは場所だけ。写真の内容、撮影日時、ほかのメタデータは変わらず、削除もされません。GPS 位置情報のない動画にも場所を補えます。",
      "faq.q5": "対応機種と OS は？",
      "faq.a5": "Mac、iPhone、iPad に対応し、macOS 26・iOS 26・iPadOS 26 が必要です。Mac 版は App Store で配信中、iPhone・iPad 版は近日公開。購入は全プラットフォーム共通です。",
      "faq.q6": "プライバシーポリシーや利用規約はどこにありますか？",
      "faq.a6": "サイト内の ",
      "faq.privacy": "プライバシーポリシー",
      "faq.support": "サポートページ",

      "links.eyebrow": "その他の個人開発アプリ",
      "links.h1": "同じくシンプルで、集中できる独立ツール",
      "links.h2": "端末内処理を大切にしたアプリシリーズ",
      "links.pickrDesc": "写真を整えて、新しい思い出に余白を。月ごとに写真と動画を整理し、圧縮前に比較、場所別に旅のセレクションを。",
      "links.pickrMeta": "iPhone · iPad",
      "links.siftrDesc": "AI エージェントがまとめた日刊ブリーフィングを快適に読むリーダー。個人クラウド連携、端末内全文検索とオフライン閲覧。",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "撮るだけで食事記録。写真からカロリーを推定し Apple ヘルスケアと連携。計量や手入力は不要です。",
      "links.mealrMeta": "iPhone · ヘルスケア連携",
      "links.homeTitle": "個人サイト · chenhk.cn",
      "links.homeDesc": "開発者 Haokun Chen のホームページ。すべての個人開発アプリ、研究、技術記事をご覧いただけます。",

      "cta.h1": "カメラは写真を撮り",
      "cta.h2": "Placr がそれを撮った場所へ帰す",
      "cta.note": "App Store で Placr をチェック（Mac・iPhone・iPad 対応）",

      "foot.statement": "Placr · 書き込むかどうかは、あなたが決める",
      "foot.mainSite": "開発者サイト",
      "foot.trademark": "Apple、Apple ロゴ、Mac、iPhone、iPad、iCloud、App Store は、米国およびその他の国と地域で登録された Apple Inc. の商標です。",
      "foot.legal": "© 2026 Placr · 個人開発",

      "alt.home": "Mac と iPhone での Placr の審閲画面",
      "alt.review": "iPhone 画面上半のクローズアップ：月ごとに位置情報のない写真を審閲",
      "alt.confirm": "iPhone 画面上半のクローズアップ：グループの候補場所を確認",
      "alt.single": "書き込み待ちバッチの確認画面（iPhone）",
      "alt.before": "書き込み確認画面のイメージ",
      "alt.duo": "iPhone と Mac での Placr の場所変更画面",
      "alt.place": "場所変更パネルのイメージ",
      "alt.map": "マップで場所を選ぶ様子のイメージ",
      "alt.sync": "iPhone 画面上半のクローズアップ：iCloud 同期の状態"
    },

    "en": {
      "nav.aria": "Main navigation",
      "foot.aria": "Footer links",
      "compare.aria": "Switch between the confirm and record illustrations",
      "compare.demo": "Demo",

      "meta.title": "Placr · Give photos their missing place | Photo geotagging for Mac, iPhone, and iPad",
      "meta.description": "Your camera took the photos. Your iPhone remembered where. Placr groups photos without a location by capture time, suggests places using nearby photos, and writes only after you confirm — with a record you can restore anytime.",
      "nav.how": "Groups & Suggestions",
      "nav.write": "Confirm & Write",
      "nav.search": "Search & Sync",
      "nav.slip": "Free & Unlock",
      "nav.faq": "FAQ",
      "nav.moreApps": "More Apps",
      "nav.langLabel": "Language",
      "nav.download": "Download",

      "hero.l1": "Give photos their missing place",
      "hero.l2": "Bring memories back to where they happened",
      "hero.support": "Placr scans your photo library once, groups photos without a location by capture time, suggests places using photos taken around the same time, and writes them in batches after you confirm. Every write leaves a record you can restore.",
      "hero.storeBtn": "View on the App Store",
      "hero.moreBtn": "How it works",
      "hero.meta": "Available on the App Store for Mac · iPhone and iPad coming soon",

      "ch1.eyebrow": "Grouped by Time · Nearby References",
      "ch1.h1": "Only the photos missing a location",
      "ch1.h2": "walked through group by group",
      "ch1.sub": "One scan of your Photos library, and photos without a location — videos included — are grouped automatically by capture time. Review month by month; pause anytime and continue later.",
      "ch1.t1a": "Start with photos missing a location",
      "ch1.t1b": "Browse by month, pause anytime",
      "ch1.t1desc": "Placr picks out only photos without GPS data and queues them up by capture time. Filter by month, reference conditions, and progress; move a misfiled photo out of its group anytime.",
      "ch1.t2a": "Photos from the same stretch of time are the reference",
      "ch1.t2b": "like the iPhone shots from your trip",
      "ch1.t2desc": "Photos taken nearby in time that already have a location appear right alongside — adopt their place as is, search Apple Maps, or type in coordinates yourself.",
      "ch1.s1n": "Suggestions from nearby photos",
      "ch1.s1b": "Photos from the same stretch of time become candidates automatically, shown right next to the group for a quick check.",
      "ch1.s2n": "Confirm each group's candidate",
      "ch1.s2b": "Save a candidate place for each group, then double-check photos and places on the batch confirmation screen before anything is written.",
      "ch1.s3n": "One write, on the record",
      "ch1.s3b": "After batch confirmation, everything is written back to Photos at once; each write leaves a local record you can restore later.",

      "ch2.eyebrow": "Confirm & Write · Records & Restore",
      "ch2.h1": "One more look before writing",
      "ch2.h2": "one click to restore after",
      "ch2.sub": "Placr never modifies photos on its own. Candidate places are saved group by group and written only after the batch confirmation screen checks out. Every write leaves a record, so mistakes can be undone.",
      "ch2.modeBefore": "Confirm",
      "ch2.modeAfter": "Record",
      "ch2.c1a": "Flip the switch to follow a write",
      "ch2.c1b": "Confirm once, write in bulk, keep the record",
      "ch2.c1desc": "These screenshots show the Confirm and Record screens. Each write records the places and time as they were, and a whole batch can be restored from the record.",
      "ch2.pillMeta": "Location only",
      "ch2.pillSafe": "Restorable",
      "ch2.c2n": "Only the location is written; the photo itself is untouched",
      "ch2.c2b": "Capture time, photo content, and other metadata stay exactly as they were, and nothing is deleted. A restore only happens when the photo's location still matches the written value, so later edits you made in Photos are never overwritten.",

      "ch3.eyebrow": "Search & Coordinates · iCloud Sync",
      "ch3.h1": "When a suggestion doesn't fit",
      "ch3.h2": "find the place yourself",
      "ch3.sub": "Search Apple Maps or type in coordinates; the place you find is written together with the photo's capture time. Review progress syncs across your devices over iCloud.",
      "ch3.tag1": "Map Search · Manual Coordinates",
      "ch3.searcha": "Find the right place on the map",
      "ch3.searchb": "or type in coordinates",
      "ch3.searchdesc": "Search is powered by Apple Maps, with place names and coordinates in the results; you can also enter WGS-84 latitude and longitude by hand. A written location keeps the photo's capture time and carries an approximate accuracy.",
      "ch3.tag2": "iCloud Sync · Pick up on any device",
      "ch3.synca": "Start on your Mac",
      "ch3.syncb": "continue on your iPhone",
      "ch3.syncdesc": "Review progress and write records sync through your own iCloud private database — no account required. Continue on Mac, iPhone, or iPad; the photos themselves stay on each device.",

      "slip.eyebrow": "Access & Privacy",
      "slip.h1": "Browsing, suggestions, and search are free",
      "slip.h2": "unlock saves when you need them",
      "slip.sub": "Placr doesn't upload your photos. No accounts, no ads, no subscriptions. The free version saves 20 candidate groups every 7 days; a one-time purchase removes the limit forever.",
      "slip.free": "Free Access",
      "slip.pro": "Unlimited Saves",
      "slip.g1": "Grouping, suggestions & search",
      "slip.g2": "One purchase, unlimited forever",
      "slip.r1n": "Browse and filter by month",
      "slip.r1d": "Only photos without a location, grouped automatically by capture time; filtering by month, reference conditions, and progress is free too.",
      "slip.r2n": "Nearby references & map search",
      "slip.r2d": "Photos from the same stretch of time suggest places; Apple Maps search and manual coordinates are free as well.",
      "slip.r3n": "20 candidate groups free every 7 days",
      "slip.r3d": "No photo limit per group, and failed or canceled saves don't count. iCloud progress sync is part of the free version.",
      "slip.r4n": "Save candidate groups without limits",
      "slip.r4d": "After a one-time purchase, the 20-per-7-days limit is gone — built for filling in an entire library in one go.",
      "slip.r5n": "Not a subscription",
      "slip.r5d": "One purchase, valid forever, no auto-renewal. Prices as shown on the App Store.",
      "slip.r6n": "Family Sharing included",
      "slip.r6d": "The unlock is shared with your family and applies on Mac, iPhone, and iPad alike.",
      "slip.bar": "Placr doesn't upload your photos · Only the location is written; records and review progress stay on this device and in your own iCloud",

      "faq.eyebrow": "Questions & Support",
      "faq.head": "Common questions",
      "faq.q1": "How much can I use for free?",
      "faq.a1": "Browsing, grouping, nearby suggestions, map search, and iCloud progress sync are all free. Saving candidate groups is free for 20 groups every 7 days, with no photo limit per group; failed or canceled saves don't count. A one-time purchase removes the limit forever.",
      "faq.q2": "Are my photos uploaded to any server?",
      "faq.a2": "Never. Photo content, thumbnails, and filenames stay on your devices. Place search sends your text and nearby coordinates to Apple Maps; with iCloud sync on, review progress is written only to your own iCloud private database.",
      "faq.q3": "What if I write the wrong place?",
      "faq.a3": "Every write leaves a record. Pick that write in the record screen and restore it — a restore only happens when the photo's location still matches the written value, so later changes you made in Photos are never overwritten.",
      "faq.q4": "Does it change the photos themselves?",
      "faq.a4": "Only the location is written. Photo content, capture time, and other metadata stay untouched, and nothing is deleted. Videos without GPS can get a location too.",
      "faq.q5": "Which devices and systems are supported?",
      "faq.a5": "Placr works on Mac, iPhone, and iPad, and requires macOS 26, iOS 26, or iPadOS 26. The Mac version is on the App Store now; iPhone and iPad are coming soon. One purchase works across all platforms.",
      "faq.q6": "Where can I read the privacy policy, terms, or get help?",
      "faq.a6": "Read them on this site: ",
      "faq.privacy": "Privacy Policy",
      "faq.support": "Support",

      "links.eyebrow": "More Independent Apps & Links",
      "links.h1": "Crafted with the same focus and restraint",
      "links.h2": "On-device first, built for everyday clarity",
      "links.pickrDesc": "Catch up with your camera roll and make room for new memories. Sort photos by month, compare before compressing, rediscover cities by place.",
      "links.pickrMeta": "iPhone · iPad",
      "links.siftrDesc": "Read daily briefings curated by your AI Agent. Connect your own cloud with local full-text search and offline reading.",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "Snap a meal and keep moving. Estimate calories from a photo with Apple Health integration — no weighing or forms.",
      "links.mealrMeta": "iPhone · Apple Health",
      "links.homeTitle": "Main Site · chenhk.cn",
      "links.homeDesc": "Visit Haokun Chen's personal website for all independent apps, research, and notes.",

      "cta.h1": "Your camera took the photos",
      "cta.h2": "Placr brings them back to where they belong",
      "cta.note": "See Placr on the App Store — for Mac, iPhone, and iPad",

      "foot.statement": "Placr · You confirm every write",
      "foot.mainSite": "Author Site",
      "foot.trademark": "Apple, the Apple logo, Mac, iPhone, iPad, iCloud, and App Store are trademarks of Apple Inc., registered in the U.S. and other countries and regions.",
      "foot.legal": "© 2026 Placr · Independent software",

      "alt.home": "Placr's review screen on Mac and iPhone",
      "alt.review": "Close-up of the top half of an iPhone: reviewing photos without a location, month by month",
      "alt.confirm": "Close-up of the top half of an iPhone: confirming a candidate place for a group",
      "alt.single": "iPhone screen showing the batch confirmation before a write",
      "alt.before": "Illustration of the confirm-before-write screen",
      "alt.duo": "Placr's change-location screens on iPhone and Mac",
      "alt.place": "The change-location panel",
      "alt.map": "Picking a place on the map",
      "alt.sync": "Close-up of the top half of an iPhone: iCloud sync status"
    },

    "de": {
      "nav.aria": "Hauptnavigation",
      "foot.aria": "Fußzeilen-Links",
      "compare.aria": "Zwischen Bestätigungs- und Protokollansicht wechseln",
      "compare.demo": "Beispiel",

      "meta.title": "Placr · Fotos ihren fehlenden Ort geben | Geotagging für Mac, iPhone und iPad",
      "meta.description": "Die Kamera hat die Fotos gemacht, das iPhone hat sich den Ort gemerkt. Placr bringt beides wieder zusammen: Fotos ohne Standort werden nach Aufnahmezeit gruppiert, Fotos derselben Zeit schlagen Orte vor, und geschrieben wird erst nach deiner Bestätigung – jederzeit rückgängig.",
      "nav.how": "Gruppieren & Vorschläge",
      "nav.write": "Bestätigen & Schreiben",
      "nav.search": "Suche & Sync",
      "nav.slip": "Kostenlos & Freischalten",
      "nav.faq": "FAQ",
      "nav.moreApps": "Weitere Apps",
      "nav.langLabel": "Sprache",
      "nav.download": "Laden",

      "hero.l1": "Fotos ihren fehlenden Ort geben",
      "hero.l2": "Erinnerungen zurück an den Ort ihrer Entstehung",
      "hero.support": "Placr durchsucht deine Mediathek einmal, gruppiert Fotos ohne Standort nach Aufnahmezeit, schlägt Orte anhand von Fotos aus derselben Zeit vor und schreibt sie nach deiner Bestätigung gesammelt in „Fotos“. Jeder Schreibvorgang wird protokolliert und ist jederzeit rückgängig machbar.",
      "hero.storeBtn": "Im App Store ansehen",
      "hero.moreBtn": "So funktioniert es",
      "hero.meta": "Für Mac im App Store erhältlich · iPhone und iPad folgen in Kürze",

      "ch1.eyebrow": "Nach Zeit gruppiert · Referenzen aus der Nähe",
      "ch1.h1": "Nur die Fotos ohne Standort",
      "ch1.h2": "Gruppe für Gruppe nach Aufnahmezeit",
      "ch1.sub": "Einmal die Mediathek durchsuchen, und Fotos ohne Standort – Videos inklusive – werden automatisch nach Aufnahmezeit gruppiert. Monat für Monat prüfen, jederzeit pausieren und später weitermachen.",
      "ch1.t1a": "Beginne mit den Fotos ohne Standort",
      "ch1.t1b": "Monat für Monat, jederzeit pausieren",
      "ch1.t1desc": "Placr nimmt nur Fotos ohne GPS-Daten auf und reiht sie nach Aufnahmezeit auf. Filtere nach Monat, Referenzbedingung und Fortschritt; falsch einsortierte Fotos lassen sich einzeln herauslösen.",
      "ch1.t2a": "Fotos derselben Zeit sind die Referenz",
      "ch1.t2b": "etwa die iPhone-Aufnahmen der Reise",
      "ch1.t2desc": "Fotos aus ähnlicher Zeit, die bereits einen Standort haben, erscheinen direkt daneben – ihren Ort einfach übernehmen, über Apple Karten suchen oder Koordinaten selbst eingeben.",
      "ch1.s1n": "Vorschläge aus der Nähe",
      "ch1.s1b": "Fotos derselben Zeit mit Standort werden automatisch Kandidaten und liegen neben der Gruppe zum schnellen Abgleich.",
      "ch1.s2n": "Kandidaten Gruppe für Gruppe bestätigen",
      "ch1.s2b": "Für jede Gruppe zuerst einen Kandidaten-Standort sichern, im Bestätigungsfenster Fotos und Orte erneut prüfen – erst dann wird geschrieben.",
      "ch1.s3n": "Einmal schreiben, mit Protokoll",
      "ch1.s3b": "Nach der Bestätigung geht alles gesammelt in „Fotos“; jeder Schreibvorgang bleibt lokal protokolliert und lässt sich später wiederherstellen.",

      "ch2.eyebrow": "Bestätigen & Schreiben · Protokoll & Wiederherstellen",
      "ch2.h1": "Vor dem Schreiben noch einmal prüfen",
      "ch2.h2": "danach jederzeit wiederherstellbar",
      "ch2.sub": "Placr bearbeitet deine Fotos nie automatisch. Kandidaten-Standorte werden Gruppe für Gruppe gesichert und erst geschrieben, wenn das Bestätigungsfenster stimmt. Jeder Schreibvorgang wird protokolliert – Fehler lassen sich zurücknehmen.",
      "ch2.modeBefore": "Bestätigen",
      "ch2.modeAfter": "Protokoll",
      "ch2.c1a": "Schalter umlegen und dem Schreibvorgang folgen",
      "ch2.c1b": "Einmal bestätigen, gesammelt schreiben, protokolliert bleiben",
      "ch2.c1desc": "Die Screenshots zeigen die Bestätigungs- und die Protokollansicht. Jeder Schreibvorgang hält Ort und Zeitpunkt fest; ganze Batches lassen sich aus dem Protokoll wiederherstellen.",
      "ch2.pillMeta": "Nur der Standort",
      "ch2.pillSafe": "Wiederherstellbar",
      "ch2.c2n": "Geschrieben wird nur der Standort – das Foto selbst bleibt unangetastet",
      "ch2.c2b": "Aufnahmezeit, Fotoinhalt und weitere Metadaten bleiben genau wie sie sind; gelöscht wird nichts. Wiederhergestellt wird nur, solange der Standort noch dem geschriebenen Wert entspricht – spätere Änderungen in „Fotos“ werden nie überschrieben.",

      "ch3.eyebrow": "Suche & Koordinaten · iCloud-Sync",
      "ch3.h1": "Wenn ein Vorschlag nicht passt",
      "ch3.h2": "finde den Ort einfach selbst",
      "ch3.sub": "Orte über Apple Karten suchen oder Koordinaten eingeben; der gefundene Ort wird zusammen mit der Aufnahmezeit geschrieben. Der Prüfungsfortstand synchronisiert sich über iCloud zwischen deinen Geräten.",
      "ch3.tag1": "Kartensuche · Manuelle Koordinaten",
      "ch3.searcha": "Den richtigen Ort auf der Karte finden",
      "ch3.searchb": "oder Koordinaten eingeben",
      "ch3.searchdesc": "Die Suche läuft über Apple Karten, Ergebnisse bringen Ortsnamen und Koordinaten; WGS-84-Längen- und Breitengrade lassen sich auch von Hand eingeben. Ein geschriebener Standort behält die Aufnahmezeit des Fotos und trägt eine ungefähre Genauigkeit.",
      "ch3.tag2": "iCloud-Sync · Auf jedem Gerät weiter",
      "ch3.synca": "Auf dem Mac anfangen",
      "ch3.syncb": "auf dem iPhone weitermachen",
      "ch3.syncdesc": "Prüfungsfortstand und Schreibprotokoll synchronisieren über deine private iCloud-Datenbank – ganz ohne Konto. Weiter auf Mac, iPhone oder iPad; die Fotos selbst bleiben auf jedem Gerät.",

      "slip.eyebrow": "Nutzung & Datenschutz",
      "slip.h1": "Stöbern, Vorschläge und Suche sind kostenlos",
      "slip.h2": "Speichern freischalten, wenn du es brauchst",
      "slip.sub": "Placr lädt deine Fotos nicht hoch. Kein Konto, keine Werbung, kein Abo. Die kostenlose Version sichert alle 7 Tage 20 Kandidaten-Gruppen; ein Einmalkauf hebt das Limit für immer auf.",
      "slip.free": "Kostenlos nutzen",
      "slip.pro": "Unbegrenzt speichern",
      "slip.g1": "Gruppieren, Vorschläge & Suche",
      "slip.g2": "Ein Kauf, für immer unbegrenzt",
      "slip.r1n": "Nach Monat stöbern und filtern",
      "slip.r1d": "Nur Fotos ohne Standort, automatisch nach Aufnahmezeit gruppiert; das Filtern nach Monat, Referenzbedingung und Fortschritt ist ebenfalls kostenlos.",
      "slip.r2n": "Referenzen aus der Nähe & Kartensuche",
      "slip.r2d": "Fotos derselben Zeit schlagen Orte vor; Apple-Karten-Suche und manuelle Koordinaten sind ebenfalls gratis.",
      "slip.r3n": "Alle 7 Tage 20 Kandidaten-Gruppen gratis",
      "slip.r3d": "Kein Foto-Limit pro Gruppe; fehlgeschlagene oder abgebrochene Speicherungen zählen nicht. Der iCloud-Fortschrittssync ist Teil der kostenlosen Version.",
      "slip.r4n": "Kandidaten-Gruppen unbegrenzt speichern",
      "slip.r4d": "Nach dem Einmalkauf entfällt das 20-pro-7-Tage-Limit – gemacht, um eine ganze Mediathek in einem Rutsch zu vervollständigen.",
      "slip.r5n": "Kein Abo",
      "slip.r5d": "Ein Kauf, dauerhaft gültig, keine automatische Verlängerung. Preise wie im App Store angezeigt.",
      "slip.r6n": "Familienfreigabe inklusive",
      "slip.r6d": "Die Freischaltung wird mit der Familie geteilt und gilt auf Mac, iPhone und iPad gleichermaßen.",
      "slip.bar": "Placr lädt deine Fotos nicht hoch · Geschrieben wird nur der Standort; Protokoll und Prüfungsfortstand bleiben auf diesem Gerät und in deiner eigenen iCloud",

      "faq.eyebrow": "Fragen & Support",
      "faq.head": "Häufige Fragen",
      "faq.q1": "Wie viel ist kostenlos?",
      "faq.a1": "Stöbern, Gruppieren, Vorschläge aus der Nähe, Kartensuche und der iCloud-Fortschrittssync sind kostenlos. Kandidaten-Gruppen lassen sich alle 7 Tage 20-mal gratis sichern, ohne Foto-Limit pro Gruppe; fehlgeschlagene oder abgebrochene Versuche zählen nicht. Ein Einmalkauf hebt das Limit für immer auf.",
      "faq.q2": "Werden meine Fotos auf einen Server hochgeladen?",
      "faq.a2": "Nie. Fotoinhalt, Miniaturen und Dateinamen bleiben auf deinen Geräten. Die Ortssuche sendet deinen Text und Koordinaten der Umgebung an Apple Karten; mit aktiviertem iCloud-Sync wird der Prüfungsfortstand ausschließlich in deine private iCloud-Datenbank geschrieben.",
      "faq.q3": "Was, wenn ich den falschen Ort schreibe?",
      "faq.a3": "Jeder Schreibvorgang steht im Protokoll. Wähle ihn dort aus und stelle ihn wieder her – das passiert nur, solange der Standort des Fotos noch dem geschriebenen Wert entspricht; spätere Änderungen in „Fotos“ werden nie überschrieben.",
      "faq.q4": "Werden die Fotos selbst verändert?",
      "faq.a4": "Geschrieben wird nur der Standort. Inhalt, Aufnahmezeit und weitere Metadaten bleiben unangetastet, gelöscht wird nichts. Auch Videos ohne GPS bekommen einen Ort.",
      "faq.q5": "Welche Geräte und Systeme werden unterstützt?",
      "faq.a5": "Placr läuft auf Mac, iPhone und iPad und benötigt macOS 26, iOS 26 oder iPadOS 26. Die Mac-Version ist im App Store, iPhone und iPad folgen in Kürze; ein Kauf gilt plattformübergreifend.",
      "faq.q6": "Wo finde ich Datenschutz, Nutzungsbedingungen und Support?",
      "faq.a6": "Auf dieser Website: ",
      "faq.privacy": "Datenschutzrichtlinie",
      "faq.support": "Support",

      "links.eyebrow": "Weitere unabhängige Apps & Links",
      "links.h1": "Mit derselben Ruhe und Konzentration gebaut",
      "links.h2": "Geräte zuerst, für Klarheit im Alltag",
      "links.pickrDesc": "Die Fotomediathek aufarbeiten und Platz für Neues schaffen. Fotos Monat für Monat sortieren, vor dem Komprimieren vergleichen, Städte in wenigen Fotos wiederentdecken.",
      "links.pickrMeta": "iPhone · iPad",
      "links.siftrDesc": "Tagesbriefings lesen, kuratiert von deinem KI-Agenten. Eigene Cloud anbinden, mit lokaler Volltextsuche und Offline-Lesen.",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "Einmal fotografieren, Mahlzeit erfasst. Kalorien aus dem Foto schätzen und mit Apple Health verbinden – ohne Wiegen und Formulare.",
      "links.mealrMeta": "iPhone · Apple Health",
      "links.homeTitle": "Hauptseite · chenhk.cn",
      "links.homeDesc": "Besuche Haokun Chens persönliche Website mit allen Independent-Apps, Forschung und Notizen.",

      "cta.h1": "Die Kamera hat die Fotos gemacht",
      "cta.h2": "Placr bringt sie zurück, wo sie hingehören",
      "cta.note": "Placr im App Store ansehen – für Mac, iPhone und iPad",

      "foot.statement": "Placr · Jede Schreibfunktion bestätigst du",
      "foot.mainSite": "Autorenseite",
      "foot.trademark": "Apple, das Apple-Logo, Mac, iPhone, iPad, iCloud und App Store sind Marken der Apple Inc., in den USA und anderen Ländern und Regionen eingetragen.",
      "foot.legal": "© 2026 Placr · Independent-Software",

      "alt.home": "Placrs Prüfansicht auf Mac und iPhone",
      "alt.review": "Nahaufnahme der oberen iPhone-Hälfte: Fotos ohne Standort, Monat für Monat",
      "alt.confirm": "Nahaufnahme der oberen iPhone-Hälfte: Kandidaten-Ort für eine Gruppe bestätigen",
      "alt.single": "iPhone-Ansicht der Batch-Bestätigung vor dem Schreiben",
      "alt.before": "Beispielansicht der Bestätigung vor dem Schreiben",
      "alt.duo": "Placrs Ansichten zum Ändern des Ortes auf iPhone und Mac",
      "alt.place": "Das Panel zum Ändern des Ortes",
      "alt.map": "Einen Ort auf der Karte auswählen",
      "alt.sync": "Nahaufnahme der oberen iPhone-Hälfte: iCloud-Sync-Status"
    },

    "es": {
      "nav.aria": "Navegación principal",
      "foot.aria": "Enlaces del pie",
      "compare.aria": "Alternar entre las vistas de confirmación y registro",
      "compare.demo": "Ejemplo",

      "meta.title": "Placr · Devuelve a tus fotos el lugar que falta | Geolocalización de fotos para Mac, iPhone y iPad",
      "meta.description": "Tu cámara tomó las fotos. Tu iPhone recordó el lugar. Placr vuelve a unir ambas cosas: agrupa por fecha las fotos sin ubicación, sugiere lugares con fotos de la misma época y escribe solo tras confirmar, con registro reversible.",
      "nav.how": "Grupos y sugerencias",
      "nav.write": "Confirmar y escribir",
      "nav.search": "Buscar y sincronizar",
      "nav.slip": "Gratis y desbloqueo",
      "nav.faq": "Preguntas frecuentes",
      "nav.moreApps": "Más apps",
      "nav.langLabel": "Idioma",
      "nav.download": "Descargar",

      "hero.l1": "Devuelve a tus fotos el lugar que falta",
      "hero.l2": "que cada recuerdo vuelva a donde ocurrió",
      "hero.support": "Placr analiza tu fototeca una vez, agrupa por fecha de captura las fotos sin ubicación, sugiere lugares a partir de fotos de la misma época y las escribe por lotes cuando confirmas. Cada escritura queda registrada y se puede restaurar.",
      "hero.storeBtn": "Ver en el App Store",
      "hero.moreBtn": "Cómo funciona",
      "hero.meta": "Disponible en el App Store para Mac · iPhone y iPad muy pronto",

      "ch1.eyebrow": "Agrupadas por fecha · Referencias cercanas",
      "ch1.h1": "Solo las fotos sin ubicación",
      "ch1.h2": "recorridas grupo por grupo",
      "ch1.sub": "Un análisis de tu fototeca y las fotos sin ubicación —vídeos incluidos— quedan agrupadas automáticamente por fecha de captura. Revisa mes a mes; pausa cuando quieras y continúa después.",
      "ch1.t1a": "Empieza por las fotos sin ubicación",
      "ch1.t1b": "Mes a mes, con pausas cuando quieras",
      "ch1.t1desc": "Placr selecciona solo las fotos sin datos GPS y las ordena por fecha de captura. Filtra por mes, condiciones de referencia y progreso; saca individualmente las fotos mal agrupadas.",
      "ch1.t2a": "Las fotos de la misma época son la referencia",
      "ch1.t2b": "como las de tu iPhone en el viaje",
      "ch1.t2desc": "Las fotos tomadas por la misma época que ya tienen ubicación aparecen al lado: adopta su lugar tal cual, busca en Apple Mapas o escribe las coordenadas tú mismo.",
      "ch1.s1n": "Sugerencias de fotos cercanas",
      "ch1.s1b": "Las fotos de la misma época con ubicación se vuelven candidatas automáticamente, junto al grupo para revisarlas de un vistazo.",
      "ch1.s2n": "Confirma el candidato de cada grupo",
      "ch1.s2b": "Guarda una ubicación candidata por grupo y vuelve a revisar fotos y lugares en la pantalla de confirmación por lotes antes de escribir nada.",
      "ch1.s3n": "Una escritura, con registro",
      "ch1.s3b": "Tras la confirmación, todo se escribe en Fotos de una vez; cada escritura deja un registro local que puedes restaurar luego.",

      "ch2.eyebrow": "Confirmar y escribir · Registro y restauración",
      "ch2.h1": "Una última mirada antes de escribir",
      "ch2.h2": "y después, restaurar con un clic",
      "ch2.sub": "Placr nunca modifica tus fotos por su cuenta. Las ubicaciones candidatas se guardan grupo a grupo y se escriben solo cuando la pantalla de confirmación por lotes cuadra. Cada escritura queda registrada, así los errores se deshacen.",
      "ch2.modeBefore": "Confirmar",
      "ch2.modeAfter": "Registro",
      "ch2.c1a": "Cambia el interruptor y sigue una escritura",
      "ch2.c1b": "Confirmar una vez, escribir por lotes, dejar registro",
      "ch2.c1desc": "Estas capturas muestran las pantallas de confirmación y de registro. Cada escritura anota los lugares y el momento tal como fueron, y un lote entero se restaura desde el registro.",
      "ch2.pillMeta": "Solo la ubicación",
      "ch2.pillSafe": "Restaurable",
      "ch2.c2n": "Solo se escribe la ubicación; la foto queda intacta",
      "ch2.c2b": "La fecha de captura, el contenido y demás metadatos se quedan tal cual, y no se borra nada. La restauración solo ocurre si la ubicación sigue siendo el valor escrito, de modo que tus cambios posteriores en Fotos nunca se sobrescriben.",

      "ch3.eyebrow": "Búsqueda y coordenadas · Sincronización iCloud",
      "ch3.h1": "Cuando una sugerencia no encaja",
      "ch3.h2": "encuentra tú el lugar",
      "ch3.sub": "Busca en Apple Mapas o escribe coordenadas; el lugar que encuentres se escribe junto con la fecha de captura de la foto. El progreso de revisión se sincroniza entre tus dispositivos por iCloud.",
      "ch3.tag1": "Búsqueda en mapas · Coordenadas manuales",
      "ch3.searcha": "Encuentra el lugar correcto en el mapa",
      "ch3.searchb": "o escribe las coordenadas",
      "ch3.searchdesc": "La búsqueda corre a cargo de Apple Mapas, con nombres y coordenadas en los resultados; también puedes introducir latitud y longitud WGS-84 a mano. La ubicación escrita conserva la fecha de captura y lleva una precisión aproximada.",
      "ch3.tag2": "Sincronización iCloud · Continúa donde sea",
      "ch3.synca": "Empieza en el Mac",
      "ch3.syncb": "sigue en el iPhone",
      "ch3.syncdesc": "El progreso de revisión y los registros de escritura se sincronizan por tu propia base privada de iCloud, sin crear cuentas. Continúa en Mac, iPhone o iPad; las fotos se quedan en cada dispositivo.",

      "slip.eyebrow": "Uso y privacidad",
      "slip.h1": "Navegar, sugerencias y búsqueda son gratis",
      "slip.h2": "desbloquea el guardado cuando lo necesites",
      "slip.sub": "Placr no sube tus fotos. Sin cuentas, sin anuncios y sin suscripciones. La versión gratuita guarda 20 grupos candidatos cada 7 días; una compra única elimina el límite para siempre.",
      "slip.free": "Uso gratuito",
      "slip.pro": "Guardado ilimitado",
      "slip.g1": "Agrupar, sugerir y buscar",
      "slip.g2": "Una compra, ilimitado para siempre",
      "slip.r1n": "Navegar y filtrar por mes",
      "slip.r1d": "Solo fotos sin ubicación, agrupadas automáticamente por fecha de captura; filtrar por mes, referencias y progreso también es gratis.",
      "slip.r2n": "Referencias cercanas y búsqueda en mapas",
      "slip.r2d": "Las fotos de la misma época sugieren lugares; la búsqueda en Apple Mapas y las coordenadas manuales también son gratis.",
      "slip.r3n": "20 grupos candidatos gratis cada 7 días",
      "slip.r3d": "Sin límite de fotos por grupo; los guardados fallidos o cancelados no cuentan. La sincronización de progreso por iCloud va incluida en la versión gratuita.",
      "slip.r4n": "Guardar grupos candidatos sin límite",
      "slip.r4d": "Tras la compra única, desaparece el límite de 20 cada 7 días: pensado para completar toda una fototeca de una vez.",
      "slip.r5n": "No es una suscripción",
      "slip.r5d": "Una compra, válida para siempre, sin renovación automática. Precios según se muestran en el App Store.",
      "slip.r6n": "Incluye En Familia",
      "slip.r6d": "El desbloqueo se comparte con la familia y aplica igual en Mac, iPhone y iPad.",
      "slip.bar": "Placr no sube tus fotos · Solo se escribe la ubicación; los registros y el progreso de revisión se quedan en este dispositivo y en tu propio iCloud",

      "faq.eyebrow": "Preguntas y soporte",
      "faq.head": "Preguntas frecuentes",
      "faq.q1": "¿Cuánto puedo usar gratis?",
      "faq.a1": "Navegar, agrupar, las sugerencias cercanas, la búsqueda en mapas y la sincronización de progreso por iCloud son gratis. Guardar grupos candidatos es gratis 20 veces cada 7 días, sin límite de fotos por grupo; los fallidos o cancelados no cuentan. Una compra única elimina el límite para siempre.",
      "faq.q2": "¿Suben mis fotos a algún servidor?",
      "faq.a2": "Nunca. El contenido, las miniaturas y los nombres de archivo se quedan en tus dispositivos. La búsqueda de lugares envía tu texto y coordenadas cercanas a Apple Mapas; con la sincronización de iCloud activada, el progreso de revisión se escribe solo en tu base privada de iCloud.",
      "faq.q3": "¿Y si escribo el lugar equivocado?",
      "faq.a3": "Cada escritura queda registrada. Elige esa escritura en la pantalla de registro y restáurala: solo se restaura si la ubicación de la foto sigue siendo el valor escrito, de modo que tus cambios posteriores en Fotos nunca se sobrescriben.",
      "faq.q4": "¿Cambia las fotos en sí?",
      "faq.a4": "Solo se escribe la ubicación. El contenido, la fecha de captura y demás metadatos quedan intactos, y no se borra nada. Los vídeos sin GPS también pueden recibir su lugar.",
      "faq.q5": "¿Qué dispositivos y sistemas son compatibles?",
      "faq.a5": "Placr funciona en Mac, iPhone e iPad y requiere macOS 26, iOS 26 o iPadOS 26. La versión de Mac ya está en el App Store; las de iPhone y iPad llegan pronto. Una sola compra vale para todas las plataformas.",
      "faq.q6": "¿Dónde veo la política de privacidad, las condiciones o el soporte?",
      "faq.a6": "En este sitio: ",
      "faq.privacy": "Política de privacidad",
      "faq.support": "Soporte",

      "links.eyebrow": "Más apps independientes y enlaces",
      "links.h1": "Creadas con la misma dedicación y contención",
      "links.h2": "Primero el dispositivo, para un día a día con claridad",
      "links.pickrDesc": "Pon tu carrete al día y haz sitio para nuevos recuerdos. Ordena fotos por meses, compara antes de comprimir y redescubre ciudades por lugares.",
      "links.pickrMeta": "iPhone · iPad",
      "links.siftrDesc": "Lee resúmenes diarios curados por tu agente de IA. Conecta tu propia nube, con búsqueda local integral y lectura sin conexión.",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "Haz una foto y sigue. Estima las calorías de la comida con integración en Apple Salud, sin pesar ni rellenar formularios.",
      "links.mealrMeta": "iPhone · Apple Salud",
      "links.homeTitle": "Sitio principal · chenhk.cn",
      "links.homeDesc": "Visita la web personal de Haokun Chen con todas sus apps independientes, investigación y notas.",

      "cta.h1": "Tu cámara tomó las fotos",
      "cta.h2": "Placr las devuelve a donde pertenecen",
      "cta.note": "Mira Placr en el App Store, para Mac, iPhone e iPad",

      "foot.statement": "Placr · Cada escritura la confirmas tú",
      "foot.mainSite": "Sitio del autor",
      "foot.trademark": "Apple, el logotipo de Apple, Mac, iPhone, iPad, iCloud y App Store son marcas de Apple Inc., registradas en EE. UU. y en otros países y regiones.",
      "foot.legal": "© 2026 Placr · Software independiente",

      "alt.home": "Pantalla de revisión de Placr en Mac e iPhone",
      "alt.review": "Primer plano de la mitad superior del iPhone: revisar fotos sin ubicación, mes a mes",
      "alt.confirm": "Primer plano de la mitad superior del iPhone: confirmar el lugar candidato de un grupo",
      "alt.single": "Pantalla de iPhone con la confirmación por lotes antes de escribir",
      "alt.before": "Ilustración de la pantalla de confirmación previa",
      "alt.duo": "Pantallas de cambio de ubicación de Placr en iPhone y Mac",
      "alt.place": "Panel para cambiar la ubicación",
      "alt.map": "Elegir un lugar en el mapa",
      "alt.sync": "Primer plano de la mitad superior del iPhone: estado de sincronización de iCloud"
    },

    "fr": {
      "nav.aria": "Navigation principale",
      "foot.aria": "Liens de pied de page",
      "compare.aria": "Basculer entre les vues de confirmation et d'historique",
      "compare.demo": "Exemple",

      "meta.title": "Placr · Rendez à vos photos le lieu qui leur manque | Géolocalisation photo sur Mac, iPhone et iPad",
      "meta.description": "Votre appareil photo a pris les photos. Votre iPhone a retenu l'endroit. Placr réunit les deux : photos sans localisation regroupées par date, lieux proposés par les photos de la même période, écriture uniquement après confirmation — réversible à tout moment.",
      "nav.how": "Groupes et suggestions",
      "nav.write": "Confirmer et écrire",
      "nav.search": "Recherche et synchro",
      "nav.slip": "Gratuit et déblocage",
      "nav.faq": "Questions fréquentes",
      "nav.moreApps": "Autres apps",
      "nav.langLabel": "Langue",
      "nav.download": "Télécharger",

      "hero.l1": "Rendez à vos photos le lieu qui leur manque",
      "hero.l2": "ramenez chaque souvenir là où il s'est passé",
      "hero.support": "Placr analyse votre photothèque une fois, regroupe par date de prise de vue les photos sans localisation, suggère des lieux à partir des photos de la même période et les écrit par lots après votre confirmation. Chaque écriture laisse une trace restaurable.",
      "hero.storeBtn": "Voir sur l'App Store",
      "hero.moreBtn": "Comment ça marche",
      "hero.meta": "Disponible sur l'App Store pour Mac · iPhone et iPad bientôt disponibles",

      "ch1.eyebrow": "Regroupées par date · Références proches",
      "ch1.h1": "Seulement les photos sans localisation",
      "ch1.h2": "parcourues groupe par groupe",
      "ch1.sub": "Une seule analyse de votre photothèque, et les photos sans localisation — vidéos comprises — sont regroupées automatiquement par date de prise de vue. Passez-les en revue mois par mois ; mettez en pause et reprenez plus tard.",
      "ch1.t1a": "Commencez par les photos sans localisation",
      "ch1.t1b": "Mois par mois, pause à volonté",
      "ch1.t1desc": "Placr ne retient que les photos sans données GPS et les aligne par date de prise de vue. Filtrez par mois, conditions de référence et avancement ; retirez une à une les photos mal classées.",
      "ch1.t2a": "Les photos de la même période servent de référence",
      "ch1.t2b": "comme celles de votre iPhone en voyage",
      "ch1.t2desc": "Les photos prises à peu près au même moment, déjà localisées, s'affichent à côté : reprenez leur position telle quelle, cherchez dans Plans ou saisissez vous-même les coordonnées.",
      "ch1.s1n": "Suggestions des photos proches",
      "ch1.s1b": "Les photos de la même période avec localisation deviennent candidates d'office, affichées à côté du groupe pour un contrôle rapide.",
      "ch1.s2n": "Confirmez la candidate de chaque groupe",
      "ch1.s2b": "Enregistrez une position candidate par groupe, puis revérifiez photos et lieux dans l'écran de confirmation par lots avant toute écriture.",
      "ch1.s3n": "Une écriture, une trace",
      "ch1.s3b": "Après confirmation, tout est écrit dans Photos d'un coup ; chaque écriture laisse une trace locale que vous pouvez rétablir ensuite.",

      "ch2.eyebrow": "Confirmer et écrire · Traces et restauration",
      "ch2.h1": "Un dernier regard avant d'écrire",
      "ch2.h2": "et ensuite, restaurable en un clic",
      "ch2.sub": "Placr ne modifie jamais vos photos de lui-même. Les positions candidates s'enregistrent groupe par groupe et ne s'écrivent qu'une fois l'écran de confirmation vérifié. Chaque écriture laisse une trace, si bien que les erreurs se réparent.",
      "ch2.modeBefore": "Confirmer",
      "ch2.modeAfter": "Historique",
      "ch2.c1a": "Basculer l'interrupteur pour suivre une écriture",
      "ch2.c1b": "Confirmer une fois, écrire par lots, garder la trace",
      "ch2.c1desc": "Ces captures montrent les écrans de confirmation et d'historique. Chaque écriture consigne les lieux et le moment tels quels, et un lot entier se rétablit depuis l'historique.",
      "ch2.pillMeta": "Position seulement",
      "ch2.pillSafe": "Réversible",
      "ch2.c2n": "Seule la position s'écrit ; la photo reste intacte",
      "ch2.c2b": "Date de prise de vue, contenu et autres métadonnées restent exactement tels quels, rien ne se supprime. Une restauration n'a lieu que si la position correspond encore à la valeur écrite : vos modifications ultérieures dans Photos ne sont jamais écrasées.",

      "ch3.eyebrow": "Recherche et coordonnées · Synchronisation iCloud",
      "ch3.h1": "Quand une suggestion ne convient pas",
      "ch3.h2": "trouvez le lieu vous-même",
      "ch3.sub": "Cherchez dans Plans ou saisissez des coordonnées ; le lieu trouvé s'écrit avec la date de prise de vue de la photo. L'avancement de la révision se synchronise entre vos appareils via iCloud.",
      "ch3.tag1": "Recherche dans Plans · Coordonnées manuelles",
      "ch3.searcha": "Trouvez le bon endroit sur la carte",
      "ch3.searchb": "ou saisissez les coordonnées",
      "ch3.searchdesc": "La recherche passe par Plans, avec noms de lieux et coordonnées dans les résultats ; latitude et longitude WGS-84 peuvent aussi être saisies à la main. Une position écrite conserve la date de prise de vue et s'accompagne d'une précision approximative.",
      "ch3.tag2": "Synchro iCloud · Reprenez sur tout appareil",
      "ch3.synca": "Commencez sur Mac",
      "ch3.syncb": "continuez sur iPhone",
      "ch3.syncdesc": "L'avancement de révision et les traces d'écriture se synchronisent via votre base privée iCloud personnelle, sans créer de compte. Reprenez sur Mac, iPhone ou iPad ; les photos, elles, restent sur chaque appareil.",

      "slip.eyebrow": "Utilisation et confidentialité",
      "slip.h1": "Parcourir, suggestions et recherche sont gratuits",
      "slip.h2": "débloquez l'enregistrement au besoin",
      "slip.sub": "Placr n'envoie pas vos photos. Pas de compte, pas de publicité, pas d'abonnement. La version gratuite enregistre 20 groupes candidats tous les 7 jours ; un achat unique lève la limite pour toujours.",
      "slip.free": "Accès gratuit",
      "slip.pro": "Enregistrement illimité",
      "slip.g1": "Regrouper, suggérer et chercher",
      "slip.g2": "Un achat, illimité pour toujours",
      "slip.r1n": "Parcourir et filtrer par mois",
      "slip.r1d": "Seules les photos sans localisation, regroupées automatiquement par date de prise de vue ; filtrer par mois, références et avancement est gratuit aussi.",
      "slip.r2n": "Références proches et recherche dans Plans",
      "slip.r2d": "Les photos de la même période proposent des lieux ; la recherche Plans et les coordonnées manuelles sont gratuites également.",
      "slip.r3n": "20 groupes candidats gratuits tous les 7 jours",
      "slip.r3d": "Aucune limite de photos par groupe ; les enregistrements échoués ou annulés ne comptent pas. La synchro d'avancement iCloud fait partie de la version gratuite.",
      "slip.r4n": "Enregistrer les groupes candidats sans limite",
      "slip.r4d": "Après l'achat unique, la limite des 20 tous les 7 jours disparaît — idéal pour compléter toute une photothèque d'un seul tenant.",
      "slip.r5n": "Ce n'est pas un abonnement",
      "slip.r5d": "Un achat, valable pour toujours, sans renouvellement automatique. Prix tels qu'affichés sur l'App Store.",
      "slip.r6n": "Partage familial inclus",
      "slip.r6d": "Le déblocage se partage en famille et vaut également sur Mac, iPhone et iPad.",
      "slip.bar": "Placr n'envoie pas vos photos · Seule la position s'écrit ; traces et avancement de révision restent sur cet appareil et dans votre propre iCloud",

      "faq.eyebrow": "Questions et assistance",
      "faq.head": "Questions fréquentes",
      "faq.q1": "Qu'est-ce qui est gratuit ?",
      "faq.a1": "Parcourir, regrouper, les suggestions proches, la recherche dans Plans et la synchro d'avancement iCloud sont gratuits. Enregistrer des groupes candidats est gratuit 20 fois tous les 7 jours, sans limite de photos par groupe ; échecs et annulations ne comptent pas. Un achat unique lève la limite pour toujours.",
      "faq.q2": "Mes photos sont-elles envoyées sur un serveur ?",
      "faq.a2": "Jamais. Contenu, vignettes et noms de fichiers restent sur vos appareils. La recherche de lieux envoie votre texte et les coordonnées proches à Plans ; avec la synchro iCloud activée, l'avancement de révision s'écrit uniquement dans votre base privée iCloud.",
      "faq.q3": "Et si j'écris le mauvais lieu ?",
      "faq.a3": "Chaque écriture laisse une trace. Choisissez-la dans l'écran d'historique et rétablissez-la — la restauration n'a lieu que si la position de la photo correspond encore à la valeur écrite ; vos modifications ultérieures dans Photos ne sont jamais écrasées.",
      "faq.q4": "Les photos elles-mêmes changent-elles ?",
      "faq.a4": "Seule la position s'écrit. Contenu, date de prise de vue et autres métadonnées restent intacts, rien ne se supprime. Les vidéos sans GPS peuvent aussi recevoir leur lieu.",
      "faq.q5": "Quels appareils et systèmes sont pris en charge ?",
      "faq.a5": "Placr fonctionne sur Mac, iPhone et iPad et exige macOS 26, iOS 26 ou iPadOS 26. La version Mac est sur l'App Store ; les versions iPhone et iPad arrivent bientôt. Un seul achat vaut pour toutes les plateformes.",
      "faq.q6": "Où trouver la politique de confidentialité, les conditions ou l'assistance ?",
      "faq.a6": "Sur ce site : ",
      "faq.privacy": "Politique de confidentialité",
      "faq.support": "Assistance",

      "links.eyebrow": "Autres applications indépendantes et liens",
      "links.h1": "Conçues avec la même exigence et la même retenue",
      "links.h2": "L'appareil d'abord, pour plus de clarté au quotidien",
      "links.pickrDesc": "Remettez votre pellicule à jour et faites de la place aux nouveaux souvenirs. Triez les photos par mois, comparez avant de compresser, redécouvrez des villes en quelques photos.",
      "links.pickrMeta": "iPhone · iPad",
      "links.siftrDesc": "Lisez des synthèses quotidiennes préparées par votre agent IA. Connectez votre propre cloud, avec recherche locale intégrale et lecture hors ligne.",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "Prenez la photo en photo et passez à autre chose. Estimez les calories d'un repas avec l'intégration Santé, sans balance ni formulaires.",
      "links.mealrMeta": "iPhone · Santé",
      "links.homeTitle": "Site principal · chenhk.cn",
      "links.homeDesc": "Visitez le site personnel de Haokun Chen : toutes ses apps indépendantes, ses recherches et ses notes.",

      "cta.h1": "Votre appareil a pris les photos",
      "cta.h2": "Placr les ramène là où elles appartiennent",
      "cta.note": "Découvrez Placr sur l'App Store, pour Mac, iPhone et iPad",

      "foot.statement": "Placr · Chaque écriture se confirme avec vous",
      "foot.mainSite": "Site de l'auteur",
      "foot.trademark": "Apple, le logo Apple, Mac, iPhone, iPad, iCloud et App Store sont des marques d'Apple Inc., déposées aux États-Unis et dans d'autres pays et régions.",
      "foot.legal": "© 2026 Placr · Logiciel indépendant",

      "alt.home": "Écran de révision de Placr sur Mac et iPhone",
      "alt.review": "Gros plan sur la moitié supérieure de l'iPhone : réviser les photos sans localisation, mois par mois",
      "alt.confirm": "Gros plan sur la moitié supérieure de l'iPhone : confirmer le lieu candidat d'un groupe",
      "alt.single": "Écran iPhone de confirmation par lots avant écriture",
      "alt.before": "Illustration de l'écran de confirmation préalable",
      "alt.duo": "Écrans de changement de lieu de Placr sur iPhone et Mac",
      "alt.place": "Le panneau de changement de lieu",
      "alt.map": "Choisir un lieu sur la carte",
      "alt.sync": "Gros plan sur la moitié supérieure de l'iPhone : état de la synchronisation iCloud"
    },

    "it": {
      "nav.aria": "Navigazione principale",
      "foot.aria": "Link a piè di pagina",
      "compare.aria": "Alterna tra le viste di conferma e cronologia",
      "compare.demo": "Esempio",

      "meta.title": "Placr · Restituisci alle foto il luogo mancante | Geotagging di foto per Mac, iPhone e iPad",
      "meta.description": "La fotocamera ha scattato le foto. L'iPhone ha ricordato il luogo. Placr rimette insieme le due cose: le foto senza posizione vengono raggruppare per data, le foto dello stesso periodo suggeriscono il luogo e si scrive solo dopo la conferma, con cronologia reversibile.",
      "nav.how": "Gruppi e suggerimenti",
      "nav.write": "Conferma e scrittura",
      "nav.search": "Ricerca e sincronizzazione",
      "nav.slip": "Gratis e sblocco",
      "nav.faq": "Domande frequenti",
      "nav.moreApps": "Altre app",
      "nav.langLabel": "Lingua",
      "nav.download": "Scarica",

      "hero.l1": "Restituisci alle foto il luogo mancante",
      "hero.l2": "riporta ogni ricordo dove è successo",
      "hero.support": "Placr analizza la libreria una volta sola, raggruppa per data di scatto le foto senza posizione, suggerisce luoghi usando le foto dello stesso periodo e le scrive in blocco dopo la tua conferma. Ogni scrittura lascia una traccia che puoi ripristinare.",
      "hero.storeBtn": "Vedi sull'App Store",
      "hero.moreBtn": "Come funziona",
      "hero.meta": "Disponibile sull'App Store per Mac · iPhone e iPad in arrivo",

      "ch1.eyebrow": "Raggruppate per data · Riferimenti vicini",
      "ch1.h1": "Solo le foto senza posizione",
      "ch1.h2": "esaminate gruppo per gruppo",
      "ch1.sub": "Una sola analisi della libreria Foto, e le foto senza posizione —video inclusi— vengono raggruppate automaticamente per data di scatto. Esaminale mese per mese; metti in pausa quando vuoi e riprendi dopo.",
      "ch1.t1a": "Parti dalle foto senza posizione",
      "ch1.t1b": "Sfoglia per mese, in pausa quando vuoi",
      "ch1.t1desc": "Placr prende solo le foto senza dati GPS e le mette in coda per data di scatto. Filtra per mese, condizioni di riferimento e avanzamento; togli singolarmente le foto finite nel gruppo sbagliato.",
      "ch1.t2a": "Le foto dello stesso periodo sono il riferimento",
      "ch1.t2b": "come gli scatti iPhone del viaggio",
      "ch1.t2desc": "Le foto scattate più o meno nello stesso momento, che hanno già una posizione, compaiono accanto: adotta il loro luogo così com'è, cerca con Mappe o digita tu le coordinate.",
      "ch1.s1n": "Suggerimenti dalle foto vicine",
      "ch1.s1b": "Le foto dello stesso periodo con posizione diventano candidate d'ufficio, accanto al gruppo per un controllo rapido.",
      "ch1.s2n": "Conferma la candidata di ogni gruppo",
      "ch1.s2b": "Salva una posizione candidata per gruppo, poi ricontrolla foto e luoghi nella schermata di conferma in blocco prima di scrivere.",
      "ch1.s3n": "Una scrittura, con cronologia",
      "ch1.s3b": "Dopo la conferma, tutto torna in Foto in un colpo solo; ogni scrittura lascia una cronologia locale da ripristinare in qualsiasi momento.",

      "ch2.eyebrow": "Conferma e scrittura · Cronologia e ripristino",
      "ch2.h1": "Un'ultima verifica prima di scrivere",
      "ch2.h2": "e dopo, ripristino immediato",
      "ch2.sub": "Placr non modifica mai le foto di propria iniziativa. Le posizioni candidate si salvano gruppo per gruppo e si scrivono solo quando la schermata di conferma torna. Ogni scrittura finisce in cronologia, così gli errori si annullano.",
      "ch2.modeBefore": "Conferma",
      "ch2.modeAfter": "Cronologia",
      "ch2.c1a": "Muovi l'interruttore e segui una scrittura",
      "ch2.c1b": "Conferma una volta, scrivi in blocco, conserva la traccia",
      "ch2.c1desc": "Queste schermate mostrano le viste di conferma e cronologia. Ogni scrittura annota luoghi e momento così com'erano, e un intero blocco si ripristina dalla cronologia.",
      "ch2.pillMeta": "Solo la posizione",
      "ch2.pillSafe": "Ripristinabile",
      "ch2.c2n": "Si scrive solo la posizione; la foto resta intatta",
      "ch2.c2b": "Data di scatto, contenuto e altri metadati restano esattamente com'erano, e nulla viene eliminato. Il ripristino avviene solo se la posizione corrisponde ancora al valore scritto: le modifiche successive fatte in Foto non vengono mai sovrascritte.",

      "ch3.eyebrow": "Ricerca e coordinate · Sincronizzazione iCloud",
      "ch3.h1": "Quando un suggerimento non convince",
      "ch3.h2": "trova tu il luogo",
      "ch3.sub": "Cerca con Mappe o digita le coordinate; il luogo trovato si scrive insieme alla data di scatto della foto. L'avanzamento della revisione si sincronizza tra i tuoi dispositivi via iCloud.",
      "ch3.tag1": "Ricerca su mappa · Coordinate manuali",
      "ch3.searcha": "Trova il luogo giusto sulla mappa",
      "ch3.searchb": "oppure digita le coordinate",
      "ch3.searchdesc": "La ricerca passa da Mappe, con nomi di luoghi e coordinate nei risultati; puoi anche inserire a mano latitudine e longitudine WGS-84. La posizione scritta conserva la data di scatto e riporta una precisione approssimativa.",
      "ch3.tag2": "Sincronizzazione iCloud · Riprendi ovunque",
      "ch3.synca": "Inizia sul Mac",
      "ch3.syncb": "prosegui su iPhone",
      "ch3.syncdesc": "Avanzamento della revisione e cronologia delle scritture si sincronizzano tramite il tuo database privato iCloud, senza creare account. Riprendi su Mac, iPhone o iPad; le foto restano su ciascun dispositivo.",

      "slip.eyebrow": "Uso e privacy",
      "slip.h1": "Sfogliare, suggerimenti e ricerca sono gratis",
      "slip.h2": "sblocca i salvataggi quando servono",
      "slip.sub": "Placr non carica le tue foto. Nessun account, nessuna pubblicità, nessun abbonamento. La versione gratuita salva 20 gruppi candidati ogni 7 giorni; un acquisto unico rimuove il limite per sempre.",
      "slip.free": "Uso gratuito",
      "slip.pro": "Salvataggi illimitati",
      "slip.g1": "Raggruppare, suggerire e cercare",
      "slip.g2": "Un acquisto, illimitato per sempre",
      "slip.r1n": "Sfogliare e filtrare per mese",
      "slip.r1d": "Solo foto senza posizione, raggruppate automaticamente per data di scatto; filtrare per mese, riferimenti e avanzamento è gratis anch'esso.",
      "slip.r2n": "Riferimenti vicini e ricerca su mappa",
      "slip.r2d": "Le foto dello stesso periodo suggeriscono luoghi; anche la ricerca con Mappe e le coordinate manuali sono gratuite.",
      "slip.r3n": "20 gruppi candidati gratis ogni 7 giorni",
      "slip.r3d": "Nessun limite di foto per gruppo; salvataggi falliti o annullati non contano. La sincronizzazione iCloud dell'avanzamento è inclusa nella versione gratuita.",
      "slip.r4n": "Salvare gruppi candidati senza limiti",
      "slip.r4d": "Dopo l'acquisto unico, il limite dei 20 ogni 7 giorni sparisce: pensato per completare un'intera libreria in un colpo solo.",
      "slip.r5n": "Non è un abbonamento",
      "slip.r5d": "Un acquisto, valido per sempre, senza rinnovo automatico. Prezzi come indicati sull'App Store.",
      "slip.r6n": "Condivisibile in famiglia",
      "slip.r6d": "Lo sblocco si condivide con la famiglia e vale allo stesso modo su Mac, iPhone e iPad.",
      "slip.bar": "Placr non carica le tue foto · Si scrive solo la posizione; cronologia e avanzamento della revisione restano su questo dispositivo e nel tuo iCloud",

      "faq.eyebrow": "Domande e supporto",
      "faq.head": "Domande frequenti",
      "faq.q1": "Quanto si può usare gratis?",
      "faq.a1": "Sfogliare, raggruppare, i suggerimenti vicini, la ricerca su mappa e la sincronizzazione iCloud dell'avanzamento sono gratis. Salvare gruppi candidati è gratuito 20 volte ogni 7 giorni, senza limite di foto per gruppo; fallimenti e annullamenti non contano. Un acquisto unico rimuove il limite per sempre.",
      "faq.q2": "Le mie foto vengono caricate su qualche server?",
      "faq.a2": "Mai. Contenuto, miniature e nomi dei file restano sui tuoi dispositivi. La ricerca di luoghi invia il testo e le coordinate vicine a Mappe; con la sincronizzazione iCloud attiva, l'avanzamento della revisione si scrive solo nel tuo database privato iCloud.",
      "faq.q3": "E se scrivo il luogo sbagliato?",
      "faq.a3": "Ogni scrittura lascia una traccia. Scegli quella scrittura nella schermata della cronologia e ripristinala: il ripristino avviene solo se la posizione della foto corrisponde ancora al valore scritto, quindi le modifiche successive fatte in Foto non vengono mai sovrascritte.",
      "faq.q4": "Cambia le foto in sé?",
      "faq.a4": "Si scrive solo la posizione. Contenuto, data di scatto e altri metadati restano intatti, e nulla viene eliminato. Anche i video senza GPS possono ricevere il loro luogo.",
      "faq.q5": "Quali dispositivi e sistemi sono supportati?",
      "faq.a5": "Placr funziona su Mac, iPhone e iPad e richiede macOS 26, iOS 26 o iPadOS 26. La versione per Mac è sull'App Store; quelle per iPhone e iPad arrivano presto. Un solo acquisto vale per tutte le piattaforme.",
      "faq.q6": "Dove trovo informativa sulla privacy, condizioni e supporto?",
      "faq.a6": "Su questo sito: ",
      "faq.privacy": "Informativa sulla privacy",
      "faq.support": "Supporto",

      "links.eyebrow": "Altre app indipendenti e link",
      "links.h1": "Realizzate con la stessa cura e misura",
      "links.h2": "Prima il dispositivo, per più chiarezza ogni giorno",
      "links.pickrDesc": "Metti in ordine il rullino e fai spazio ai ricordi nuovi. Ordina le foto per mese, confronta prima di comprimere, riscopri le città in poche foto.",
      "links.pickrMeta": "iPhone · iPad",
      "links.siftrDesc": "Leggi rassegne quotidiane curate dal tuo agente IA. Collega il tuo cloud, con ricerca locale integrale e lettura offline.",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "Scatta la foto del pasto e vai avanti. Stima le calorie dalla foto con l'integrazione Salute, senza bilance né moduli.",
      "links.mealrMeta": "iPhone · Salute",
      "links.homeTitle": "Sito principale · chenhk.cn",
      "links.homeDesc": "Visita il sito personale di Haokun Chen: tutte le app indipendenti, la ricerca e gli appunti.",

      "cta.h1": "La fotocamera ha scattato le foto",
      "cta.h2": "Placr le riporta dove appartengono",
      "cta.note": "Scopri Placr sull'App Store, per Mac, iPhone e iPad",

      "foot.statement": "Placr · Ogni scrittura la confermi tu",
      "foot.mainSite": "Sito dell'autore",
      "foot.trademark": "Apple, il logo Apple, Mac, iPhone, iPad, iCloud e App Store sono marchi di Apple Inc., registrati negli USA e in altri Paesi e regioni.",
      "foot.legal": "© 2026 Placr · Software indipendente",

      "alt.home": "Schermata di revisione di Placr su Mac e iPhone",
      "alt.review": "Primo piano della metà superiore dell'iPhone: revisione delle foto senza posizione, mese per mese",
      "alt.confirm": "Primo piano della metà superiore dell'iPhone: conferma del luogo candidato di un gruppo",
      "alt.single": "Schermata iPhone della conferma in blocco prima della scrittura",
      "alt.before": "Illustrazione della schermata di conferma preliminare",
      "alt.duo": "Schermate di cambio luogo di Placr su iPhone e Mac",
      "alt.place": "Il pannello per cambiare luogo",
      "alt.map": "Scegliere un luogo sulla mappa",
      "alt.sync": "Primo piano della metà superiore dell'iPhone: stato della sincronizzazione iCloud"
    },

    "pt-BR": {
      "nav.aria": "Navegação principal",
      "foot.aria": "Links do rodapé",
      "compare.aria": "Alternar entre as visões de confirmação e histórico",
      "compare.demo": "Exemplo",

      "meta.title": "Placr · Dê às suas fotos o local que falta | Georreferenciamento de fotos para Mac, iPhone e iPad",
      "meta.description": "Sua câmera tirou as fotos. Seu iPhone lembrou do lugar. O Placr junta os dois de novo: fotos sem localização agrupadas por data, locais sugeridos pelas fotos do mesmo período e gravação só depois da confirmação — sempre reversível.",
      "nav.how": "Grupos e sugestões",
      "nav.write": "Confirmar e gravar",
      "nav.search": "Busca e sincronização",
      "nav.slip": "Grátis e desbloqueio",
      "nav.faq": "Perguntas frequentes",
      "nav.moreApps": "Mais apps",
      "nav.langLabel": "Idioma",
      "nav.download": "Baixar",

      "hero.l1": "Dê às suas fotos o local que falta",
      "hero.l2": "traga cada lembrança de volta aonde aconteceu",
      "hero.support": "O Placr analisa sua fototeca uma vez, agrupa por hora de captura as fotos sem localização, sugere locais usando fotos do mesmo período e as grava em lote depois da sua confirmação. Cada gravação deixa um registro que dá para restaurar.",
      "hero.storeBtn": "Ver na App Store",
      "hero.moreBtn": "Como funciona",
      "hero.meta": "Disponível na App Store para Mac · iPhone e iPad em breve",

      "ch1.eyebrow": "Agrupadas por hora · Referências próximas",
      "ch1.h1": "Só as fotos sem localização",
      "ch1.h2": "percorridas grupo por grupo",
      "ch1.sub": "Uma única análise da sua fototeca, e as fotos sem localização — vídeos inclusos — ficam agrupadas automaticamente por hora de captura. Revise mês a mês; pause quando quiser e continue depois.",
      "ch1.t1a": "Comece pelas fotos sem localização",
      "ch1.t1b": "Navegue por mês, pause quando quiser",
      "ch1.t1desc": "O Placr separa apenas as fotos sem dados GPS e as enfileira por hora de captura. Filtre por mês, condições de referência e progresso; retire individualmente as fotos que caíram no grupo errado.",
      "ch1.t2a": "As fotos do mesmo período são a referência",
      "ch1.t2b": "como as do seu iPhone na viagem",
      "ch1.t2desc": "Fotos tiradas por volta do mesmo horário, que já têm local, aparecem ao lado: use o local delas como está, busque no Apple Mapas ou digite você mesmo as coordenadas.",
      "ch1.s1n": "Sugestões de fotos próximas",
      "ch1.s1b": "As fotos do mesmo período com local viram candidatas automaticamente, ao lado do grupo para uma checagem rápida.",
      "ch1.s2n": "Confirme a candidata de cada grupo",
      "ch1.s2b": "Salve um local candidato por grupo e confira de novo fotos e lugares na tela de confirmação em lote antes de gravar qualquer coisa.",
      "ch1.s3n": "Uma gravação, com registro",
      "ch1.s3b": "Depois da confirmação, tudo vai para o Fotos de uma vez; cada gravação deixa um registro local que dá para restaurar depois.",

      "ch2.eyebrow": "Confirmar e gravar · Registro e restauração",
      "ch2.h1": "Mais uma olhada antes de gravar",
      "ch2.h2": "e depois, restaure quando quiser",
      "ch2.sub": "O Placr nunca altera suas fotos por conta própria. Os locais candidatos são salvos grupo a grupo e só gravados quando a tela de confirmação em lote confere. Cada gravação fica registrada, então dá para desfazer erros.",
      "ch2.modeBefore": "Confirmar",
      "ch2.modeAfter": "Registro",
      "ch2.c1a": "Mude a chave e acompanhe uma gravação",
      "ch2.c1b": "Confirme uma vez, grave em lote, mantenha o registro",
      "ch2.c1desc": "Essas capturas mostram as telas de confirmação e de registro. Cada gravação anota os lugares e o momento como estavam, e um lote inteiro pode ser restaurado pelo registro.",
      "ch2.pillMeta": "Só o local",
      "ch2.pillSafe": "Restaurável",
      "ch2.c2n": "Só o local é gravado; a foto em si fica intacta",
      "ch2.c2b": "Data de captura, conteúdo e demais metadados ficam exatamente como estavam, e nada é apagado. A restauração só acontece se o local da foto ainda for o valor gravado, então suas mudanças posteriores no Fotos nunca são sobrescritas.",

      "ch3.eyebrow": "Busca e coordenadas · Sincronização iCloud",
      "ch3.h1": "Quando uma sugestão não serve",
      "ch3.h2": "ache você mesmo o lugar",
      "ch3.sub": "Busque no Apple Mapas ou digite coordenadas; o lugar encontrado é gravado junto com a data de captura da foto. O progresso de revisão sincroniza entre seus dispositivos pelo iCloud.",
      "ch3.tag1": "Busca no mapa · Coordenadas manuais",
      "ch3.searcha": "Ache o lugar certo no mapa",
      "ch3.searchb": "ou digite as coordenadas",
      "ch3.searchdesc": "A busca é feita pelo Apple Mapas, com nomes e coordenadas nos resultados; também dá para digitar latitude e longitude WGS-84 à mão. O local gravado mantém a data de captura da foto e vem com uma precisão aproximada.",
      "ch3.tag2": "Sincronização iCloud · Continue em qualquer aparelho",
      "ch3.synca": "Comece no Mac",
      "ch3.syncb": "continue no iPhone",
      "ch3.syncdesc": "O progresso de revisão e os registros de gravação sincronizam pelo seu próprio banco privado do iCloud, sem criar conta. Continue no Mac, iPhone ou iPad; as fotos mesmas ficam em cada aparelho.",

      "slip.eyebrow": "Uso e privacidade",
      "slip.h1": "Navegar, sugestões e busca são grátis",
      "slip.h2": "desbloqueie os salvamentos quando precisar",
      "slip.sub": "O Placr não envia suas fotos. Sem conta, sem anúncios e sem assinatura. A versão grátis salva 20 grupos candidatos a cada 7 dias; uma compra única remove o limite para sempre.",
      "slip.free": "Uso grátis",
      "slip.pro": "Salvamentos ilimitados",
      "slip.g1": "Agrupar, sugerir e buscar",
      "slip.g2": "Uma compra, ilimitado para sempre",
      "slip.r1n": "Navegar e filtrar por mês",
      "slip.r1d": "Só fotos sem localização, agrupadas automaticamente por hora de captura; filtrar por mês, referências e progresso também é grátis.",
      "slip.r2n": "Referências próximas e busca no mapa",
      "slip.r2d": "As fotos do mesmo período sugerem lugares; a busca no Apple Mapas e as coordenadas manuais também são grátis.",
      "slip.r3n": "20 grupos candidatos grátis a cada 7 dias",
      "slip.r3d": "Sem limite de fotos por grupo; salvamentos falhos ou cancelados não contam. A sincronização de progresso pelo iCloud faz parte da versão grátis.",
      "slip.r4n": "Salvar grupos candidatos sem limite",
      "slip.r4d": "Depois da compra única, o limite de 20 a cada 7 dias acaba — feito para completar uma fototeca inteira de uma vez.",
      "slip.r5n": "Não é assinatura",
      "slip.r5d": "Uma compra, válida para sempre, sem renovação automática. Preços como exibidos na App Store.",
      "slip.r6n": "Compartilhamento Familiar incluído",
      "slip.r6d": "O desbloqueio é compartilhado com a família e vale igual no Mac, iPhone e iPad.",
      "slip.bar": "O Placr não envia suas fotos · Só o local é gravado; registros e progresso de revisão ficam neste aparelho e no seu próprio iCloud",

      "faq.eyebrow": "Perguntas e suporte",
      "faq.head": "Perguntas frequentes",
      "faq.q1": "Quanto dá para usar de graça?",
      "faq.a1": "Navegar, agrupar, sugestões próximas, busca no mapa e a sincronização de progresso pelo iCloud são grátis. Salvar grupos candidatos é grátis 20 vezes a cada 7 dias, sem limite de fotos por grupo; tentativas falhas ou canceladas não contam. Uma compra única remove o limite para sempre.",
      "faq.q2": "Minhas fotos são enviadas para algum servidor?",
      "faq.a2": "Nunca. Conteúdo, miniaturas e nomes de arquivo ficam nos seus aparelhos. A busca de lugares envia o texto e as coordenadas próximas ao Apple Mapas; com a sincronização iCloud ligada, o progresso de revisão é gravado só no seu banco privado do iCloud.",
      "faq.q3": "E se eu gravar o lugar errado?",
      "faq.a3": "Toda gravação deixa registro. Escolha aquela gravação na tela de registro e restaure — a restauração só acontece se o local da foto ainda for o valor gravado, então suas mudanças posteriores no Fotos nunca são sobrescritas.",
      "faq.q4": "As fotos em si mudam?",
      "faq.a4": "Só o local é gravado. Conteúdo, data de captura e demais metadados ficam intactos, e nada é apagado. Vídeos sem GPS também podem receber um lugar.",
      "faq.q5": "Quais aparelhos e sistemas são suportados?",
      "faq.a5": "O Placr funciona em Mac, iPhone e iPad e exige macOS 26, iOS 26 ou iPadOS 26. A versão para Mac já está na App Store; as de iPhone e iPad chegam em breve. Uma única compra vale para todas as plataformas.",
      "faq.q6": "Onde vejo a política de privacidade, os termos e o suporte?",
      "faq.a6": "Neste site: ",
      "faq.privacy": "Política de Privacidade",
      "faq.support": "Suporte",

      "links.eyebrow": "Mais apps independentes e links",
      "links.h1": "Feitos com o mesmo cuidado e comedimento",
      "links.h2": "O aparelho primeiro, para um dia a dia com clareza",
      "links.pickrDesc": "Coloque o rolo de câmera em dia e abra espaço para lembranças novas. Organize fotos por mês, compare antes de comprimir, redescubra cidades em poucas fotos.",
      "links.pickrMeta": "iPhone · iPad",
      "links.siftrDesc": "Leia resumos diários curados pelo seu agente de IA. Conecte sua própria nuvem, com busca local completa e leitura offline.",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "Fotografe a refeição e siga em frente. Estime as calorias pela foto com integração à Saúde, sem balança nem formulários.",
      "links.mealrMeta": "iPhone · Saúde",
      "links.homeTitle": "Site principal · chenhk.cn",
      "links.homeDesc": "Visite o site pessoal de Haokun Chen com todos os apps independentes, pesquisa e notas.",

      "cta.h1": "Sua câmera tirou as fotos",
      "cta.h2": "o Placr devolve cada uma ao seu lugar",
      "cta.note": "Veja o Placr na App Store — para Mac, iPhone e iPad",

      "foot.statement": "Placr · Cada gravação passa pela sua confirmação",
      "foot.mainSite": "Site do autor",
      "foot.trademark": "Apple, o logotipo da Apple, Mac, iPhone, iPad, iCloud e App Store são marcas da Apple Inc., registradas nos EUA e em outros países e regiões.",
      "foot.legal": "© 2026 Placr · Software independente",

      "alt.home": "Tela de revisão do Placr no Mac e no iPhone",
      "alt.review": "Close da metade superior do iPhone: revisando fotos sem local, mês a mês",
      "alt.confirm": "Close da metade superior do iPhone: confirmando o local candidato de um grupo",
      "alt.single": "Tela do iPhone com a confirmação em lote antes de gravar",
      "alt.before": "Ilustração da tela de confirmação prévia",
      "alt.duo": "Telas de alteração de local do Placr no iPhone e no Mac",
      "alt.place": "O painel para alterar o local",
      "alt.map": "Escolhendo um lugar no mapa",
      "alt.sync": "Close da metade superior do iPhone: status da sincronização iCloud"
    },

    "ko": {
      "nav.aria": "주 탐색",
      "foot.aria": "하단 링크",
      "compare.aria": "확인 화면과 기록 화면 예시 전환",
      "compare.demo": "예시",

      "meta.title": "Placr · 사진에 빠진 위치를 채웁니다 | Mac·iPhone·iPad 사진 지오태깅 도구",
      "meta.description": "카메라는 사진을 찍고, iPhone은 장소를 기억했습니다. Placr가 둘을 다시 이어 줍니다. 위치 없는 사진을 촬영 시각으로 묶고, 같은 시간대 사진이 장소를 제안하며, 확인해야만 기록하고 언제든 되돌릴 수 있습니다.",
      "nav.how": "그룹화와 제안",
      "nav.write": "확인과 기록",
      "nav.search": "검색과 동기화",
      "nav.slip": "무료와 잠금 해제",
      "nav.faq": "자주 묻는 질문",
      "nav.moreApps": "더 많은 앱",
      "nav.langLabel": "언어",
      "nav.download": "다운로드",

      "hero.l1": "사진에 빠진 위치를 채웁니다",
      "hero.l2": "추억을 그곳으로 돌려보냅니다",
      "hero.support": "Placr는 사진 보관함을 한 번만 훑어 위치 없는 사진을 촬영 시각으로 묶고, 같은 시간대 사진을 참고해 장소를 제안한 뒤 확인하면 한꺼번에 기록합니다. 기록할 때마다 내역이 남아 언제든 되돌릴 수 있어요.",
      "hero.storeBtn": "App Store에서 보기",
      "hero.moreBtn": "작동 방식 보기",
      "hero.meta": "Mac 버전 App Store 출시 · iPhone과 iPad 버전 곧 공개",

      "ch1.eyebrow": "시각순 그룹화 · 가까운 사진 참고",
      "ch1.h1": "위치 없는 사진만 골라서",
      "ch1.h2": "촬영 시각 그룹별로 훑어요",
      "ch1.sub": "사진 보관함을 한 번 훑으면 위치 없는 사진(동영상 포함)이 촬영 시각별로 자동으로 묶입니다. 월별로 하나씩 확인하고, 언제든 멈췄다 나중에 이어서 하면 됩니다.",
      "ch1.t1a": "위치 없는 사진부터 시작",
      "ch1.t1b": "월별로 보고, 언제든 멈추기",
      "ch1.t1desc": "Placr는 GPS 정보가 없는 사진만 골라 촬영 시각 순으로 줄 세웁니다. 월, 참고 사진 여부, 진행 상황으로 걸러 보고, 잘못 묶인 사진은 개별적으로 뺄 수 있어요.",
      "ch1.t2a": "같은 시간대 사진이 참고가 되고",
      "ch1.t2b": "예컨대 함께 다닌 iPhone 사진처럼",
      "ch1.t2desc": "시각이 비슷하고 위치가 이미 있는 사진이 바로 옆에 나타나 그 위치를 그대로 쓸 수 있어요. Apple 지도로 검색하거나 좌표를 직접 입력할 수도 있습니다.",
      "ch1.s1n": "가까운 사진이 제안",
      "ch1.s1b": "같은 시간대의 위치 있는 사진이 자동으로 후보가 되고, 참고 사진이 바로 옆에 보여 한눈에 확인할 수 있어요.",
      "ch1.s2n": "그룹마다 후보 확인",
      "ch1.s2b": "그룹마다 후보 위치를 먼저 저장하고, 한 번에 확인하는 화면에서 사진과 장소를 다시 점검한 뒤에야 기록됩니다.",
      "ch1.s3n": "한 번에 기록하고 내역 남기기",
      "ch1.s3b": "확인 후 사진에 한꺼번에 기록되며, 그때마다 기기 안에 작업 내역이 남아 나중에 언제든 되돌릴 수 있어요.",

      "ch2.eyebrow": "확인과 기록 · 내역과 되돌리기",
      "ch2.h1": "기록 전에, 한 번 더 확인",
      "ch2.h2": "기록 후에도, 언제든 되돌리기",
      "ch2.sub": "Placr는 사진을 저절로 고치지 않습니다. 후보 위치를 그룹마다 저장하고, 한 번에 확인하는 화면이 맞을 때만 기록해요. 기록할 때마다 내역이 남아 잘못 기록해도 되돌릴 수 있습니다.",
      "ch2.modeBefore": "확인",
      "ch2.modeAfter": "기록 내역",
      "ch2.c1a": "스위치를 넘겨 기록 흐름 보기",
      "ch2.c1b": "한 번 확인하고, 한꺼번에 기록하고, 내역으로 남기기",
      "ch2.c1desc": "「확인」 화면과 「기록 내역」 화면의 예시입니다. 기록할 때마다 그때의 장소와 시각이 남고, 내역 화면에서 그룹 전체를 되돌릴 수 있어요.",
      "ch2.pillMeta": "위치만 기록",
      "ch2.pillSafe": "내역에서 복원",
      "ch2.c2n": "기록되는 건 위치뿐, 사진 자체는 그대로",
      "ch2.c2b": "촬영 시각, 사진 내용, 그 밖의 정보는 그대로이고 사진을 지우지도 않습니다. 복원은 사진의 위치가 기록한 값 그대로일 때만 이루어져, 이후에 사진 앱에서 바꾼 내용을 덮어쓰지 않아요.",

      "ch3.eyebrow": "검색과 좌표 · iCloud 동기화",
      "ch3.h1": "제안이 맞지 않으면",
      "ch3.h2": "직접 그 장소를 찾으면 됩니다",
      "ch3.sub": "Apple 지도로 검색하거나 좌표를 입력하세요. 찾은 장소는 사진의 촬영 시각과 함께 기록되고, 검토 진행 상황은 iCloud로 기기 사이에 동기화됩니다.",
      "ch3.tag1": "지도 검색 · 직접 좌표",
      "ch3.searcha": "지도 위에서 정확한 장소 찾기",
      "ch3.searchb": "검색이 안 되면 좌표 입력",
      "ch3.searchdesc": "검색은 Apple 지도가 담당하고 결과에는 지명과 좌표가 붙습니다. WGS-84 위도·경도를 직접 입력할 수도 있어요. 기록된 위치는 사진의 촬영 시각을 유지하고 대략적인 정확도가 함께 남습니다.",
      "ch3.tag2": "iCloud 동기화 · 어디서나 이어서",
      "ch3.synca": "Mac에서 시작해",
      "ch3.syncb": "iPhone에서 이어서",
      "ch3.syncdesc": "검토 진행 상황과 기록 내역은 사용자 자신의 iCloud 비공개 데이터베이스로 동기화되고, 계정 가입은 필요 없습니다. Mac, iPhone, iPad 어디서든 이어서 하고, 사진 자체는 각 기기에 그대로 남아요.",

      "slip.eyebrow": "이용 및 개인정보 안내",
      "slip.h1": "둘러보기·제안·검색은 무료",
      "slip.h2": "저장 횟수는 필요할 때 해제",
      "slip.sub": "Placr는 사진을 업로드하지 않아요. 계정도, 광고도, 구독도 없습니다. 무료 버전은 7일마다 후보 그룹 20개를 저장할 수 있고, 한 번 구매하면 제한이 영구히 해제됩니다.",
      "slip.free": "무료 이용",
      "slip.pro": "무제한 저장",
      "slip.g1": "그룹화, 제안, 검색",
      "slip.g2": "한 번 구매로 평생 무제한",
      "slip.r1n": "월별 둘러보기와 필터",
      "slip.r1d": "위치 없는 사진만 촬영 시각으로 자동 그룹화화. 월, 참고 사진 여부, 진행 상황 필터도 무료입니다.",
      "slip.r2n": "가까운 사진 참고와 지도 검색",
      "slip.r2d": "같은 시간대 사진이 장소를 제안하고, Apple 지도 검색과 직접 좌표 입력도 무료예요.",
      "slip.r3n": "7일마다 후보 그룹 20개 무료 저장",
      "slip.r3d": "그룹당 장수 제한 없음, 실패·취소는 횟수에서 제외. iCloud 진행 동기화도 무료 버전에 포함됩니다.",
      "slip.r4n": "후보 그룹 무제한 저장",
      "slip.r4d": "한 번 구매하면 ‘7일 20그룹’ 제한이 사라져, 보관함 전체를 한 번에 채우기에 알맞아요.",
      "slip.r5n": "구독이 아닙니다",
      "slip.r5d": "한 번 구매로 평생 유효, 자동 갱신 없음. 가격은 App Store 표시를 따릅니다.",
      "slip.r6n": "가족 공유 지원",
      "slip.r6d": "해제는 가족과 공유되고 Mac, iPhone, iPad 모두에 적용됩니다.",
      "slip.bar": "Placr는 사진을 업로드하지 않습니다 · 위치만 기록되고, 작업 내역과 검토 진행은 이 기기와 사용자 자신의 iCloud에만 남아요",

      "faq.eyebrow": "질문 및 지원",
      "faq.head": "자주 묻는 질문",
      "faq.q1": "무료로 어디까지 쓸 수 있나요?",
      "faq.a1": "둘러보기, 그룹화, 가까운 사진 제안, 지도 검색, iCloud 진행 동기화는 모두 무료예요. 후보 그룹 저장은 7일마다 20번까지 무료이고 그룹당 장수 제한이 없으며, 실패나 취소는 횟수에서 제외됩니다. 한 번 구매하면 제한이 영구히 해제돼요.",
      "faq.q2": "사진이 서버로 업로드되나요?",
      "faq.a2": "아니요. 사진 내용, 썸네일, 파일 이름은 기기에 남습니다. 장소 검색 시 입력한 문구와 근처 좌표는 Apple 지도로 전송되고, iCloud 동기화를 켜면 검토 진행은 사용자 자신의 iCloud 비공개 데이터베이스에만 기록돼요.",
      "faq.q3": "잘못된 위치를 기록했으면요?",
      "faq.a3": "기록할 때마다 작업 내역이 남습니다. 내역 화면에서 그 기록을 골라 되돌리면 되고, 사진 위치가 기록한 값 그대로일 때만 복원되므로 이후에 사진 앱에서 바꾼 내용은 덮어쓰지 않아요.",
      "faq.q4": "사진 자체가 바뀌나요?",
      "faq.a4": "위치만 기록합니다. 사진 내용, 촬영 시각, 그 밖의 메타데이터는 그대로이고 지워지지도 않아요. GPS가 없는 동영상도 위치를 채울 수 있습니다.",
      "faq.q5": "어떤 기기와 OS를 지원하나요?",
      "faq.a5": "Mac, iPhone, iPad에서 작동하고 macOS 26, iOS 26 또는 iPadOS 26이 필요해요. Mac 버전은 App Store에 출시되어 있고 iPhone·iPad 버전은 곧 공개됩니다. 한 번 구매면 모든 플랫폼에서 쓸 수 있어요.",
      "faq.q6": "개인정보 처리방침과 이용 약관은 어디서 보나요?",
      "faq.a6": "이 사이트에서 볼 수 있습니다: ",
      "faq.privacy": "개인정보 처리방침",
      "faq.support": "지원 페이지",

      "links.eyebrow": "더 많은 인디 앱 및 링크",
      "links.h1": "같은 철학으로 만든 간결하고 집중된 도구",
      "links.h2": "기기 내 처리 우선, 일상의 한구석을 정돈하는 앱",
      "links.pickrDesc": "사진을 가지런히 정리해 새 추억을 위한 공간을 만들어요. 월별 정리, 압축 전 비교, 장소별 여행 사진까지.",
      "links.pickrMeta": "iPhone · iPad",
      "links.siftrDesc": "AI 에이전트가 정리한 일일 브리핑을 읽는 리더. 개인 클라우드 연결과 기기 내 전문 검색, 오프라인 읽기 지원.",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "사진 한 장으로 끝내는 식단 기록. 사진으로 칼로리를 추정하고 Apple 건강과 연동합니다.",
      "links.mealrMeta": "iPhone · Apple 건강",
      "links.homeTitle": "개인 웹사이트 · chenhk.cn",
      "links.homeDesc": "개발자 Haokun Chen의 홈페이지에서 모든 인디 앱과 연구, 기술 아티클을 확인하세요.",

      "cta.h1": "카메라는 사진을 찍었고",
      "cta.h2": "Placr가 그 장소로 돌려보냅니다",
      "cta.note": "App Store에서 Placr 만나보기 — Mac, iPhone, iPad 지원",

      "foot.statement": "Placr · 기록 여부는 사용자가 정합니다",
      "foot.mainSite": "개발자 홈",
      "foot.trademark": "Apple, Apple 로고, Mac, iPhone, iPad, iCloud 및 App Store는 미국 및 기타 국가와 지역에 등록된 Apple Inc.의 상표입니다.",
      "foot.legal": "© 2026 Placr · 인디 개발",

      "alt.home": "Mac과 iPhone에서의 Placr 검토 화면",
      "alt.review": "iPhone 화면 상단 클로즈업: 위치 없는 사진을 월별로 검토",
      "alt.confirm": "iPhone 화면 상단 클로즈업: 그룹의 후보 장소 확인",
      "alt.single": "기록 전 그룹 확인 화면(iPhone)",
      "alt.before": "기록 전 확인 화면 예시",
      "alt.duo": "iPhone과 Mac에서의 Placr 위치 변경 화면",
      "alt.place": "위치 변경 패널",
      "alt.map": "지도에서 장소 고르기",
      "alt.sync": "iPhone 화면 상단 클로즈업: iCloud 동기화 상태"
    }
    /* LANGS-APPEND-POINT */
  };

  var SUPPORTED = ["zh-Hans", "zh-Hant", "zh-HK", "ja", "en", "de", "es", "fr", "it", "pt-BR", "ko"];
  var currentLang = "zh-Hans";

  function detectLang() { return PlacrRouting.readLanguage(); }

  function flowCompareSrc(code, after) {
    return "assets/home/" + code + "/compare-" + (after ? "history" : "confirm") + ".webp";
  }

  function applyLang(lang, updateURL = false) {
    var code = SUPPORTED.indexOf(lang) !== -1 ? lang : "en";
    currentLang = code;
    var dict = COPY[code] || COPY["en"];

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

    /* 1. 响应式 <picture>（首屏 Hero 与搜索章节：桌面双端 / 手机单 iPhone） */
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
        singleShots[s].setAttribute("src", "assets/home/" + code + "/" + fileName);
      }
    }

    /* 3. 确认/记录交互开关卡：按当前开关状态取对应语种的图片 */
    var flowCard = document.querySelector("[data-flow-compare]");
    if (flowCard) {
      var after = flowCard.classList.contains("is-after");
      var compareImg = flowCard.querySelector("[data-compare-img]");
      if (compareImg) compareImg.setAttribute("src", flowCompareSrc(code, after));
      var preload = new Image();
      preload.src = flowCompareSrc(code, !after);
    }

    var storeUrl = PlacrRouting.storeURL(new URLSearchParams(location.search).get("store"));
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

    PlacrRouting.rememberLanguage(code, updateURL);
  }

  /* ---------- 确认写入 / 写入记录 交互开关 ---------- */
  function initFlowCompare() {
    var card = document.querySelector("[data-flow-compare]");
    if (!card) return;

    var switchBtn = card.querySelector("[data-flow-switch]");
    var stage = card.querySelector("[data-compare-stage]");
    var mainImg = card.querySelector("[data-compare-img]");
    var modeBefore = card.querySelector("[data-mode-before]");
    var modeAfter = card.querySelector("[data-mode-after]");

    var preload = new Image();
    preload.src = flowCompareSrc(currentLang, true);

    function setAfterMode(enabled) {
      card.classList.toggle("is-after", enabled);
      if (switchBtn) {
        switchBtn.setAttribute("aria-checked", enabled ? "true" : "false");
      }
      if (mainImg) mainImg.setAttribute("src", flowCompareSrc(currentLang, enabled));
      if (modeBefore) modeBefore.classList.toggle("active", !enabled);
      if (modeAfter) modeAfter.classList.toggle("active", enabled);
    }

    function toggle() {
      setAfterMode(!card.classList.contains("is-after"));
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
  initFlowCompare();
  initReveal();

  var selectEl = document.querySelector("[data-language-select]");
  if (selectEl) {
    selectEl.addEventListener("change", function (ev) {
      applyLang(ev.target.value, true);
    });
  }
})();
