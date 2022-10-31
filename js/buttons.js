function dontShowButtonsCode() {
    var code = document.getElementById('code_db');
    code.style.cssText = 'display: none;';
    code = document.getElementById('ad_db');
    code.style.cssText = 'display: relative;';
    code = document.getElementById('au_db');
    code.style.cssText = 'display: none;';
    
    var code = document.getElementById('code_rb');
    code.style.cssText = 'display: none;';
    code = document.getElementById('ad_rb');
    code.style.cssText = 'display: relative;';
    code = document.getElementById('au_rb');
    code.style.cssText = 'display: none;';

    var code = document.getElementById('code_ob');
    code.style.cssText = 'display: none;';
    code = document.getElementById('ad_ob');
    code.style.cssText = 'display: relative;';
    code = document.getElementById('au_ob');
    code.style.cssText = 'display: none;';

    var code = document.getElementById('code_sb');
    code.style.cssText = 'display: none;';
    code = document.getElementById('ad_sb');
    code.style.cssText = 'display: relative;';
    code = document.getElementById('au_sb');
    code.style.cssText = 'display: none;';

    var code = document.getElementById('code_dib');
    code.style.cssText = 'display: none;';
    code = document.getElementById('ad_dib');
    code.style.cssText = 'display: relative;';
    code = document.getElementById('au_dib');
    code.style.cssText = 'display: none;';
    
}

function showCode(codeId, ad, au) {
    var code = document.getElementById(codeId);
    code.style.cssText = 'display: relative;';
    code.style.cssText = 'position: relative;';
    code = document.getElementById(ad);
    code.style.cssText = 'display: none;';
    code = document.getElementById(au);
    code.style.cssText = 'display: relative;';
}

function dontShowCode(codeId, ad, au) {
    var code = document.getElementById(codeId);
    code.style.cssText = 'display: none;';
    code = document.getElementById(ad);
    code.style.cssText = 'display: relative;';
    code = document.getElementById(au);
    code.style.cssText = 'display: none;';
}

function copyCode(codeId, tooltipId) {
    var copyText = document.getElementById(codeId);
    navigator.clipboard.writeText(copyText.textContent);

    var tooltip = document.getElementById(tooltipId);
    tooltip.innerHTML = "Code copied";
}

function cleanTooltip(id) {
    var tooltip = document.getElementById(id);
    tooltip.innerHTML = "Copy to clipboard";
}


window.dontShowButtonsCode();