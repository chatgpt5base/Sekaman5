// クイズデータ
const quizData = {
    industrial: {
        title: "産業革命",
        questions: [
            {
                question: "産業革命がまず綿工業から進んだ主因として最も適切なのはどれ？",
                options: ["鉄道の普及が先行していたから", "軽工業で需要が大きく投資回収が早かったから", "国家が軍需として綿布を独占したから", "羊毛関税が高かったから"],
                correct: 1,
                explanation: "綿工業は軽工業であり、需要が大きく投資回収が早いため、産業革命の突破口となりました。",
                mangaExplanation: {
                    title: "💭 漫画解説：綿工業が先駆けとなった理由",
                    content: "綿布は軽くて丈夫、しかも安価で多くの人に求められていました。投資した機械代を早く回収できる綿工業から始まった産業革命は、やがて鉄鋼業や機械工業へと広がっていったのです！"
                }
            },
            {
                question: "ジェニー紡績機の発明者は誰？",
                options: ["アークライト", "カートライト", "ハーグリーヴズ", "ホイットニー"],
                correct: 2,
                explanation: "ジェニー紡績機は1764年にハーグリーヴズが発明しました。一人で複数の糸を同時に紡ぐことができる画期的な機械でした。",
                mangaExplanation: {
                    title: "💭 漫画解説：ジェニー紡績機の革命",
                    content: "ハーグリーヴズは、妻のジェニーが糸車を倒したのを見てヒントを得て発明。従来は1本ずつしか紡げなかった糸を、一度に8本も紡げるようになりました！"
                }
            },
            {
                question: "ワットの改良蒸気機関がもたらした最も直接的な影響はどれ？",
                options: ["工場の立地が水源近くに限定された", "工場の立地が都市部へ拡大した", "農業生産性が急低下した", "鉄の需要が縮小した"],
                correct: 1,
                explanation: "ワットの蒸気機関により、工場は水車に依存せずに都市部でも操業できるようになりました。",
                mangaExplanation: {
                    title: "💭 漫画解説：工場の立地革命",
                    content: "それまで工場は川の近くにしか建てられませんでした。しかし蒸気機関の登場で、都市の中心部でも工場を建てられるように。これが都市化の大きな要因となったのです！"
                }
            },
            {
                question: "囲い込み（エンクロージャ）が促進した社会的変化として正しいものは？",
                options: ["自作農の増加と農村回帰", "農業労働力の不足と都市への人口流入", "農地の細分化と小規模経営の維持", "ギルドの復活"],
                correct: 1,
                explanation: "囲い込みにより多くの農民が土地を失い、都市の工場労働者となって産業革命の労働力を支えました。",
                mangaExplanation: {
                    title: "💭 漫画解説：囲い込みの波",
                    content: "地主たちが農地を囲い込んで効率的な農業を始めると、多くの小作農が土地を失いました。彼らは都市に出て工場労働者となり、産業革命の原動力となったのです！"
                }
            },
            {
                question: "次の発明を古い順に並べた組合せとして正しいのはどれ？①ジェニー紡績機　②ワットの蒸気機関改良　③力織機",
                options: ["①→③→②", "③→②→①", "①→②→③", "②→①→③"],
                correct: 2,
                explanation: "ジェニー紡績機（1764年）→ワットの蒸気機関改良（1769年）→力織機（1785年）の順です。",
                mangaExplanation: {
                    title: "💭 漫画解説：発明の連鎖",
                    content: "ジェニー紡績機で糸が大量生産できるようになると、今度は織物の機械化が必要に。そして蒸気機関がそれらの機械を動かす動力源となったのです！"
                }
            },
            {
                question: "19世紀前半の工場法で主に保護対象となったのは誰か。",
                options: ["移民労働者", "児童・女性", "失業者", "熟練職人"],
                correct: 1,
                explanation: "工場法は児童や女性の長時間労働を制限し、労働条件の改善を図る法律でした。",
                mangaExplanation: {
                    title: "💭 漫画解説：工場法の意義",
                    content: "工場では幼い子どもや女性が危険な機械を扱い、長時間働かされていました。工場法により、彼らの労働時間が制限され、教育を受ける機会も生まれたのです！"
                }
            },
            {
                question: "蒸気機関車と鉄道の普及がもたらした効果として最も不適切なものは？",
                options: ["原料・製品の大量低コスト輸送", "市場の統合と価格の平準化", "郵便・新聞の流通加速", "農産物の地域特化の完全消滅"],
                correct: 3,
                explanation: "鉄道は農産物の地域特化を促進しましたが、完全に消滅させることはありませんでした。",
                mangaExplanation: {
                    title: "💭 漫画解説：鉄道が変えた世界",
                    content: "鉄道の登場で、遠くの産地の農産物も都市に運べるように。しかし各地の気候や土壌に適した特産品は残り、むしろ地域の特色が活かされるようになったのです！"
                }
            },
            {
                question: "産業革命期のイギリスで、鉄鋼業の燃料転換を促したものは何か。",
                options: ["コークスの使用", "風車の改良", "木炭の増産", "石油精製"],
                correct: 0,
                explanation: "コークス（石炭を蒸し焼きにした燃料）の使用により、鉄鋼業は木炭から石炭へと燃料を転換しました。",
                mangaExplanation: {
                    title: "💭 漫画解説：コークスの威力",
                    content: "従来の木炭では高温が得られず、良質な鉄が作れませんでした。コークスの使用により、高温で大量の鉄を生産できるようになり、産業革命の基盤となったのです！"
                }
            }
        ]
    },
    american: {
        title: "アメリカ合衆国の独立と発展",
        questions: [
            {
                question: "独立運動の直接の引き金となった出来事として最も近いものは？",
                options: ["ボストン茶会事件", "ルイジアナ買収", "ミズーリ協定", "南北戦争"],
                correct: 0,
                explanation: "1773年のボストン茶会事件が独立運動の直接的な引き金となりました。",
                mangaExplanation: {
                    title: "💭 漫画解説：茶会事件の衝撃",
                    content: "イギリスが茶に重税をかけたことに怒った植民地の人々は、ボストン港で茶箱を海に投げ捨てました。この事件が独立戦争への道筋を決定的にしたのです！"
                }
            },
            {
                question: "1776年に採択された文書はどれ？",
                options: ["連合規約", "権利章典（Bill of Rights）", "独立宣言", "合衆国憲法"],
                correct: 2,
                explanation: "1776年7月4日に独立宣言が採択され、アメリカの独立が正式に宣言されました。",
                mangaExplanation: {
                    title: "💭 漫画解説：独立宣言の誕生",
                    content: "トーマス・ジェファソンが起草した独立宣言は「すべての人間は平等に造られている」という有名な言葉で始まります。この日がアメリカの建国記念日となったのです！"
                }
            },
            {
                question: "連合規約の弱点を補い強い連邦政府を創設したのは？",
                options: ["モンロー宣言", "合衆国憲法（1787）", "ワシントン宣言", "ハミルトン報告"],
                correct: 1,
                explanation: "1787年に制定された合衆国憲法により、強い連邦政府が創設されました。",
                mangaExplanation: {
                    title: "💭 漫画解説：憲法制定会議",
                    content: "連合規約では各州が独立していて連邦政府が弱すぎました。フィラデルフィアで開かれた憲法制定会議で、強い連邦政府を持つ新しい憲法が作られたのです！"
                }
            },
            {
                question: "1803年、国土拡大に大きく寄与した出来事は？",
                options: ["テキサス併合", "ルイジアナ買収", "オレゴン協定", "アラスカ購入"],
                correct: 1,
                explanation: "1803年のルイジアナ買収により、アメリカの国土は約2倍に拡大しました。",
                mangaExplanation: {
                    title: "💭 漫画解説：ルイジアナ買収の大成功",
                    content: "ナポレオンが戦費調達のため、広大なルイジアナ領を売却。ジェファソン大統領は1500万ドルで購入し、アメリカの国土を一気に2倍に拡大したのです！"
                }
            },
            {
                question: "1823年に欧州の新植民地化に反対する原則を示したのは？",
                options: ["タフト外交", "モンロー宣言", "トルーマン・ドクトリン", "グッドネイバー政策"],
                correct: 1,
                explanation: "モンロー宣言は「アメリカ大陸はアメリカ人のもの」という原則を示し、欧州の介入を排除しました。",
                mangaExplanation: {
                    title: "💭 漫画解説：モンロー主義の誕生",
                    content: "ヨーロッパ諸国が中南米に再び介入しようとした時、モンロー大統領は「アメリカ大陸はアメリカ人のもの」と宣言。これが後のアメリカ外交の基本方針となったのです！"
                }
            },
            {
                question: "19世紀に西方拡大を正当化した理念は？",
                options: ["プロテクショニズム", "メリトクラシー", "マニフェスト・デスティニー", "ジャクソニアン・デモクラシー"],
                correct: 2,
                explanation: "マニフェスト・デスティニー（明白な運命）は、アメリカが西方に拡大するのは神の意志であるという理念でした。",
                mangaExplanation: {
                    title: "💭 漫画解説：明白な運命",
                    content: "「アメリカが太平洋まで領土を拡大するのは神の意志」というマニフェスト・デスティニーの考えにより、西部開拓が正当化されました。しかし先住民にとっては悲劇の始まりでもあったのです。"
                }
            },
            {
                question: "綿織物経済（コットン・キングダム）が南北対立を深めた主因として適切なのは？",
                options: ["綿価下落で奴隷解放が進んだ", "奴隷制拡大をめぐる新州の是非", "北部が綿輸入禁止を実施", "英仏の介入で連邦弱体化"],
                correct: 1,
                explanation: "新しく州になる地域で奴隷制を認めるかどうかが、南北対立の核心的な問題でした。",
                mangaExplanation: {
                    title: "💭 漫画解説：奴隷制をめぐる対立",
                    content: "南部は綿花栽培に奴隷が必要で、新州でも奴隷制を認めたいと考えていました。一方、北部は奴隷制に反対。この対立が南北戦争の根本原因となったのです！"
                }
            },
            {
                question: "南北戦争の終結年は？",
                options: ["1850年", "1861年", "1865年", "1877年"],
                correct: 2,
                explanation: "南北戦争は1861年に始まり、1865年に終結しました。",
                mangaExplanation: {
                    title: "💭 漫画解説：南北戦争の終結",
                    content: "4年間にわたる激しい戦争の末、1865年に南軍が降伏。リンカーン大統領の奴隷解放宣言により、アメリカから奴隷制が廃止されたのです！"
                }
            }
        ]
    },
    french: {
        title: "フランス革命とナポレオンの支配",
        questions: [
            {
                question: "1789年の三部会で第三身分が国民議会を宣言した主な争点は？",
                options: ["国王の逃亡", "課税特権の承認", "議決方法（身分別か頭数か）", "外債の返済"],
                correct: 2,
                explanation: "議決方法を身分別（1身分1票）か頭数別（1人1票）かで争い、第三身分が国民議会を宣言しました。",
                mangaExplanation: {
                    title: "💭 漫画解説：三部会の対立",
                    content: "第一身分（聖職者）と第二身分（貴族）は身分別議決を主張し、第三身分（平民）は頭数別議決を要求。この対立がフランス革命の始まりとなったのです！"
                }
            },
            {
                question: "1789年に採択された人権宣言の核心原理として最も適切なのは？",
                options: ["議会主権と世襲貴族制", "国民主権と自由・平等・所有権", "君主主権と信仰の自由", "連邦主義と州権"],
                correct: 1,
                explanation: "人権宣言は「自由・平等・博愛」を基本理念とし、国民主権と基本的人権を宣言しました。",
                mangaExplanation: {
                    title: "💭 漫画解説：人権宣言の意義",
                    content: "「人は生まれながらにして自由で平等である」という人権宣言は、それまでの身分制社会を根本から覆す革命的な思想でした。これが現代民主主義の出発点となったのです！"
                }
            },
            {
                question: "恐怖政治（ジャコバン独裁）期の中心人物は誰？",
                options: ["ラファイエット", "ロベスピエール", "ダントン", "ミラボー"],
                correct: 1,
                explanation: "ロベスピエールはジャコバン派の指導者として恐怖政治を主導し、多くの反対派を処刑しました。",
                mangaExplanation: {
                    title: "💭 漫画解説：恐怖政治の実態",
                    content: "ロベスピエールは「革命の敵は断頭台で」という考えで、反対派を次々と処刑しました。しかし恐怖政治は行き過ぎ、ついにロベスピエール自身も処刑されることになったのです！"
                }
            },
            {
                question: "1799年のブリュメール18日のクーデタで成立した体制は？",
                options: ["総裁政府", "立法議会", "統領政府", "王政復古"],
                correct: 2,
                explanation: "ナポレオンがブリュメール18日のクーデタで統領政府を樹立し、第一統領として実権を握りました。",
                mangaExplanation: {
                    title: "💭 漫画解説：ナポレオンの登場",
                    content: "混乱するフランスを救うため、ナポレオンがクーデタを起こして統領政府を樹立。これがナポレオンが皇帝になる第一歩となったのです！"
                }
            },
            {
                question: "ナポレオン法典（1804）の特色として最も適切なのは？",
                options: ["身分制の復活", "法の下の平等・所有権の保障", "旧来の慣習法の維持", "封建地代の再確認"],
                correct: 1,
                explanation: "ナポレオン法典は法の下の平等と私有財産制を確立し、近代法の基礎となりました。",
                mangaExplanation: {
                    title: "💭 漫画解説：ナポレオン法典の意義",
                    content: "ナポレオン法典は「法の前の平等」と「私有財産の不可侵」を明記。これにより身分制が完全に廃止され、近代的な市民社会の法的基盤が築かれたのです！"
                }
            },
            {
                question: "ナポレオンがイギリスを経済的に孤立させようとした政策は？",
                options: ["大陸封鎖令", "四国同盟", "神聖同盟", "ウィーン議定書"],
                correct: 0,
                explanation: "大陸封鎖令（1806年）により、ヨーロッパ大陸でのイギリス商品の取引を禁止しました。",
                mangaExplanation: {
                    title: "💭 漫画解説：大陸封鎖令の戦略",
                    content: "海軍でイギリスに勝てないナポレオンは、経済戦争でイギリスを屈服させようとしました。しかし大陸封鎖令は逆にヨーロッパ諸国の不満を招き、ナポレオンの失脚の原因となったのです！"
                }
            },
            {
                question: "ナポレオン失脚の転機となった軍事的失敗は？",
                options: ["ワーテルローの戦い（1815）", "トラファルガー海戦（1805）", "ロシア遠征（1812）", "アウステルリッツの戦い（1805）"],
                correct: 2,
                explanation: "1812年のロシア遠征の失敗がナポレオン失脚の転機となりました。",
                mangaExplanation: {
                    title: "💭 漫画解説：ロシア遠征の悲劇",
                    content: "60万の大軍でロシアに攻め込んだナポレオンでしたが、ロシア軍の焦土作戦と厳しい冬により、わずか3万人しか帰還できませんでした。これがナポレオン帝国崩壊の始まりとなったのです！"
                }
            },
            {
                question: "ウィーン会議（1814–15）の基本原則として正しいのは？",
                options: ["民族自決", "正統主義と勢力均衡", "自由貿易", "普選"],
                correct: 1,
                explanation: "ウィーン会議は正統主義（正統な君主の復位）と勢力均衡を基本原則としました。",
                mangaExplanation: {
                    title: "💭 漫画解説：ウィーン会議の狙い",
                    content: "フランス革命とナポレオン戦争で混乱したヨーロッパを、元の秩序に戻そうとしたウィーン会議。しかし革命の思想は消えることなく、後の1848年革命につながっていくのです！"
                }
            }
        ]
    },
    latin: {
        title: "中南米諸国の独立",
        questions: [
            {
                question: "サン＝ドマング（ハイチ）の蜂起を指導し、のち独立運動の象徴となった人物は？",
                options: ["ボリバル", "サン＝マルティン", "トゥーサン＝ルヴェルチュール", "イトゥルビデ"],
                correct: 2,
                explanation: "トゥーサン＝ルヴェルチュールはハイチの奴隷反乱を指導し、1804年にハイチの独立を実現しました。",
                mangaExplanation: {
                    title: "💭 漫画解説：ハイチ独立の英雄",
                    content: "奴隷出身のトゥーサン＝ルヴェルチュールは、フランス軍と戦ってハイチを独立させました。これは世界初の黒人共和国の誕生であり、中南米独立運動の先駆けとなったのです！"
                }
            },
            {
                question: "「解放者」と呼ばれ、ベネズエラ・コロンビア・エクアドルなどで独立を主導した人物は？",
                options: ["ボリバル", "サン＝マルティン", "オイギンス", "ヒダルゴ"],
                correct: 0,
                explanation: "シモン・ボリバルは「解放者」と呼ばれ、南米北部の独立を主導しました。",
                mangaExplanation: {
                    title: "💭 漫画解説：解放者ボリバル",
                    content: "ベネズエラ出身のボリバルは、スペインからの独立を目指して戦い続けました。彼の理想は「ラテンアメリカ合衆国」の創設でしたが、地域の対立により実現しませんでした。"
                }
            },
            {
                question: "ラプラタ（現アルゼンチン）からアンデス越えでチリ・ペルー解放に進んだ指導者は？",
                options: ["ボリバル", "サン＝マルティン", "サンタ・アナ", "モレーロス"],
                correct: 1,
                explanation: "サン＝マルティンはアルゼンチンからアンデス山脈を越えてチリとペルーを解放しました。",
                mangaExplanation: {
                    title: "💭 漫画解説：アンデス越えの英雄",
                    content: "サン＝マルティンは5000人の軍隊を率いて、標高4000メートルのアンデス山脈を越えました。この困難な行軍により、チリとペルーがスペインから解放されたのです！"
                }
            },
            {
                question: "メキシコ独立の出発点となった「ドロレスの叫び」を発した人物は？",
                options: ["サパタ", "ヒダルゴ", "ディアス", "イダルゴ・イ・コス"],
                correct: 1,
                explanation: "1810年、ミゲル・ヒダルゴが「ドロレスの叫び」を発し、メキシコ独立戦争が始まりました。",
                mangaExplanation: {
                    title: "💭 漫画解説：ドロレスの叫び",
                    content: "教会の鐘を鳴らして集まった人々に、ヒダルゴは「メキシコ万歳！独立万歳！」と叫びました。この瞬間からメキシコ独立戦争が始まり、11年後に独立を達成したのです！"
                }
            },
            {
                question: "ブラジル独立（1822）で中心となったのは？",
                options: ["ペドロ1世", "ペドロ2世", "ドン・フアン6世（ジョアン6世）", "バンデイランテス"],
                correct: 0,
                explanation: "ペドロ1世（後のブラジル皇帝）が1822年にブラジルの独立を宣言しました。",
                mangaExplanation: {
                    title: "💭 漫画解説：ブラジル独立の特色",
                    content: "他のラテンアメリカ諸国が血なまぐさい戦争で独立したのに対し、ブラジルは比較的平和的に独立しました。ポルトガル王太子だったペドロが独立を宣言したからです！"
                }
            },
            {
                question: "中南米独立運動を国際的に後押しした米国の基本方針は？",
                options: ["グッドネイバー政策", "モンロー宣言", "ドル外交", "進歩の同盟"],
                correct: 1,
                explanation: "モンロー宣言（1823年）は欧州の新植民地化に反対し、中南米独立を支持しました。",
                mangaExplanation: {
                    title: "💭 漫画解説：モンロー宣言の影響",
                    content: "アメリカのモンロー宣言により、ヨーロッパ諸国は中南米に再び介入できなくなりました。これが中南米諸国の独立を国際的に後押ししたのです！"
                }
            },
            {
                question: "グラン・コロンビアに含まれなかった地域はどれ？",
                options: ["ベネズエラ", "コロンビア（ニューブレイン）", "エクアドル", "ペルー"],
                correct: 3,
                explanation: "グラン・コロンビアはベネズエラ、コロンビア、エクアドルで構成され、ペルーは含まれませんでした。",
                mangaExplanation: {
                    title: "💭 漫画解説：グラン・コロンビアの夢",
                    content: "ボリバルは南米北部を統一したグラン・コロンビアを建国しましたが、地域の対立により1830年に分裂。彼の「ラテンアメリカ統一」の夢は実現しませんでした。"
                }
            },
            {
                question: "19世紀前半のラテンアメリカ新生国家で頻発した政治現象として適切なのは？",
                options: ["封建制の復活", "カウディーリョによる軍人政権", "社会主義革命の連続", "立憲君主制の安定化"],
                correct: 1,
                explanation: "独立後のラテンアメリカでは、カウディーリョ（軍人指導者）による独裁政権が頻発しました。",
                mangaExplanation: {
                    title: "💭 漫画解説：カウディーリョの時代",
                    content: "独立後もラテンアメリカは政治的混乱が続きました。カウディーリョと呼ばれる軍人指導者が独裁政治を行い、民主主義の定着には長い時間がかかったのです！"
                }
            }
        ]
    }
};

