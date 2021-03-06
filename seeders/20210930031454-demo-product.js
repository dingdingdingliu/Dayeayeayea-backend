'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'VIRGIN FOREST 純淨香氛蠟燭 春夏秋冬四件組',
        price: 1280,
        discountPrice: 1020,
        category: 'home',
        quantity: 50,
        status: 'on',
        shortDesc:
          '在季節的變化裡感受柔和的香氣，逐漸入秋的時刻，也來為嗅覺及空間更換氣味吧。',
        longDesc:
          '季節限定組合內含以下氣味各一款：\n春天選香——海洋舒活\n夏天選香——沁雅薄荷\n秋天選香——柑橘木香\r\n冬天選香—— 雪松沉香\n\n「The Olphactory」極簡嗅覺系列，簡約北歐調的清新設計，俐落都會。以天然植物精油與植物蠟提煉，香調雅緻高級，蠟規格為 200 克，可以持續燃燒長達 40 小時以上。\n\n無論是閒暇時光，或是夜裡的疲勞稀釋，「香氣」引領感官進入更深層次的生活哲學，不僅是享受生活，也是尊重自身日常的表現，重新整頓我們與「家」的親密感。',
        article: 'fragrance',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '西班牙品牌 Ambientair 極簡嗅覺擴香 枸杞紅茶 250ml',
        price: 1090,
        discountPrice: 870,
        category: 'home',
        quantity: 50,
        status: 'on',
        shortDesc: '中西合併的香氣調性，在時節裡讓家的感受多出一份溫暖雅致。',
        longDesc:
          '「The Olphactory」極簡嗅覺系列，簡約清新設計，擴香由天然植物精油提煉，香調雅緻高級，250 毫升約可以靜置長達六個月以上。\n\n枸杞紅茶 Wandering：香氛品中少見的枸杞入香，搭配淡雅的紅茶香氣，自然的香氣讓人舒緩放鬆，用嗅覺體驗蜜香回甘的感官享受。\n\n無論是閒暇時光，或是夜裡的疲勞稀釋，「香氣」引領感官進入更深層次的生活哲學，不僅是享受生活，也是尊重自身日常的表現，重新整頓我們與「家」的親密感。',
        article: 'fragrance',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '丹麥 FRAMA 天然擴香 香薰油 1917｜雪松佛手柑 10ml',
        price: 790,
        discountPrice: 640,
        category: 'home',
        quantity: 100,
        status: 'on',
        shortDesc:
          '利用嗅覺，將記憶喚回 1917 年代的聖保羅舊街區，用熟悉的香氣替空間營造高級質感氛圍。',
        longDesc:
          '1917 雪松佛手柑\n前味：佛手柑、雪松木\n中味：玫瑰、紫丁香\n後味：廣藿香、海藻、橡苔\n\n可以搭配 FRAMA 紅土擴香、水氧機與精油燭座一起使用，請勿塗抹身體\n義大利製造，100％ 天然\n\n材料／尺寸\n｜黑色玻璃瓶裝\n｜容量 10ml\n｜直徑 2.9、高 9.8 公分\n\n品牌對地球及環境負責任，採天然植物油精油及天然材料製成，透過高質感的包裝及成份，提高香氛儀式品質，成為一種幸福、品味與美學兼具的儀式感。',
        article: 'fragrance',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Yasmina 皮革茉莉東方淡香水',
        price: 2390,
        discountPrice: 2390,
        category: 'home',
        quantity: 50,
        status: 'on',
        shortDesc: '東方花香作品,華麗地恰到好處的溫暖香氣。',
        longDesc:
          '風情難以忽視\n酒香韌實最終柔和下來\n彷彿低音爵士酒吧的幻想\n\n香調\n前調｜荳蔻、藏紅花和玫瑰\n中調｜茉莉、皮革、威士忌和鳶尾\n基調｜零陵香豆、香草和廣藿香',
        article: 'fragrance',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '越南國家級主廚監製 風味米線料理食材組',
        price: 370,
        discountPrice: 300,
        category: 'food',
        quantity: 20,
        status: 'on',
        shortDesc: '想念異國風味的這天，用道地的越南米線帶你重現記憶裡的滋味。',
        longDesc:
          '越南國家級主廚監製\n搭配精選小農新鮮蔬果產品\n用道地的香料展現衝擊味蕾的組合\n\n材料\n｜米線兩人份\n｜洗淨蔬果組(已切片)\n｜越南米線香料組\n｜特調越式肉醬\n｜新鮮香料葉\n｜辣椒組合',
        article: 'dining',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Molisana 手工雞蛋寬扁麵',
        price: 190,
        discountPrice: 160,
        category: 'food',
        quantity: 100,
        status: 'on',
        shortDesc: '濃郁雞蛋香味的手工寬扁麵，與各種食材皆能完美搭配。',
        longDesc:
          'Molisana 是目前少數能從備料、磨粉到壓製等過程一手包辦的義大利麵公司，除了選用優質杜蘭小麥以外，更取用海拔兩千公尺處的高山冷泉來捏製麵糰，接著再以傳統的石臼碾磨技術慢慢製成粉末，每個步驟都是成就獨特風味的必備過程。\n\n相較於多數產品的12%，其義大利麵蛋白質含量皆超過14%，能賦予麵條彈牙口感且不易軟爛，讓吃下去的每一口都是享受。而這款雞蛋寬扁麵充滿豐富的濃郁香味，且更能襯托出各種食材的鮮豔色澤，色香味俱全的網紅級菜色輕鬆上桌，喜歡嘗試多種變化的朋友務必參考看看。',
        article: 'dining',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '香料共和國歐式風味香料組',
        price: 590,
        discountPrice: 480,
        category: 'food',
        quantity: 100,
        status: 'on',
        shortDesc:
          '一次買齊所有的香料，什麼食譜都變得簡單了，這就是香料組的魅力。',
        longDesc:
          '遠從歐洲大陸引進的西式香草，充滿濃郁浪漫的歐式風情，可以當作麵飯類佐料或肉類醃料，為飲食生活增添樂趣。\n\n香料組內含\n｜西班牙紅椒粉\n｜頂級薑黃粉\n｜義大利綜合香料\n｜迷迭香碎\n｜月桂葉碎',
        article: 'dining',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Barraca 特色西班牙海鮮燉飯料理包',
        price: 680,
        discountPrice: 550,
        category: 'food',
        quantity: 50,
        status: 'on',
        shortDesc:
          'Barraca 餐廳道地的西班牙特色菜，豐富海鮮與番紅花飯，加熱就能即食美味。',
        longDesc:
          '使用番紅花、辛香料、天然奶油和卡夫帕瑪斯起司粉等香料製成\n豐富的海鮮配料，只要盛盤就能豐盛享用\n\n調理包內含\n｜番紅花燉飯\n｜淡菜\n｜天使紅蝦\n｜透抽\n\n推薦加熱方式: 解凍後在鍋內加熱10分鐘',
        article: 'dining',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '烹飪餐具便攜組',
        price: 990,
        discountPrice: 800,
        category: 'outdoor',
        quantity: 20,
        status: 'on',
        shortDesc: '讓戶外生活增添烹飪樂趣，三五好友共享手工美食。',
        longDesc:
          '這款來自芬蘭的產品，採用了獨家技術將天然松木纖維與食用級 PP 混合加工製成，使得產品具有輕巧且容易清洗的優點。另外，由於其表面不具有塗層，並且也不含雙酚A 等有害物質，使用起來格外令人安心，甚至能同時保護大自然。\n\n不過要注意的是，這種材質的產品不能直接接觸火源，也不能以微波爐加熱；加上其硬度也不及金屬，若擔心碰撞或使用後會產生刮痕的話，建議可以參考其他金屬製的產品，如此才能使用得更長久喔！',
        article: 'camping',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'CANADA WOODS 純色防水後背包',
        price: 1080,
        discountPrice: 900,
        category: 'outdoor',
        quantity: 50,
        status: 'on',
        shortDesc: '亮眼配色，輕巧大容量，戶外生活首選後背包。',
        longDesc:
          '靈活，快速和有目標是都市人的生活態度，對於夢想永遠衝勁十足，雖然路途有著無窮無盡的未知素，但始終勇往向前。\n\n採用特種尼龍布，加強耐久度及防水效果。背部特殊網層透氣處理，不悶熱也不易吸附味道。多間格及大容量的設計，讓你收納各種不同物品。',
        article: 'camping',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'MSR Elixir 4 自立型帳篷',
        price: 8900,
        discountPrice: 7800,
        category: 'outdoor',
        quantity: 20,
        status: 'on',
        shortDesc: '各種功能讓帳篷更加實用，能與您持續共度山林時光。',
        longDesc:
          '雙層帳篷，只要將骨架搭設好後再利用吊扣將內帳根外帳固定即可，不需要花費太多的時間跟精力就能完成，十分方便。特別採用交叉式的營柱設計，讓頭頂多一點空間出來，又不會增加太多重量。除此之外也有許多細節非常具有巧思，像是帶有螢光色的拉鍊，就算夜晚也不用擔心找不到門口；內部也利用邊角空間設置網布，用來當作儲物空間。\n\n包括地布等各種配件一應俱全，在同類型大小的帳篷中也有較大空間可以利用，甚至前庭、後庭也一應俱全，對於想要多點帳內空間的使用者來說是個好選擇。',
        article: 'camping',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ELEOS 韓國極致輕量登山杖',
        price: 1980,
        discountPrice: 1680,
        category: 'outdoor',
        quantity: 20,
        status: 'on',
        shortDesc: '新型極輕量鋁合金材質，兼具輕量與堅固的登山杖。',
        longDesc:
          '專利設計極致輕量登山杖，比ELEOS碳纖維登山杖更輕，同時具有更強的耐用度\n\n由韓國登山杖專業大廠製造，全系列皆於韓國生產，品質極佳\n\n內附緩衝減震彈簧，具輕避震效果使用更舒適\n\n握把採超細纖維EVA材質，吸濕防滑，並有360度環狀可調節腕帶，穩定支撐\n\n另附阻泥板及防滑杖頭，可依地形環境隨時更換\n\n杖身獨家設計圖騰，提升整體視覺美感',
        article: 'camping',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '3in1 Planner 16 環直式空白素描本',
        price: 300,
        discountPrice: 300,
        category: 'stationery',
        quantity: 100,
        status: 'on',
        shortDesc: '空白內頁，線圈設計，自由發揮無設限。',
        longDesc:
          '百年經典，魅力不減，百年品牌重新定義線圈筆記本，這款商品特別採用獨家的軟性材質線圈來加以改善，形狀也改成「D」型，既不占空間也不易影響書寫，甚至左撇子也能自在使用。內頁格線上還有定位用的小點，讓字跡可以控制得完美得宜，非常適合注重寫字手感的使用者。\n\n大小合宜的尺寸搭配空白內頁，最適合喜歡不受格式拘束、想盡情發揮創意的族群，紙張磅數也適合喜歡厚實紙質的你。',
        article: 'null',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '貝登堡系列 - WeR 復古打字機',
        price: 1880,
        discountPrice: 1880,
        category: 'stationery',
        quantity: 10,
        status: 'on',
        shortDesc: '復古質感,讓心意能不同展現的文字機。',
        longDesc:
          '使用打字機將心意重現為一封封的信件傳遞出去，\n經典造型讓喜歡時代風情的收藏者充滿驚喜。\n使用打字機將心意重現為一封封的信件傳遞出去，\n經典造型讓喜歡時代風情的收藏者充滿驚喜。\n使用打字機將心意重現為一封封的信件傳遞出去，\n經典造型讓喜歡時代風情的收藏者充滿驚喜。',
        article: 'null',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'School 系列 kitpas school 文具組',
        price: 480,
        discountPrice: 480,
        category: 'stationery',
        quantity: 100,
        status: 'on',
        shortDesc: 'School 系列文具組合，系列配色。',
        longDesc:
          '專為喜歡風趣風格的你設計的文具組，每一樣內容物都是必備實用品，並通過安全檢驗，即使是小學生也能安心使用。\n\n文具組內含\n｜筆記本 X 3\n｜School 系列貼紙組\n｜有蓋 2B 自動鉛筆\n｜黑色橡皮擦',
        article: 'null',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Platinum CENTURY鋼筆 PTB-35000S',
        price: 4500,
        discountPrice: 4500,
        category: 'stationery',
        quantity: 100,
        status: 'on',
        shortDesc: '輕鬆入手14K金筆尖，高品質的日本製文具。',
        longDesc:
          '這款是 platinum 品牌中 CENTURY系列的鋼筆，設計時便以適合書寫日文漢字與假名為目標，讓初接觸鋼筆的讀者也能迅速地上手。\n\n且這款產品比起其他具有14K金筆尖的款式要來得經濟實惠，機能性與品質也仍都具有一定的保證。另外除了透明筆身的款式外，同系列中也不乏特殊設計與日本風彩繪的產品，獨特的工藝無論是用來收藏還是作為贈禮都是不二之選。',
        article: 'null',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Homely Zakka 木趣食光木質砧板',
        price: 580,
        discountPrice: 580,
        category: 'kitchenware',
        quantity: 100,
        status: 'on',
        shortDesc: '天然、有機，品味義大利餐廚美學。',
        longDesc:
          '以整塊實木製成的木質砧板擁有相當厚重的厚度，加上底部的防滑措施，能無比安穩地擺放在廚房檯面上，不僅適合當成切菜板，其抗菌功效在適當清潔之後亦能當作揉麵台使用。由於沒有多餘的凹槽或縫隙，在清洗上也相對簡單方便。\n\n擁有強韌又耐用的特色，美麗木紋更是具有十足的獨特性，無論是當成餐桌擺盤還是擺放在居家一角，都能瞬間為空間增添一股藝術氣息。',
        article: 'null',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'FLAMBO 單柄23公分鑄黑平底鍋',
        price: 1380,
        discountPrice: 1380,
        category: 'kitchenware',
        quantity: 50,
        status: 'on',
        shortDesc:
          '全天然、無化學塗層鑄黑平底鍋，貼心設計，料理日常的完美幫手。',
        longDesc:
          'Flambo鑄黑平底鍋全天然、無化學塗層，透過保養能維持並不斷增強不沾效果，不會像傳統不沾鍋一樣效果隨著使用而遞減。加大、加高的鍋身，尺寸恰到好處，適合中、小家庭每天的料理提案。\n\n一體成型全鑄鐵打造，出廠前噴塗植物油並以高溫電燒進行預先養鍋，無添加一丁點的化學塗層與原料，完全天然，使用起來健康又安心。\n\n100%鑄鐵一體成型鑄造，可以整鍋進入烤箱烹調。烤箱烹調好處多多，四面八方的熱度傳導能讓食材更均勻受熱，完成平常在爐台上無法完成的美味。\n\n一般市售人工鑄模的鑄鐵鍋表面粗糙、鍋壁厚薄不均且較重，我們採用丹麥原裝全自動化鑄造生產線，再經過多道表面處理工法以去除表面雜質，表面更細緻平滑，鍋具也相對比人工鑄模的鑄鐵鍋輕。',
        article: 'null',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'KINTO FOG｜耐熱陶瓷素色餐盤',
        price: 680,
        discountPrice: 680,
        category: 'kitchenware',
        quantity: 100,
        status: 'on',
        shortDesc:
          '質樸本質的素白餐皿，純淨素雅色彩，更能襯托料理的色澤與美味。',
        longDesc:
          'FOG以質樸本質的大地色系作為主調，使用質地細緻的陶瓷材質，\n啞光色釉料彷彿晨霧迷濛，將迷離的光影透過日本職人手藝呈現，\n並隨窯燒的過程而展現更多不同層次，\n打造出一系列低調不失美感的清新風格的杯與餐皿。\n\n材質：瓷器\n尺寸：ø160 x H20 mm\n顏色：灰白\n產地：日本',
        article: 'null',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '丹麥 Nordal 北歐金屬餐具組',
        price: 880,
        discountPrice: 880,
        category: 'kitchenware',
        quantity: 100,
        status: 'on',
        shortDesc: '簡約的銀色餐具,最適合喜愛佈置餐桌的你。',
        longDesc:
          '成立於 1991 年丹麥的 NORDAL，承襲了北歐風格一貫的優雅與清新自然，深深扎根於室內裝飾、家居紡織、燈具、客廳家具、餐廚家具、戶外家具、園藝配件等多元的傢俱與家事類品項。\n\nNORDAL 在開發系列商品時，總能兼具功能、個性和源源不絕的創意而受到北歐各地的讚賞。近年來更致力於與年輕設計師攜手合作，期待開發出更多樣有別於以往樸質清新的北歐風格，讓居家生活也能因 NORDAL 的進駐而別有一番風味。\n\n質感金屬色搭配各式碗盤器皿都很有氣質，在餐桌上鋪上獨具風格的桌巾，擺上北歐金屬餐具組吃著喜愛的餐點，愜意的享受屬於自己的用餐時光。',
        article: 'null',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '5:PM 手作系列黃銅葉形耳環',
        price: 480,
        discountPrice: 480,
        category: 'apparel',
        quantity: 100,
        status: 'on',
        shortDesc: '黃銅材質立體葉形，輕量而存在感強烈的配件。',
        longDesc:
          '當一個人做自己認為最重要且喜歡的事情時，不用刻意去計算，其中的價值也會如微風般，徐徐地吹進生命裡。在日復一日的生活中，用飾品展現自己的獨特樣貌，在有時迷茫的生命中，在屬於自己的位置安穩立定。\n\n層次葉形與黃銅的復古色調，是這款耳環特別迷人的設計，不同於光亮的金屬，每一副耳環都有不一樣的光澤風貌，如同世界上只有一個的你。',
        article: 'null',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'INUKHAKA 羊毛針織毛帽',
        price: 1580,
        discountPrice: 1580,
        category: 'apparel',
        quantity: 100,
        status: 'on',
        shortDesc: '適合各種頭型的羊毛帽，冬日的溫暖推薦。',
        longDesc:
          '寒冷的秋冬季，精選了保暖的混羊毛毛帽，同時具備保暖與透氣性。\n\n這款 90% 羊毛製成的毛帽，運用了織品廠牌傳統的針織技術，小批量的生產確保了商品的品質，造型上也符合近年流行。\n\n不但在攜帶上非常輕便，摺疊收納後也不會佔據過多的行李空間，作為日常穿搭單品或是旅行外出都十分合適。',
        article: 'null',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'NANING9 素色彩紗寬版毛衣',
        price: 890,
        discountPrice: 890,
        category: 'apparel',
        quantity: 120,
        status: 'on',
        shortDesc: '韓國設計品牌，夾雜彩紗的素色柔和毛衣。',
        longDesc:
          '總有那麼一天，你只想扮演自己。無論是褲裝或裙裝，衣櫃裡有沒有那麼一件衣服，能無條件的接受所有樣貌的女子類型?\n\n季節更迭下追逐流行的設計品牌也不能不備有的素色毛衣\n40% 羊毛混紡，手感柔軟細膩\n落肩版型，蓬鬆輕盈，有著濃厚的休閒氣氛',
        article: 'null',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'JOIN LIFE 男款棋盤格長袖襯衫',
        price: 1490,
        discountPrice: 1490,
        category: 'apparel',
        quantity: 120,
        status: 'on',
        shortDesc: '可以輕鬆搭配的格紋襯衫，展現閒適質感風貌。',
        longDesc:
          'JOIN LIFE 採用有助於我們減少產品對環境造成影響的技術和原材料而生產的服裝，我們會在產品上貼有「JOIN LIFE」系列標籤，以便易於識別。\n\n棋盤格暖色格紋襯衫，每個男性都能信手拈來輕鬆穿搭，簡單有型。',
        article: 'null',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {})
  },
}
