(function () {
    // ----constants----
    const PLAYERS = {
        '1': 'dino1',
        '0': null,
        '-1': 'dino2'
    };

    //----variables----
    let board, winner, turn;

    //----cached elements----
    const msg = document.getElementById('msg');
    const boardEl = document.getElementById('board');
    const dino1 = document.getElementById('dino1');
    const dino2 = document.getElementById('dino2');
    const dino1Ate = document.getElementById('dino1ate');
    const dino2Ate = document.getElementById('dino2ate');

    //----event listeners----
    boardEl.addEventListener('click', handleClick);

    document.getElementById('reset').addEventListener('click', evt => { init() });

    //----functions----
    
    init();

    function init() {
        turn = 1;
        winner = null;

        board = [
            [0,0,0,0,0,0,0,0], //col0
            [0,0,0,0,0,0,0,0], //col1
            [0,0,0,0,0,0,0,0], //col2
            [0,0,0,0,0,0,0,0], //col3
            [0,0,0,0,0,0,0,0], //col4
            [0,0,0,0,0,0,0,0], //col5
            [0,0,0,0,0,0,0,0], //col6
            [0,0,0,0,0,0,0,0]  //col7
        ];

        render();
    };

    //function to handle the click --> check if move is possible, if any pc to eat

    //function to find the winner

    //function to eat the pcs and put them aside

    // function to become king --> add dino king

    // function to render --> add the dinos, render board, add class to turn, render msgs
})