const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondsEl = document.querySelector('.seconds');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleBtn = document.querySelector('.toggle');
const needleSecond = document.querySelector(".needle.seconds")
const needleMinute = document.querySelector(".needle.minute")
const needleHour = document.querySelector(".needle.hour") 


const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
 "Thursday", "Friday", "Saturday"];

 const months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul",
  "Aug", "Sep", "Oct", "Nov", "Dec"];

toggleBtn.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.textContent = 'Dark mode';
    } else {
        html.classList.add('dark');
        e.target.textContent = 'Light mode';
    }
})


function setTime () {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hoursTF = time.getHours(); /*24hour clock needs to be converted */
    const hours = hoursTF % 12;
    const mins = time.getMinutes();
    const seconds = time.getSeconds();

    console.log(time)

    hourEl.style.transform = `translate(-50%) rotate(${scale((hours * 60) + mins, 0, 720, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%) rotate(${scale((mins * 60) + seconds, 0, 3599, 0, 360)}deg)`
    secondsEl.style.transform = `translate(-50%) rotate(${scale(seconds, 0, 60, 0 ,360)}deg)`
    timeEl.textContent = `${hoursTF === 0 ? `0${hours}` : hoursTF}:${mins < 10 ? `0${mins}` : mins}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class='circle'>${time.getDate()}</span>`
    
    needleHour.style.transition = `${hoursTF === 0 ? "none" : "all 0.5s ease-in"}`
 
    needleMinute.style.transition = `${mins === 0 ? "none" : "all 0.5s ease-in"}`
 
    // needleSecond.style.transition = `${seconds === 0 ? "none" : "all 0.5s ease-in"}`
}


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime();

setInterval(setTime, 1000)