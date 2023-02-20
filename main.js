let turn = 'x';
let title = document.querySelector('.title');
let squares = [];

function reloading(num1,num2,num3){
    title.innerHTML = `${squares[num1]} Winner !! `;
    document.getElementById('item'+num1).style.background = '#000';
    document.getElementById('item'+num2).style.background = '#000';
    document.getElementById('item'+num3).style.background = '#000';

    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},3000)
}

function win(){
    for(let i = 1; i<10; i++){
       squares[i] = document.getElementById('item' + i).innerHTML;
    }

    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
        reloading(1,2,3)
    }
    if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != ''){
        reloading(4,5,6)
    }
    if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != ''){
        reloading(7,8,9)
    }
    if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''){
        reloading(1,4,7)
    }
    if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != ''){
        reloading(2,5,8)
    }
    if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != ''){
        reloading(3,6,9)
    }
    if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != ''){
        reloading(1,5,9)
    }
    if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != ''){
        reloading(3,5,7)
    }
}

function play(id){

    let element = document.getElementById(id);

    if(turn === 'x' && element.innerHTML == ''){
        element.innerHTML = 'X'
        turn = 'o';

        title.innerHTML = 'O Turn';
    }

    else if(turn === 'o' && element.innerHTML == ''){
        element.innerHTML = 'O'
        turn = 'x';

        title.innerHTML = 'X Turn';
    }

    win();
}