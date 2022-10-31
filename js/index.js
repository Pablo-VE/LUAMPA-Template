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

function copyCode(codeId, tooltipId) {
    var copyText = document.getElementById(codeId);
    navigator.clipboard.writeText(copyText.textContent);

    var tooltip = document.getElementById(tooltipId);
    tooltip.innerHTML = "Code copied";

    // alert("Copied the text: " + copyText.textContent);
    // console.log("hola mundo");
}

function cleanTooltip(id) {
    var tooltip = document.getElementById(id);
    tooltip.innerHTML = "Copy to clipboard";
}

