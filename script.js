// クイズデータ
const quizData = {
    ancient: {
        title: "古代文明",
        questions: [
            {
                question: "エジプト文明で、ファラオの墓として建設された巨大な建造物は何ですか？",
                options: ["ジッグラト", "ピラミッド", "パルテノン神殿", "コロッセオ"],
                correct: 1,
                explanation: "ピラミッドは、古代エジプトのファラオ（王）の墓として建設された巨大な石造りの建造物です。",
                mangaExplanation: {
                    title: "💭 漫画解説：ピラミッドの秘密",
                    content: "古代エジプトの人々は、ファラオが死後も永遠に生き続けることができるように、巨大なピラミッドを建設しました。これは単なる墓ではなく、ファラオの魂が天に昇るための階段でもあったのです！"
                }
            },
            {
                question: "メソポタミア文明で発明された、人類最古の文字は何ですか？",
                options: ["象形文字", "楔形文字", "甲骨文字", "アルファベット"],
                correct: 1,
                explanation: "楔形文字（くさびがたもじ）は、メソポタミア文明で発明された人類最古の文字です。粘土板に葦の茎で刻みつけられました。",
                mangaExplanation: {
                    title: "💭 漫画解説：文字の誕生",
                    content: "メソポタミアの商人たちは、商品の記録を残すために文字を発明しました。最初は絵文字でしたが、やがてくさびのような形の文字に変化。これが人類の文明を大きく前進させたのです！"
                }
            },
            {
                question: "インダス文明の代表的な都市遺跡はどれですか？",
                options: ["テーベ", "バビロン", "モヘンジョ・ダロ", "アテネ"],
                correct: 2,
                explanation: "モヘンジョ・ダロは、インダス文明の代表的な都市遺跡です。整然とした都市計画と下水道システムが特徴的でした。",
                mangaExplanation: {
                    title: "💭 漫画解説：計画都市の先駆け",
                    content: "モヘンジョ・ダロは、4000年前にも関わらず、整然とした格子状の道路と完備された下水道システムを持つ計画都市でした。現代の都市計画の先駆けとも言える高度な文明だったのです！"
                }
            },
            {
                question: "古代中国で、殷王朝の時代に使われた占いの道具は何ですか？",
                options: ["銅鏡", "甲骨", "青銅器", "玉器"],
                correct: 1,
                explanation: "甲骨（こうこつ）は、古代中国の殷王朝で使われた占いの道具です。亀の甲羅や牛の骨に文字を刻んで占いを行いました。",
                mangaExplanation: {
                    title: "💭 漫画解説：神様との対話",
                    content: "殷王朝の人々は、重要な決断をする前に、亀の甲羅や牛の骨を焼いてひび割れを見て占いました。これが甲骨文字の始まり。神様との対話を通じて、国の運命を決めていたのです！"
                }
            },
            {
                question: "古代ギリシャで、アテネの守護神として崇拝された女神は誰ですか？",
                options: ["ヘラ", "アフロディテ", "アテナ", "アルテミス"],
                correct: 2,
                explanation: "アテナは、古代ギリシャの知恵と戦争の女神で、アテネの守護神として崇拝されました。パルテノン神殿は彼女に捧げられました。",
                mangaExplanation: {
                    title: "💭 漫画解説：知恵の女神の物語",
                    content: "アテナは、ゼウスの頭から完全武装で生まれた知恵の女神。アテネの人々は、彼女の知恵と戦略でペルシャ軍を撃退しました。パルテノン神殿は、この勝利への感謝の証として建設されたのです！"
                }
            }
        ]
    },
    medieval: {
        title: "中世ヨーロッパ",
        questions: [
            {
                question: "800年にローマ教皇から「ローマ皇帝」の称号を受けたフランク王国の王は誰ですか？",
                options: ["クローヴィス", "カール大帝", "シャルルマーニュ", "ルイ14世"],
                correct: 1,
                explanation: "カール大帝（シャルルマーニュ）は、800年にローマ教皇レオ3世から「ローマ皇帝」の称号を受けました。",
                mangaExplanation: {
                    title: "💭 漫画解説：皇帝の誕生",
                    content: "カール大帝は、ヨーロッパの大部分を統一し、学問と芸術を奨励した偉大な王。クリスマスの日に、ローマ教皇から皇帝の冠を授けられた瞬間は、中世ヨーロッパの歴史を変える出来事でした！"
                }
            },
            {
                question: "1096年に始まった、聖地エルサレムをイスラム教徒から奪回するための遠征は何ですか？",
                options: ["レコンキスタ", "十字軍", "百年戦争", "宗教改革"],
                correct: 1,
                explanation: "十字軍は、1096年から始まった聖地エルサレムをイスラム教徒から奪回するための遠征です。",
                mangaExplanation: {
                    title: "💭 漫画解説：聖地への旅路",
                    content: "教皇ウルバヌス2世の呼びかけで、ヨーロッパの騎士たちが「神のため」に聖地エルサレムを目指しました。しかし、この遠征は宗教的動機だけでなく、領土拡大や商業的利益も絡んだ複雑な戦争だったのです！"
                }
            },
            {
                question: "14世紀にイタリアで始まった、古代ギリシャ・ローマ文化の復興運動は何ですか？",
                options: ["宗教改革", "ルネサンス", "啓蒙思想", "産業革命"],
                correct: 1,
                explanation: "ルネサンスは、14世紀にイタリアで始まった古代ギリシャ・ローマ文化の復興運動です。",
                mangaExplanation: {
                    title: "💭 漫画解説：文化の復活",
                    content: "中世の暗い時代を経て、イタリアの商人たちが古代の美しい芸術作品を発見。レオナルド・ダ・ヴィンチやミケランジェロなどの天才たちが、人間の美しさと可能性を描き出したルネサンスの時代が始まりました！"
                }
            },
            {
                question: "1453年にオスマン帝国によって陥落した、東ローマ帝国の首都はどこですか？",
                options: ["ローマ", "アテネ", "コンスタンティノープル", "アレクサンドリア"],
                correct: 2,
                explanation: "コンスタンティノープル（現在のイスタンブール）は、1453年にオスマン帝国によって陥落し、東ローマ帝国が滅亡しました。",
                mangaExplanation: {
                    title: "💭 漫画解説：千年帝国の終焉",
                    content: "1000年以上続いた東ローマ帝国の首都コンスタンティノープル。巨大な大砲で城壁を破壊したオスマン帝国の攻撃により、ついに陥落。この出来事は、中世の終わりと近世の始まりを告げる歴史的な転換点でした！"
                }
            },
            {
                question: "中世ヨーロッパで、封建制度の基盤となった土地の貸与制度は何ですか？",
                options: ["荘園制", "封土制", "奴隷制", "共和制"],
                correct: 1,
                explanation: "封土制は、中世ヨーロッパで封建制度の基盤となった土地の貸与制度です。領主が家臣に土地を与え、代わりに軍事的奉仕を求める制度でした。",
                mangaExplanation: {
                    title: "💭 漫画解説：土地と忠誠の関係",
                    content: "領主は家臣に土地（封土）を与え、家臣はその代わりに軍事的奉仕と忠誠を誓いました。この相互扶助の関係が、中世ヨーロッパの社会秩序を支えていたのです！"
                }
            }
        ]
    },
    modern: {
        title: "近現代史",
        questions: [
            {
                question: "18世紀後半にイギリスで始まった、手工業から機械工業への転換は何ですか？",
                options: ["農業革命", "産業革命", "科学革命", "政治革命"],
                correct: 1,
                explanation: "産業革命は、18世紀後半にイギリスで始まった手工業から機械工業への転換です。蒸気機関の発明がその原動力となりました。",
                mangaExplanation: {
                    title: "💭 漫画解説：機械の時代の幕開け",
                    content: "ジェームズ・ワットの蒸気機関の発明により、工場では機械が24時間働き続けるように。これまでの手作業から機械生産へと変わり、人々の生活は劇的に変化しました！"
                }
            },
            {
                question: "1914年に始まった、ヨーロッパを中心とした世界規模の戦争は何ですか？",
                options: ["七年戦争", "第一次世界大戦", "第二次世界大戦", "冷戦"],
                correct: 1,
                explanation: "第一次世界大戦は、1914年に始まったヨーロッパを中心とした世界規模の戦争です。",
                mangaExplanation: {
                    title: "💭 漫画解説：世界を巻き込んだ戦争",
                    content: "サラエボ事件をきっかけに、ヨーロッパの同盟関係が連鎖反応を起こし、世界中の国々が戦争に巻き込まれました。戦車や毒ガスなど、新しい兵器が登場した史上初の総力戦でした！"
                }
            },
            {
                question: "1945年に終結した、枢軸国と連合国が戦った世界規模の戦争は何ですか？",
                options: ["第一次世界大戦", "第二次世界大戦", "朝鮮戦争", "ベトナム戦争"],
                correct: 1,
                explanation: "第二次世界大戦は、1945年に終結した枢軸国と連合国が戦った世界規模の戦争です。",
                mangaExplanation: {
                    title: "💭 漫画解説：人類史上最大の戦争",
                    content: "ナチス・ドイツの侵略から始まった第二次世界大戦は、原子爆弾の使用により終結。6000万人以上の犠牲者を出した人類史上最大の悲劇でした。"
                }
            },
            {
                question: "1947年から1991年まで続いた、アメリカとソ連の対立は何ですか？",
                options: ["熱戦", "冷戦", "代理戦争", "経済戦争"],
                correct: 1,
                explanation: "冷戦は、1947年から1991年まで続いたアメリカとソ連の対立です。直接的な軍事衝突は避けられましたが、代理戦争や軍拡競争が行われました。",
                mangaExplanation: {
                    title: "💭 漫画解説：見えない戦争",
                    content: "アメリカとソ連は直接戦争はしませんでしたが、世界各地で代理戦争を繰り広げ、宇宙開発競争や核兵器開発競争を展開。ベルリンの壁の崩壊で冷戦は終結しました！"
                }
            },
            {
                question: "1969年に人類が初めて月面に到達した宇宙計画は何ですか？",
                options: ["スプートニク計画", "アポロ計画", "スペースシャトル計画", "国際宇宙ステーション計画"],
                correct: 1,
                explanation: "アポロ計画は、1969年にアポロ11号が人類初の月面着陸を成功させたNASAの宇宙計画です。",
                mangaExplanation: {
                    title: "💭 漫画解説：月への第一歩",
                    content: "「これは一人の人間にとっては小さな一歩だが、人類にとっては偉大な飛躍である」- ニール・アームストロング船長の言葉とともに、人類はついに月面に到達しました！"
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
