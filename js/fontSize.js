const fontSizeButton = document.getElementById("betumeretGomb");

let isLarge = false;

fontSizeButton.addEventListener("click", function() {
    if (!isLarge) {
        document.documentElement.style.fontSize = "125%";
    } else {
        document.documentElement.style.fontSize = "100%";
    }

    isLarge = !isLarge;
});