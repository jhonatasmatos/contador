
const startCount = () => {

    const view1 = document.querySelector("main");
    const view2 = document.querySelector("#countdown");

    view1.style.display = "none";
    view2.style.display = "block";

    const inputDate = document.querySelector("#input-date").value;
    const finalDate = new Date(inputDate);

    setInterval(() => {
        const currentTime = new Date();
        const difference = finalDate - currentTime;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor(difference / 1000 / 60) % 60;
        const seconds = Math.floor(difference / 1000) % 60;

        document.querySelector("#days").innerHTML = days;
        document.querySelector("#hour").innerHTML = hours < 10 ? `0${hours}` : hours;
        document.querySelector("#minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        document.querySelector("#seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    }, 1000);
}

const restart = () => {
    const view1 = document.querySelector("main");
    const view2 = document.querySelector("#countdown");

    view1.style.display = "flex";
    view2.style.display = "none";
}