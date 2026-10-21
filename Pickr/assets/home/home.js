(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var APP_ID = "6813511457";
  var STORE_BY_LANG = {
    "zh-Hans": "https://apps.apple.com/cn/app/pickr/id" + APP_ID,
    "zh-Hant": "https://apps.apple.com/tw/app/pickr/id" + APP_ID,
    en: "https://apps.apple.com/us/app/pickr-photos/id" + APP_ID,
    ja: "https://apps.apple.com/jp/app/pickr/id" + APP_ID,
    ko: "https://apps.apple.com/kr/app/pickr/id" + APP_ID
  };

  var COPY = {
    "zh-Hans": {
      "meta.title": "Pickr · 先看这个月，把相册理到今天 | iPhone 与 iPad 照片整理工具",
      "meta.description": "Pickr 带你按月整理照片与视频：上滑待删除、下滑收藏，删除前整批复核。本机无损画质压缩与旅行地点相册，已在 App Store 上架，适用于 iPhone 与 iPad。",
      "nav.how": "按月整理",
      "nav.compression": "画质瘦身",
      "nav.albums": "地点相册",
      "nav.slip": "免费与 Pro",
      "nav.faq": "常见问题",
      "nav.moreApps": "更多作品",
      "nav.langLabel": "语言",
      "nav.download": "下载",

      "hero.eyebrow": "适用于 iPhone 与 iPad",
      "hero.l1": "先看这个月，",
      "hero.l2": "把相册理到今天。",
      "hero.support": "不用一口气面对几万张照片。每次挑一个月，上滑待删除、下滑收藏，删除前整批复核。本机画质压缩与旅行地点相册，在 iPhone 与 iPad 上无缝接力。",
      "hero.storeBtn": "在 App Store 下载",
      "hero.moreBtn": "了解工作方式",
      "hero.meta": "已在 App Store 正式上架 · 需要 iOS 17 或更新版本 · 照片从不离开本机",

      "ch1.eyebrow": "按月整理",
      "ch1.head": "一个月一个月来，删前必复核。",
      "ch1.sub": "把漫长的相册切成三五分钟就能理完的月份。随时停下，下次打开还在老地方；无论是 iPhone 随手刷，还是 iPad 大屏审片，体验始终如一。",
      "ch1.t1n": "打开这个月，接着上次理",
      "ch1.t1b": "从最近的月份开始，或抽一个随机月份、专项清理视频与截图。自动记住上次停下的那一张。",
      "ch1.t2n": "一张张滑过，顺手收进相册",
      "ch1.t2b": "上滑标记待删除，下滑加入收藏，想留下的时刻当场收进「我的相册」。每一步都能撤回。",
      "ch1.s1n": "相似照片擂台",
      "ch1.s1b": "连拍与同一角度的照片在本机自动归组，两两同屏比对对焦与表情，只留最满意的一张。",
      "ch1.s2n": "待确认整批复核",
      "ch1.s2b": "删除绝不当场发生。所有待删照片先集中在「待确认」列表摊开检查，确认无误再执行。",
      "ch1.s3n": "系统最近删除兜底",
      "ch1.s3b": "通过系统确认弹窗移入 iOS「照片 → 最近删除」保留 30 天，随时可以恢复原片。",

      "ch2.eyebrow": "本机无损感瘦身",
      "ch2.head": "先看能省多少，对比过再替换。",
      "ch2.sub": "视频转 HEVC、照片转 HEIC，全程在 Apple 芯片内直接重编码。转换前先算清预计可释放的空间，转换后逐项给出本机画质评分。",
      "ch2.badgeOrig": "原图 JPEG · 4.8 MB",
      "ch2.badgeHeic": "HEIC 压缩后 · 1.1 MB",
      "ch2.badgeSave": "已省 77% · 画质 98 分",
      "ch2.modeOrig": "原图",
      "ch2.modeHeic": "HEIC",
      "ch2.c1n": "点开开关对比原图与 HEIC，细节过关才替换",
      "ch2.c1b": "打开上方开关即可对比原图（4.8 MB）与 HEIC 压缩后（1.1 MB）的叶脉纹理。在 App 内同样支持随时比对，收益不明显的项会自动归入「建议先对比」。",
      "ch2.c2n": "拍摄时间、GPS 地点与相册归属完整保留",
      "ch2.c2b": "压缩替换后，照片原有的拍摄日期、经纬度坐标、收藏状态及所属相册原封不动；被替换的原片同样在系统「最近删除」保留 30 天。",

      "ch3.eyebrow": "地点相册与多端同行",
      "ch3.head": "一座城长出一本相册，双端进度随时接力。",
      "ch3.sub": "读取照片自带的地点与时间，把散落在各月的旅途自动聚合成册；整理决定与压缩标记通过你本人的 iCloud 私有库在 iPhone 与 iPad 间实时同步。",
      "ch3.tag1": "旅行自动成册",
      "ch3.albumsn": "重温一座城，从一组精选照片开始",
      "ch3.albumsb": "按「哪几天在哪个城市」自动把旅途照片归成相册，并在本机挑出构图与清晰度更好的画面，一键存回系统「照片」相簿。",
      "ch3.tag2": "离线整理 · iCloud 同步",
      "ch3.offlinen": "登机前缓存整月，回到 iPad 接着理",
      "ch3.offlineb": "长按任意月份即可把云端照片提前准备到本机，飞行模式或高铁无网时照常顺滑过片。联网后，进度自动通过个人 iCloud 同步至另一台设备。",

      "slip.eyebrow": "免费与 Pickr Pro",
      "slip.head": "核心整理慷慨免费，进阶能力按需解锁。",
      "slip.sub": "没有注册账号，没有全屏广告。日常整理与离线准备直接开放，会员提供月度、年度与一次性买断三种方案。",
      "slip.free": "免费开放",
      "slip.pro": "Pickr Pro",
      "slip.g1": "日常整理",
      "slip.g2": "进阶与多端",
      "slip.r1n": "按月过片、撤销与待确认复核",
      "slip.r1d": "浏览与筛选永久免费；可免费执行 7 批保存（每批不限张数），自动记忆进度。",
      "slip.r2n": "相似照片擂台与我的相册",
      "slip.r2d": "本机识别连拍相似图两两比选，过片时顺手收集进自定义相册。",
      "slip.r3n": "整月离线内容准备",
      "slip.r3d": "出发前把某个月的照片与视频准备到本机，无网环境照常流畅整理。",
      "slip.r4n": "无限次保存与画质优先本机压缩",
      "slip.r4d": "不限批次写入系统相册；视频转 HEVC、照片转 HEIC，画质评分把关并支持对比原片。",
      "slip.r5n": "地点相册保存与高分筛选",
      "slip.r5d": "按城市与日期自动生成旅行相册，本机精选高分照片一键存回系统「照片」。",
      "slip.r6n": "iPhone 与 iPad iCloud 进度同步",
      "slip.r6d": "整理决定与压缩标记同步至个人 iCloud 私有数据库，双端随时接力。",
      "slip.bar": "100% 本机处理 · 无 Pickr 账号 · 照片与位置从不上传开发者服务器",

      "faq.eyebrow": "解答与支持",
      "faq.head": "常见问题",
      "faq.q1": "免费可以用多少？",
      "faq.a1": "按月浏览、滑动筛选、相似照片擂台、我的相册与离线准备均免费开放；待确认队列可免费保存 7 次（每次不限照片张数）。无限次保存、本机画质压缩、地点相册保存与 iCloud 同步为 Pickr Pro 会员功能。",
      "faq.q2": "照片会被上传到服务器吗？",
      "faq.a2": "不会。整理、相似分析与压缩全部在这台 iPhone 或 iPad 上完成，照片从不离开你的设备。开启 iCloud 同步时，也只有整理进度标记（不含照片本身）会存进你自己的 Apple iCloud 私有库。",
      "faq.q3": "滑快了删错照片怎么办？",
      "faq.a3": "上滑只是放进「待确认」列表，不会立刻删除。你可以随时撤销上一步，或在待确认页整批恢复；即使确认删除后，系统「最近删除」仍会保留 30 天。",
      "faq.q4": "压缩会损失画质或丢失拍摄信息吗？",
      "faq.a4": "替换前有本机画质评分，也可随时对比原片与压缩版；拍摄时间、GPS 经纬度等 EXIF 元数据完整保留。不满意就不替换，原片原样不动。",
      "faq.q5": "支持哪些设备与系统版本？",
      "faq.a5": "Pickr 已在 App Store 正式上架，同时原生适配 iPhone 与 iPad，需要 iOS / iPadOS 17.0 或更新版本（自动地点相册精选依赖 iOS 18 本机图像分析）。",
      "faq.q6": "隐私政策与技术支持在哪里查看？",
      "faq.a6": "你可以在本站直接查阅完整的",
      "faq.privacy": "隐私政策",
      "faq.support": "技术支持",

      "links.eyebrow": "更多独立作品与友情链接",
      "links.head": "同样克制、专注的独立工具。",
      "links.sub": "由同一独立开发者打造，全部遵循本机优先、无广告与清晰直接的交互理念。",
      "links.placrDesc": "给照片补上缺失的地点。按拍摄时间分组，参考同时段照片智能建议位置并批量写入。",
      "links.placrMeta": "Mac · iPhone · iPad",
      "links.siftrDesc": "阅读 AI Agent 为你整理的私人每日简报。连接个人云盘，本地全文检索与离线阅读。",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "拍一下，这顿就记好了。从照片估算一餐热量并与 Apple 健康联动，无需称重与填表。",
      "links.mealrMeta": "iPhone · Apple 健康",
      "links.homeTitle": "个人主站 · chenhk.cn",
      "links.homeDesc": "访问开发者 Haokun Chen 的个人主页，了解全部独立软件作品、研究与技术文章。",

      "cta.head": "今晚睡前，把上个月整理完。",
      "cta.note": "前往 App Store 免费下载 Pickr，在 iPhone 与 iPad 上体验干净利落的本机相册整理。",

      "foot.statement": "Pickr · 你的照片，由你决定",
      "foot.mainSite": "个人主站",
      "foot.trademark": "Apple、Apple 标志、iPhone、iPad、iCloud 及 App Store 是 Apple Inc. 在美国及其他国家和地区的注册商标。",
      "foot.legal": "© 2026 Pickr · 独立开发",

      "alt.home": "Pickr 整理首页展示",
      "alt.compression": "Pickr 画质压缩页展示",
      "alt.albums": "Pickr 地点相册页展示",
      "alt.review": "Pickr 过片与收进相册界面展示",
      "alt.offline": "Pickr 离线整理与同步页展示",
      "alt.card1": "微距叶脉画质对比样张",
      "alt.card2": "山与湖风光样张",
      "alt.card3": "街角咖啡馆旅行样张"
    },

    "zh-Hant": {
      "meta.title": "Pickr · 先看這個月，把相簿理到今天 | iPhone 與 iPad 照片整理工具",
      "meta.description": "Pickr 帶你按月整理照片與影片：上滑待刪除、下滑收藏，刪除前整批複核。本機無損畫質壓縮與旅行地點相簿，已在 App Store 上架，適用於 iPhone 與 iPad。",
      "nav.how": "按月整理",
      "nav.compression": "畫質瘦身",
      "nav.albums": "地點相簿",
      "nav.slip": "免費與 Pro",
      "nav.faq": "常見問題",
      "nav.moreApps": "更多作品",
      "nav.langLabel": "語言",
      "nav.download": "下載",

      "hero.eyebrow": "適用於 iPhone 與 iPad",
      "hero.l1": "先看這個月，",
      "hero.l2": "把相簿理到今天。",
      "hero.support": "不用一口氣面對幾萬張照片。每次挑一個月，上滑待刪除、下滑收藏，刪除前整批複核。本機畫質壓縮與旅行地點相簿，在 iPhone 與 iPad 上無縫接力。",
      "hero.storeBtn": "在 App Store 下載",
      "hero.moreBtn": "了解工作方式",
      "hero.meta": "已在 App Store 正式上架 · 需要 iOS 17 或更新版本 · 照片從不離開本機",

      "ch1.eyebrow": "按月整理",
      "ch1.head": "一個月一個月來，刪前必複核。",
      "ch1.sub": "把漫長的相簿切成三五分鐘就能理完的月份。隨時停下，下次打開還在老地方；無論是 iPhone 隨手刷，還是 iPad 大螢幕審片，體驗始終如一。",
      "ch1.t1n": "打開這個月，接著上次理",
      "ch1.t1b": "從最近的月份開始，或抽一個隨機月份、專項清理影片與截圖。自動記住上次停下的那一張。",
      "ch1.t2n": "一張張滑過，順手收進相簿",
      "ch1.t2b": "上滑標記待刪除，下滑加入收藏，想留下的時刻當場收進「我的相簿」。每一步都能撤回。",
      "ch1.s1n": "相似照片擂台",
      "ch1.s1b": "連拍與同一角度的照片在本機自動歸組，兩兩同螢幕比對對焦與表情，只留最滿意的一張。",
      "ch1.s2n": "待確認整批複核",
      "ch1.s2b": "刪除絕不當場發生。所有待刪照片先集中在「待確認」清單攤開檢查，確認無誤再執行。",
      "ch1.s3n": "系統最近刪除兜底",
      "ch1.s3b": "透過系統確認視窗移入 iOS「照片 → 最近刪除」保留 30 天，隨時可以復原原片。",

      "ch2.eyebrow": "本機無損感瘦身",
      "ch2.head": "先看能省多少，對比過再替換。",
      "ch2.sub": "影片轉 HEVC、照片轉 HEIC，全程在 Apple 晶片內直接重編碼。轉換前先算清預計可釋放的空間，轉換後逐項給出本機畫質評分。",
      "ch2.badgeOrig": "原圖 JPEG · 4.8 MB",
      "ch2.badgeHeic": "HEIC 壓縮後 · 1.1 MB",
      "ch2.badgeSave": "已省 77% · 畫質 98 分",
      "ch2.modeOrig": "原圖",
      "ch2.modeHeic": "HEIC",
      "ch2.c1n": "點開開關對比原圖與 HEIC，細節過關才替換",
      "ch2.c1b": "打開上方開關即可對比原圖（4.8 MB）與 HEIC 壓縮後（1.1 MB）的葉脈紋理。在 App 內同樣支援隨時比對，收益不明顯的項會自動歸入「建議先對比」。",
      "ch2.c2n": "拍攝時間、GPS 地點與相簿歸屬完整保留",
      "ch2.c2b": "壓縮替換後，照片原有的拍攝日期、經緯度座標、收藏狀態及所屬相簿原封不動；被替換的原片同樣在系統「最近刪除」保留 30 天。",

      "ch3.eyebrow": "地點相簿與多端同行",
      "ch3.head": "一座城長出一本相簿，雙端進度隨時接力。",
      "ch3.sub": "讀取照片自帶的地點與時間，把散落在各月的旅途自動聚合成冊；整理決定與壓縮標記透過你本人的 iCloud 私有庫在 iPhone 與 iPad 間即時同步。",
      "ch3.tag1": "旅行自動成冊",
      "ch3.albumsn": "重溫一座城，從一組精選照片開始",
      "ch3.albumsb": "按「哪幾天在哪個城市」自動把旅途照片歸成相簿，並在本機挑出構圖與清晰度更好的畫面，一鍵存回系統「照片」相簿。",
      "ch3.tag2": "離線整理 · iCloud 同步",
      "ch3.offlinen": "登機前快取整月，回到 iPad 接著理",
      "ch3.offlineb": "長按任意月份即可把雲端照片提前準備到本機，飛航模式或高鐵無網時照常順滑過片。連網後，進度自動透過個人 iCloud 同步至另一台裝置。",

      "slip.eyebrow": "免費與 Pickr Pro",
      "slip.head": "核心整理慷慨免費，進階能力按需解鎖。",
      "slip.sub": "沒有註冊帳號，沒有全螢幕廣告。日常整理與離線準備直接開放，會員提供月度、年度與一次性買斷三種方案。",
      "slip.free": "免費開放",
      "slip.pro": "Pickr Pro",
      "slip.g1": "日常整理",
      "slip.g2": "進階與多端",
      "slip.r1n": "按月過片、撤銷與待確認複核",
      "slip.r1d": "瀏覽與篩選永久免費；可免費執行 7 批儲存（每批不限張數），自動記憶進度。",
      "slip.r2n": "相似照片擂台與我的相簿",
      "slip.r2d": "本機識別連拍相似圖兩兩比選，過片時順手收集進自訂相簿。",
      "slip.r3n": "整月離線內容準備",
      "slip.r3d": "出發前把某個月的照片與影片準備到本機，無網環境照常流暢整理。",
      "slip.r4n": "無限次儲存與畫質優先本機壓縮",
      "slip.r4d": "不限批次寫入系統相簿；影片轉 HEVC、照片轉 HEIC，畫質評分把關並支援對比原片。",
      "slip.r5n": "地點相簿儲存與高分篩選",
      "slip.r5d": "按城市與日期自動生成旅行相簿，本機精選高分照片一鍵存回系統「照片」。",
      "slip.r6n": "iPhone 與 iPad iCloud 進度同步",
      "slip.r6d": "整理決定與壓縮標記同步至個人 iCloud 私有資料庫，雙端隨時接力。",
      "slip.bar": "100% 本機處理 · 無 Pickr 帳號 · 照片與位置從不上傳開發者伺服器",

      "faq.eyebrow": "解答與支援",
      "faq.head": "常見問題",
      "faq.q1": "免費可以用多少？",
      "faq.a1": "按月瀏覽、滑動篩選、相似照片擂台、我的相簿與離線準備均免費開放；待確認清單可免費儲存 7 次（每次不限照片張數）。無限次儲存、本機畫質壓縮、地點相簿儲存與 iCloud 同步為 Pickr Pro 會員功能。",
      "faq.q2": "照片會被上傳到伺服器嗎？",
      "faq.a2": "不會。整理、相似分析與壓縮全部在這台 iPhone 或 iPad 上完成，照片從不離開你的裝置。開啟 iCloud 同步時，也只有整理進度標記（不含照片本身）會存進你自己的 Apple iCloud 私有庫。",
      "faq.q3": "滑快了刪錯照片怎麼辦？",
      "faq.a3": "上滑只是放進「待確認」清單，不會立刻刪除。你可以隨時撤銷上一步，或在待確認頁整批恢復；即使確認刪除後，系統「最近刪除」仍會保留 30 天。",
      "faq.q4": "壓縮會損失畫質或遺失拍攝資訊嗎？",
      "faq.a4": "替換前有本機畫質評分，也可隨時對比原片與壓縮版；拍攝時間、GPS 經緯度等 EXIF 中繼資料完整保留。不滿意就不替換，原片原樣不動。",
      "faq.q5": "支援哪些裝置與系統版本？",
      "faq.a5": "Pickr 已在 App Store 正式上架，同時原生適配 iPhone 與 iPad，需要 iOS / iPadOS 17.0 或更新版本（自動地點相簿精選依賴 iOS 18 本機影像分析）。",
      "faq.q6": "隱私權政策與技術支援在哪裡查看？",
      "faq.a6": "你可以在本站直接查閱完整的",
      "faq.privacy": "隱私權政策",
      "faq.support": "技術支援",

      "links.eyebrow": "更多獨立作品與友情連結",
      "links.head": "同樣克制、專注的獨立工具。",
      "links.sub": "由同一獨立開發者打造，全部遵循本機優先、無廣告與清晰直接的互動理念。",
      "links.placrDesc": "給照片補上缺失的地點。按拍攝時間分組，參考同時段照片智慧建議位置並批次寫入。",
      "links.placrMeta": "Mac · iPhone · iPad",
      "links.siftrDesc": "閱讀 AI Agent 為你整理的私人每日簡報。連接個人雲端空間，本機全文檢索與離線閱讀。",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "拍一下，這餐就記好了。從照片估算一餐熱量並與 Apple 健康連動，無需秤重與填表。",
      "links.mealrMeta": "iPhone · Apple 健康",
      "links.homeTitle": "個人主站 · chenhk.cn",
      "links.homeDesc": "造訪開發者 Haokun Chen 的個人主頁，了解全部獨立軟體作品、研究與技術文章。",

      "cta.head": "今晚睡前，把上個月整理完。",
      "cta.note": "前往 App Store 免費下載 Pickr，在 iPhone 與 iPad 上體驗乾淨俐落的本機相簿整理。",

      "foot.statement": "Pickr · 你的照片，由你決定",
      "foot.mainSite": "個人主站",
      "foot.trademark": "Apple、Apple 標誌、iPhone、iPad、iCloud 及 App Store 是 Apple Inc. 在美國及其他國家和地區的註冊商標。",
      "foot.legal": "© 2026 Pickr · 獨立開發",

      "alt.home": "Pickr 整理首頁展示",
      "alt.compression": "Pickr 畫質壓縮頁展示",
      "alt.albums": "Pickr 地點相簿頁展示",
      "alt.review": "Pickr 過片與收進相簿介面展示",
      "alt.offline": "Pickr 離線整理與同步頁展示",
      "alt.card1": "微距葉脈畫質對比樣張",
      "alt.card2": "山與湖風光樣張",
      "alt.card3": "街角咖啡館旅行樣張"
    },

    en: {
      "meta.title": "Pickr · Sort this month, catch up to today | Photo Cleanup for iPhone and iPad",
      "meta.description": "Pickr helps you sort your photo library month by month on iPhone and iPad. Review before deleting, compare before compressing, and revisit trips by city. Available on the App Store.",
      "nav.how": "Monthly Sort",
      "nav.compression": "Compression",
      "nav.albums": "Place Albums",
      "nav.slip": "Free & Pro",
      "nav.faq": "FAQ",
      "nav.moreApps": "More Apps",
      "nav.langLabel": "Language",
      "nav.download": "Download",

      "hero.eyebrow": "For iPhone and iPad",
      "hero.l1": "Sort this month,",
      "hero.l2": "catch up to today.",
      "hero.support": "No need to face twenty thousand photos at once. Pick one month, swipe up to queue removals, down to favorite, and confirm in a single batch. On-device compression and place albums stay in sync across iPhone and iPad.",
      "hero.storeBtn": "Download on the App Store",
      "hero.moreBtn": "How it works",
      "hero.meta": "Available on the App Store · Requires iOS 17 or later · 100% On-Device",

      "ch1.eyebrow": "Monthly Workflow",
      "ch1.head": "One month at a time, confirmed before deleting.",
      "ch1.sub": "Break years of photos into five-minute monthly sessions. Pause anytime and resume on the exact frame across both iPhone and iPad.",
      "ch1.t1n": "Open a month and pick up where you left off",
      "ch1.t1b": "Start with the latest month, pick a random month, or filter videos and screenshots. Pickr remembers your exact spot.",
      "ch1.t2n": "Swipe through and collect into albums",
      "ch1.t2b": "Swipe up to queue for deletion, down to favorite, or save memorable shots straight into My Albums. Every step can be undone.",
      "ch1.s1n": "Similar Photo Arena",
      "ch1.s1b": "Bursts and near-duplicates are grouped on-device so you can compare sharpness side by side and keep your favorite.",
      "ch1.s2n": "Pending Batch Review",
      "ch1.s2b": "Nothing is deleted on the spot. Inspect every queued item in one clean grid before committing.",
      "ch1.s3n": "30-Day Recently Deleted Safety",
      "ch1.s3b": "Confirmed items move to iOS Recently Deleted where they remain recoverable for 30 days.",

      "ch2.eyebrow": "Quality-First Compression",
      "ch2.head": "Preview your savings, compare before replacing.",
      "ch2.sub": "Re-encode videos to HEVC and photos to HEIC directly on Apple Silicon. See estimated space savings upfront with a local quality score for every item.",
      "ch2.badgeOrig": "Original JPEG · 4.8 MB",
      "ch2.badgeHeic": "HEIC Compressed · 1.1 MB",
      "ch2.badgeSave": "77% Saved · Score 98",
      "ch2.modeOrig": "Original",
      "ch2.modeHeic": "HEIC",
      "ch2.c1n": "Toggle between Original and HEIC to inspect fine detail",
      "ch2.c1b": "Flip the switch above to compare the 4.8 MB original against the 1.1 MB HEIC version. Inside Pickr, any item with marginal savings is automatically flagged for side-by-side review.",
      "ch2.c2n": "Capture date, GPS location & albums preserved",
      "ch2.c2b": "Compressed files retain full EXIF metadata, coordinates, favorites, and album membership.",

      "ch3.eyebrow": "Place Albums & iCloud Sync",
      "ch3.head": "Trips become albums. Progress stays in step.",
      "ch3.sub": "Pickr reads existing GPS and date metadata to gather multi-day trips by city, while syncing your sorting progress between iPhone and iPad via private iCloud.",
      "ch3.tag1": "Automatic Place Albums",
      "ch3.albumsn": "Relive a city through your best shots",
      "ch3.albumsb": "Trips are grouped by city and date automatically, highlighting sharp, well-composed photos ready to save back to Apple Photos.",
      "ch3.tag2": "Offline Prep · iCloud Sync",
      "ch3.offlinen": "Cache a month before takeoff, continue on iPad",
      "ch3.offlineb": "Long-press any month to preload iCloud photos for offline sorting on flights, then pick up right where you left off on iPad.",

      "slip.eyebrow": "Free & Pickr Pro",
      "slip.head": "Generously free for everyday sorting.",
      "slip.sub": "No accounts and no ads. Everyday sorting and offline prep are included, with monthly, annual, and lifetime options for Pro.",
      "slip.free": "Included Free",
      "slip.pro": "Pickr Pro",
      "slip.g1": "Everyday Sorting",
      "slip.g2": "Advanced & Multi-Device",
      "slip.r1n": "Monthly swipe, undo & batch confirmation",
      "slip.r1d": "Unlimited browsing and sorting; includes 7 free batch commits (unlimited photos per batch).",
      "slip.r2n": "Similar Photo Arena & My Albums",
      "slip.r2d": "Side-by-side burst comparison and custom album collection as you sort.",
      "slip.r3n": "Full-month offline preparation",
      "slip.r3d": "Preload a month of photos and videos to sort smoothly in Airplane Mode.",
      "slip.r4n": "Unlimited commits & quality-first compression",
      "slip.r4d": "Unlimited library saves plus HEVC/HEIC compression with quality scoring and original comparison.",
      "slip.r5n": "Place Album export & smart filtering",
      "slip.r5d": "Auto-group trips by city and date, and save top picks directly to Apple Photos.",
      "slip.r6n": "iPhone and iPad iCloud progress sync",
      "slip.r6d": "Sync sorting decisions and compression flags via your private iCloud database.",
      "slip.bar": "100% On-Device Processing · No Pickr Account · Zero Photo Uploads",

      "faq.eyebrow": "Questions & Support",
      "faq.head": "Common questions",
      "faq.q1": "How much can I use for free?",
      "faq.a1": "Browsing, swiping, the Similar Photo Arena, My Albums, and offline prep are free. You get 7 free batch saves (with unlimited photos per batch). Unlimited saves, compression, Place Album export, and iCloud sync require Pickr Pro.",
      "faq.q2": "Are my photos uploaded to any server?",
      "faq.a2": "Never. Sorting, similarity analysis, and compression happen locally on your iPhone or iPad. When iCloud sync is enabled, only lightweight progress markers are stored in your private Apple iCloud.",
      "faq.q3": "What if I swipe too fast and delete by mistake?",
      "faq.a3": "Swiping up only moves a photo to the Pending list. You can undo immediately or restore from the Pending screen; even after confirmation, iOS keeps items in Recently Deleted for 30 days.",
      "faq.q4": "Does compression hurt quality or strip EXIF data?",
      "faq.a4": "Every result shows a local quality score and original comparison. Capture date, GPS coordinates, and album membership are preserved.",
      "faq.q5": "Which devices and iOS versions are supported?",
      "faq.a5": "Pickr is available on the App Store for both iPhone and iPad running iOS / iPadOS 17.0 or later (Place Albums curation requires iOS 18).",
      "faq.q6": "Where can I read the privacy policy or get help?",
      "faq.a6": "You can read our full ",
      "faq.privacy": "Privacy Policy",
      "faq.support": "Support page",

      "links.eyebrow": "More Independent Apps & Links",
      "links.head": "Crafted with the same focus and restraint.",
      "links.sub": "Built by the same independent developer—on-device first, ad-free, and focused on clarity.",
      "links.placrDesc": "Give photos their missing place. Group photos by time, get smart location suggestions from nearby shots, and batch write coordinates.",
      "links.placrMeta": "Mac · iPhone · iPad",
      "links.siftrDesc": "Read daily briefings curated by your AI Agent. Connect your own WebDAV cloud with local full-text search and offline reading.",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "Snap a meal and keep moving. Estimate calories from a photo with Apple Health integration—no weighing or tedious forms.",
      "links.mealrMeta": "iPhone · Apple Health",
      "links.homeTitle": "Main Site · chenhk.cn",
      "links.homeDesc": "Visit Haokun Chen’s personal website for all independent apps, research, and notes.",

      "cta.head": "Finish last month before bed tonight.",
      "cta.note": "Download Pickr on the App Store for iPhone and iPad.",

      "foot.statement": "Pickr · Your photos, your decision",
      "foot.mainSite": "Author Site",
      "foot.trademark": "Apple, the Apple logo, iPhone, iPad, iCloud, and App Store are trademarks of Apple Inc., registered in the U.S. and other countries and regions.",
      "foot.legal": "© 2026 Pickr · Independent software",

      "alt.home": "Pickr monthly home screen",
      "alt.compression": "Pickr compression screen",
      "alt.albums": "Pickr place albums screen",
      "alt.review": "Pickr swipe review and album sheet",
      "alt.offline": "Pickr offline cache and sync screen",
      "alt.card1": "Macro leaf detail sample photo",
      "alt.card2": "Mountain and lake travel sample photo",
      "alt.card3": "Street corner cafe sample photo"
    },

    ja: {
      "meta.title": "Pickr · まずは今月から、写真を今日まで整える | iPhone・iPad 写真整理アプリ",
      "meta.description": "Pickr は月ごとに写真と動画を整理できる iPhone・iPad アプリです。上スワイプで削除候補、下でお気に入り、削除前にまとめて確認。App Store で配信中。",
      "nav.how": "月別整理",
      "nav.compression": "高画質圧縮",
      "nav.albums": "場所アルバム",
      "nav.slip": "無料とPro",
      "nav.faq": "よくある質問",
      "nav.moreApps": "その他のアプリ",
      "nav.langLabel": "言語",
      "nav.download": "入手",

      "hero.eyebrow": "iPhone と iPad に対応",
      "hero.l1": "まずは今月から、",
      "hero.l2": "写真を今日まで整える。",
      "hero.support": "何万枚もの写真に一度に向き合う必要はありません。1か月ずつ選び、上スワイプで削除候補、下でお気に入り、削除前にまとめて確認。端末内圧縮と場所アルバムが iPhone と iPad でシームレスにつながります。",
      "hero.storeBtn": "App Store からダウンロード",
      "hero.moreBtn": "使い方をみる",
      "hero.meta": "App Store で配信中 · iOS 17 以降が必要 · 写真は端末から出ません",

      "ch1.eyebrow": "月別整理",
      "ch1.head": "1か月ずつ無理なく、削除前に必ず確認。",
      "ch1.sub": "膨大なカメラロールを数分で終わる月単位に分割。いつでも中断でき、iPhone でも iPad の大画面でも前回の続きから再開できます。",
      "ch1.t1n": "今月を開いて、前回の続きから",
      "ch1.t1b": "最新の月やランダムな月、動画・スクリーンショット別の整理に対応。止めた1枚を自動で記憶します。",
      "ch1.t2n": "1枚ずつスワイプ、そのままアルバムへ",
      "ch1.t2b": "上スワイプで削除候補、下でお気に入り、残したい瞬間はその場で「マイアルバム」へ。いつでも取り消せます。",
      "ch1.s1n": "類似写真の2枚比較",
      "ch1.s1b": "連写や似たアングルを端末内で自動グループ化。ピントや表情を見比べてベストな1枚を残せます。",
      "ch1.s2n": "削除前のまとめて確認",
      "ch1.s2b": "その場ですぐ消えることはありません。「確認待ち」一覧で見直してから実行します。",
      "ch1.s3n": "「最近削除した項目」で30日間保護",
      "ch1.s3b": "削除確定後も iOS の「最近削除した項目」に30日間残るため、いつでも復元可能です。",

      "ch2.eyebrow": "画質優先の端末内圧縮",
      "ch2.head": "減らせる容量を見て、比べてから置換。",
      "ch2.sub": "動画を HEVC、写真を HEIC へ Apple チップ内で直接変換。削減できる容量を事前に試算し、1件ごとに画質スコアを算出します。",
      "ch2.badgeOrig": "元画像 JPEG · 4.8 MB",
      "ch2.badgeHeic": "HEIC 圧縮後 · 1.1 MB",
      "ch2.badgeSave": "77% 削減 · 画質 98点",
      "ch2.modeOrig": "元画像",
      "ch2.modeHeic": "HEIC",
      "ch2.c1n": "スイッチで元画像と HEIC を比較、納得してから置換",
      "ch2.c1b": "上のスイッチを切り替えると、元画像（4.8 MB）と HEIC 圧縮後（1.1 MB）の葉脈ディテールを比較できます。アプリ内でも同様に比較でき、削減幅が小さい項目は自動で「比較推奨」に分類されます。",
      "ch2.c2n": "撮影日時・GPS位置情報・アルバムを完全保持",
      "ch2.c2b": "圧縮後も撮影日、位置情報、お気に入り、所属アルバムはそのまま引き継がれます。",

      "ch3.eyebrow": "場所アルバムと iCloud 同期",
      "ch3.head": "旅した街が一冊に。進捗は2台で共有。",
      "ch3.sub": "撮影場所と日時から旅行写真を都市ごとのアルバムに自動集約。整理の進捗は個人の iCloud 経由で iPhone と iPad 間に同期されます。",
      "ch3.tag1": "場所別アルバム",
      "ch3.albumsn": "訪れた街を、ベストショットで振り返る",
      "ch3.albumsb": "「いつ・どの街にいたか」で自動グループ化し、構図や鮮明さに優れた写真をピックアップして「写真」アプリに保存できます。",
      "ch3.tag2": "オフライン準備 · iCloud 同期",
      "ch3.offlinen": "搭乗前に1か月分をキャッシュ、iPad で続きを",
      "ch3.offlineb": "月を長押しして iCloud 写真を事前準備すれば機内モードでも快適。オンライン復帰後は iPad へ進捗がそのまま引き継がれます。",

      "slip.eyebrow": "無料機能と Pickr Pro",
      "slip.head": "基本の整理は無料、高度な機能は必要に応じて。",
      "slip.sub": "アカウント登録も広告もありません。毎日の整理とオフライン準備は無料で使え、Pro は月額・年額・買い切りから選べます。",
      "slip.free": "無料",
      "slip.pro": "Pickr Pro",
      "slip.g1": "毎日の整理",
      "slip.g2": "高度な機能・マルチデバイス",
      "slip.r1n": "月別スワイプ・取り消し・削除前確認",
      "slip.r1d": "閲覧と仕分けは永久無料。確認待ちからの保存は7回まで無料（1回あたりの枚数制限なし）。",
      "slip.r2n": "類似写真比較とマイアルバム",
      "slip.r2d": "連写の2枚比較と、整理しながらのカスタムアルバム収集。",
      "slip.r3n": "月単位のオフライン事前準備",
      "slip.r3d": "出発前に写真と動画を端末へ準備し、電波のない場所でもスムーズに整理。",
      "slip.r4n": "回数無制限の保存と画質優先の端末内圧縮",
      "slip.r4d": "制限なしの保存に加え、画質スコア判定・比較つきの HEVC / HEIC 圧縮を解放。",
      "slip.r5n": "場所アルバムの保存とベストショット抽出",
      "slip.r5d": "都市と日程で旅行アルバムを自動生成し、「写真」アプリへ保存。",
      "slip.r6n": "iPhone と iPad の iCloud 進捗同期",
      "slip.r6d": "個人の iCloud データベース経由で整理状況と圧縮マークを同期。",
      "slip.bar": "100% 端末内処理 · アカウント不要 · 写真や位置情報の外部送信なし",

      "faq.eyebrow": "サポートと回答",
      "faq.head": "よくある質問",
      "faq.q1": "無料でどこまで使えますか？",
      "faq.a1": "月別閲覧、スワイプ仕分け、類似写真比較、マイアルバム、オフライン準備は無料です。削除・お気に入りの反映は7回まで無料（枚数無制限）で、無制限の保存、圧縮、場所アルバム保存、iCloud 同期は Pickr Pro 機能です。",
      "faq.q2": "写真がサーバーにアップロードされますか？",
      "faq.a2": "いいえ。整理、類似判定、圧縮はすべてお使いの iPhone または iPad 内で完結します。iCloud 同期オン時も進捗情報のみが個人の Apple iCloud に保存されます。",
      "faq.q3": "間違えて削除スワイプしてしまったら？",
      "faq.a3": "上スワイプはまず「確認待ち」に入るだけで即座には消えません。直前の取り消しや一括復元ができ、削除確定後も iOS の「最近削除した項目」に30日間残ります。",
      "faq.q4": "圧縮で画質や撮影情報は失われませんか？",
      "faq.a4": "置換前に画質スコアと比較表示で確認でき、撮影日時や GPS 位置情報などの EXIF データもそのまま保持されます。",
      "faq.q5": "対応機種と OS バージョンは？",
      "faq.a5": "iOS / iPadOS 17.0 以降の iPhone と iPad に対応し、App Store で配信中です（自動場所アルバムは iOS 18 以降に対応）。",
      "faq.q6": "プライバシーポリシーやサポートはどこにありますか？",
      "faq.a6": "サイト内の ",
      "faq.privacy": "プライバシーポリシー",
      "faq.support": "サポートページ",

      "links.eyebrow": "その他の個人開発アプリ",
      "links.head": "同じくシンプルで、端末内処理を大切にしたツール。",
      "links.sub": "同じ個人開発者が手がける、広告なし・プライバシー重視のアプリシリーズです。",
      "links.placrDesc": "位置情報のない写真に場所を補完。撮影時間でグループ化し、前後の写真から場所を提案して一括書き込み。",
      "links.placrMeta": "Mac · iPhone · iPad",
      "links.siftrDesc": "AI エージェントがまとめた日刊ブリーフィングを快適に読むリーダー。個人 WebDAV 連携・オフライン対応。",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "撮るだけで食事記録。写真からカロリーを推定し Apple ヘルスケアと連携。計量や手入力は不要です。",
      "links.mealrMeta": "iPhone · ヘルスケア連携",
      "links.homeTitle": "個人サイト · chenhk.cn",
      "links.homeDesc": "開発者 Haokun Chen のホームページ。すべての個人開発アプリや技術記事をご覧いただけます。",

      "cta.head": "今夜寝る前に、先月分をすっきり整理。",
      "cta.note": "App Store から Pickr を無料ダウンロードして、iPhone と iPad で心地よい写真整理を。",

      "foot.statement": "Pickr · あなたの写真は、あなたが決める",
      "foot.mainSite": "開発者サイト",
      "foot.trademark": "Apple、Apple ロゴ、iPhone、iPad、iCloud、および App Store は、米国およびその他の国と地域で登録された Apple Inc. の商標です。",
      "foot.legal": "© 2026 Pickr · 個人開発",

      "alt.home": "Pickr の整理ホーム画面",
      "alt.compression": "Pickr の圧縮画面",
      "alt.albums": "Pickr の場所アルバム画面",
      "alt.review": "Pickr のスワイプ仕分け画面",
      "alt.offline": "Pickr のオフライン準備画面",
      "alt.card1": "葉脈のマクロ撮影サンプル",
      "alt.card2": "山と湖の風景サンプル",
      "alt.card3": "街角のカフェの旅行サンプル"
    },

    ko: {
      "meta.title": "Pickr · 이번 달부터 가볍게, 오늘까지 사진 정리 | iPhone 및 iPad 사진 정리 도구",
      "meta.description": "Pickr는 월별로 사진과 동영상을 정리하는 iPhone 및 iPad 앱입니다. 위로 밀어 삭제 대기, 아래로 밀어 즐겨찾기, 삭제 전 일괄 확인. App Store에서 다운로드하세요.",
      "nav.how": "월별 정리",
      "nav.compression": "화질 압축",
      "nav.albums": "장소 앨범",
      "nav.slip": "무료 및 Pro",
      "nav.faq": "자주 묻는 질문",
      "nav.moreApps": "더 많은 앱",
      "nav.langLabel": "언어",
      "nav.download": "다운로드",

      "hero.eyebrow": "iPhone 및 iPad 지원",
      "hero.l1": "이번 달부터 가볍게,",
      "hero.l2": "오늘까지 사진 정리.",
      "hero.support": "수만 장의 사진을 한꺼번에 마주할 필요가 없습니다. 한 달씩 골라 위로 밀어 삭제 대기, 아래로 밀어 즐겨찾기, 삭제 전 한 번에 확인하세요. 기기 내 압축과 장소 앨범이 iPhone과 iPad에서 자연스럽게 이어집니다.",
      "hero.storeBtn": "App Store에서 다운로드",
      "hero.moreBtn": "작동 방식 보기",
      "hero.meta": "App Store 정식 출시 · iOS 17 이상 필요 · 사진은 기기 밖으로 나가지 않습니다",

      "ch1.eyebrow": "월별 정리",
      "ch1.head": "한 달씩 차근차근, 삭제 전 반드시 확인.",
      "ch1.sub": "끝없는 사진첩을 3~5분이면 끝나는 월 단위로 나눕니다. 언제든 멈추고 iPhone이나 iPad 대화면에서 마지막으로 본 사진부터 이어서 정리하세요.",
      "ch1.t1n": "이번 달을 열고 마지막 위치부터 이어하기",
      "ch1.t1b": "최근 달이나 무작위 달, 동영상 및 스크린샷 전용 정리를 지원하며 멈춘 위치를 자동으로 기억합니다.",
      "ch1.t2n": "한 장씩 넘기며 내 앨범에 바로 수집",
      "ch1.t2b": "위로 밀어 삭제 대기, 아래로 밀어 즐겨찾기, 남기고 싶은 순간은 즉시 ‘내 앨범’에 담으세요. 모든 단계는 되돌릴 수 있습니다.",
      "ch1.s1n": "유사 사진 1:1 비교",
      "ch1.s1b": "연사와 비슷한 구도의 사진을 기기에서 자동으로 묶어 초점과 표정을 나란히 비교하고 베스트 컷만 남깁니다.",
      "ch1.s2n": "삭제 대기 일괄 확인",
      "ch1.s2b": "즉시 삭제되지 않습니다. ‘확인 대기’ 목록에서 한눈에 검토한 뒤 실행합니다.",
      "ch1.s3n": "iOS 최근 삭제된 항목 30일 보관",
      "ch1.s3b": "최종 삭제 후에도 시스템 ‘사진 → 최근 삭제된 항목’에 30일간 안전하게 보관됩니다.",

      "ch2.eyebrow": "화질 우선 기기 내 압축",
      "ch2.head": "줄어드는 용량을 미리 보고, 비교한 뒤 교체.",
      "ch2.sub": "동영상은 HEVC로, 사진은 HEIC로 Apple 칩 안에서 직접 재인코딩합니다. 확보 가능한 용량을 미리 계산하고 항목별 화질 점수를 제공합니다.",
      "ch2.badgeOrig": "원본 JPEG · 4.8 MB",
      "ch2.badgeHeic": "HEIC 압축 후 · 1.1 MB",
      "ch2.badgeSave": "77% 절약 · 화질 98점",
      "ch2.modeOrig": "원본",
      "ch2.modeHeic": "HEIC",
      "ch2.c1n": "스위치를 켜서 원본과 HEIC 비교, 만족할 때만 교체",
      "ch2.c1b": "위 스위치를 전환해 원본(4.8 MB)과 HEIC 압축본(1.1 MB)의 잎맥 디테일을 비교해 보세요. 앱 안에서도 언제든 비교할 수 있으며 절약 폭이 작은 항목은 자동으로 ‘비교 권장’으로 분류됩니다.",
      "ch2.c2n": "촬영 날짜, GPS 위치 및 앨범 정보 완벽 보존",
      "ch2.c2b": "압축 후에도 촬영 일시, 위치 좌표, 즐겨찾기 및 앨범 소속이 그대로 유지됩니다.",

      "ch3.eyebrow": "장소 앨범 및 iCloud 동기화",
      "ch3.head": "다녀온 도시는 한 권의 앨범으로, 진도는 두 기기에서 함께.",
      "ch3.sub": "사진의 위치와 시간 정보를 읽어 여러 달에 흩어진 여행을 도시별 앨범으로 묶어 주고, 개인 iCloud를 통해 iPhone과 iPad의 정리 진도를 동기화합니다.",
      "ch3.tag1": "여행 자동 앨범",
      "ch3.albumsn": "다녀온 도시를 베스트 사진으로 다시 만나기",
      "ch3.albumsb": "‘어느 도시에서 며칠 머물렀는지’에 따라 자동으로 앨범을 만들고, 구도와 선명도가 뛰어난 사진을 골라 ‘사진’ 앱에 저장합니다.",
      "ch3.tag2": "오프라인 준비 · iCloud 동기화",
      "ch3.offlinen": "탑승 전 한 달치 캐시, 집에 와선 iPad로 이어하기",
      "ch3.offlineb": "특정 월을 길게 눌러 iCloud 사진을 기기에 미리 준비하면 비행기 모드에서도 끊김 없이 정리할 수 있습니다.",

      "slip.eyebrow": "무료 및 Pickr Pro",
      "slip.head": "일상 정리는 넉넉하게 무료, 고급 기능은 필요할 때.",
      "slip.sub": "계정 가입도 광고도 없습니다. 기본 정리와 오프라인 준비는 무료로 제공되며, Pro는 월간·연간·평생 소장 중 선택할 수 있습니다.",
      "slip.free": "무료 제공",
      "slip.pro": "Pickr Pro",
      "slip.g1": "일상 정리",
      "slip.g2": "고급 및 다중 기기",
      "slip.r1n": "월별 넘기기, 실행 취소 및 삭제 전 확인",
      "slip.r1d": "탐색 및 분류 평생 무료. 확인 대기 목록 반영 7회 무료 제공(1회당 사진 장수 무제한).",
      "slip.r2n": "유사 사진 비교 및 내 앨범",
      "slip.r2d": "연사 1:1 비교 및 정리 중 사용자 지정 앨범으로 바로 수집.",
      "slip.r3n": "월 전체 오프라인 콘텐츠 준비",
      "slip.r3d": "출발 전 한 달치 사진과 동영상을 기기에 준비해 인터넷 없이도 쾌적하게 정리.",
      "slip.r4n": "무제한 저장 및 화질 우선 기기 내 압축",
      "slip.r4d": "횟수 제한 없는 저장과 화질 점수 및 원본 비교를 지원하는 HEVC / HEIC 압축.",
      "slip.r5n": "장소 앨범 저장 및 베스트 사진 필터",
      "slip.r5d": "도시와 날짜별 여행 앨범 자동 생성 후 ‘사진’ 앱으로 바로 저장.",
      "slip.r6n": "iPhone 및 iPad iCloud 진도 동기화",
      "slip.r6d": "개인 iCloud 비공개 데이터베이스를 통해 정리 결정과 압축 표시를 동기화.",
      "slip.bar": "100% 기기 내 처리 · Pickr 계정 없음 · 사진 및 위치 정보 외부 서버 전송 없음",

      "faq.eyebrow": "질문 및 지원",
      "faq.head": "자주 묻는 질문",
      "faq.q1": "무료로 어디까지 쓸 수 있나요?",
      "faq.a1": "월별 탐색, 스와이프 분류, 유사 사진 비교, 내 앨범, 오프라인 준비는 무료입니다. 확인 대기 반영은 7회까지 무료(장수 제한 없음)이며, 무제한 저장, 압축, 장소 앨범 저장, iCloud 동기화는 Pickr Pro 기능입니다.",
      "faq.q2": "사진이 서버로 업로드되나요?",
      "faq.a2": "아니요. 정리, 유사도 분석, 압축은 모두 iPhone 또는 iPad 기기 안에서 완료됩니다. iCloud 동기화 사용 시에도 사진 원본이 아닌 진행 상태만 개인 Apple iCloud에 저장됩니다.",
      "faq.q3": "너무 빨리 넘기다 실수로 지우면 어떡하죠?",
      "faq.a3": "위로 밀면 먼저 ‘확인 대기’ 목록에 들어가며 바로 지워지지 않습니다. 언제든 이전 단계를 취소하거나 일괄 복구할 수 있고, 최종 삭제 후에도 iOS ‘최근 삭제된 항목’에 30일간 남습니다.",
      "faq.q4": "압축하면 화질이 떨어지거나 촬영 정보가 지워지나요?",
      "faq.a4": "교체 전 기기 내 화질 점수와 원본 비교를 제공하며, 촬영 시간과 GPS 위치 등 EXIF 메타데이터는 온전히 보존됩니다.",
      "faq.q5": "어떤 기기와 OS 버전을 지원하나요?",
      "faq.a5": "iOS / iPadOS 17.0 이상을 실행하는 iPhone 및 iPad를 지원하며 App Store에서 다운로드할 수 있습니다(자동 장소 앨범은 iOS 18 이상).",
      "faq.q6": "개인정보 처리방침과 기술 지원은 어디서 보나요?",
      "faq.a6": "이 사이트에서 전체 ",
      "faq.privacy": "개인정보 처리방침",
      "faq.support": "지원 페이지",

      "links.eyebrow": "더 많은 인디 앱 및 링크",
      "links.head": "같은 철학으로 만든 간결하고 집중된 도구.",
      "links.sub": "동일한 인디 개발자가 제작한 기기 내 처리 우선, 무광고 앱 시리즈입니다.",
      "links.placrDesc": "사진에 빠진 위치 정보를 채워 넣으세요. 촬영 시간별로 묶어 주변 사진의 위치를 제안하고 일괄 기록합니다.",
      "links.placrMeta": "Mac · iPhone · iPad",
      "links.siftrDesc": "AI 에이전트가 정리한 일일 브리핑 리더. 개인 WebDAV 클라우드 연결 및 오프라인 읽기를 지원합니다.",
      "links.siftrMeta": "iPhone · iPad",
      "links.mealrDesc": "사진 한 장으로 끝내는 식단 기록. 사진으로 칼로리를 추정하고 Apple 건강과 연동합니다.",
      "links.mealrMeta": "iPhone · Apple 건강",
      "links.homeTitle": "개인 웹사이트 · chenhk.cn",
      "links.homeDesc": "개발자 Haokun Chen의 홈페이지에서 모든 인디 앱과 기술 아티클을 확인하세요.",

      "cta.head": "오늘 밤 잠들기 전, 지난달 사진을 정리해 보세요.",
      "cta.note": "App Store에서 Pickr를 무료로 다운로드하고 iPhone과 iPad에서 깔끔한 사진 정리를 시작하세요.",

      "foot.statement": "Pickr · 내 사진의 결정권은 나에게",
      "foot.mainSite": "개발자 홈",
      "foot.trademark": "Apple, Apple 로고, iPhone, iPad, iCloud 및 App Store는 미국 및 기타 국가와 지역에 등록된 Apple Inc.의 상표입니다.",
      "foot.legal": "© 2026 Pickr · 인디 개발",

      "alt.home": "Pickr 정리 홈 화면",
      "alt.compression": "Pickr 화질 압축 화면",
      "alt.albums": "Pickr 장소 앨범 화면",
      "alt.review": "Pickr 사진 넘기기 및 앨범 추가 화면",
      "alt.offline": "Pickr 오프라인 준비 및 동기화 화면",
      "alt.card1": "잎맥 접사 원본 샘플",
      "alt.card2": "산과 호수 풍경 샘플",
      "alt.card3": "모퉁이 카페 여행 샘플"
    }
  };

  var SUPPORTED = ["zh-Hans", "zh-Hant", "en", "ja", "ko"];
  var currentLang = "zh-Hans";

  function normalizeLang(raw) {
    if (!raw) return "zh-Hans";
    var lower = String(raw).toLowerCase();
    if (lower.indexOf("zh-hant") === 0 || lower === "zh-tw" || lower === "zh-hk" || lower === "zh-mo") {
      return "zh-Hant";
    }
    if (lower.indexOf("zh") === 0) return "zh-Hans";
    if (lower.indexOf("ja") === 0) return "ja";
    if (lower.indexOf("ko") === 0) return "ko";
    if (lower.indexOf("en") === 0) return "en";
    return "zh-Hans";
  }

  function detectLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var fromQuery = params.get("lang");
      if (fromQuery) {
        return normalizeLang(fromQuery);
      }
      var saved = window.localStorage.getItem("pickr.lang");
      if (saved && SUPPORTED.indexOf(saved) !== -1) {
        return saved;
      }
    } catch (_) {}
    return normalizeLang(navigator.language || "zh-Hans");
  }

  function resolveStoreUrl(code) {
    var rawNav = (navigator.language || "").toLowerCase();
    if (code === "zh-Hant" && (rawNav.indexOf("hk") !== -1 || rawNav.indexOf("mo") !== -1)) {
      return "https://apps.apple.com/hk/app/pickr/id" + APP_ID;
    }
    return STORE_BY_LANG[code] || STORE_BY_LANG["zh-Hans"];
  }

  function syncCompareBadge() {
    var card = document.querySelector("[data-heic-compare]");
    if (!card) return;
    var isHeic = card.classList.contains("is-heic");
    var badge = card.querySelector("[data-compare-badge]");
    var dict = COPY[currentLang] || COPY["zh-Hans"];
    if (badge) {
      badge.textContent = isHeic ? dict["ch2.badgeHeic"] : dict["ch2.badgeOrig"];
    }
  }

  function applyLang(lang) {
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

    var altNodes = document.querySelectorAll("[data-i18n-alt]");
    for (var j = 0; j < altNodes.length; j++) {
      var altKey = altNodes[j].getAttribute("data-i18n-alt");
      if (dict[altKey] !== undefined) {
        altNodes[j].setAttribute("alt", dict[altKey]);
      }
    }

    /* 响应式 <picture>：桌面端显示 iPad+iPhone 双端图，手机端（≤768px）只显示单台 iPhone 图 */
    var pictures = document.querySelectorAll("picture[data-shot-picture]");
    for (var p = 0; p < pictures.length; p++) {
      var shotName = pictures[p].getAttribute("data-shot-picture");
      if (!shotName) continue;
      var sourceEl = pictures[p].querySelector("source");
      var imgEl = pictures[p].querySelector("img");
      if (sourceEl) {
        sourceEl.setAttribute("srcset", "assets/home/" + code + "/iphone-" + shotName + ".jpg");
      }
      if (imgEl) {
        imgEl.setAttribute("src", "assets/home/" + code + "/" + shotName + ".jpg");
      }
    }

    syncCompareBadge();

    var storeUrl = resolveStoreUrl(code);
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

    try {
      window.localStorage.setItem("pickr.lang", code);
    } catch (_) {}
  }

  /* ---------- 原图 vs HEIC 交互开关 ---------- */
  function initHeicCompare() {
    var card = document.querySelector("[data-heic-compare]");
    if (!card) return;

    var switchBtn = card.querySelector("[data-heic-switch]");
    var stage = card.querySelector("[data-compare-stage]");
    var mainImg = card.querySelector("[data-compare-img]");
    var loupeImg = card.querySelector("[data-compare-loupe-img]");
    var savingTag = card.querySelector("[data-compare-saving]");
    var modeOrig = card.querySelector("[data-mode-orig]");
    var modeHeic = card.querySelector("[data-mode-heic]");

    var ORIG_SRC = "assets/home/demo-01-leaf.jpg";
    var HEIC_SRC = "assets/home/demo-01-leaf-heic.jpg";

    /* 预加载 HEIC 对比图，保证点击开关零延迟切换 */
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
      if (savingTag) {
        if (enabled) {
          savingTag.removeAttribute("hidden");
        } else {
          savingTag.setAttribute("hidden", "");
        }
      }
      if (modeOrig) modeOrig.classList.toggle("active", !enabled);
      if (modeHeic) modeHeic.classList.toggle("active", enabled);
      syncCompareBadge();
    }

    function toggle() {
      var next = !card.classList.contains("is-heic");
      setHeicMode(next);
    }

    if (switchBtn) {
      switchBtn.addEventListener("click", toggle);
    }
    if (modeOrig) {
      modeOrig.addEventListener("click", function () { setHeicMode(false); });
    }
    if (modeHeic) {
      modeHeic.addEventListener("click", function () { setHeicMode(true); });
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
        ".sec-head-wrap, .duo-showcase-item, .step-card, .duo-wide-figure, .sample-card, .feature-duo-block, .tier-card, .privacy-pill-banner, .faq-card, .app-link-card, .cta-banner"
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
      applyLang(ev.target.value);
    });
  }
})();
