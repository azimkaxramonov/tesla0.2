let powerreserve = document.querySelector('.powerreserve')

let textprice = document.querySelector('.textprice')

let Arrow_Top_Speed = document.querySelector('.Arrow_Top_Speed')

let Arrow_Bottom_Speed = document.querySelector('.Arrow_Bottom_Speed')

let speedcar = document.querySelector('.speedcar h1')
console.log(speedcar);

let Arrow_Top_Temperature = document.querySelector('.Arrow_Top_Temperature')

let Arrow_Bottom_Temperature = document.querySelector('.Arrow_Bottom_Temperature')

let temperature = document.querySelector('.temperature h1')
console.log(temperature);

let Arrow_Top_Disks = document.querySelector('.Arrow_Top_View')

let Arrow_Bottom_Disks = document.querySelector('.Arrow_Bottom_View')

let disks = document.querySelector('.disks h1')
console.log(disks);

let Arrow_All_Speed = Arrow_Top_Speed + Arrow_Bottom_Speed
let speedall = 60
let reserve = 750

let Arrow_All_Temperature = Arrow_Top_Temperature + Arrow_Bottom_Temperature
let pechka = document.querySelector('#condition')

let temp = 20

let Arrow_All_Disks = Arrow_Top_Disks + Arrow_Bottom_Disks
let max_width = 21
let min_width = 19
let pricecar = 89900
for (let speedpot of Arrow_All_Speed) {
    Arrow_Top_Speed.onclick = () => {
        speedall += 5
        speedcar.innerText = speedall + ' км/ч'
        powerreserve.innerHTML = (reserve -= 5) + 'км'
        if (speedall > 120) {
            speedall = 120
            reserve = 685
        }
    }

    Arrow_Bottom_Speed.onclick = () => {
        speedall -= 5
        speedcar.innerText = speedall + ' км/ч'
        powerreserve.innerHTML = (reserve += 5) + 'км'
        if (speedall < 60) {
            speedall = 60
            reserve = 755
        }

    }
}

for (let tempr of Arrow_All_Temperature) {
    Arrow_Top_Temperature.onclick = () => {
        temp += 1
        temperature.innerHTML = temp + '°'
        if (temp > 19) {
            pechka.innerHTML = 'Кондиционер'
        }

    }
    Arrow_Bottom_Temperature.onclick = () => {
        temp -= 1
        temperature.innerHTML = temp + '°'
        if (temp < 19) {
            pechka.innerHTML = 'Печка'
        }

    }
}

for (let disk of Arrow_All_Disks) {
    Arrow_Top_Disks.onclick = () => {

        disks.innerHTML = max_width
        textprice.innerHTML = '$' + addCommas(pricecar + 1000)
    }
    Arrow_Bottom_Disks.onclick = () => {

        disks.innerText = min_width
        textprice.innerHTML = '$' + addCommas(pricecar)

    }
}
function addCommas(nStr) {
    // console.log(nStr);

    nStr += '';
    // console.log(nStr);

    var x = nStr.split('.');
    // console.log(x);

    var x1 = x[0];
    // console.log(x1);

    var x2 = x.length > 1 ? '.' + x[1] : '';
    console.log(x2);

    var rgx = /(\d+)(\d{3})/;
    console.log(rgx);

    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}


let burger = document.querySelector('.burger')
let modal = document.querySelector('.modalwindow')
let close = document.querySelector('.close')

burger.onclick = () => {
    modal.style.display = 'block'
    setTimeout(() => {
        modal.style.opacity = '1'
    }, 300)
}
close.onclick = () => {
    modal.style.opacity = '0'
    setTimeout(() => {
        modal.style.display = 'none'
    }, 400)
}
let door = document.querySelector('.door')
let img =document.querySelector('.teslaimg')
door.onclick = () => {
    img.style.animationName = 'open'
    img.classList.toggle('active')
    setTimeout(() => {
        if (img.classList.contains('active')) {
            img.setAttribute('src', 'img/image 2.svg')
        } else {
            img.setAttribute('src', 'img/image 1.svg')
        }
        img.style.animationName = 'close'
        showSlides()
        
    }, 1900)
}