// グローバル変数
let currentCategory = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let quizStarted = false;
let sidebarOpen = false;

// DOM要素の取得
const quizCategories = document.getElementById('quizCategories');
const quizContainer = document.getElementById('quizContainer');
const quizQuestion = document.getElementById('quizQuestion');
const quizResult = document.getElementById('quizResult');
const finalResult = document.getElementById('finalResult');

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // サイドバーの初期化
    setupSidebar();
    
    // ヘッダーのスクロール効果
    setupHeaderScroll();
    
    // アニメーション効果
    setupAnimations();
}

// サイドバー設定
function setupSidebar() {
    // デスクトップでは自動でサイドバーを開く
    if (window.innerWidth > 768) {
        toggleSidebar();
    }
}

// サイドバーの開閉
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('.main');
    
    sidebarOpen = !sidebarOpen;
    
    if (sidebarOpen) {
        sidebar.classList.add('open');
        main.classList.add('with-sidebar');
    } else {
        sidebar.classList.remove('open');
        main.classList.remove('with-sidebar');
    }
}

// セクションへのスムーススクロール
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ヘッダーのスクロール効果
function setupHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// アニメーション設定
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // 監視対象の要素を追加
    const elementsToAnimate = document.querySelectorAll('.category-card, .feature, .quiz-container');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// 章選択
