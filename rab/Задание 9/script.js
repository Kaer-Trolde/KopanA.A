$(document).ready(function () {
    $('.h1').click(function () {
        color = prompt("Введите цвет абзаца:");
        $("p").css("color", `${color}`);
    })

    $('#hide').hide();
    $('#show').click(function () {
        $('#show').hide();
        $('#hide').show();
    })
    $('#hide').click(function () {
        $('#show').show();
        $('#hide').hide();
    })

});