/**
 * Created by Dawid on 02.01.2017.
 */

function select2_placeholder(select) {
    var select_option = $(select).find("option:eq(0)")
    var ph = $(select_option).text();
    $(select_option).text("");
    $(select).select2({
        placeholder: ph,
        allowClear: true
    });
}

$(document).ready(function () {
    select2_placeholder($("select[name='bdate1']"));
    select2_placeholder($("select[name='bdate2']"));
    select2_placeholder($("select[name='bdate3']"));
});