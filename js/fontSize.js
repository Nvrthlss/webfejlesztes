const fontSizeButton = document.getElementById("betumeretGomb");

let fontSize = 16;

fontSizeButton.addEventListener("click", function() {
    if (fontSize === 16) {
        fontSize = 20;
    } else {
        fontSize = 16;
    }

    document.body.style.fontSize = fontSize + "px";
});
