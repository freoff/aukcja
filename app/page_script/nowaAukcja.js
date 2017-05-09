"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require('jquery');
var id = require("shortid");
$(document).ready(function () {
    console.clear();
    $('form').submit(function (e) {
        $('#input-plik').remove(); //pliki przeslane przez api
        return true;
    });
});
$('#input-plik').on('change', function (e) {
    for (var _i = 0, _a = e.target.files; _i < _a.length; _i++) {
        var file = _a[_i];
        if (file.id = id.generate())
            ;
        extractFileImage(file);
    }
});
function sendFile(file) {
    var formData = new FormData();
    formData.append('plik', file, file.name);
    formData.append('aukcjaid', file.id);
    $.ajax({
        url: '/api/obrazek/temp/',
        method: 'post',
        data: data
    });
}
;
function extractFileImage(file) {
    var fileReader = new FileReader();
    fileReader.addEventListener('load', function (e) {
        if (fileReader.readyState === fileReader.DONE) {
            $("\n          <div class=\"col-md-3 align-middle\" id=\"thumb-" + file.id + "\" >\n            <img class=\"img-thumbnail \" width=\"100%\" src=\"" + fileReader.result + "\" id=\"" + file.id + "\"/>\n            <div class='text-center mt-1'>\n              <button type='button' class='align-middle btn-error'\n              onclick=\"$('#thumb-" + file.id + "').remove()\">\n              <span class='fa fa-close text-warning'></span>\n              </button>\n\n            </div>\n          </div>\n          \n          ").appendTo($('#plik-Placeholder'));
        }
    });
    fileReader.readAsDataURL(file);
}
//# sourceMappingURL=nowaAukcja.js.map