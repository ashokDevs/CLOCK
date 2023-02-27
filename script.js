


function watch() {
    let clock = new Date();
    
    let time = `${clock.getHours()} : ${clock.getMinutes()}`;
            
    let sec = clock.getSeconds();
    let date = `${clock.getDate()}-${clock.getMonth()+1}-${clock.getFullYear()}`;
    let am= clock.getHours()>=12 ? "pm" : "am";
    let day = clock.getDay();
    clock = clock.toLocaleString();
    document.getElementById("time").innerHTML= time;
    document.getElementById("date").innerHTML= date;
    document.getElementById("day").innerHTML= day;
    document.getElementById("am").innerHTML= am ;
    document.getElementById("sec").innerHTML= sec;
    
}

setInterval(watch ,1000);
