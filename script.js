const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded', ()=>{
  setInterval(showTime, 1000);
});

const showTime = () =>{
    let date = new Date();

    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let ampm = hr >= 12 ? "PM" : "AM";
    hr = hr % 12 || 12; // Convert 24-hour format to 12-hour format

    hr = hr<10 ?  `0${hr}` : hr;
    mins = mins<10 ?  `0${mins}` : mins;
    secs = secs<10 ?  `0${secs}` : secs;
    time.innerHTML = `${hr} : ${mins} : ${secs}`

    timeformat.innerHTML  = hr>12 ? "PM" : "AM";
    // console.log("Hours: " + hr + "Mins: "+ mins + "secs" + secs );
}