function selectChapter(chapterId) {
    // 章のアクティブ状態を更新
    const chapterItems = document.querySelectorAll('.chapter-item');
    chapterItems.forEach(item => item.classList.remove('active'));
    event.target.closest('.chapter-item').classList.add('active');
    
    // 章の内容を表示
    scrollToSection(chapterId);
}

// 節選択
function selectSection(sectionId) {
    // 節に応じたクイズを開始
    switch(sectionId) {
        case 'section1':
            startQuiz('industrial');
            break;
        case 'section2':
            startQuiz('american');
            break;
        case 'section3':
            startQuiz('french');
            break;
        case 'section4':
            startQuiz('latin');
            break;
    }
}

// クイズ開始
function startQuiz(category) {
    selectCategory(category);
}

// カテゴリ選択
function selectCategory(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    quizStarted = true;
    
    // 節のグリッドを非表示、クイズコンテナを表示
    const sectionsGrid = document.getElementById('sectionsGrid');
    if (sectionsGrid) sectionsGrid.style.display = 'none';
    
    quizContainer.style.display = 'block';
    quizResult.style.display = 'none';
    finalResult.style.display = 'none';
    
    // 最初の問題を表示
    showQuestion();
}

// 問題表示
function showQuestion() {
    const categoryData = quizData[currentCategory];
    const question = categoryData.questions[currentQuestionIndex];
    
    // プログレスバー更新
    updateProgress();
    
    // 問題文表示
    document.getElementById('questionTitle').textContent = question.question;
    
    // 選択肢表示
    const optionsContainer = document.getElementById('questionOptions');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionElement);
    });
    
    // 結果画面を非表示
    quizResult.style.display = 'none';
    quizQuestion.style.display = 'block';
}

