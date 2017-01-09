/**
 * Created by dawid on 08.01.17.
 */

var dataTable;
var lastSearch;

function tableSearch(table) {
    var text = $("#search_input").val();

    if (text.length > 2) {
        table.search(text).draw();
    } else if (text.length == 0 && lastSearch != "") {
        table.search("").draw();
    }
    lastSearch = text;
}

var reload_list_patient = function () {
    dataTable = $("#serchTable").DataTable({
        "language": {
            "lengthMenu": "Pokaż _MENU_ rekordów na stronę",
            "zeroRecords": "Brak wyników",
            "info": "Strona _PAGE_ z _PAGES_",
            "infoEmpty": "Brak rekordów",
            "infoFiltered": "(z _MAX_ wszystkich)",
            "paginate": {
                "previous": "Poprzednia",
                "next": "Następna"
            }
        },
        "columnDefs": [ {
            "targets": 'no-sort',
            "orderable": false,
        } ]
    });
    $("#serchTable_filter").css("display", "none");

    $("#search_button").on("click", function () {
        tableSearch(dataTable);
    });
    $("#search_input").on("keyup", function () {
        tableSearch(dataTable);
    });

    $(".tooltips").tooltip();
}