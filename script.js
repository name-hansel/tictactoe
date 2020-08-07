//first x, then o
var x_o = "1"; //if 1 -> x, -1 -> o
var box = [['0','0','0'],['0','0','0'],['0','0','0']]; //true = occupied, box[row][column]


$(document).ready(function() {
    $('.ttt-box').click(function() {
        var row = $(this).parent().attr('id'); //get row
        var column = $(this).attr('id'); //get column
        $('.warning').text(''); //clear warning text

        if(box[row][column]=='0') { //if box is empty then proceed
            if(x_o == "1") {
                $(this).text("X"); //set 'X'
                $('#current').text("O"); //next turn is 'O'
                box[row][column] = "1"; //update value in box array
            } else {
                $(this).text("O"); //set 'O'
                $('#current').text("X"); //next turn is 'X'
                box[row][column] = "-1"; //update value in box array
            }

            if(checkWin()) { //check if anyone wins
                $('.mainheading').css('color', 'red'); //change color of mainheading to red
                $('#next').hide();
                $('#current').hide();
                $('.reset').text('Click to reset');

                if(x_o == 1) { //current player is X 
                    $('.mainheading').text('X WINS!');
                } else { //current player is O
                    $('.mainheading').text('O WINS!');
                }

            } else {
                x_o *= -1; //change player
            }

        } else {
            $('.warning').text('TRY AGAIN'); //user clicks on occupied box
        }
    });


    $('.reset').click(function() {
        location.reload();
    });
});


function checkWin() {
        //check left to right cross - if any cross gives 3 or -3, -> win
        var sum = Number(box[0][0])+Number(box[1][1])+Number(box[2][2]);
        if(sum==3 || sum==-3) {
            return 1;
        }

        //check right to left cross - if any cross gives 3 or -3, -> win
        sum = Number(box[0][2])+Number(box[1][1])+Number(box[2][0]);
        if(sum==3 || sum==-3) {
            return 1;
        }

        for(let i=0;i<3;i++) {
        //check rows - if any row gives 3 or -3, -> win
        sum = arraySum(box[i]);
        if(sum==3 || sum==-3) {
            return 1;
        }
        //check columns - if any column gives 3 or -3, -> win
        sum=Number(box[0][i])+Number(box[1][i])+Number(box[2][i]);
        if(sum==3 || sum==-3) {
            return 1;
        }   
    }
}

function arraySum(arr) {
    return arr.reduce((a, b) => Number(a) + Number(b), 0)
}