// プログレスバー更新
function updateProgress() {
    const categoryData = quizData[currentCategory];
    const progress = ((currentQuestionIndex + 1) / categoryData.questions.length) * 100;
    
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = 
        `${currentQuestionIndex + 1} / ${categoryData.questions.length}`;
}

// 回答選択
function selectAnswer(answerIndex) {
    if (selectedAnswer !== null) return; // 既に回答済みの場合は無視
    
    selectedAnswer = answerIndex;
    const options = document.querySelectorAll('.option');
    
    // 選択肢のスタイル更新
    options.forEach((option, index) => {
        option.classList.remove('selected');
        if (index === answerIndex) {
            option.classList.add('selected');
        }
    });
    
    // 少し遅延してから結果表示
    setTimeout(() => {
        showResult();
    }, 500);
}

// 結果表示
function showResult() {
    const categoryData = quizData[currentCategory];
    const question = categoryData.questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct;
    
    if (isCorrect) {
        score++;
    }
    
    // 選択肢の正解/不正解表示
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.classList.remove('selected');
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    // 結果画面表示
    quizQuestion.style.display = 'none';
    quizResult.style.display = 'block';
    
    // 結果内容設定
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultExplanation = document.getElementById('resultExplanation');
    const mangaExplanation = document.getElementById('mangaExplanation');
    const nextButton = document.getElementById('nextButton');
    
    if (isCorrect) {
        resultIcon.className = 'result-icon correct';
        resultIcon.innerHTML = '<span class="material-symbols-rounded">check</span>';
        resultTitle.textContent = '正解！';
        resultTitle.style.color = 'var(--success-color)';
    } else {
        resultIcon.className = 'result-icon incorrect';
        resultIcon.innerHTML = '<span class="material-symbols-rounded">close</span>';
        resultTitle.textContent = '不正解...';
        resultTitle.style.color = '#FF6B6B';
    }
    
    resultExplanation.textContent = question.explanation;
    
    // 漫画解説表示
    mangaExplanation.innerHTML = `
        <h4>${question.mangaExplanation.title}</h4>
        <p>${question.mangaExplanation.content}</p>
    `;
    
    // 次の問題ボタンの設定
    if (currentQuestionIndex < categoryData.questions.length - 1) {
        nextButton.textContent = '次の問題へ';
        nextButton.onclick = nextQuestion;
    } else {
        nextButton.textContent = '結果を見る';
        nextButton.onclick = showFinalResult;
    }
}

