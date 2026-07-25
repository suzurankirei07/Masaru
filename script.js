script.js
function speak(text) {

    // 読み上げ中なら一度停止
    speechSynthesis.cancel();

    // 読み上げ内容
    const msg = new SpeechSynthesisUtterance(text);

    // 日本語
    msg.lang = "ja-JP";

    // ゆっくり話す
    msg.rate = 0.8;

    // 声の高さ
    msg.pitch = 1.0;

    // 音量
    msg.volume = 1.0;

    // 読み上げ開始
    speechSynthesis.speak(msg);

}