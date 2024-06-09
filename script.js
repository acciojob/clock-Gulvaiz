//your JS code here. If required.
let para = document.getElementById("para")
 function currentTime(){
   let date = new Date()
   
    let hour = date.getHours()
    let min = date.getMinutes()
    min = min < 9 ? "0"+min : min
    let sec = date.getSeconds()
    sec = sec < 9 ? "0" + sec : sec 

    let am_pm;

if(hour == 0){
    hour = 12;
    am_pm = "AM"
}
else if(hour > 12) {
     hour -= 12
     am_pm = "PM"
}
else if(hour == 12){
     am_pm = "PM"
}
else if(hour < 12){
    am_pm = "AM"
}


    let day = date.getDay()
    let month = date.getMonth()-1
    let year = date.getFullYear()
    


para.innerText = 
` ${month}/${day}/${year} , ${hour}:${min}:${sec} ${am_pm}
`
}

setInterval(currentTime,1000)