// 次の問題
function nextQuestion() {
    currentQuestionIndex++;
    selectedAnswer = null;
    showQuestion();
}

// 最終結果表示
function showFinalResult() {
    const categoryData = quizData[currentCategory];
    const percentage = Math.round((score / categoryData.questions.length) * 100);
    
    quizResult.style.display = 'none';
    finalResult.style.display = 'block';
    
    // スコア表示
    document.getElementById('finalScore').textContent = score;
    
    // メッセージ設定
    const scoreMessage = document.getElementById('scoreMessage');
    if (percentage >= 80) {
        scoreMessage.textContent = '素晴らしい！世界史マスターですね！';
        scoreMessage.style.color = 'var(--success-color)';
    } else if (percentage >= 60) {
        scoreMessage.textContent = 'よくできました！もう少しで完璧です！';
        scoreMessage.style.color = 'var(--primary-color)';
    } else {
        scoreMessage.textContent = '復習して、もう一度挑戦してみましょう！';
        scoreMessage.style.color = '#FF6B6B';
    }
}

// クイズ再開
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    showQuestion();
}

// カテゴリ選択に戻る
function backToCategories() {
    quizContainer.style.display = 'none';
    const sectionsGrid = document.getElementById('sectionsGrid');
    if (sectionsGrid) sectionsGrid.style.display = 'grid';
    finalResult.style.display = 'none';
    currentCategory = null;
    quizStarted = false;
}

