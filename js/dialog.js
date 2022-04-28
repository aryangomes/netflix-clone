let optionsDialog = {
    autoOpen: false,
    show: {
        effect: "puff",
        duration: 500
    },
    hide: {
        effect: "puff",
        duration: 500
    },
    width: 600
};

$(function () {

    $("#dialog-mais-informacoes").dialog(optionsDialog);

    $("#opener-mais-informacoes").on("click", function () {
        $("#dialog-mais-informacoes").dialog("open");
    });
});

$(function () {

    $("#dialog-assistir-agora").dialog(optionsDialog);

    $("#opener-assistir-agora").on("click", function () {
        $("#dialog-assistir-agora").dialog("open");
    });
});