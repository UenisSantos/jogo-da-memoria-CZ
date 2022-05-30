let cartaVerificada = false;

let firstcard, secondcard;
let idCartFirst, idCardSecond;
const IMAGE_BACK = '../assets/back.png';

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


function criarImagens() {

    let random = Math.floor(Math.random() * 12)

    for (let count = 0; count < cavalheiros.length; count++) {


        let card = document.createElement('section');
        card.className = 'card'
        card.id = count
        document.getElementById('game').appendChild(card)


        let image = document.createElement('img');
        image.src = cavalheiros[count];
        image.className = 'card-front';


        document.getElementById(count).onclick = function() {


            this.classList.add('flip')
            recuperarValorCarta(cavalheiros[this.id], this.id);
        }



        let imageBack = document.createElement('img');
        imageBack.src = IMAGE_BACK;
        imageBack.className = 'card-back';


        document.getElementById(count).appendChild(imageBack);
        document.getElementById(count).appendChild(image);
    }




}













function recuperarValorCarta(valorCarta, valor) {


    if (!cartaVerificada) {

        cartaVerificada = true;
        firstcard = valorCarta;
        idCartFirst = valor
        console.log('primero', firstcard, 'id:', valor)
        return;

    }
    secondcard = valorCarta
    idCardSecond = valor
    cartaVerificada = false;



    imageAcerto()
}

















function imageAcerto() {

    let image_1 = document.getElementById(idCartFirst)
    let image_2 = document.getElementById(idCardSecond)



    if (firstcard === secondcard) {
        /*  image_1.classList.remove('flip')
         image_2.classList.remove('flip') */

    } else {
        setTimeout(() => {
            image_1.classList.remove('flip')
            image_2.classList.remove('flip')

        }, 1000)


    }


}





criarImagens()
console.log(cardsCriados)