// キーボード操作対応
document.addEventListener('keydown', function(e) {
    if (!quizStarted) return;
    
    if (e.key >= '1' && e.key <= '4') {
        const answerIndex = parseInt(e.key) - 1;
        if (selectedAnswer === null) {
            selectAnswer(answerIndex);
        }
    } else if (e.key === 'Enter' && selectedAnswer !== null) {
        if (currentQuestionIndex < quizData[currentCategory].questions.length - 1) {
            nextQuestion();
        } else {
            showFinalResult();
        }
    }
});

// タッチ操作の最適化
document.addEventListener('touchstart', function(e) {
    // タッチ時のハイライト効果
    if (e.target.classList.contains('option') || e.target.classList.contains('btn')) {
        e.target.style.transform = 'scale(0.95)';
    }
});

document.addEventListener('touchend', function(e) {
    // タッチ終了時の効果リセット
    if (e.target.classList.contains('option') || e.target.classList.contains('btn')) {
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});

// パフォーマンス最適化
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// スクロールイベントの最適化
const optimizedScrollHandler = debounce(function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// エラーハンドリング
window.addEventListener('error', function(e) {
    console.error('エラーが発生しました:', e.error);
    // ユーザーに分かりやすいエラーメッセージを表示
    if (quizStarted) {
        alert('エラーが発生しました。ページを再読み込みしてください。');
    }
});

// オフライン対応
window.addEventListener('online', function() {
    console.log('オンラインに復帰しました');
});

window.addEventListener('offline', function() {
    console.log('オフラインになりました');
    if (quizStarted) {
        alert('インターネット接続が切れました。接続を確認してください。');
    }
});
