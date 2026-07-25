script.js
function showPain() {

    document.getElementById("subMenu").innerHTML = `

    <p class="question">
    どこが痛いですか？
    </p>

    <button onclick="selectMessage('🧠 頭が痛いです')">
    🧠 頭
    </button>

    <button onclick="selectMessage('🫁 胸が痛いです')">
    🫁 胸
    </button>

    <button onclick="selectMessage('🍀 お腹が痛いです')">
    🍀 お腹
    </button>

    <button onclick="selectMessage('🦴 腰が痛いです')">
    🦴 腰
    </button>

    <button onclick="selectMessage('🦵 足が痛いです')">
    🦵 足
    </button>

    <button onclick="selectMessage('✋ 手が痛いです')">
    ✋ 手
    </button>

    `;

}



function showToilet() {

    document.getElementById("subMenu").innerHTML = `

    <p class="question">
    トイレのどうしましたか？
    </p>


    <button onclick="selectMessage('🚽 トイレに行きたいです')">
    🚽 トイレに行きたい
    </button>


    <button onclick="selectMessage('👖 オムツを交換してほしいです')">
    👖 オムツを交換してほしい
    </button>


    <button onclick="selectMessage('💧 尿が出ました')">
    💧 尿が出た
    </button>


    <button onclick="selectMessage('💩 便が出ました')">
    💩 便が出た
    </button>


    <button onclick="selectMessage('😣 かゆい・気になります')">
    😣 かゆい・気になる
    </button>


    `;

}



function selectMessage(message) {

    document.getElementById("result").innerHTML = message;

}



function backMenu() {

    document.getElementById("subMenu").innerHTML = "";

    document.getElementById("result").innerHTML =
    "ここに選んだ内容が表示されます";

}