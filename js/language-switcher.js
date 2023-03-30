const select = document.getElementById("language-select");
const flag = document.getElementById("selected-flag");

select.addEventListener("change", function() {
    const language = select.value;
    flag.src = `img/${language}_flag.png`;
});