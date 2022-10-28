function copyHrefCode() {
    var copyText = document.getElementById("hrefCode");
    navigator.clipboard.writeText(copyText.textContent);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Code copied";

    // alert("Copied the text: " + copyText.textContent);
    // console.log("hola mundo");
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}