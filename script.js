//first x, then o
var x_o = "1"; //if 1 -> x, -1 -> o
var box = [['','',''],['','',''],['','','']]; //true = occupied, box[row][column]

$(document).ready(function() {
    $('.ttt-box').click(function() {

        var row = $(this).parent().attr('id'); //get row
        var column = $(this).attr('id'); //get column
        $('.warning').text(''); //clear warning text

        if(box[row][column]=='') { //if box is empty then proceed
            if(x_o == "1") {
                $(this).text("X"); //set 'X'
                $('#current').text("O"); //next turn is 'O'
                box[row][column] = "1"; //update value in box array
            } else {
                $(this).text("O"); //set 'O'
                $('#current').text("X"); //next turn is 'X'
                box[row][column] = "-1"; //update value in box array
            }
            x_o *= -1; //change player
            checkWin(); //check if someone wins 
        } else {
            $('.warning').text('TRY AGAIN'); //user clicks on occupied box
        }
    });
});

function checkWin() {
    
}