
const stations = ["Pughkeepsie", "Newburgh", "Peekskill", "Yonkers", "Bronx", "Grand Central"];

function* forward(num) {
    while (num < stations.length) {
        yield num;
        num += 1;
}
}

let fw = forward(0)

function travel() {
    text = document.querySelector("#station");
    nextStop =  fw.next()
    if (nextStop.done) {
        text.innerHTML = "We made it";
        console.log("Finish Line")
    }
    else {
        text.innerHTML = stations[nextStop.value];
        console.log(stations[nextStop.value]);
    }
}
btn = document.querySelector("#travel").addEventListener("click", travel);