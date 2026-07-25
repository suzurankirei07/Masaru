script.js
function showPain() {

    document.getElementById("subMenu").innerHTML = `

    <p class="question">
    どこが痛いですか？
    </p>

    <button onclick="selectMessage('頭が痛いです')">
    🧠 頭
    </button>

    <button onclick="selectMessage('胸が痛いです')">
    🫁 胸
    </button>

    <button onclick="selectMessage('お腹が痛いです')">
    🍀 お腹
    </button>

    <button onclick="selectMessage('腰が痛いです')">
    🦴 腰
    </button>

    <button onclick="selectMessage('足が痛いです')">
    🦵 足
    </button>

    <button onclick="selectMessage('手が痛いです')">
    ✋ 手
    </button>

    `;
}



function showToilet() {

    document.getElementById("subMenu").innerHTML = `

    <p class="question">
    トイレの希望は？
    </p>

    <button onclick="selectMessage('トイレに行きたいです')">
    🚽 トイレに行きたい
    </button>

    <button onclick="selectMessage('オムツを交換してほしいです')">
    👖 オムツを交換してほしい
    </button>

    <button onclick="selectMessage('尿が出ました')">
    💧 尿が出た
    </button>

    <button onclick="selectMessage('便が出ました')">
    💩 便が出た
    </button>

    `;
}



function selectMessage(message) {

    // 画面表示
    document.getElementById("result").innerHTML = message;


    // 読み上げ
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(message);

    speech.lang = "ja-JP";

    speech.rate = 0.8;   // ゆっくり
    speech.pitch = 1.0;  // 声の高さ
    speech.volume = 1.0; // 音量

    window.speechSynthesis.speak(speech);

}



function backMenu() {

    document.getElementById("subMenu").innerHTML = "";

    document.getElementById("result").innerHTML =
    "ここに選んだ内容が表示されます";

}