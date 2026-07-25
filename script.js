script.js 
// お父さんアプリ Ver.1

function speak(text) {

    // 読み上げ中なら止める
    window.speechSynthesis.cancel();

    const message = new SpeechSynthesisUtterance(text);

    // 日本語
    message.lang = "ja-JP";

    // ゆっくり話す
    message.rate = 0.8;

    // 少し低めの声
    message.pitch = 1.0;

    // 音量
    message.volume = 1;

    window.speechSynthesis.speak(message);

}