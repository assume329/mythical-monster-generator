// 页面加载完成后初始化
(function() {
    // 等待DOM加载完成
    document.addEventListener('DOMContentLoaded', function() {
        // 神话志怪数据
        const mythicalCreatures = {
            // 搜索并替换所有图片路径
            // 将所有 `image: 'images/` 替换为 `image: 'images/`
            
            // 例如修改后的九尾狐数据：
            '九尾狐': {
                appearance: '人身狐尾，面容姣好，常着素色衣衫，目若秋波，步若轻云。百年修行者耳尖微翘，千年以上者可随意变化形貌，唯眉心一点朱砂痣为其本相标识。',
                story: '九尾狐多居深山古洞，好清净，亦常化身为凡人游历人间。或行善积德，或游戏风尘。若得人诚心供奉，常能护宅消灾；但若见色起意，轻薄冒犯，则必遭反噬。《山海经》记载："青丘之山，有兽焉，其状如狐而九尾。"',
                image: '九尾狐.png',  // 改为images
                fallbackImage: 'https://picsum.photos/id/64/800/600'
            },
            
            // 其他所有神怪数据的image路径都需要做相同修改
            '龙': {
                appearance: '角似鹿，头似驼，眼似兔，项似蛇，腹似蜃，鳞似鱼，爪似鹰，掌似虎，耳似牛。能大能小，能升能隐；大则兴云吐雾，小则隐介藏形；升则飞腾于宇宙之间，隐则潜伏于波涛之内。',
                story: '龙为鳞虫之长，司掌行云布雨，象征祥瑞。《山海经》记载，龙生九子，各有所好。华夏民族自称为龙的传人，皇帝亦自命为真龙天子。古人认为，帝王有德，则龙现于世；若帝王失德，则龙隐而不见。',
                image: '龙.png',
                fallbackImage: 'https://picsum.photos/id/237/800/600'
            },
            '凤凰': {
                appearance: '鸡头、燕颔、蛇颈、龟背、鱼尾、五彩色，高六尺许。雄为凤，雌为凰，总称为凤凰。其鸣如箫笙，音如钟鼓。',
                story: '凤凰乃百鸟之王，非梧桐不止，非练实不食，非醴泉不饮。见则天下安宁，象征着吉祥、尊贵、贤德。《山海经》载："丹穴之山，有鸟焉，其状如鸡，五采而文，名曰凤皇。"传说凤凰能浴火重生，称为"凤凰涅槃"。',
                image: '凤凰.png',
                fallbackImage: 'https://picsum.photos/id/287/800/600'
            },
            '麒麟': {
                appearance: '麋身，牛尾，马蹄（史籍中有说为"狼蹄"），鱼鳞皮，一角，角端有肉，黄色。',
                story: '麒麟乃仁兽也，含仁怀义，音中律吕，行步中规，择土而践，不践生虫，不折生草，不食不义，不饮洿池，不入坑阱，不行罗网。王者至仁则出。《礼记》云："麟、凤、龟、龙，谓之四灵。"',
                image: '麒麟.png',
                fallbackImage: 'https://picsum.photos/id/235/800/600'
            },
            '饕餮': {
                appearance: '羊身，眼睛在腋下，虎齿人爪，大头大嘴。十分贪吃，见到什么就吃什么，由于吃得太多，最后被撑死。',
                story: '饕餮是中国古代神话传说中的一种神秘怪物，别名叫狍鸮，古书《山海经·北次二经》介绍其特点是：其形状如羊身人面，眼在腋下，虎齿人手。后来形容贪婪之人叫"饕餮"。',
                image: '饕餮.png',
                fallbackImage: 'https://picsum.photos/id/177/800/600'
            },
            '精卫': {
                appearance: '状如乌，文首，白喙，赤足，名曰"精卫"，其鸣自詨。',
                story: '精卫本是炎帝之女，名曰女娃。女娃游于东海，溺而不返，故为精卫，常衔西山之木石，以堙于东海。《山海经·北山经》记载："炎帝之少女名曰女娃。女娃游于东海，溺而不返，故为精卫，常衔西山之木石，以堙于东海。"',
                image: '精卫.png',
                fallbackImage: 'https://picsum.photos/id/231/800/600'
            },
            '刑天': {
                appearance: '形天与帝至此争神，帝断其首，葬之常羊之山。乃以乳为目，以脐为口，操干戚以舞。',
                story: '刑天是中国古代神话传说中的人物。《山海经·海外西经》记载："刑天与帝争神，帝断其首，葬之常羊之山。乃以乳为目，以脐为口，操干戚以舞。"陶渊明《读山海经》诗："刑天舞干戚，猛志固常在。"以此表达刑天虽断首，仍继续战斗的精神。',
                image: '刑天.png',
                fallbackImage: 'https://picsum.photos/id/227/800/600'
            },
            '白泽': {
                appearance: '白泽是中国古代神话中地位崇高的神兽，祥瑞之象征，是令人逢凶化吉的吉祥之兽。白泽能说人话，通万物之情，晓天下万物状貌。',
                story: '白泽是一种传说中的神兽，它知道天下所有鬼怪的名字、形貌和驱除的方术，所以从很早开始，就被当做驱鬼的神和祥瑞来供奉。尤其到了中古时期，对白泽的尊崇更是隆正隆。当时《白泽图》（又称《白泽精怪图》）一书非常流行。',
                image: '白泽.png',
                fallbackImage: 'https://picsum.photos/id/169/800/600'
            },
            '九婴': {
                appearance: '九婴是古代中国神话传说中的神兽之一。出自《淮南子·本经训》。它是水火之怪，能喷水吐火，其叫声如婴儿啼哭，有九头，故称九婴。',
                story: '九婴生于天地初分之时，当时天地灵气厚若实质，不知产出多少强横的灵兽怪物。这只九命老妖于深山大泽之中，阴阳之元气氤氲交错，化生而出，乃是九头蛇身，自号九婴。每一头即为一命。九婴以人为食，能喷水吐火，据说是颛顼时的怪兽。',
                image: '九婴.png',
                fallbackImage: 'https://picsum.photos/id/197/800/600'
            },
            '青龙': {
                appearance: '龙身青鳞，头生双角，目若朗星，须髯飘逸，四肢矫健，有五爪。为四方神兽中的东方之神，象征着生机与希望。',
                story: '青龙是中国古代神话中的四方神兽之一，代表东方，五行属木，象征春季。《礼记·曲礼上》记载："行，前朱鸟而后玄武，左青龙而右白虎。"青龙与白虎、朱雀、玄武共同守护天地四方。',
                image: '青龙.png',
                fallbackImage: 'https://picsum.photos/id/133/800/600'
            },
            '混沌': {
                appearance: '状如犬，或云如熊，浑身赤目，无耳无目，无鼻无口，腹下有一窍，名曰混沌窍。其形模糊，变化无常，常隐于云雾之中。',
                story: '混沌是中国古代神话中的四凶之一，象征着混乱与无序。《山海经》记载："有神焉，其状如黄囊，赤如丹火，六足四翼，浑敦无面目，是识歌舞，实惟帝江也。"《庄子》中也有关于混沌的寓言：南海之帝为倏，北海之帝为忽，中央之帝为混沌。倏与忽时相与遇于混沌之地，混沌待之甚善。',
                image: '混沌.png',
                fallbackImage: 'https://picsum.photos/id/167/800/600'
            },
            // 新增的神兽条目 - 与pictures文件夹中的图片对应
            '毕方': {
                appearance: '状如鹤，一足，赤文青质而白喙。',
                story: '毕方是中国古代神话中的火灾之兆。《山海经·西山经》记载："章莪之山，有鸟焉，其状如鹤，一足，赤文青质而白喙，名曰毕方，其鸣自叫也，见则其邑有讹火。"毕方是一种象征火灾的神鸟。',
                image: '毕方.png',
                fallbackImage: 'https://picsum.photos/id/106/800/600'
            },
            '鸾鸟': {
                appearance: '其状如翟而五采文，名曰鸾鸟，见则天下安宁。',
                story: '鸾鸟是《山海经·西山经》中记载的神鸟。《山海经》载："女床之山，多石涅，其阴多赤铜，其阳多婴垣之玉。有鸟焉，其状如翟而五采文，名曰鸾鸟，见则天下安宁。"鸾鸟是一种象征天下太平的神鸟。',
                image: '鸾鸟.png',
                fallbackImage: 'https://picsum.photos/id/287/800/600'
            },
            '夔': {
                appearance: '状如牛，苍身而无角，一足，出入水则必风雨，其光如日月，其声如雷，其名曰夔。',
                story: '夔是《山海经·大荒东经》中记载的雷兽。《山海经》载："东海中有流波山，入海七千里。其上有兽，状如牛，苍身而无角，一足，出入水则必风雨，其光如日月，其声如雷，其名曰夔。黄帝得之，以其皮为鼓，橛以雷兽之骨，声闻五百里，以威天下。"',
                image: '夔（雷兽）.png',
                fallbackImage: 'https://picsum.photos/id/142/800/600'
            },
            '朱雀': {
                appearance: '状似凤凰，全身赤红，羽毛华丽，喙如利钩，目含神火，鸣声清亮。振翅时火羽翻飞，周身缭绕赤色祥云。',
                story: '朱雀是中国古代神话中的四方神兽之一，代表南方，五行属火，象征夏季。《礼记·曲礼上》记载："行，前朱鸟而后玄武，左青龙而右白虎。"朱雀又被称为玄鸟，《诗经》中有"天命玄鸟，降而生商"的记载。',
                image: '朱雀.png',
                fallbackImage: 'https://picsum.photos/id/240/800/600'
            },
            '白虎': {
                appearance: '虎身，白色皮毛，额生王字，目若铜铃，齿如利刃，爪似钢钩，尾如钢鞭。吼声如雷，威震山林。',
                story: '白虎是中国古代神话中的四方神兽之一，代表西方，五行属金，象征秋季。白虎为战神、杀伐之神，同时也是权势、尊贵的象征。《风俗通义》中记载："虎者，阳物，百兽之长也，能执搏挫锐，噬食鬼魅。"',
                image: '白虎.png',
                fallbackImage: 'https://picsum.photos/id/202/800/600'
            },
            '玄武': {
                appearance: '龟蛇合体，龟甲坚硬如铁，蛇身灵动如电，二者交缠共生。龟背纹路清晰，蛇鳞闪烁玄光。',
                story: '玄武是中国古代神话中的四方神兽之一，代表北方，五行属水，象征冬季。玄武为水神，亦为北方之神。《后汉书·王梁传》注云："玄武，北方之神，龟蛇合体。"玄武也是长寿的象征，被视为守护之神。',
                image: '玄武.png',
                fallbackImage: 'https://picsum.photos/id/163/800/600'
            },
            '应龙': {
                appearance: '龙身有翼，鳞甲金黄，双角高耸，须髯飘动，翼若垂天之云，爪似开山之斧。能大能小，能升能隐。',
                story: '应龙是中国古代神话中最强大的龙之一，生有双翼，能够自由翱翔于天地之间。《山海经·大荒东经》记载："大荒东北隅中，有山名曰凶犁土丘。应龙处南极，杀蚩尤与夸父，不得复上，故下数旱。旱而为应龙之状，乃得大雨。"',
                image: '应龙.png',
                fallbackImage: 'https://picsum.photos/id/139/800/600'
            },
            '烛龙': {
                appearance: '人面蛇身，赤色，身长千里，睁眼为昼，闭眼为夜，吹气为冬，呼气为夏。不饮不食，不寐不息。',
                story: '烛龙是中国古代神话中的钟山之神，又称烛阴。《山海经·大荒北经》记载："西北海之外，赤水之北，有章尾山。有神，人面蛇身而赤，直目正乘，其瞑乃晦，其视乃明，不食不寝不息，风雨是谒。是烛九阴，是谓烛龙。"',
                image: '烛龙.png',
                fallbackImage: 'https://picsum.photos/id/142/800/600'
            },
            '凿齿': {
                appearance: '兽名，齿长三尺，其状如凿，下彻颔下，而持戈盾。',
                story: '凿齿是中国古代神话中的怪兽。《山海经·海外南经》记载："羿与凿齿战于寿华之野，羿射杀之。在昆仑虚东。羿持弓矢，凿齿持盾，一曰戈。"凿齿是一种长有像凿子一样锋利牙齿的怪兽，被后羿射杀。',
                image: '凿齿.png',
                fallbackImage: 'https://picsum.photos/id/185/800/600'
            },
            '合窳': {
                appearance: '其状如彘而人面，黄身而赤尾，其音如婴儿。',
                story: '合窳是《山海经·东山经》中记载的怪兽。《山海经》载："剡山，有兽焉，其状如彘而人面，黄身而赤尾，其名曰合窳，其音如婴儿。是兽也，食人，亦食虫蛇，见则天下大水。"合窳是一种既能吃人又能吃虫蛇的怪兽，传说它出现的地方会出现洪水。',
                image: '合窳.png',
                fallbackImage: 'https://picsum.photos/id/181/800/600'
            },
            '天狗': {
                appearance: '其状如狸而白首，其名曰天狗，其音如榴榴，可以御凶。',
                story: '天狗是《山海经·西山经》中记载的神兽。《山海经》云："阴山，有兽焉，其状如狸而白首，其名曰天狗，其音如榴榴，可以御凶。"天狗是一种可以抵御凶邪的神兽，声音如榴榴鸟的鸣叫声。',
                image: '天狗.png',
                fallbackImage: 'https://picsum.photos/id/187/800/600'
            },
            '夫诸': {
                appearance: '其状如白鹿而四角，见则其邑大水。',
                story: '夫诸是《山海经·中山经》中记载的神兽。《山海经》载："敖岸之山，有兽焉，其状如白鹿而四角，名曰夫诸，见则其邑大水。"夫诸是一种形态优美的神兽，但传说它出现的地方会有洪水。',
                image: '夫诸.png',
                fallbackImage: 'https://picsum.photos/id/155/800/600'
            },
            '当康': {
                appearance: '其状如豚而有牙，其名曰当康，其鸣自詨，见则天下大穰。',
                story: '当康是《山海经·东山经》中记载的瑞兽。《山海经》云："钦山，有兽焉，其状如豚而有牙，其名曰当康，其鸣自詨，见则天下大穰。"当康是一种象征丰收的神兽，传说它出现的时候天下就会获得大丰收。',
                image: '当康.png',
                fallbackImage: 'https://picsum.photos/id/196/800/600'
            },
            '文鳐鱼': {
                appearance: '状如鲤里，鱼身而鸟翼，苍文而白首赤喙。',
                story: '文鳐鱼是《山海经·西山经》中记载的神鱼。《山海经》载："泰器之山，观水出焉，西流注于流沙。是多文鳐鱼，状如鲤里，鱼身而鸟翼，苍文而白首赤喙，常行西海，游于东海，以夜飞。其音如鸾鸡，其味酸甘，食之已狂，见则天下大穰。"文鳐鱼是一种能飞的鱼，传说它出现的地方会有丰收。',
                image: '文鳐鱼.png',
                fallbackImage: 'https://picsum.photos/id/142/800/600'
            },
            '狡': {
                appearance: '其状如犬而豹文，其角如牛，其名曰狡，其音如吠犬。',
                story: '狡是《山海经·西山经》中记载的瑞兽。《山海经》载："玉山，有兽焉，其状如犬而豹文，其角如牛，其名曰狡，其音如吠犬，见则其国大穰。"传说狡出现的国家会获得大丰收。',
                image: '狡.png',
                fallbackImage: 'https://picsum.photos/id/169/800/600'
            },
            '狰': {
                appearance: '其状如赤豹，五尾一角，其音如击石。',
                story: '狰是《山海经·西山经》中记载的神兽。《山海经》载："章莪之山，无草木，多瑶、碧。所为甚怪。有兽焉，其状如赤豹，五尾一角，其音如击石，其名曰狰。"狰是一种形态奇特的猛兽，声音如敲击石头一般。',
                image: '狰.png',
                fallbackImage: 'https://picsum.photos/id/239/800/600'
            },
            '狸力': {
                appearance: '状如豚，有距，其音如狗吠。',
                story: '狸力是《山海经·南山经》中记载的神兽。《山海经》载："柜山，有兽焉，其状如豚，有距，其音如狗吠，其名曰狸力，见则其县多土功。"传说狸力出现的地方，就会有大兴土木的工程。',
                image: '狸力.png',
                fallbackImage: 'https://picsum.photos/id/193/800/600'
            },
            '猾褢': {
                appearance: '其状如人而彘鬣，穴居而冬蛰，其名曰猾褢，其音如斫木，见则县有大繇。',
                story: '猾褢是《山海经·东山经》中记载的怪兽。《山海经》载："葛山之首，无草木。澧水出焉，东流注于余泽。其中多珠蟞鱼，其状如肺而四目，六足有珠，其味酸甘，食之无疠。有兽焉，其状如人而彘鬣，穴居而冬蛰，其名曰猾褢，其音如斫木，见则县有大繇。"传说猾褢出现的地方会有大规模的徭役。',
                image: '猾褢.png',
                fallbackImage: 'https://picsum.photos/id/174/800/600'
            },
            '相柳': {
                appearance: '九首人面，蛇身而青。',
                story: '相柳是《山海经·海外北经》中记载的怪兽。《山海经》载："共工之臣曰相柳氏，九首，以食于九山。相柳之所抵，厥为泽溪。禹杀相柳，其血腥，不可以树五谷种。禹厥之，三仞三沮，乃以为众帝之台。在昆仑之北，柔利之东。相柳者，九首人面，蛇身而青。不敢北射，畏共工之台。台在其东。台四方，隅有一蛇，虎色，首冲南方。"相柳是共工的臣子，所到之处都会变成沼泽。',
                image: '相柳.png',
                fallbackImage: 'https://picsum.photos/id/171/800/600'
            },
            '罴': {
                appearance: '其状如麋，其川在尾上。',
                story: '罴是《山海经·北山经》中记载的神兽。《山海经》载："梁渠之山，无草木，多金玉。修水出焉，而东流注于雁门。其兽多居暨，其状如彙而赤毛，其音如豚。有鸟焉，其状如夸父，四翼、一目、犬尾，名曰嚣，其音如鹊，食之已腹痛，可以止衕。"罴是一种形态奇特的鹿类神兽。',
                image: '罴.png',
                fallbackImage: 'https://picsum.photos/id/183/800/600'
            },
            '胜遇': {
                appearance: '其状如翟而赤，名曰胜遇，是食鱼，其音如鹿。',
                story: '胜遇是《山海经·西山经》中记载的神鸟。《山海经》云："玉山，是西王母所居也。.. 又西三百五十里，曰玉山，其上多铜，其下多玉，其木多豫章、楢、杻。有鸟焉，其状如翟而赤，名曰胜遇，是食鱼，其音如鹿，见则其国大水。"传说胜遇出现的国家会遭遇洪水。',
                image: '胜遇.png',
                fallbackImage: 'https://picsum.photos/id/106/800/600'
            },
            '蛊雕': {
                appearance: '其状如雕而有角，其音如婴儿之音，是食人。',
                story: '蛊雕是《山海经·南山经》中记载的食人怪兽。《山海经》载："鹿吴之山，上无草木，多金石。泽更之水出焉，而南流注于滂水。水有兽焉，名曰蛊雕，其状如雕而有角，其音如婴儿之音，是食人。"',
                image: '蛊雕.png',
                fallbackImage: 'https://picsum.photos/id/204/800/600'
            },
            '西王母': {
                appearance: '其状如人，豹尾虎齿而善啸，蓬发戴胜，是司天之厉及五残。',
                story: '西王母是《山海经·西山经》中记载的上古女神。《山海经》载："玉山，是西王母所居也。西王母其状如人，豹尾虎齿而善啸，蓬发戴胜，是司天之厉及五残。"西王母后来逐渐演变为道教中的重要女神，掌管不死药、罚恶、预警灾厉等。',
                image: '西王母.png',
                fallbackImage: 'https://picsum.photos/id/64/800/600'
            },
            '诸犍': {
                appearance: '其状如豹而长尾，人首而牛耳，一目，善吒，行则衔其尾，居则蟠其尾。',
                story: '诸犍是《山海经·北山经》中记载的神兽。《山海经》载："单张之山，其上无草木。有兽焉，其状如豹而长尾，人首而牛耳，一目，名曰诸犍，善吒，行则衔其尾，居则蟠其尾。"诸犍是一种形态奇特的野兽，行走时会衔着自己的尾巴。',
                image: 'images/诸犍.png',
                fallbackImage: 'https://picsum.photos/id/238/800/600'
            },
            '酸与': {
                appearance: '其状如蛇，而四翼六目三足，其名曰酸与，其鸣自詨，见则其邑有恐。',
                story: '酸与是《山海经·北山经》中记载的怪兽。《山海经》云："景山，南望盐贩之泽，北望少泽。其上多草、薯薁，其草多秦椒，其阴多赭，其阳多玉。有鸟焉，其状如蛇，而四翼六目三足，其名曰酸与，其鸣自詨，见则其邑有恐。"传说酸与出现的城邑会有恐怖的事情发生。',
                image: '酸与.png',
                fallbackImage: 'https://picsum.photos/id/175/800/600'
            },
            '罴': {
                appearance: '其状如麋，其川在尾上。',
                story: '罴是《山海经·北山经》中记载的神兽。《山海经》载："梁渠之山，无草木，多金玉。修水出焉，而东流注于雁门。其兽多居暨，其状如彙而赤毛，其音如豚。有鸟焉，其状如夸父，四翼、一目、犬尾，名曰嚣，其音如鹊，食之已腹痛，可以止衕。"罴是一种形态奇特的鹿类神兽。',
                image: 'images/罴.png',
                fallbackImage: 'https://picsum.photos/id/183/800/600'
            },
            '猾褢': {
                appearance: '其状如人而彘鬣，穴居而冬蛰，其名曰猾褢，其音如斫木，见则县有大繇。',
                story: '猾褢是《山海经·东山经》中记载的怪兽。《山海经》载："葛山之首，无草木。澧水出焉，东流注于余泽。其中多珠蟞鱼，其状如肺而四目，六足有珠，其味酸甘，食之无疠。有兽焉，其状如人而彘鬣，穴居而冬蛰，其名曰猾褢，其音如斫木，见则县有大繇。"传说猾褢出现的地方会有大规模的徭役。',
                image: '猾褢.png',
                fallbackImage: 'https://picsum.photos/id/174/800/600'
            },
            '獙獙': {
                appearance: '其状如狐而有翼，其音如鸿雁。',
                story: '獙獙是《山海经·东山经》中记载的怪兽。《山海经》云："姑逢之山，无草木，多金玉。有兽焉，其状如狐而有翼，其音如鸿雁，其名曰獙獙，见则天下大旱。"传说獙獙出现的地方会发生严重的旱灾。',
                image: 'i獙獙.png',
                fallbackImage: 'https://picsum.photos/id/201/800/600'
            },
            '合窳': {
                appearance: '其状如彘而人面，黄身而赤尾，其音如婴儿。',
                story: '合窳是《山海经·东山经》中记载的怪兽。《山海经》载："剡山，有兽焉，其状如彘而人面，黄身而赤尾，其名曰合窳，其音如婴儿。是兽也，食人，亦食虫蛇，见则天下大水。"合窳是一种既能吃人又能吃虫蛇的怪兽，传说它出现的地方会出现洪水。',
                image: '合窳.png',
                fallbackImage: 'https://picsum.photos/id/181/800/600'
            },
            '当康': {
                appearance: '其状如豚而有牙，其名曰当康，其鸣自詨，见则天下大穰。',
                story: '当康是《山海经·东山经》中记载的瑞兽。《山海经》云："钦山，有兽焉，其状如豚而有牙，其名曰当康，其鸣自詨，见则天下大穰。"当康是一种象征丰收的神兽，传说它出现的时候天下就会获得大丰收。',
                image: '当康.png',
                fallbackImage: 'https://picsum.photos/id/196/800/600'
            },
            '文鳐鱼': {
                appearance: '状如鲤里，鱼身而鸟翼，苍文而白首赤喙。',
                story: '文鳐鱼是《山海经·西山经》中记载的神鱼。《山海经》载："泰器之山，观水出焉，西流注于流沙。是多文鳐鱼，状如鲤里，鱼身而鸟翼，苍文而白首赤喙，常行西海，游于东海，以夜飞。其音如鸾鸡，其味酸甘，食之已狂，见则天下大穰。"文鳐鱼是一种能飞的鱼，传说它出现的地方会有丰收。',
                image: '文鳐鱼.png',
                fallbackImage: 'https://picsum.photos/id/142/800/600'
            },
            '夫诸': {
                appearance: '其状如白鹿而四角，见则其邑大水。',
                story: '夫诸是《山海经·中山经》中记载的神兽。《山海经》载："敖岸之山，有兽焉，其状如白鹿而四角，名曰夫诸，见则其邑大水。"夫诸是一种形态优美的神兽，但传说它出现的地方会有洪水。',
                image: '夫诸.png',
                fallbackImage: 'https://picsum.photos/id/155/800/600'
            },
            '魍魉': {
                appearance: '其状如三岁小儿，赤黑色，赤目、赤爪、长耳。',
                story: '魍魉是中国古代神话中的精怪。《左传·宣公三年》记载："昔夏之方有德也，远方图物，贡金九牧，铸鼎象物，百物而为之备，使民知神奸。故民入川泽山林，不逢不若。螭魅罔两，莫能逢之。"魍魉是一种害人的精怪，常出没于山川湖泽之间。',
                image: '魍魉.png',
                fallbackImage: 'https://picsum.photos/id/177/800/600'
            },
            '鯥': {
                appearance: '状如牛，陵居，蛇尾，有翼，其羽在魼下，其音如留牛。',
                story: '鯥是《山海经·南山经》中记载的异兽，是一种水陆两栖的神兽。《山海经》载："柢山，多水，无草木。有鱼焉，其状如牛，陵居，蛇尾，有翼，其羽在魼下，其音如留牛，其名曰鯥，冬死而复生。食之无肿疾。"',
                image: 'images/鯥.png',
                fallbackImage: 'https://picsum.photos/id/143/800/600'
            },
            '鴸': {
                appearance: '状如鸱而人手，其音如痹。',
                story: '鴸是《山海经·南山经》中记载的凶鸟。《山海经》云："柜山，有鸟焉，其状如鸱而人手，其音如痹，其名曰鴸，其名自号也，见则其县多放士。"传说鴸出现的地方，都会有贤能之士被放逐。',
                image: '鴸.png',
                fallbackImage: 'https://picsum.photos/id/118/800/600'
            },
            '九凤': {
                appearance: '九首人面鸟身，名曰九凤。',
                story: '九凤是《山海经·大荒北经》中记载的神鸟。《山海经》载："大荒之中，有山名曰北极天柜，海水北注焉。有神，九首人面鸟身，名曰九凤。"九凤是一种长有九个头的人面鸟身神鸟。',
                image: '九凤.png',
                fallbackImage: 'https://picsum.photos/id/106/800/600'
            },
            '鹿蜀': {
                appearance: '状如马而白首，其文如虎，而赤尾，其音如谣。',
                story: '鹿蜀是《山海经·南山经》中记载的神兽。《山海经》云："杻阳之山，有兽焉，其状如马而白首，其文如虎而赤尾，其音如谣，其名曰鹿蜀，佩之宜子孙。"据说佩戴鹿蜀的皮毛可以使子孙兴旺。',
                image: '鹿蜀.png'
            }
        };

        // DOM 元素
        const searchBtn = document.getElementById('searchBtn');
        const randomBtn = document.getElementById('randomBtn'); // 添加随机按钮引用
        const monsterNameInput = document.getElementById('monsterName');
        const loadingElement = document.getElementById('loading');
        const resultSection = document.getElementById('result');
        const monsterTitle = document.getElementById('monsterTitle');
        const appearanceText = document.getElementById('appearanceText');
        const storyText = document.getElementById('storyText');
        const monsterImage = document.getElementById('monsterImage');
        
        // 搜索神怪
        async function searchMonster(name) {
            // 模拟网络请求延迟
            await new Promise(resolve => setTimeout(resolve, 800));
            
            // 标准化输入
            const normalizedName = name.trim();
            if (!normalizedName) {
                throw new Error('请输入神怪名称');
            }
            
            // 检查是否存在该神怪
            if (mythicalCreatures[normalizedName]) {
                return {
                    name: normalizedName,
                    ...mythicalCreatures[normalizedName]
                };
            } else {
                // 尝试模糊匹配
                const lowerName = normalizedName.toLowerCase();
                for (const key in mythicalCreatures) {
                    if (key.toLowerCase().includes(lowerName)) {
                        return {
                            name: key,
                            ...mythicalCreatures[key]
                        };
                    }
                }
                throw new Error(`未找到名为"${normalizedName}"的神怪`);
            }
        }
        
        // 显示搜索结果
        function showResult(result) {
            monsterTitle.textContent = result.name;
            appearanceText.textContent = result.appearance;
            storyText.textContent = result.story;
            
            // 设置图片并处理加载失败情况
            monsterImage.src = result.image;
            monsterImage.alt = result.name;
            
            monsterImage.onerror = function() {
                // 如果本地图片加载失败，使用备用图片
                this.src = result.fallbackImage;
                this.onerror = null; // 防止备用图片也加载失败时无限循环
            };
            
            // 淡入动画
            resultSection.style.opacity = '0';
            setTimeout(() => {
                resultSection.style.transition = 'opacity 0.5s ease';
                resultSection.style.opacity = '1';
            }, 50);
        }
        
        // 处理搜索
        async function handleSearch() {
            const monsterName = monsterNameInput.value;
            
            if (!monsterName.trim()) {
                alert('请输入神怪名称');
                return;
            }
            
            // 显示加载状态
            loadingElement.style.display = 'block';
            resultSection.style.display = 'none';
            
            try {
                const result = await searchMonster(monsterName);
                
                // 隐藏加载状态，显示结果
                loadingElement.style.display = 'none';
                resultSection.style.display = 'block';
                
                showResult(result);
            } catch (error) {
                loadingElement.style.display = 'none';
                alert(error.message);
                console.error('Search error:', error);
            }
        }
        
        // 随机获取一个神怪
        function getRandomMonster() {
            const monsterNames = Object.keys(mythicalCreatures);
            const randomIndex = Math.floor(Math.random() * monsterNames.length);
            return monsterNames[randomIndex];
        }
        
        // 随机查看神怪
        async function handleRandom() {
            // 显示加载状态
            loadingElement.style.display = 'block';
            resultSection.style.display = 'none';
            
            try {
                const randomName = getRandomMonster();
                const result = await searchMonster(randomName);
                
                // 隐藏加载状态，显示结果
                loadingElement.style.display = 'none';
                resultSection.style.display = 'block';
                
                showResult(result);
            } catch (error) {
                loadingElement.style.display = 'none';
                alert('查询失败，请稍后再试');
                console.error('Random search error:', error);
            }
        }
        
        // 添加事件监听器
        // 搜索按钮点击事件
        searchBtn.addEventListener('click', handleSearch);
        
        // 随机按钮点击事件
        randomBtn.addEventListener('click', handleRandom);
        
        // 输入框回车事件
        monsterNameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    });

})();

