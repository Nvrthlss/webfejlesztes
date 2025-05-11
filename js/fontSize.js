const fontSizeButton = document.getElementById("betumeretGomb");

let isLarge = false;
let isHighContrast = false;

fontSizeButton.addEventListener("click", function() {
    if (!isLarge) {
        document.documentElement.style.fontSize = "125%";
    } else {
        document.documentElement.style.fontSize = "100%";
    }

    if (!isHighContrast) {
        document.body.classList.add("high-contrast");
    } else {
        document.body.classList.remove("high-contrast");
    }

    isLarge = !isLarge;
    isHighContrast = !isHighContrast;
});
