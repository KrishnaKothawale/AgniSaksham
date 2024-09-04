let values = document.querySelectorAll(".num");
let interval = 5000;

values.forEach((value) => {
    let startvalue = 0;
    let endvalue = parseInt(value.getAttribute("data-value"));

    let duration = Math.floor(interval/endvalue);
    let counter = setInterval(function () {
        startvalue += 1;
        value.textContent = startvalue;
        if (startvalue == endvalue) {
            clearInterval(counter);
        }
    }, duration)
});