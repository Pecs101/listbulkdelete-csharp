
$("#deletebulk").prop('disabled', true); 


function builk_delete_confirm_show(flag) {
    if (flag === "show")
        $("#builk_delete_confirm").show();
    if (flag === "hide")
        $("#builk_delete_confirm").hide();
}

function delectbulkaction(controller, action) {

    $("#builk_delete_confirm_warning_text").hide();
    $("#builk_delete_confirm_wait").show();

    var arrRes = getchecked();

    var link = '/' + controller + '/' + action;

    debugger
    $.ajax({
        type: "POST",
        url: link,
        data: { data: arrRes },
        success: function (data) {
            location.reload();
        },
    });
}
 
$('#selectAll').click(function (e) {
    var table = $(e.target).closest('table');
    $('td input:checkbox', table).prop('checked', this.checked);

    hideshowaction();
});

$('.classchk').click(function (e) {
    hideshowaction();
});

function getchecked() {
    var arrId = [];
    $.each($("input[id='chk']:checked"), function () {
        arrId.push($(this).val());
    });

    return arrId;
}

function hideshowaction() {

    var arrRes = getchecked();
    if (arrRes.length > 0)
        $("#deletebulk").prop('disabled', false);
    else
        $("#deletebulk").prop('disabled', true);
}
