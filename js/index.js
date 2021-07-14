var all_tr = $('.server_table_tr').length;
var can_clk_tr = 0;

for (var i = 0; i < $('.server_table_tr').length; i++) {
    if ($('.server_table_tr').eq(i).children('.server_table_td').children('a').hasClass('disable')) {

    } else {
        can_clk_tr = $('.server_table_tr').length;
    }
    if ($('.server_table_tr').eq(i).children('.server_table_td').children('a').hasClass('disable')) {
        $('.server_table_tr').eq(i).css({
            "order": can_clk_tr + i
        })
    }
}