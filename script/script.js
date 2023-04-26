onload = function () {

    let stage = document.getElementById("stage");
    let ctx = stage.getContext("2d");
    this.document.addEventListener("keydown", keyPush);
    let upButton = document.querySelector('.up');
    let leftButton = document.querySelector('.left');
    let rightButton = document.querySelector('.right');
    let downButton = document.querySelector('.down');

    upButton.addEventListener('click', clickUp);
    leftButton.addEventListener('click', clickLeft);
    downButton.addEventListener('click', clickDown);
    rightButton.addEventListener('click', clickRight);

    //velocidade do jogo
    setInterval(game, 120);

    const vel = 1;
    //velocidade inicial
    let vx = vy = 0;
    //ponto inicial
    let px = py = 10;
    // tamanho de quadradados no mapa
    let tp = 17;
    //quantidade de quadrados no mapa
    let qp = 20;
    //posição inicial da maça
    let ax = ay = 15;
    //rastro da cobra
    let trail = [];
    tail = 5;

    function game() {
        //posição inicial da cobra
        px += vx;
        py += vy;
        //definindo os limites do mapa

        //Limite esquerdo
        if (px < 0) {
            px = qp - 1;
        }
        //Limite direito
        if (px > qp - 1) {
            px = 0
        }
        //limite cima
        if (py < 0) {
            py = qp - 1
        }
        //limite baixo
        if (py > qp - 1) {
            py = 0
        }


        //pintando nossa tela
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, stage.clientWidth, stage.height);
        //maçã
        ctx.fillStyle = "red";


        ctx.fillRect(ax * tp, ay * tp, tp, tp);
        //cobra
        ctx.fillStyle = "green";
        for (let i = 0; i < trail.length; i++) {
            //// efeito de divisão da cobra tp-1, tp-1);
            ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp - 1, tp - 1);
            //verificando se a cobra se mordeu
            if (trail[i].x == px && trail[i].y == py) {
                vx = vy = 0;
                tail = 5;
            }

        }
        //movimento da cobra
        trail.push({ x: px, y: py })
        while (trail.length > tail) {
            trail.shift();
        }
        //aumentando a cobra / comendo a maçã
        if (ax == px && ay == py) {
            tail++;
            ax = Math.floor(Math.random() * qp);
            ay = Math.floor(Math.random() * qp);
        }
    }
    //controles bt
    function clickUp() {
        vx = 0;
        vy = -vel;
    }
    function clickLeft() {
        vx = -vel;
                vy = 0;
    }
    function clickDown() {
        vx = 0;
                vy = vel;
    }
    function clickRight() {
        vx = vel;
                vy = 0;
    }
    //controles
    function keyPush(event) {
        switch (event.keyCode) {
            case 37: //left
                vx = -vel;
                vy = 0;
                break;
            case 38: //up
                vx = 0;
                vy = -vel;
                break;
            case 39: //rigth
                vx = vel;
                vy = 0;
                break;
            case 40: //down
                vx = 0;
                vy = vel;
                break;
            default:

                break;
        }
    }


































}