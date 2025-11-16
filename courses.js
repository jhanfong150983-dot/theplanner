// courses.js
const COURSES = {
  appinventor: {
    title: 'App Inventor 遊戲製作',
    skills: {
      1: { 
        name: '基礎介紹', 
        type: 'main',
        videoId: 'f2SRmh8cOBU',
        quiz: [
          { q: 'App Inventor 是什麼？', options: ['網頁開發工具', '手機應用程式開發平台', '遊戲引擎', '繪圖軟體'], correct: 1 },
          { q: 'App Inventor 使用什麼方式編程？', options: ['文字程式碼', '拖曳積木', '手繪流程圖', '語音指令'], correct: 1 }
        ]
      },
      2: { 
        name: '介面設計', 
        type: 'main',
        quiz: [
          { q: '介面設計最重要的原則是？', options: ['美觀', '功能性', '使用者體驗', '以上皆是'], correct: 3 }
        ]
      },
      3: { 
        name: '音效設計', 
        type: 'side',
        quiz: [
          { q: '好的遊戲音效可以？', options: ['增加遊戲趣味', '提供回饋', '營造氛圍', '以上皆是'], correct: 3 }
        ]
      },
      4: { 
        name: '程式邏輯', 
        type: 'main',
        quiz: [
          { q: '程式邏輯中最基本的結構是？', options: ['順序結構', '選擇結構', '迴圈結構', '以上皆是'], correct: 3 }
        ]
      },
      5: { 
        name: '資料儲存', 
        type: 'side',
        quiz: [
          { q: 'App 可以使用什麼方式儲存資料？', options: ['TinyDB', '雲端資料庫', '檔案儲存', '以上皆是'], correct: 3 }
        ]
      },
      6: { 
        name: '遊戲製作', 
        type: 'main',
        quiz: [
          { q: '製作遊戲需要考慮哪些要素？', options: ['遊戲規則', '計分系統', '難度設計', '以上皆是'], correct: 3 }
        ]
      },
      7: { 
        name: '專題發表', 
        type: 'main',
        quiz: [
          { q: '發表專題時應該包含？', options: ['作品展示', '設計理念', '技術說明', '以上皆是'], correct: 3 }
        ]
      },
      8: { 
        name: '進階音效', 
        type: 'side',
        quiz: [
          { q: '進階音效技術包括？', options: ['3D音效', '動態音量', '音效混合', '以上皆是'], correct: 3 }
        ]
      }
    },
    connections: [
      { from: 1, to: 2, type: 'main' },
      { from: 2, to: 4, type: 'main' },
      { from: 4, to: 6, type: 'main' },
      { from: 6, to: 7, type: 'main' },
      { from: 2, to: 3, type: 'side' },
      { from: 4, to: 5, type: 'side' },
      { from: 6, to: 8, type: 'side' }
    ],
    unlockMap: {
      1: [2, 3],
      2: [4],
      3: [],
      4: [5, 6],
      5: [],
      6: [7, 8],
      7: [],
      8: []
    },
    prerequisites: {
      2: [1],
      3: [1],
      4: [2],
      5: [4],
      6: [4],
      7: [6],
      8: [6]
    }
  }
};