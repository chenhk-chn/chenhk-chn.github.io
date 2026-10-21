(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var COPY = {
    "zh-Hans": {
      "meta.title": "Pickr · 先看这个月，把相册理到今天",
      "meta.description": "Pickr 带你按月整理照片与视频：上滑待删除、下滑收藏，删除前整批复核。本机无损画质压缩与旅行地点相册，适用于 iPhone 与 iPad。",
      "nav.how": "整理方式",
      "nav.features": "本机能力",
      "nav.slip": "免费与会员",
      "nav.faq": "常见问题",
      "nav.langLabel": "语言",
      "nav.join": "参加 TestFlight",

      "hero.l1": "先看这个月，",
      "hero.l2": "把相册理到今天",
      "hero.support": "不用一口气面对几万张照片。每次挑一个月，上滑待删除、下滑收藏，删除前整批复核。整理、画质压缩与旅行相册全部在这台设备上完成。",
      "hero.meta": "适用于 iPhone 与 iPad · 需要 iOS 17 或更新版本",
      "hero.tab0": "双端同行",
      "hero.tab1": "按月整理",
      "hero.tab2": "本机压缩",
      "hero.tab3": "地点相册",

      "ch1.head": "一个月一个月来",
      "ch1.sub": "把漫长的相册切成三五分钟就能理完的月份。随时停下，下次打开还在老地方。",
      "ch1.t1n": "打开这个月",
      "ch1.t1b": "从最近的月份开始，或抽一个随机月份。自动记住上次停下的那一张。",
      "ch1.t2n": "一张张滑过",
      "ch1.t2b": "上滑标记待删除，下滑加入收藏，顺手还能收进「我的相册」，每步都可撤销。",
      "ch1.t3n": "复核后才删除",
      "ch1.t3b": "删除不会当场发生。每一批先停在「待确认」，整批看过才执行，删后仍可在系统「最近删除」找回。",

      "ch2.head": "全部留在这台设备上",
      "ch2.sub": "没有 Pickr 账号，照片从不上传服务器。空间瘦身、相似照片对比与旅行成册都在本机完成。",
      "ch2.compn": "先看能省多少，对比过再替换",
      "ch2.compb": "视频转 HEVC、照片转 HEIC，转换前先估算可释放的容量。每项结果都给出画质评分，随时按住对比原片与压缩版细节；看不出差别才替换原片，不满意则原片分毫不改。",
      "ch2.compNote": "转换后保留完整叶脉纹理与拍摄元数据，体积缩减过半。",
      "ch2.albumsn": "一座城，几天，长出一本相册",
      "ch2.albumsb": "按「哪几天在哪个城市」自动把旅途照片归成一本相册，并在本机挑出构图与清晰度更好的画面。遇到连拍或同一角度的相似照片，还能进「相似擂台」两两对比，只留最满意的一张。",

      "ch3.head": "iPhone 与 iPad，进度同行",
      "ch3.sub": "整理进度与压缩标记通过你自己的 iCloud 私有库同步，换台设备接着理；登机前还能一键缓存整月原片。",
      "ch3.ipadn": "iPad 大屏审片",
      "ch3.ipadb": "针对 iPadOS 完整适配分栏与大画幅预览，看清暗房级细节与城市相册全貌。",
      "ch3.offlinen": "离线也能继续",
      "ch3.offlineb": "出发前把某个月的 iCloud 照片提前缓存到本机，飞行模式或高铁无网时照常流畅过片。",

      "slip.head": "免费与会员，一目了然",
      "slip.sub": "日常把照片库整理干净所需的核心功能完全免费，不限张数、不设广告。",
      "slip.g1": "日常整理",
      "slip.g2": "进阶与多端",
      "slip.free": "永久免费",
      "slip.pro": "会员功能",
      "slip.r1n": "按月过片与收藏",
      "slip.r1d": "按月份、随机月份、视频或截图专项整理，自动记忆进度。",
      "slip.r2n": "待确认批次复核",
      "slip.r2d": "删除前集中复核，支持单张撤回或整批恢复。",
      "slip.r3n": "相似照片擂台与我的相册",
      "slip.r3d": "本机识别连拍相似图两两比选，过片时顺手收集进自定义相册。",
      "slip.r4n": "画质优先本机压缩",
      "slip.r4d": "视频转 HEVC、照片转 HEIC，画质评分把关并支持按住对比原片。",
      "slip.r5n": "地点相册保存与筛选",
      "slip.r5d": "按城市与日期自动生成旅行相册，精选高分照片存回系统「照片」。",
      "slip.r6n": "iCloud 进度同步",
      "slip.r6d": "整理决定与压缩标记同步至个人 iCloud 私有库，iPhone 与 iPad 接力整理。",
      "slip.bar": "无账号 · 不上传照片 · 无广告干扰",

      "faq.head": "常见问题",
      "faq.q1": "免费可以用多少？",
      "faq.a1": "按月整理、待确认复核、相似照片擂台和手动相册不限张数，永久免费。画质压缩、地点相册的保存与筛选、iCloud 跨设备同步是会员功能。",
      "faq.q2": "照片会被上传到服务器吗？",
      "faq.a2": "不会。整理、相似分析与压缩全部在这台 iPhone 或 iPad 上完成，照片从不离开你的设备。开启 iCloud 同步时，也只有整理进度（不含照片本身）会存进你自己的 iCloud 私有库。",
      "faq.q3": "滑快了删错照片怎么办？",
      "faq.a3": "上滑只是放进「待确认」批次，不会立刻删除。你可以随时撤销上一步，或在待确认页整批恢复；即使确认删除后，系统「最近删除」仍会为你保留 30 天。",
      "faq.q4": "压缩会损失画质或丢失拍摄信息吗？",
      "faq.a4": "替换前有本机画质评分，也可随时按住对比原片与压缩版；拍摄时间、地点等 EXIF 元数据完整保留。不满意就不替换，原片原样不动。",
      "faq.q5": "现在如何下载体验？",
      "faq.a5": "Pickr 正在 TestFlight 持续打磨。点击页面上的「参加 TestFlight」发一封邮件给我们，当天就能收到测试邀请；支持运行 iOS 17 及以上的 iPhone 与 iPad。",
      "faq.q6": "隐私政策与技术支持在哪里查看？",
      "faq.a6": "你可以在本站直接查阅完整的",
      "faq.privacy": "隐私政策",
      "faq.support": "支持页面",

      "cta.head": "今晚睡前，把上个月整理完",
      "cta.note": "发一封邮件，当天收到 TestFlight 邀请。你的照片，始终由你决定。",

      "foot.statement": "Pickr · 你的照片，由你决定",
      "foot.legal": "© 2026 Pickr · 独立开发",

      "alt.duo": "Pickr 在 iPad Pro 与 iPhone 上的按月整理与过片界面",
      "alt.home": "iPhone 整理首页：按月份继续整理",
      "alt.compression": "iPhone 压缩页：预计节省与画质评分",
      "alt.albums": "iPhone 地点相册：按城市与日期自动成册",
      "alt.review": "iPhone 过片界面：一张照片与操作栏",
      "alt.pending": "iPhone 待确认页：删除前整批复核",
      "alt.ipad": "iPad Pro 上的地点相册与多列浏览界面",
      "alt.offline": "iPhone 离线整理缓存准备界面",
      "alt.card1": "叶脉微距原片样张",
      "alt.card2": "山与湖风光样张",
      "alt.card3": "街角咖啡馆旅行样张"
    },

    "zh-Hant": {
      "meta.title": "Pickr · 先看這個月，把相簿理到今天",
      "meta.description": "Pickr 帶你按月整理照片與影片：上滑待刪除、下滑收藏，刪除前整批複核。本機無損畫質壓縮與旅行地點相簿，適用於 iPhone 與 iPad。",
      "nav.how": "整理方式",
      "nav.features": "本機能力",
      "nav.slip": "免費與會員",
      "nav.faq": "常見問題",
      "nav.langLabel": "語言",
      "nav.join": "參加 TestFlight",

      "hero.l1": "先看這個月，",
      "hero.l2": "把相簿理到今天",
      "hero.support": "不用一口氣面對幾萬張照片。每次挑一個月，上滑待刪除、下滑收藏，刪除前整批複核。整理、畫質壓縮與旅行相簿全部在這台裝置上完成。",
      "hero.meta": "適用於 iPhone 與 iPad · 需要 iOS 17 或更新版本",
      "hero.tab0": "雙端同行",
      "hero.tab1": "按月整理",
      "hero.tab2": "本機壓縮",
      "hero.tab3": "地點相簿",

      "ch1.head": "一個月一個月來",
      "ch1.sub": "把漫長的相簿切成三五分鐘就能理完的月份。隨時停下，下次打開還在老地方。",
      "ch1.t1n": "打開這個月",
      "ch1.t1b": "從最近的月份開始，或抽一個隨機月份。自動記住上次停下的那一張。",
      "ch1.t2n": "一張張滑過",
      "ch1.t2b": "上滑標記待刪除，下滑加入收藏，順手還能收進「我的相簿」，每步都可撤銷。",
      "ch1.t3n": "複核後才刪除",
      "ch1.t3b": "刪除不會當場發生。每一批先停在「待確認」，整批看過才執行，刪後仍可在系統「最近刪除」找回。",

      "ch2.head": "全部留在這台裝置上",
      "ch2.sub": "沒有 Pickr 帳號，照片從不上傳伺服器。空間瘦身、相似照片對比與旅行成冊都在本機完成。",
      "ch2.compn": "先看能省多少，對比過再替換",
      "ch2.compb": "影片轉 HEVC、照片轉 HEIC，轉換前先估算可釋放的容量。每項結果都給出畫質評分，隨時按住對比原片與壓縮版細節；看不出差別才替換原片，不滿意則原片分毫不改。",
      "ch2.compNote": "轉換後保留完整葉脈紋理與拍攝中繼資料，體積縮減過半。",
      "ch2.albumsn": "一座城，幾天，長出一本相簿",
      "ch2.albumsb": "按「哪幾天在哪個城市」自動把旅途照片歸成一本相簿，並在本機挑出構圖與清晰度更好的畫面。遇到連拍或同一角度的相似照片，還能進「相似擂台」兩兩對比，只留最滿意的一張。",

      "ch3.head": "iPhone 與 iPad，進度同行",
      "ch3.sub": "整理進度與壓縮標記透過你自己的 iCloud 私有庫同步，換台裝置接著理；登機前還能一鍵快取整月原片。",
      "ch3.ipadn": "iPad 大螢幕審片",
      "ch3.ipadb": "針對 iPadOS 完整適配分欄與大畫幅預覽，看清暗房級細節與城市相簿全貌。",
      "ch3.offlinen": "離線也能繼續",
      "ch3.offlineb": "出發前把某個月的 iCloud 照片提前快取到本機，飛航模式或高鐵無網時照常流暢過片。",

      "slip.head": "免費與會員，一目了然",
      "slip.sub": "日常把照片庫整理乾淨所需的核心功能完全免費，不限張數、不設廣告。",
      "slip.g1": "日常整理",
      "slip.g2": "進階與多端",
      "slip.free": "永久免費",
      "slip.pro": "會員功能",
      "slip.r1n": "按月過片與收藏",
      "slip.r1d": "按月份、隨機月份、影片或截圖專項整理，自動記憶進度。",
      "slip.r2n": "待確認批次複核",
      "slip.r2d": "刪除前集中複核，支援單張撤回或整批恢復。",
      "slip.r3n": "相似照片擂台與我的相簿",
      "slip.r3d": "本機識別連拍相似圖兩兩比選，過片時順手收集進自訂相簿。",
      "slip.r4n": "畫質優先本機壓縮",
      "slip.r4d": "影片轉 HEVC、照片轉 HEIC，畫質評分把關並支援按住對比原片。",
      "slip.r5n": "地點相簿儲存與篩選",
      "slip.r5d": "按城市與日期自動生成旅行相簿，精選高分照片存回系統「照片」。",
      "slip.r6n": "iCloud 進度同步",
      "slip.r6d": "整理決定與壓縮標記同步至個人 iCloud 私有庫，iPhone 與 iPad 接力整理。",
      "slip.bar": "無帳號 · 不上傳照片 · 無廣告干擾",

      "faq.head": "常見問題",
      "faq.q1": "免費可以用多少？",
      "faq.a1": "按月整理、待確認複核、相似照片擂台和手動相簿不限張數，永久免費。畫質壓縮、地點相簿的儲存與篩選、iCloud 跨裝置同步是會員功能。",
      "faq.q2": "照片會被上傳到伺服器嗎？",
      "faq.a2": "不會。整理、相似分析與壓縮全部在這台 iPhone 或 iPad 上完成，照片從不離開你的裝置。開啟 iCloud 同步時，也只有整理進度（不含照片本身）會存進你自己的 iCloud 私有庫。",
      "faq.q3": "滑快了刪錯照片怎麼辦？",
      "faq.a3": "上滑只是放進「待確認」批次，不會立刻刪除。你可以隨時撤銷上一步，或在待確認頁整批恢復；即使確認刪除後，系統「最近刪除」仍會為你保留 30 天。",
      "faq.q4": "壓縮會損失畫質或遺失拍攝資訊嗎？",
      "faq.a4": "替換前有本機畫質評分，也可隨時按住對比原片與壓縮版；拍攝時間、地點等 EXIF 中繼資料完整保留。不滿意就不替換，原片原樣不動。",
      "faq.q5": "現在如何下載體驗？",
      "faq.a5": "Pickr 正在 TestFlight 持續打磨。點擊頁面上的「參加 TestFlight」發一封郵件給我們，當天就能收到測試邀請；支援執行 iOS 17 及以上的 iPhone 與 iPad。",
      "faq.q6": "隱私權政策與技術支援在哪裡查看？",
      "faq.a6": "你可以在本站直接查閱完整的",
      "faq.privacy": "隱私權政策",
      "faq.support": "支援頁面",

      "cta.head": "今晚睡前，把上個月整理完",
      "cta.note": "發一封郵件，當天收到 TestFlight 邀請。你的照片，始終由你決定。",

      "foot.statement": "Pickr · 你的照片，由你決定",
      "foot.legal": "© 2026 Pickr · 獨立開發",

      "alt.duo": "Pickr 在 iPad Pro 與 iPhone 上的按月整理與過片介面",
      "alt.home": "iPhone 整理首頁：按月份繼續整理",
      "alt.compression": "iPhone 壓縮頁：預計節省與畫質評分",
      "alt.albums": "iPhone 地點相簿：按城市與日期自動成冊",
      "alt.review": "iPhone 過片介面：一張照片與操作列",
      "alt.pending": "iPhone 待確認頁：刪除前整批複核",
      "alt.ipad": "iPad Pro 上的地點相簿與多列瀏覽介面",
      "alt.offline": "iPhone 離線整理快取準備介面",
      "alt.card1": "葉脈微距原片樣張",
      "alt.card2": "山與湖風光樣張",
      "alt.card3": "街角咖啡館旅行樣張"
    },

    en: {
      "meta.title": "Pickr · Finish this month, bring your photo library up to today",
      "meta.description": "Pickr helps you sort your photo library month by month on iPhone and iPad. Review before deleting, compare before compressing, and revisit trips by city.",
      "nav.how": "How it works",
      "nav.features": "On-device",
      "nav.slip": "Free & Pro",
      "nav.faq": "FAQ",
      "nav.langLabel": "Language",
      "nav.join": "Join TestFlight",

      "hero.l1": "Sort this month,",
      "hero.l2": "catch up to today.",
      "hero.support": "No need to face twenty thousand photos at once. Pick one month, swipe up to queue removals, down to favorite, and confirm in a single batch. Everything runs on your device.",
      "hero.meta": "For iPhone and iPad · Requires iOS 17 or later",
      "hero.tab0": "iPhone + iPad",
      "hero.tab1": "Monthly Sort",
      "hero.tab2": "Compress",
      "hero.tab3": "Place Albums",

      "ch1.head": "One month at a time",
      "ch1.sub": "Break years of photos into five-minute monthly sessions. Pause anytime and resume on the exact frame.",
      "ch1.t1n": "Open a month",
      "ch1.t1b": "Start with the latest month or pick a random one. Pickr remembers where you stopped.",
      "ch1.t2n": "Swipe through",
      "ch1.t2b": "Swipe up to queue for deletion, down to favorite, or add to My Albums. Every step can be undone.",
      "ch1.t3n": "Confirm before deleting",
      "ch1.t3b": "Deletions never happen on the spot. Review the whole batch first; removed items stay in iOS Recently Deleted for 30 days.",

      "ch2.head": "Everything stays on your device",
      "ch2.sub": "No Pickr account, no server uploads. Space savings, burst comparison, and trip albums happen locally.",
      "ch2.compn": "See the savings, compare before replacing",
      "ch2.compb": "Convert videos to HEVC and photos to HEIC with an upfront size estimate. Every file gets a quality score and press-and-hold comparison; originals stay untouched unless you approve.",
      "ch2.compNote": "Fine leaf texture and EXIF metadata remain intact at less than half the file size.",
      "ch2.albumsn": "One city, a few days, one album",
      "ch2.albumsb": "Pickr groups trips by city and date automatically, highlighting sharp, well-composed shots. Compare similar bursts side by side to keep your single favorite.",

      "ch3.head": "iPhone and iPad, in step",
      "ch3.sub": "Sorting progress and compression flags sync through your private iCloud database. Cache a full month before a flight.",
      "ch3.ipadn": "Big-screen review on iPad",
      "ch3.ipadb": "Native multi-column grids and full-bleed inspection built for iPad Pro.",
      "ch3.offlinen": "Ready for offline flights",
      "ch3.offlineb": "Preload a month of iCloud photos before takeoff and sort smoothly in Airplane Mode.",

      "slip.head": "Free and Pro, clearly stated",
      "slip.sub": "Everyday sorting is completely free with no photo limits and no ads.",
      "slip.g1": "Everyday sorting",
      "slip.g2": "Advanced & multi-device",
      "slip.free": "Always free",
      "slip.pro": "Pro",
      "slip.r1n": "Monthly swipe & favorites",
      "slip.r1d": "Sort by month, random month, videos, or screenshots with saved progress.",
      "slip.r2n": "Pending batch confirmation",
      "slip.r2d": "Inspect every queued photo before deletion, or restore with one tap.",
      "slip.r3n": "Similar photo arena & My Albums",
      "slip.r3d": "Compare similar bursts side by side and collect keepers into custom albums.",
      "slip.r4n": "Quality-first local compression",
      "slip.r4d": "HEVC & HEIC conversion with quality scoring and press-to-compare preview.",
      "slip.r5n": "Place album export & filtering",
      "slip.r5d": "Auto-group trips by city and date, then save top picks back to Apple Photos.",
      "slip.r6n": "iCloud progress sync",
      "slip.r6d": "Sync sorting decisions across iPhone and iPad via your private iCloud.",
      "slip.bar": "No account · Zero photo uploads · No ads",

      "faq.head": "Common questions",
      "faq.q1": "How much can I use for free?",
      "faq.a1": "Monthly sorting, batch confirmation, the similar photo arena, and manual albums are free with no photo limits. Compression, Place Album export, and iCloud sync are Pro features.",
      "faq.q2": "Are my photos uploaded to any server?",
      "faq.a2": "Never. Sorting, similarity analysis, and compression run locally on your iPhone or iPad. When iCloud sync is enabled, only lightweight progress markers are stored in your private Apple iCloud.",
      "faq.q3": "What if I swipe too fast and delete by mistake?",
      "faq.a3": "Swiping up only moves a photo to the Pending list. You can undo immediately or restore from the Pending screen; even after confirmation, iOS keeps items in Recently Deleted for 30 days.",
      "faq.q4": "Does compression hurt quality or strip EXIF data?",
      "faq.a4": "Every result shows a local quality score and press-and-hold comparison. Capture date, GPS coordinates, and metadata are preserved.",
      "faq.q5": "How can I try Pickr today?",
      "faq.a5": "Tap Join TestFlight to send us a quick email and receive your beta invite the same day. Requires iOS or iPadOS 17 or later.",
      "faq.q6": "Where can I read the privacy policy or get support?",
      "faq.a6": "Read our full ",
      "faq.privacy": "Privacy Policy",
      "faq.support": "Support page",

      "cta.head": "Finish last month before bed tonight",
      "cta.note": "Send a quick email for a same-day TestFlight invite. Your photos stay yours.",

      "foot.statement": "Pickr · Your photos, your decision",
      "foot.legal": "© 2026 Pickr · Independent software",

      "alt.duo": "Pickr on iPad Pro and iPhone side by side",
      "alt.home": "iPhone home screen showing monthly photo progress",
      "alt.compression": "iPhone compression screen showing estimated savings",
      "alt.albums": "iPhone place albums grouped by city and date",
      "alt.review": "iPhone card review screen",
      "alt.pending": "iPhone pending batch confirmation screen",
      "alt.ipad": "iPad Pro place albums and multi-column view",
      "alt.offline": "iPhone offline cache preparation screen",
      "alt.card1": "Macro leaf detail sample photo",
      "alt.card2": "Mountain and lake travel sample photo",
      "alt.card3": "Street corner cafe sample photo"
    },

    ja: {
      "meta.title": "Pickr · まずは今月から、写真ライブラリを今日まで整える",
      "meta.description": "Pickr は月ごとに写真と動画を整理できる iPhone・iPad アプリです。上スワイプで削除候補、下でお気に入り、削除前にまとめて確認。端末内圧縮と場所別アルバムに対応。",
      "nav.how": "整理の流れ",
      "nav.features": "端末内処理",
      "nav.slip": "無料とPro",
      "nav.faq": "よくある質問",
      "nav.langLabel": "言語",
      "nav.join": "TestFlight に参加",

      "hero.l1": "まずは今月から、",
      "hero.l2": "写真を今日まで整える",
      "hero.support": "何万枚もの写真に一度に向き合う必要はありません。1か月ずつ選び、上スワイプで削除候補、下でお気に入り、削除前にまとめて確認。すべてこの端末内で完結します。",
      "hero.meta": "iPhone・iPad 対応 · iOS 17 以降が必要",
      "hero.tab0": "iPhone + iPad",
      "hero.tab1": "月別整理",
      "hero.tab2": "端末内圧縮",
      "hero.tab3": "場所アルバム",

      "ch1.head": "1か月ずつ、無理なく",
      "ch1.sub": "膨大なカメラロールを数分で終わる月単位に分割。いつでも中断でき、次回は続きの1枚から再開できます。",
      "ch1.t1n": "今月を開く",
      "ch1.t1b": "最新の月から始めるか、ランダムな月を選択。前回止めた場所を自動で記憶します。",
      "ch1.t2n": "1枚ずつスワイプ",
      "ch1.t2b": "上スワイプで削除候補、下でお気に入り、「マイアルバム」への追加もその場で。すべて取り消し可能です。",
      "ch1.t3n": "見直してから削除",
      "ch1.t3b": "その場ですぐ消えることはありません。「確認待ち」で一覧チェックしてから実行し、削除後も iOS の「最近削除した項目」に30日間残ります。",

      "ch2.head": "すべてこの端末の中に",
      "ch2.sub": "Pickr アカウントは不要、写真のサーバー送信も一切なし。容量圧縮、類似写真の比較、旅行アルバム作成はすべて端末内で行われます。",
      "ch2.compn": "減らせる容量を見て、比べてから置換",
      "ch2.compb": "動画を HEVC、写真を HEIC へ変換する前に削減容量を試算。画質スコアと長押し比較でディテールを確かめ、納得したときだけ元ファイルを置き換えます。",
      "ch2.compNote": "葉脈のディテールや撮影日時・位置情報を保ったまま、容量を半分以下に。",
      "ch2.albumsn": "ひとつの街、数日間が、一冊のアルバムに",
      "ch2.albumsb": "「いつ・どの街にいたか」で旅の写真を自動的にアルバム化。連写や似たアングルは2枚ずつ見比べてベストな1枚を残せます。",

      "ch3.head": "iPhone と iPad、進捗も一緒に",
      "ch3.sub": "整理の進捗や圧縮マークは個人の iCloud データベースで同期。搭乗前に1か月分の写真をキャッシュしておくこともできます。",
      "ch3.ipadn": "iPad の大画面でセレクト",
      "ch3.ipadb": "iPadOS のマルチカラムと大画面プレビューに最適化し、ピントや構図まで鮮明に確認。",
      "ch3.offlinen": "オフラインでもそのまま",
      "ch3.offlineb": "出発前に iCloud 写真を端末へ事前キャッシュし、機内モードでもスムーズに整理。",

      "slip.head": "無料と Pro、明快な区分",
      "slip.sub": "日々の写真整理に必要な基本機能は、枚数制限も広告もなくすべて無料です。",
      "slip.g1": "毎日の整理",
      "slip.g2": "高度な機能・マルチデバイス",
      "slip.free": "永久無料",
      "slip.pro": "Pro 機能",
      "slip.r1n": "月別スワイプとお気に入り",
      "slip.r1d": "月別、ランダム月、動画、スクリーンショット別の整理と進捗記憶。",
      "slip.r2n": "削除前の一覧確認",
      "slip.r2d": "削除前にまとめて見直し、1枚ずつまたは一括で復元可能。",
      "slip.r3n": "類似写真比較とマイアルバム",
      "slip.r3d": "連写の2枚比較と、整理しながらのカスタムアルバム収集。",
      "slip.r4n": "画質優先の端末内圧縮",
      "slip.r4d": "HEVC・HEIC 変換、画質スコア判定、長押しでの元画像比較。",
      "slip.r5n": "場所アルバムの保存と絞り込み",
      "slip.r5d": "都市と日程で旅行アルバムを自動生成し、ベストショットを「写真」に保存。",
      "slip.r6n": "iCloud 進捗同期",
      "slip.r6d": "個人の iCloud 経由で iPhone と iPad の整理状況を同期。",
      "slip.bar": "アカウント不要 · 写真の外部送信なし · 広告なし",

      "faq.head": "よくある質問",
      "faq.q1": "無料でどこまで使えますか？",
      "faq.a1": "月別整理、削除前の確認、類似写真比較、マイアルバムは枚数無制限で永久無料です。画質圧縮、場所アルバムの保存・絞り込み、iCloud 同期は Pro 機能です。",
      "faq.q2": "写真がサーバーにアップロードされますか？",
      "faq.a2": "いいえ。整理、類似判定、圧縮はすべてお使いの iPhone または iPad 内で完結します。iCloud 同期オン時も、写真本体ではなく進捗情報のみが個人の iCloud に保存されます。",
      "faq.q3": "間違えて削除スワイプしてしまったら？",
      "faq.a3": "上スワイプはまず「確認待ち」に入るだけで即座には消えません。直前の操作を取り消せるほか、削除確定後も iOS の「最近削除した項目」に30日間保管されます。",
      "faq.q4": "圧縮で画質や撮影情報は失われませんか？",
      "faq.a4": "置換前に画質スコアと長押し比較で確認でき、撮影日時や位置情報などの EXIF データもそのまま保持されます。",
      "faq.q5": "今すぐ試すにはどうすればいいですか？",
      "faq.a5": "「TestFlight に参加」からメールを送っていただければ、当日中に招待をお送りします。iOS 17 以降の iPhone・iPad に対応しています。",
      "faq.q6": "プライバシーポリシーやサポートはどこにありますか？",
      "faq.a6": "サイト内の ",
      "faq.privacy": "プライバシーポリシー",
      "faq.support": "サポートページ",

      "cta.head": "今夜寝る前に、先月分をすっきり整理",
      "cta.note": "メール1通で当日中に TestFlight 招待をお届けします。あなたの写真は、いつもあなたの手の中に。",

      "foot.statement": "Pickr · あなたの写真は、あなたが決める",
      "foot.legal": "© 2026 Pickr · 個人開発",

      "alt.duo": "iPad Pro と iPhone で並ぶ Pickr の整理画面",
      "alt.home": "iPhone ホーム画面：月別の整理進捗",
      "alt.compression": "iPhone 圧縮画面：削減容量と画質スコア",
      "alt.albums": "iPhone 場所アルバム：都市と日付で自動整理",
      "alt.review": "iPhone スワイプ仕分け画面",
      "alt.pending": "iPhone 削除前のまとめて確認画面",
      "alt.ipad": "iPad Pro の場所アルバムとマルチカラム表示",
      "alt.offline": "iPhone オフラインキャッシュ準備画面",
      "alt.card1": "葉脈のマクロ撮影サンプル",
      "alt.card2": "山と湖の風景サンプル",
      "alt.card3": "街角のカフェの旅行サンプル"
    },

    ko: {
      "meta.title": "Pickr · 이번 달부터 차근차근, 사진첩을 오늘까지 정리하세요",
      "meta.description": "Pickr는 월별로 사진과 동영상을 정리하는 iPhone 및 iPad 앱입니다. 위로 밀어 삭제 대기, 아래로 밀어 즐겨찾기, 삭제 전 일괄 확인. 기기 내 압축과 여행 장소 앨범 지원.",
      "nav.how": "정리 방식",
      "nav.features": "기기 내 처리",
      "nav.slip": "무료 및 Pro",
      "nav.faq": "자주 묻는 질문",
      "nav.langLabel": "언어",
      "nav.join": "TestFlight 참여",

      "hero.l1": "이번 달부터 가볍게,",
      "hero.l2": "오늘까지 사진 정리",
      "hero.support": "수만 장의 사진을 한꺼번에 마주할 필요가 없습니다. 한 달씩 골라 위로 밀어 삭제 대기, 아래로 밀어 즐겨찾기, 삭제 전 한 번에 확인하세요. 모든 과정은 이 기기 안에서 끝납니다.",
      "hero.meta": "iPhone 및 iPad 지원 · iOS 17 이상 필요",
      "hero.tab0": "iPhone + iPad",
      "hero.tab1": "월별 정리",
      "hero.tab2": "기기 내 압축",
      "hero.tab3": "장소 앨범",

      "ch1.head": "한 달씩 차근차근",
      "ch1.sub": "끝없는 사진첩을 3~5분이면 끝나는 월 단위로 나눕니다. 언제든 멈추고 다음에 열면 마지막 사진부터 이어갑니다.",
      "ch1.t1n": "이번 달 열기",
      "ch1.t1b": "최근 달부터 시작하거나 무작위 달을 골라보세요. 마지막 위치를 자동으로 기억합니다.",
      "ch1.t2n": "한 장씩 넘기기",
      "ch1.t2b": "위로 밀어 삭제 대기, 아래로 밀어 즐겨찾기, ‘내 앨범’에 담기까지. 모든 단계는 되돌릴 수 있습니다.",
      "ch1.t3n": "확인 후 안전하게 삭제",
      "ch1.t3b": "즉시 삭제되지 않습니다. ‘확인 대기’에서 전체를 검토한 뒤 실행하며, 삭제 후에도 iOS ‘최근 삭제된 항목’에 30일간 보관됩니다.",

      "ch2.head": "모든 처리는 이 기기 안에서",
      "ch2.sub": "Pickr 계정도, 서버 업로드도 없습니다. 용량 줄이기, 유사 사진 비교, 여행 앨범 생성 모두 기기에서 이루어집니다.",
      "ch2.compn": "얼마나 줄어드는지 보고, 비교한 뒤 교체",
      "ch2.compb": "동영상은 HEVC로, 사진은 HEIC로 변환하기 전에 확보 가능한 용량을 미리 계산합니다. 화질 점수를 확인하고 길게 눌러 원본과 비교한 뒤 마음에 들 때만 교체하세요.",
      "ch2.compNote": "잎맥 디테일과 촬영 메타데이터를 그대로 유지하면서 용량은 절반 이하로 줄입니다.",
      "ch2.albumsn": "한 도시, 며칠의 기록이 한 권의 앨범으로",
      "ch2.albumsb": "‘어느 도시에서 며칠 머물렀는지’에 따라 여행 사진을 자동으로 묶어 줍니다. 비슷한 연사는 나란히 비교해 가장 마음에 드는 한 장만 남기세요.",

      "ch3.head": "iPhone과 iPad, 함께 가는 진도",
      "ch3.sub": "정리 진도와 압축 표시는 개인 iCloud 비공개 데이터베이스로 동기화됩니다. 비행기 탑승 전 한 달치 원본을 미리 캐시할 수도 있습니다.",
      "ch3.ipadn": "iPad 대화면 리뷰",
      "ch3.ipadb": "iPadOS 다단 레이아웃과 시원한 프리뷰에 맞춰 디테일과 도시 앨범 전체를 한눈에 봅니다.",
      "ch3.offlinen": "오프라인에서도 끊김 없이",
      "ch3.offlineb": "출발 전 특정 월의 iCloud 사진을 기기에 미리 받아 비행기 모드에서도 부드럽게 정리하세요.",

      "slip.head": "무료와 Pro, 한눈에 보기",
      "slip.sub": "일상적인 사진첩 정리에 필요한 핵심 기능은 장수 제한도 광고도 없이 무료입니다.",
      "slip.g1": "일상 정리",
      "slip.g2": "고급 및 다중 기기",
      "slip.free": "평생 무료",
      "slip.pro": "Pro 기능",
      "slip.r1n": "월별 넘기기 및 즐겨찾기",
      "slip.r1d": "월별, 무작위 월, 동영상 및 스크린샷 정리와 진도 자동 기억.",
      "slip.r2n": "삭제 대기 일괄 확인",
      "slip.r2d": "삭제 전 한꺼번에 검토하고 개별 또는 전체 복원 가능.",
      "slip.r3n": "유사 사진 비교 및 내 앨범",
      "slip.r3d": "연사 1:1 비교 및 정리 중 사용자 앨범으로 바로 수집.",
      "slip.r4n": "화질 우선 기기 내 압축",
      "slip.r4d": "HEVC · HEIC 변환, 화질 점수 평가 및 길게 눌러 원본 비교.",
      "slip.r5n": "장소 앨범 저장 및 필터링",
      "slip.r5d": "도시와 날짜별 여행 앨범 자동 생성 후 베스트 사진을 ‘사진’ 앱에 저장.",
      "slip.r6n": "iCloud 진도 동기화",
      "slip.r6d": "개인 iCloud를 통해 iPhone과 iPad 간 정리 결정과 압축 표시 동기화.",
      "slip.bar": "계정 없음 · 사진 업로드 없음 · 광고 없음",

      "faq.head": "자주 묻는 질문",
      "faq.q1": "무료로 어디까지 쓸 수 있나요?",
      "faq.a1": "월별 정리, 삭제 전 확인, 유사 사진 비교, 수동 앨범은 장수 제한 없이 평생 무료입니다. 화질 압축, 장소 앨범 저장 및 필터, iCloud 동기화는 Pro 기능입니다.",
      "faq.q2": "사진이 서버로 업로드되나요?",
      "faq.a2": "아니요. 정리, 유사도 분석, 압축은 모두 iPhone 또는 iPad 기기 안에서 완료됩니다. iCloud 동기화를 켜도 사진 원본이 아닌 진행 상태만 개인 iCloud에 저장됩니다.",
      "faq.q3": "너무 빨리 넘기다 실수로 지우면 어떡하죠?",
      "faq.a3": "위로 밀면 먼저 ‘확인 대기’ 목록에 들어가며 바로 지워지지 않습니다. 언제든 이전 단계를 취소하거나 일괄 복구할 수 있고, 최종 삭제 후에도 iOS ‘최근 삭제된 항목’에 30일간 남습니다.",
      "faq.q4": "압축하면 화질이 떨어지거나 촬영 정보가 지워지나요?",
      "faq.a4": "교체 전 기기 내 화질 점수와 길게 눌러 비교하기를 제공하며, 촬영 시간과 위치 등 EXIF 메타데이터는 온전히 보존됩니다.",
      "faq.q5": "지금 바로 사용해 보려면 어떻게 하나요?",
      "faq.a5": "페이지의 ‘TestFlight 참여’를 눌러 이메일을 보내 주시면 당일 테스트 초대를 보내 드립니다. iOS 17 이상 iPhone 및 iPad를 지원합니다.",
      "faq.q6": "개인정보 처리방침과 기술 지원은 어디서 보나요?",
      "faq.a6": "이 사이트에서 전체 ",
      "faq.privacy": "개인정보 처리방침",
      "faq.support": "지원 페이지",

      "cta.head": "오늘 밤 잠들기 전, 지난달 사진을 정리해 보세요",
      "cta.note": "이메일 한 통이면 당일 TestFlight 초대를 받을 수 있습니다. 내 사진은 언제나 내 손안에.",

      "foot.statement": "Pickr · 내 사진의 결정권은 나에게",
      "foot.legal": "© 2026 Pickr · 인디 개발",

      "alt.duo": "iPad Pro와 iPhone에서 나란히 실행된 Pickr 화면",
      "alt.home": "iPhone 정리 홈: 월별 이어서 정리",
      "alt.compression": "iPhone 압축 화면: 예상 절약 용량과 화질 점수",
      "alt.albums": "iPhone 장소 앨범: 도시와 날짜별 자동 정리",
      "alt.review": "iPhone 사진 넘기기 화면",
      "alt.pending": "iPhone 삭제 전 일괄 확인 화면",
      "alt.ipad": "iPad Pro 장소 앨범 및 다단 보기 화면",
      "alt.offline": "iPhone 오프라인 캐시 준비 화면",
      "alt.card1": "잎맥 접사 원본 샘플",
      "alt.card2": "산과 호수 풍경 샘플",
      "alt.card3": "모퉁이 카페 여행 샘플"
    }
  };

  var SUPPORTED = ["zh-Hans", "zh-Hant", "en", "ja", "ko"];

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

  function applyLang(lang) {
    var code = SUPPORTED.indexOf(lang) !== -1 ? lang : "zh-Hans";
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

    var shots = document.querySelectorAll("img[data-shot]");
    for (var s = 0; s < shots.length; s++) {
      var name = shots[s].getAttribute("data-shot");
      if (name) {
        var file = name.indexOf(".jpg") !== -1 ? name : name + ".jpg";
        shots[s].setAttribute("src", "assets/home/" + code + "/" + file);
      }
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

  /* ---------- 首屏台座慢速叠化切换（Plinth Slow-Crossfade） ---------- */
  function initPlinth() {
    var root = document.querySelector("[data-plinth]");
    if (!root) return;

    var tabs = root.querySelectorAll("[data-target]");
    var frames = root.querySelectorAll("[data-slide]");
    if (!tabs.length || !frames.length) return;

    var currentIndex = 0;
    var timer = null;
    var paused = false;
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function activate(idx) {
      currentIndex = idx;
      for (var t = 0; t < tabs.length; t++) {
        var isMatch = Number(tabs[t].getAttribute("data-target")) === idx;
        tabs[t].classList.toggle("active", isMatch);
        tabs[t].setAttribute("aria-selected", isMatch ? "true" : "false");
      }
      for (var f = 0; f < frames.length; f++) {
        var fMatch = Number(frames[f].getAttribute("data-slide")) === idx;
        frames[f].classList.toggle("active", fMatch);
      }
    }

    for (var b = 0; b < tabs.length; b++) {
      (function (btn) {
        btn.addEventListener("click", function () {
          activate(Number(btn.getAttribute("data-target")));
          restartTimer();
        });
      })(tabs[b]);
    }

    function step() {
      if (paused || reduceMotion || document.hidden) return;
      activate((currentIndex + 1) % tabs.length);
    }

    function restartTimer() {
      if (timer) clearInterval(timer);
      if (!reduceMotion) {
        timer = setInterval(step, 4800);
      }
    }

    root.addEventListener("mouseenter", function () { paused = true; });
    root.addEventListener("mouseleave", function () { paused = false; });
    root.addEventListener("focusin", function () { paused = true; });
    root.addEventListener("focusout", function () { paused = false; });

    restartTimer();
  }

  /* ---------- 章节元素错峰入场（Staggered Reveal） ---------- */
  function initReveal() {
    var groups = document.querySelectorAll(".sec .inner");
    var allTargets = [];

    for (var g = 0; g < groups.length; g++) {
      var items = groups[g].querySelectorAll(
        ".sec-intro, .device-card, .feature-split, .ipad-card, .offline-card, .slip-intro, .slip-row, .slip-bar, .faq-title, .faq-item, .cta-box"
      );
      for (var i = 0; i < items.length; i++) {
        items[i].classList.add("reveal");
        items[i].style.setProperty("--d", ((i % 4) * 0.06).toFixed(2) + "s");
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

  /* ---------- 初始化 ---------- */
  var initialLang = detectLang();
  applyLang(initialLang);

  var selectEl = document.querySelector("[data-language-select]");
  if (selectEl) {
    selectEl.addEventListener("change", function (ev) {
      applyLang(ev.target.value);
    });
  }

  initPlinth();
  initReveal();
})();
