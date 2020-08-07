/*var box0 = document.querySelector.bind('#box0')
var box1 = document.querySelector.bind('#box1')
var box2 = document.querySelector.bind('#box2')
var box3 = document.querySelector.bind('#box3')
var box4 = document.querySelector.bind('#box4')
var box5 = document.querySelector.bind('#box5')
var box6 = document.querySelector.bind('#box6')
var box7 = document.querySelector.bind('#box7')
var box8 = document.querySelector.bind('#box8')*/

//first x, then o
var x_o = "1"; //if 1 -> x, -1 -> o
var box = [['empty','empty','empty','empty','empty','empty','empty','empty','empty'], ['empty','empty','empty','empty','empty','empty','empty','empty','empty']]; //true = occupied


$(document).ready(function() {
    $('.ttt-box').click(function() {
        var clicked = $(this).attr('id'); //get boxid
        $('.warning').text('');
        if(box[0][clicked]=='empty' && box[1][clicked]=='empty') {
            if(x_o == "1") {
                $(this).text("X");
                $('#current').text("O");
                box[0][clicked] = true;
            } else {
                $(this).text("O");
                $('#current').text("X");
                box[1][clicked] = true;
            }
            x_o *= -1;
            checkWin();
        } else {
            $('.warning').text('TRY AGAIN');
        }
    });
});

function checkWin() {
    
}