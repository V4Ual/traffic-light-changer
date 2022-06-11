const cir = document.getElementById('circle');
const cir1 = document.getElementById('circle1');
const cir2 = document.getElementById('circle2');

const timemer = document.getElementById('seconds-counter');


// timer counter
const timer = () => {
    var totalSeconds = 0;
    setInterval(settime, 1000);

    function settime() {
        ++totalSeconds;
        timemer.innerHTML = (totalSeconds % 3);
        timemer.style.textAlign = 'center';
        timemer.style.fontSize = '100px';

    }
}

timer();


const showcolor = () => {

    setTimeout(() => {

        if (cir.style.background = "red") {
            cir1.style.background = "white";
            cir2.style.background = "white";
        }

    }, 3000);


    setTimeout(() => {

        if (cir1.style.background = "yellow") {
            cir2.style.background = "white";
            cir.style.background = "white";

        }
    }, 6000);

    setTimeout(() => {

        if (cir2.style.background = "green") {
            cir1.style.background = "white";
            cir.style.background = "white";

        }
    }, 9000);



}

setInterval(showcolor, 9000);

showcolor();