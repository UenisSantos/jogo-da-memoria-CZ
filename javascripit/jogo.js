let cartaVerificada = false;
let firstcard, secondcard;
let idCartFirst, idCardSecond;
const IMAGE_BACK = '../assets/back.png';
let tempo = 30;
let lockBoard = false
let cartaOuro = 0;
let ganhou = 1;
let controlMatrix = []
let fim;
let cavalheiros = [
    '../assets/hyoga.jpg',
    '../assets/ikki.jpg',
    '../assets/saori.jpeg',
    '../assets/seya.jpg',
    '../assets/shiryu.jpg',
    '../assets/shun.jpg',
    '../assets/hyoga.jpg',
    '../assets/ikki.jpg',
    '../assets/saori.jpeg',
    '../assets/seya.jpg',
    '../assets/shiryu.jpg',
    '../assets/shun.jpg',


]

let cavalheirosOuro = [
    '../assets/ouro1.png',
    '../assets/ouro2.png',
    '../assets/ouro3.png',
    '../assets/ouro4.png',
    '../assets/ouro5.png',
    '../assets/ouro6.png',
    '../assets/ouro1.png',
    '../assets/ouro2.png',
    '../assets/ouro3.png',
    '../assets/ouro4.png',
    '../assets/ouro5.png',
    '../assets/ouro6.png',
]




function shuffleArray(inputArray) {
    inputArray.sort(() => Math.random() - 0.5);
}





shuffleArray(selectCard());

function selectCard() {

    let dB = localStorage.getItem('cartaOuro', )


    if (dB == 0) {
        controlMatrix = cavalheiros

        return controlMatrix

    } else {
        controlMatrix = cavalheirosOuro
        return controlMatrix
    }






}

console.log(selectCard())

function criarImagens() {




    for (let count = 0; count < controlMatrix.length; count++) {


        let card = document.createElement('section');
        card.className = 'card'
        card.id = count
        document.getElementById('game').appendChild(card)


        let image = document.createElement('img');
        image.src = controlMatrix[count];
        image.className = 'card-front';



        let imageBack = document.createElement('img');
        imageBack.src = IMAGE_BACK;
        imageBack.className = 'card-back';

        document.getElementById(count).appendChild(image);

        document.getElementById(count).appendChild(imageBack);



        document.getElementById(count).onclick = function() {

            flip(this.id)



            recuperarValorCarta(controlMatrix[this.id], this.id);
        }


    }
    localStorage.setItem('cartaOuro', cartaOuro = 0);
    localStorage.setItem('ganhou', ganhou = 0)

}



function flip(id) {
    if (lockBoard) return;
    let ids = id

    let card = document.getElementById(ids)
    card.classList.add('flip');
    card.disabled = true
}


function recuperarValorCarta(valorCarta, valor) {


    if (!cartaVerificada) {

        cartaVerificada = true;
        firstcard = valorCarta;
        idCartFirst = valor
        return;

    }
    secondcard = valorCarta
    idCardSecond = valor
    cartaVerificada = false;

    if (idCartFirst === idCardSecond) {

        document.getElementById(idCartFirst).classList.remove('flip')

    };



    imageAcerto()
}


















function imageAcerto() {


    let image_1 = document.getElementById(idCartFirst)
    let image_2 = document.getElementById(idCardSecond)


    if (firstcard === secondcard && idCartFirst != idCardSecond) {
        tempo = tempo + 10
        cartaOuro++
        console.log(cartaOuro)

    } else {

        lockBoard = true;
        setTimeout(() => {
            image_1.classList.remove('flip')
            image_2.classList.remove('flip')
            lockBoard = false;

        }, 1000)

    }


}








function TempoCronometro() {



    if (tempo > 0) {

        tempo--

        document.getElementById('temporizador').innerHTML = tempo;


        if (tempo <= 0) {
            tempo = 0;


        }
        if (cartaOuro === 6) {

            localStorage.setItem('cartaOuro', cartaOuro);



            let messagePerdeu = document.getElementById('footer')
            messagePerdeu.innerText = 'parabens cavalheiros de ouro desbloqueado , click aqui e jogue novamente'
            messagePerdeu.onclick = function() {

                window.location.reload();
                ganhou += cartaOuro;
                localStorage.setItem('ganhou', ganhou)





            }
        }


    } else {

        let messagePerdeu = document.getElementById('footer')
        messagePerdeu.innerText = 'O tempo acabou ,click aqui e  tente novamente'
        messagePerdeu.onclick = function() {

            window.location.reload();
            localStorage.setItem('cartaOuro', cartaOuro = 0)
            localStorage.setItem('ganhou', ganhou = 0)



        }


    }





}




(function controlTempo() {

    setInterval(TempoCronometro, 1000)

})()



criarImagens()