
function init() {
console.log("Load")
//DECLARE
$( "#popup-nologin" ).popup()
//DECLARE
//Window resize
var screen = $.mobile.getScreenHeight()
var header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight()  - 1 : $(".ui-header").outerHeight()
var footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight()
var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height()
var content = screen - header - footer - contentCurrent
$(".ui-content").height(content)
//Window resize

$('#form-login').submit(function() {
var datosUsuario = $('#user').val()
var datosPassword = $('#password').val()
archivoValidacion = "http://localhost/rutaphp/validacionLogin.php"
$.getJSON( archivoValidacion, { usuario:datosUsuario ,password:datosPassword})
.done(function(respuestaServer) {
if(respuestaServer.validacion == "ok"){
$.mobile.changePage("#page-home",
 {
    transition: "flow",
    reverse: false
});
}else{
$( "#popup-nologin" ).popup( "open" )
}
})
return false;
})
    

 
}



