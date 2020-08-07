//first x, then o
var x_o = 1; //if 1 -> x, -1 -> o
var box = [[0,0,0],[0,0,0],[0,0,0]]; //true = occupied, box[row][column]
var nextGame = 0;
var win = [];

$(document).ready(function() {
    $('.ttt-box').click(function() {
        if(nextGame!=1) {
            var row = $(this).parent().attr('id'); //get row
            var column = $(this).attr('id'); //get column
            $('.warning').text(''); //clear warning text
            if(box[row][column]==0) {
                //box is empty
                addSymbol(this,row,column);
                //check if anyone wins
                if(checkWin()) { 
                    gameWon();
                    //draw line
                    drawLine();
                    return;
                } else {
                    x_o *= -1; //change player
                }
            } else { //box is not empty
                $('.warning').text('    TRY AGAIN'); //user clicks on occupied box
            }
            isDraw(); //check if draw
        } else { //draw or won and user clicks
            location.reload();
        }
    });
    $('.reset').click(function() {
        location.reload();
    });
});


function checkWin() {
        //check left to right cross - if any cross gives 3 or -3, -> win
        var sum = box[0][0]+box[1][1]+box[2][2];
        if(sum==3 || sum==-3) {
            win = "lcross";
            return 1;
        }

        //check right to left cross - if any cross gives 3 or -3, -> win
        sum = box[0][2]+box[1][1]+box[2][0];
        if(sum==3 || sum==-3) {
            win = "rcross";
            return 1;
        }

        for(let i=0;i<3;i++) {
        //check rows - if any row gives 3 or -3, -> win
            sum = arraySum(box[i]);
            if(sum==3 || sum==-3) {
                win = ["row",i];
                return 1;
            }
        //check columns - if any column gives 3 or -3, -> win
            sum=box[0][i]+box[1][i]+box[2][i];
            if(sum==3 || sum==-3) {
                win = ["column",i];
                return 1;
            }   
        }

    return 0;
}

function arraySum(arr) {
    return arr.reduce((a, b) =>a + b, 0)
}

function gameWon() {
    nextGame = 1;
    $('.mainheading').css('color', 'red'); //change color of mainheading to red
    $('#next').hide();
    $('#current').hide();
    $('.reset').text('Click to reset');
    if(x_o == 1) { //current player is X 
        $('.mainheading').text('X WINS!');
    } else { //current player is O
        $('.mainheading').text('O WINS!');
    }
    $('.ttt-box').click(function() { //reload page if user clicks after winning
        location.reload();
    });
}

function addSymbol(x,row,column) {
    $('.o').toggle();
    $('.x').toggle();
    if(x_o == "1") {
        $(x).append("<img src='./images/x.png'/>")
        box[row][column] = 1; //update value in box array
    } else {
        $(x).append("<img src='./images/o.png'/>") //set 'O'
        box[row][column] = -1; //update value in box array
    }
}

function isDraw() {
    var include = false;
    for(let i=0;i<3;i++) {
        if(box[i].includes(0)) {
            include = true;
        }
    }
    if(!include) {
        nextGame = 1;
        $('.mainheading').text('DRAW!');
        $('.reset').text('Click to reset');
        $('#next').hide();
        $('#current').hide();
        $('.mainheading').css('color', 'red');
    }
    return;
}

