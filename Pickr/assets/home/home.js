/* Pickr 官网 · 语言切换、入场动效、ch3 试滑、页脚时钟 */
(() => {
  "use strict";

  const LANGS = ["zh-Hans", "zh-Hant", "en", "ja", "ko"];
  const STORE_KEY = "pickr-lang";

  const STRINGS = {
    "zh-Hans": {
      "meta.title": "Pickr — 先看这个月",
      "nav.langLabel": "语言",
      "nav.features": "特性", "nav.try": "试一试", "nav.faq": "常见问题", "nav.join": "参加 TestFlight",
      "hero.line2": "先看这个月",
      "hero.support": "把几千张照片按月整理到今天。删除之前，再确认一次。",
      "alt.home": "整理首页：按月份继续整理", "alt.review": "过片界面：一张照片与操作按钮",
      "alt.pending": "待确认页：删除前复核", "alt.compression": "压缩页：预计节省与画质对比",
      "alt.albums": "地点相册：按城市与日期", "alt.share": "我的相册：整理时顺手收集",
      "alt.offline": "离线整理准备弹层", "alt.hold1": "压缩版示意", "alt.hold2": "原片示意",
      "alt.duel1": "相似照片之一：叶脉", "alt.duel2": "相似照片之二：山与湖",
      "alt.card1": "示例照片：叶脉", "alt.card2": "示例照片：山与湖",
      "alt.card3": "示例照片：街角咖啡馆", "alt.card4": "示例照片：暗房红光",
      "ch1.head": "一个月一个月来",
      "ch1.t1n": "打开这个月", "ch1.t1b": "接着上次的进度，从停下的那张继续。",
      "ch1.t2n": "一张张滑过", "ch1.t2b": "上滑进待删除，下滑收藏，三秒一张。",
      "ch1.t3n": "复核后才删除", "ch1.t3b": "每一批待删除都停在这一页，看过才算数。",
      "ch2.head": "全部都在本机上",
      "ch2.compn": "压缩", "ch2.compb": "先看能省多少，对比过再替换。",
      "ch2.arenan": "相似擂台", "ch2.arenab": "两张很像的，留下一张。",
      "ch2.keep": "保留", "ch2.del": "删除",
      "ch2.albumsn": "地点相册", "ch2.albumsb": "一座城，几天，长出一本相册。",
      "ch2.holdn": "按住对比", "ch2.holdb": "一根手指，看清两张的差别。", "ch2.holdBtn": "按住看原片",
      "ch2.offlinen": "离线继续", "ch2.offlineb": "提前缓存一个月，飞机上也能整理。",
      "ch3.head": "试试看：上滑删除，下滑收藏",
      "ch3.up": "进了待删除。不急，还能反悔。",
      "ch3.down": "收藏了。它一直都在。",
      "ch3.hint": "和 App 里是同一双手势。",
      "ch3.delBtn": "待删除", "ch3.keepBtn": "收藏",
      "ch3.ariaStack": "示例照片：方向键上滑删除、下滑收藏",
      "faq.head": "先问清楚",
      "faq.q1": "免费可以用多少？",
      "faq.a1": "整理、待确认、相似擂台和手动相册不限张数，完全免费。压缩、地点相册的保存与筛选、iCloud 同步是会员功能。",
      "faq.q2": "照片会被上传吗？",
      "faq.a2": "不会。整理与压缩全部在这台 iPhone 上完成，照片不离开设备。只有你主动开启 iCloud 同步时，整理进度（不是照片本身）才会存进你自己的 iCloud。",
      "faq.q3": "删错了怎么办？",
      "faq.a3": "删除不会立刻发生：每一批都先停在「待确认」，你可以整批恢复；整理中的每一步也都能单独撤销。",
      "faq.q4": "压缩会损失画质吗？",
      "faq.a4": "替换前有画质评分，也随时能按住对比原片与压缩版；不满意就不替换，原片原样不动。",
      "faq.q5": "什么时候能下载？",
      "faq.a5": "正在 TestFlight 打磨。写邮件给我们，当天就能收到邀请；需要 iPhone 或 iPad，iOS 17 以上。",
      "faq.q6": "隐私政策在哪？",
      "faq.a6": "就在本站：",
      "faq.privacy": "隐私政策", "faq.support": "支持页面",
      "cta.l1": "今晚睡前，", "cta.l2": "把上个月整理完", "cta.btn": "试试",
      "cta.note": "发一封邮件，当天收到 TestFlight 邀请。iPhone / iPad · iOS 17+。",
      "foot.statement": "你的照片，由你决定。",
      "foot.legal": "© 2026 Pickr · 独立开发",
      "foot.city": "杭州", "foot.invite": "参加 TestFlight"
    },
    "zh-Hant": {
      "meta.title": "Pickr — 先看這個月",
      "nav.langLabel": "語言",
      "nav.features": "功能", "nav.try": "試一試", "nav.faq": "常見問題", "nav.join": "參加 TestFlight",
      "hero.line2": "先看這個月",
      "hero.support": "把幾千張照片按月整理到今天。刪除之前，再確認一次。",
      "alt.home": "整理首頁：按月份繼續整理", "alt.review": "過片介面：一張照片與操作按鈕",
      "alt.pending": "待確認頁：刪除前複核", "alt.compression": "壓縮頁：預計節省與畫質對比",
      "alt.albums": "地點相冊：按城市與日期", "alt.share": "我的相冊：整理時順手收集",
      "alt.offline": "離線整理準備彈層", "alt.hold1": "壓縮版示意", "alt.hold2": "原片示意",
      "alt.duel1": "相似照片之一：葉脈", "alt.duel2": "相似照片之二：山與湖",
      "alt.card1": "示例照片：葉脈", "alt.card2": "示例照片：山與湖",
      "alt.card3": "示例照片：街角咖啡館", "alt.card4": "示例照片：暗房紅光",
      "ch1.head": "一個月一個月來",
      "ch1.t1n": "打開這個月", "ch1.t1b": "接著上次的進度，從停下的那張繼續。",
      "ch1.t2n": "一張張滑過", "ch1.t2b": "上滑進待刪除，下滑收藏，三秒一張。",
      "ch1.t3n": "複核後才刪除", "ch1.t3b": "每一批待刪除都停在這一頁，看過才算數。",
      "ch2.head": "全部都在本機上",
      "ch2.compn": "壓縮", "ch2.compb": "先看能省多少，對比過再替換。",
      "ch2.arenan": "相似擂台", "ch2.arenab": "兩張很像的，留下一張。",
      "ch2.keep": "保留", "ch2.del": "刪除",
      "ch2.albumsn": "地點相冊", "ch2.albumsb": "一座城，幾天，長出一本相冊。",
      "ch2.holdn": "按住對比", "ch2.holdb": "一根手指，看清兩張的差別。", "ch2.holdBtn": "按住看原片",
      "ch2.offlinen": "離線繼續", "ch2.offlineb": "提前快取一個月，飛機上也能整理。",
      "ch3.head": "試試看：上滑刪除，下滑收藏",
      "ch3.up": "進了待刪除。不急，還能反悔。",
      "ch3.down": "收藏了。它一直都在。",
      "ch3.hint": "和 App 裡是同一雙手勢。",
      "ch3.delBtn": "待刪除", "ch3.keepBtn": "收藏",
      "ch3.ariaStack": "示例照片：方向鍵上滑刪除、下滑收藏",
      "faq.head": "先問清楚",
      "faq.q1": "免費可以用多少？",
      "faq.a1": "整理、待確認、相似擂台與手動相冊不限張數，完全免費。壓縮、地點相冊的儲存與篩選、iCloud 同步是會員功能。",
      "faq.q2": "照片會被上傳嗎？",
      "faq.a2": "不會。整理與壓縮全部在這台 iPhone 上完成，照片不離開裝置。只有你主動開啟 iCloud 同步時，整理進度（不是照片本身）才會存進你自己的 iCloud。",
      "faq.q3": "刪錯了怎麼辦？",
      "faq.a3": "刪除不會立刻發生：每一批都先停在「待確認」，你可以整批恢復；整理中的每一步也都能單獨撤銷。",
      "faq.q4": "壓縮會損失畫質嗎？",
      "faq.a4": "替換前有畫質評分，也隨時能按住對比原片與壓縮版；不滿意就不替換，原片原樣不動。",
      "faq.q5": "什麼時候能下載？",
      "faq.a5": "正在 TestFlight 打磨。寫郵件給我們，當天就能收到邀請；需要 iPhone 或 iPad，iOS 17 以上。",
      "faq.q6": "隱私政策在哪？",
      "faq.a6": "就在本站：",
      "faq.privacy": "隱私政策", "faq.support": "支援頁面",
      "cta.l1": "今晚睡前，", "cta.l2": "把上個月整理完", "cta.btn": "試試",
      "cta.note": "寫一封郵件，當天收到 TestFlight 邀請。iPhone / iPad · iOS 17+。",
      "foot.statement": "你的照片，由你決定。",
      "foot.legal": "© 2026 Pickr · 獨立開發",
      "foot.city": "杭州", "foot.invite": "參加 TestFlight"
    }
  };

  Object.assign(STRINGS, {
    en: {
      "meta.title": "Pickr — Start this month",
      "nav.langLabel": "Language",
      "nav.features": "Features", "nav.try": "Try it", "nav.faq": "FAQ", "nav.join": "Join TestFlight",
      "hero.line2": "Start this month.",
      "hero.support": "Catch up on years of photos, one month at a time. Confirm before anything is deleted.",
      "alt.home": "Home: continue sorting by month", "alt.review": "Review: one photo, one decision",
      "alt.pending": "Pending review: confirm before deleting", "alt.compression": "Compression: estimated savings and quality check",
      "alt.albums": "Place albums by city and date", "alt.share": "My Albums, gathered as you sort",
      "alt.offline": "Preparing a month for offline sorting", "alt.hold1": "Compressed version", "alt.hold2": "Original version",
      "alt.duel1": "Duel photo one: leaf veins", "alt.duel2": "Duel photo two: mountain and lake",
      "alt.card1": "Sample photo: leaf veins", "alt.card2": "Sample photo: mountain and lake",
      "alt.card3": "Sample photo: corner café", "alt.card4": "Sample photo: darkroom red",
      "ch1.head": "One month at a time",
      "ch1.t1n": "Open this month", "ch1.t1b": "Pick up where you left off. The month remembers your place.",
      "ch1.t2n": "Swipe them one by one", "ch1.t2b": "Up to mark for deletion, down to favourite, about three seconds each.",
      "ch1.t3n": "Reviewed, then deleted", "ch1.t3b": "Every batch waits on this page. Nothing goes until you've looked.",
      "ch2.head": "It all stays on your iPhone",
      "ch2.compn": "Compress", "ch2.compb": "See the savings first; compare before you replace anything.",
      "ch2.arenan": "Similar duels", "ch2.arenab": "Two near-duplicates walk in. One stays.",
      "ch2.keep": "Keep", "ch2.del": "Delete",
      "ch2.albumsn": "Place albums", "ch2.albumsb": "A city, a few days: an album grows on its own.",
      "ch2.holdn": "Hold to compare", "ch2.holdb": "One finger shows you the difference.", "ch2.holdBtn": "Hold for original",
      "ch2.offlinen": "Offline, still sorting", "ch2.offlineb": "Cache a month ahead; sort at 30,000 feet.",
      "ch3.head": "Try it: up to delete, down to favourite",
      "ch3.up": "Marked for deletion. No rush — you can undo.",
      "ch3.down": "Favourited. It stays right where it is.",
      "ch3.hint": "The same gesture you'll use in the app.",
      "ch3.delBtn": "To delete", "ch3.keepBtn": "Favourite",
      "ch3.ariaStack": "Sample photos: arrow up to delete, arrow down to favourite",
      "faq.head": "Fair questions",
      "faq.q1": "How much is free?",
      "faq.a1": "Sorting, pending review, similar-photo duels and manual albums are free with no limits. Compression, saving place albums and iCloud sync are membership features.",
      "faq.q2": "Do my photos get uploaded?",
      "faq.a2": "No. Sorting and compression happen entirely on your iPhone — photos never leave the device. Only if you turn on iCloud sync does your review progress (not the photos themselves) go to your own iCloud.",
      "faq.q3": "What if I delete by mistake?",
      "faq.a3": "Deletion never happens on the spot. Every batch stops at Pending Review first, where you can restore all of it; each step while sorting can also be undone on its own.",
      "faq.q4": "Does compression hurt quality?",
      "faq.a4": "You get a quality score before replacing anything, and you can press-and-hold to compare the original against the compressed version at any time. Don't like it? Don't replace — the original stays untouched.",
      "faq.q5": "When can I get it?",
      "faq.a5": "It's polishing in TestFlight right now. Email us and you'll have an invite the same day. Any iPhone or iPad on iOS 17 or later.",
      "faq.q6": "Where's the privacy policy?",
      "faq.a6": "Right here:",
      "faq.privacy": "Privacy policy", "faq.support": "Support page",
      "cta.l1": "Tonight, before bed,", "cta.l2": "finish last month", "cta.btn": "Try it",
      "cta.note": "One email, an invite the same day. iPhone / iPad · iOS 17+.",
      "foot.statement": "Your photos. Your choice.",
      "foot.legal": "© 2026 Pickr · Made independently",
      "foot.city": "Hangzhou", "foot.invite": "Join TestFlight"
    }
  });

  Object.assign(STRINGS, {
    ja: {
      "meta.title": "Pickr — まず今月から",
      "nav.langLabel": "言語",
      "nav.features": "機能", "nav.try": "試してみる", "nav.faq": "よくある質問", "nav.join": "TestFlight に参加",
      "hero.line2": "まず今月から",
      "hero.support": "何年分の写真も、ひと月ずつ今日まで。削除の前に、もう一度確認。",
      "alt.home": "ホーム：月ごとに整理を続ける", "alt.review": "レビュー：1枚ずつ仕分け",
      "alt.pending": "確認待ち：削除前に見直す", "alt.compression": "圧縮：節約見込みと画質チェック",
      "alt.albums": "場所のアルバム：街と日付ごと", "alt.share": "マイアルバム：整理しながら収集",
      "alt.offline": "オフライン整理の準備シート", "alt.hold1": "圧縮版の見本", "alt.hold2": "元の写真の見本",
      "alt.duel1": "対決写真①：葉脈", "alt.duel2": "対決写真②：山と湖",
      "alt.card1": "サンプル写真：葉脈", "alt.card2": "サンプル写真：山と湖",
      "alt.card3": "サンプル写真：街角のカフェ", "alt.card4": "サンプル写真：暗室の赤い光",
      "ch1.head": "ひと月、ひと月ずつ",
      "ch1.t1n": "今月をひらく", "ch1.t1b": "前回の続きから。中断した1枚の次から再開します。",
      "ch1.t2n": "1枚ずつ、スワイプ", "ch1.t2b": "上スワイプで削除予定、下でお気に入り。3秒に1枚のペースで。",
      "ch1.t3n": "確認してから削除", "ch1.t3b": "削除予定はまずこの画面へ。確認してから実行します。",
      "ch2.head": "すべてこの端末の中で",
      "ch2.compn": "圧縮", "ch2.compb": "どれだけ軽くなるか確認し、比べてから置き換え。",
      "ch2.arenan": "似ている写真の対決", "ch2.arenab": "似た2枚を並べて、残すのはどちらか1枚。",
      "ch2.keep": "残す", "ch2.del": "削除",
      "ch2.albumsn": "場所のアルバム", "ch2.albumsb": "ある街の数日間が、そのままアルバムに。",
      "ch2.holdn": "長押し比較", "ch2.holdb": "指一本で、違いを確かめられます。", "ch2.holdBtn": "押している間は元の写真",
      "ch2.offlinen": "オフラインでも続く", "ch2.offlineb": "ひと月分を事前に準備。機内でも整理できます。",
      "ch3.head": "試してみて：上で削除、下でお気に入り",
      "ch3.up": "削除予定に入りました。落ち着いて、取り消せます。",
      "ch3.down": "お気に入りに追加。写真はその場所にあります。",
      "ch3.hint": "アプリの中と、同じ手つきです。",
      "ch3.delBtn": "削除予定", "ch3.keepBtn": "お気に入り",
      "ch3.ariaStack": "サンプル写真：↑キーで削除予定、↓キーでお気に入り",
      "faq.head": "まず確かめたいこと",
      "faq.q1": "どこまで無料？",
      "faq.a1": "整理・確認待ち・似ている写真の対決・手動アルバムは枚数制限なく無料です。圧縮、場所アルバムの保存と絞り込み、iCloud 同期は有料メンバー限定です。",
      "faq.q2": "写真はアップロードされる？",
      "faq.a2": "いいえ。整理も圧縮も、すべてこの iPhone の中だけで行われます。iCloud 同期を自分で有効にした場合のみ、整理の進み具合（写真そのものではなく）が自分の iCloud に保存されます。",
      "faq.q3": "誤って削除したら？",
      "faq.a3": "削除はその場では実行されません。まず「確認待ち」に止まり、まとめて取り消せます。整理中のひとつひとつの操作も、個別に元に戻せます。",
      "faq.q4": "圧縮で画質は落ちる？",
      "faq.a4": "置き換える前に画質スコアがあり、長押しで元の写真と圧縮版を見比べられます。気に入らなければ置き換えない。元の写真はそのまま残ります。",
      "faq.q5": "いつダウンロードできる？",
      "faq.a5": "現在 TestFlight で仕上げ中です。メールをいただければ当日中にご招待します。iOS 17 以降の iPhone / iPad で利用できます。",
      "faq.q6": "プライバシー方は？",
      "faq.a6": "このサイトにあります：",
      "faq.privacy": "プライバシー政策", "faq.support": "サポートページ",
      "cta.l1": "今夜、寝る前に、", "cta.l2": "先月を整理し終えよう", "cta.btn": "試す",
      "cta.note": "メール1通で、当日中に TestFlight へご招待。iPhone / iPad · iOS 17 以降。",
      "foot.statement": "あなたの写真。決めるのは、あなた。",
      "foot.legal": "© 2026 Pickr · 個人開発",
      "foot.city": "杭州", "foot.invite": "TestFlight に参加"
    },
    ko: {
      "meta.title": "Pickr — 이번 달부터",
      "nav.langLabel": "언어",
      "nav.features": "기능", "nav.try": "직접 보기", "nav.faq": "자주 묻는 질문", "nav.join": "TestFlight 참여",
      "hero.line2": "이번 달부터",
      "hero.support": "수천 장의 사진을 한 달씩 오늘까지. 삭제하기 전에 한 번 더 확인해요.",
      "alt.home": "홈: 월별로 정리 이어하기", "alt.review": "정리 화면: 한 장씩 결정",
      "alt.pending": "확인 대기: 삭제 전 검토", "alt.compression": "압축: 예상 절약량과 화질 비교",
      "alt.albums": "장소 앨범: 도시와 날짜별", "alt.share": "나의 앨범: 정리하며 모아두기",
      "alt.offline": "오프라인 정리 준비 화면", "alt.hold1": "압축본 예시", "alt.hold2": "원본 예시",
      "alt.duel1": "대결 사진 1: 잎맥", "alt.duel2": "대결 사진 2: 산과 호수",
      "alt.card1": "예시 사진: 잎맥", "alt.card2": "예시 사진: 산과 호수",
      "alt.card3": "예시 사진: 골목 카페", "alt.card4": "예시 사진: 암실의 붉은 빛",
      "ch1.head": "한 달씩, 차근차근",
      "ch1.t1n": "이번 달 열기", "ch1.t1b": "멈췄던 곳에서 이어서. 다음 장부터 다시 시작해요.",
      "ch1.t2n": "한 장씩 넘기기", "ch1.t2b": "위로 밀면 삭제 예정, 아래로 밀면 즐겨찾기. 한 장에 3초면 충분해요.",
      "ch1.t3n": "검토한 뒤에 삭제", "ch1.t3b": "삭제 예정은 모두 이 화면에 모여요. 확인한 것만 지워집니다.",
      "ch2.head": "전부 이 아이폰 안에서",
      "ch2.compn": "압축", "ch2.compb": "얼마나 줄일 수 있는지 먼저 보고, 비교한 뒤에 교체해요.",
      "ch2.arenan": "비슷한 사진 대결", "ch2.arenab": "비슷한 두 장을 나란히 놓고, 한 장만 남겨요.",
      "ch2.keep": "남김", "ch2.del": "삭제",
      "ch2.albumsn": "장소 앨범", "ch2.albumsb": "한 도시의 며칠이, 저절로 앨범이 돼요.",
      "ch2.holdn": "꾹 눌러 비교", "ch2.holdb": "손가락 하나로 차이를 확인해요.", "ch2.holdBtn": "누르는 동안 원본",
      "ch2.offlinen": "오프라인에서도 계속", "ch2.offlineb": "한 달치를 미리 준비하면 기내에서도 정리할 수 있어요.",
      "ch3.head": "직접 해보세요: 위로 밀면 삭제, 아래로 밀면 즐겨찾기",
      "ch3.up": "삭제 예정에 들어갔어요. 서두르지 않아도 되고, 되돌릴 수 있어요.",
      "ch3.down": "즐겨찾기에 담았어요. 사진은 늘 그자리에 있어요.",
      "ch3.hint": "앱 안에서 쓰는 것과 같은 손동작이에요.",
      "ch3.delBtn": "삭제 예정", "ch3.keepBtn": "즐겨찾기",
      "ch3.ariaStack": "예시 사진: ↑ 키로 삭제 예정, ↓ 키로 즐겨찾기",
      "faq.head": "궁금한 것부터",
      "faq.q1": "어디까지 무료인가요?",
      "faq.a1": "정리, 확인 대기, 비슷한 사진 대결, 직접 만드는 앨범은 무제한 무료예요. 압축, 장소 앨범 저장·필터, iCloud 동기화는 멤버십 기능이에요.",
      "faq.q2": "사진이 업로드되나요?",
      "faq.a2": "아니요. 정리와 압축은 모두 이 아이폰 안에서만 이뤄져요. iCloud 동기화를 직접 켰을 때만 정리 진행 상황(사진 자체가 아니라)이 당신의 iCloud에 저장돼요.",
      "faq.q3": "잘못 지우면 어떡하죠?",
      "faq.a3": "삭제는 그 자리에서 일어나지 않아요. 모든 항목은 먼저 '확인 대기'에 머물고, 한꺼번에 되돌릴 수 있어요. 정리 중 각 단계도 따로 되돌릴 수 있고요.",
      "faq.q4": "압축하면 화질이 나빠지나요?",
      "faq.a4": "교체 전에 화질 점수가 표시되고, 길게 눌러 원본과 압축본을 나란히 비교할 수 있어요. 마음에 안 들면 교체하지 않으면 되고, 원본은 그대로 남아요.",
      "faq.q5": "언제 받을 수 있나요?",
      "faq.a5": "지금 TestFlight에서 다듬고 있어요. 메일 주시면 당일에 초대장을 보내드려요. iOS 17 이상의 아이폰이나 아이패드면 됩니다.",
      "faq.q6": "개인정보 처리방침은 어디에?",
      "faq.a6": "이 사이트에 있어요:",
      "faq.privacy": "개인정보 처리방침", "faq.support": "지원 페이지",
      "cta.l1": "오늘 밤 자기 전에,", "cta.l2": "지난달을 끝내세요", "cta.btn": "시작",
      "cta.note": "메일 한 통이면 당일에 TestFlight 초대장을 보내드려요. iPhone / iPad · iOS 17+.",
      "foot.statement": "내 사진, 내가 결정해요",
      "foot.legal": "© 2026 Pickr · 독립 개발",
      "foot.city": "항저우", "foot.invite": "TestFlight 참여"
    }
  });

  /* ---------- 语言 ---------- */
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");

  function normalize(lang) {
    if (!lang) return null;
    lang = String(lang).toLowerCase();
    if (lang.startsWith("zh")) {
      if (lang.includes("tw") || lang.includes("hk") || lang.includes("hant") || lang.includes("mo")) return "zh-Hant";
      return "zh-Hans";
    }
    if (lang.startsWith("ja")) return "ja";
    if (lang.startsWith("ko")) return "ko";
    if (lang.startsWith("en")) return "en";
    return null;
  }

  function detectLang() {
    const fromHash = normalize(decodeURIComponent(location.hash.slice(1)));
    if (fromHash) {
      // 从 #lang 链接进来的访客，锚点跳转/刷新后仍保持该语言
      try { localStorage.setItem(STORE_KEY, fromHash); } catch (_) {}
      return fromHash;
    }
    try {
      const stored = normalize(localStorage.getItem(STORE_KEY));
      if (stored) return stored;
    } catch (_) { /* 隐私模式无 localStorage */ }
    const navs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
    for (const code of navs) {
      const hit = normalize(code);
      if (hit) return hit;
    }
    return "en";
  }

  let current = LANGS.includes(detectLang()) ? detectLang() : "zh-Hans";
  const ch3Section = document.querySelector(".ch3");
  const ch3Head = document.querySelector(".ch3-head");

  function applyLang(lang) {
    current = lang;
    const dict = STRINGS[lang] || STRINGS["zh-Hans"];
    document.documentElement.lang = lang;
    document.title = dict["meta.title"];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.dataset.i18nAlt;
      if (dict[key] != null) el.alt = dict[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.dataset.i18nAria;
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });
    document.querySelectorAll("img[data-shot]").forEach((img) => {
      img.src = `assets/home/${lang}/${img.dataset.shot}.jpg`;
    });
    document.querySelectorAll("[data-localized-link]").forEach((a) => {
      a.href = `${a.dataset.localizedLink}#${encodeURIComponent(lang)}`;
    });

    const state = ch3Section && ch3Section.dataset.state;
    if (ch3Head) {
      ch3Head.textContent = dict[state === "up" ? "ch3.up" : state === "down" ? "ch3.down" : "ch3.head"];
    }

    const select = document.querySelector("[data-language-select]");
    if (select && select.value !== lang) select.value = lang;
  }

  applyLang(current);

  const select = document.querySelector("[data-language-select]");
  if (select) {
    select.addEventListener("change", () => {
      const lang = normalize(select.value) || "en";
      try { localStorage.setItem(STORE_KEY, lang); } catch (_) {}
      location.hash = encodeURIComponent(lang);
    });
  }
  addEventListener("hashchange", () => {
    const lang = normalize(decodeURIComponent(location.hash.slice(1)));
    if (lang && lang !== current) applyLang(lang);
  });

  /* ---------- 入场 stagger ---------- */
  const revealGroups = [".grow", ".board", ".foot-grid"];
  const revealSingles = [".ch-head", ".ch3-copy", ".cta-sentence", ".band-head", ".qa"];
  const revealEls = [];
  revealGroups.forEach((sel) => {
    document.querySelectorAll(`${sel} > *`).forEach((el, i) => {
      el.style.setProperty("--d", `${Math.min(i, 5) * 0.06}s`);
      revealEls.push(el);
    });
  });
  revealSingles.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => revealEls.push(el));
  });
  if ("IntersectionObserver" in window && !reduceMotion.matches) {
    revealEls.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- 页脚时钟（杭州 UTC+8） ---------- */
  const clock = document.querySelector("[data-clock]");
  if (clock) {
    const tick = () => {
      const now = new Date();
      const hz = new Date(now.getTime() + (now.getTimezoneOffset() + 480) * 60000);
      const pad = (n) => String(n).padStart(2, "0");
      clock.textContent = `${pad(hz.getHours())}:${pad(hz.getMinutes())}`;
    };
    tick();
    setInterval(tick, 30000);
  }

  /* ---------- ch3 试滑：上滑待删除 / 下滑收藏 ---------- */
  const stack = document.querySelector("[data-stack]");
  let busy = false;

  if (stack) {
    const topCard = () => stack.lastElementChild;

    const commit = (dir) => {
      const card = topCard();
      if (!card || busy) return;
      busy = true;
      ch3Section.dataset.state = dir;
      ch3Head.textContent = STRINGS[current][dir === "up" ? "ch3.up" : "ch3.down"];
      card.classList.add("leave");
      card.style.setProperty("--y", dir === "up" ? "-120vh" : "120vh");
      card.style.setProperty("--r", dir === "up" ? "-14deg" : "14deg");
      setTimeout(() => {
        card.classList.remove("leave");
        card.style.removeProperty("--y");
        card.style.removeProperty("--r");
        stack.insertBefore(card, stack.firstElementChild);
        busy = false;
      }, reduceMotion.matches ? 0 : 520);
    };

    stack.addEventListener("pointerdown", (e) => {
      const card = topCard();
      if (!card || busy || e.target.closest(".card") !== card) return;
      const startY = e.clientY;
      card.classList.add("dragging");
      try { card.setPointerCapture(e.pointerId); } catch (_) {}

      const onMove = (ev) => {
        const dy = ev.clientY - startY;
        card.style.setProperty("--y", `${dy}px`);
        card.style.setProperty("--r", `${dy * 0.05}deg`);
      };
      const onEnd = (ev) => {
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerup", onEnd);
        card.removeEventListener("pointercancel", onEnd);
        card.classList.remove("dragging");
        const dy = ev.clientY - startY;
        if (dy < -80) { commit("up"); return; }
        if (dy > 80) { commit("down"); return; }
        card.style.removeProperty("--y");
        card.style.removeProperty("--r");
      };
      card.addEventListener("pointermove", onMove);
      card.addEventListener("pointerup", onEnd);
      card.addEventListener("pointercancel", onEnd);
    });

    stack.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") { e.preventDefault(); commit("up"); }
      if (e.key === "ArrowDown") { e.preventDefault(); commit("down"); }
    });

    document.querySelectorAll(".swipe-btn").forEach((btn) => {
      btn.addEventListener("click", () => commit(btn.dataset.swipe));
    });
  }

  /* ---------- 按住对比拼块：按住显示原片 ---------- */
  const holdBtn = document.querySelector(".hold-btn");
  const holdStage = document.querySelector(".hold-stage");
  if (holdBtn && holdStage) {
    const show = (on) => {
      holdStage.classList.toggle("showing", on);
      holdBtn.setAttribute("aria-pressed", String(on));
    };
    holdBtn.addEventListener("pointerdown", () => show(true));
    ["pointerup", "pointercancel", "pointerleave"].forEach((ev) =>
      holdBtn.addEventListener(ev, () => show(false))
    );
    holdBtn.addEventListener("keydown", (e) => {
      if ((e.key === " " || e.key === "Enter") && !e.repeat) { e.preventDefault(); show(true); }
    });
    holdBtn.addEventListener("keyup", (e) => {
      if (e.key === " " || e.key === "Enter") show(false);
    });
  }

  /* ---------- 擂台拼块：点了就做决定 ---------- */
  const duelBtns = document.querySelectorAll(".duel-btn");
  duelBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const keep = !btn.classList.contains("danger");
      const arena = btn.closest(".b-arena");
      const photos = arena ? arena.querySelectorAll(".duel img") : [];
      if (photos.length === 2) {
        photos[0].style.opacity = keep ? "1" : "0.25";
        photos[1].style.opacity = keep ? "0.25" : "1";
      }
      duelBtns.forEach((b) => { b.disabled = true; b.setAttribute("aria-pressed", String(b === btn)); });
    });
  });
})();
