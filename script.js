// デッキ情報（仮のデータ）
let deck = [
    { id: 1, name: "カードA", image: "cardA.png" },
    { id: 2, name: "カードB", image: "cardB.png" },
    { id: 3, name: "カードC", image: "cardC.png" },
    { id: 4, name: "カードD", image: "cardD.png" },
    { id: 5, name: "カードE", image: "cardE.png" }
];

let hand = []; // 手札を管理する配列

const deckName = prompt("デッキ名を入力してください:");
const deckString = localStorage.getItem(deckName);
if (deckString) {
    const deck = JSON.parse(deck);
    console.log("取得したデッキ:", deck);
}

// デッキの残り枚数を更新
function updateDeckCount() {
    document.getElementById("deck-count").innerText = deck.length;
}

// 手札を更新
function updateHandDisplay() {
    let handArea = document.getElementById("hand");
    handArea.innerHTML = ""; // 一度リセット

    hand.forEach(card => {
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerText = card.name;
        handArea.appendChild(cardElement);
    });
}

// カードを1枚ドローする
function drawCard() {
    console.log("デッキの初期状態:", deck);
    updateDeckCount();
    if (deck.length === 0) {
        alert("デッキが空です！");
        return;
    }

    let drawnCard = deck.shift();  // デッキの先頭から1枚取り出す
    hand.push(drawnCard);  // 手札に追加
    updateDeckCount();  // デッキの残り枚数を更新
    updateHandDisplay(); // 手札の表示を更新
}

// 初期化（ページロード時に実行）
//document.addEventListener("DOMContentLoaded", () => {
    //updateDeckCount();
//});
