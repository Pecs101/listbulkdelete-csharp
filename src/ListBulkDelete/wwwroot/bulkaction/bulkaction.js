
$("#deletebulk").prop('disabled', true); 

function delectbulkaction(controller, action) {
    var arrRes = getchecked();

    var link = '/' + controller + '/' + action;

    debugger
    $.ajax({
        type: "POST",
        url: link,
        data: { data: arrRes },
        success: function (data) {
            //location.reload();
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
