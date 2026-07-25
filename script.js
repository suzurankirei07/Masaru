script.js
let currentMessage = "";



function showPain(){

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




function showToilet(){


document.getElementById("subMenu").innerHTML = `


<p class="question">
どうしましたか？
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




function selectMessage(message){


currentMessage = message;


document.getElementById("result").innerHTML = message;


}




function readMessage(){


if(currentMessage === ""){

alert("先に伝えたい内容を選んでください");

return;

}



window.speechSynthesis.cancel();


let speech =
new SpeechSynthesisUtterance(currentMessage);


speech.lang = "ja-JP";

speech.rate = 0.8;

speech.pitch = 1;

speech.volume = 1;


window.speechSynthesis.speak(speech);


}




function backMenu(){


document.getElementById("subMenu").innerHTML="";


currentMessage="";


document.getElementById("result").innerHTML=
"選んだ内容が表示されます";


}