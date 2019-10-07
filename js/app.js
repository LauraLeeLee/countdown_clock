function daysToChristmas() {
    let christmas = new Date("December 25, 2019").getTime(); //gets time in ms for Christmas 2019
    
    let today = new Date().getTime(); //gets time in ms for today
    
    let distance = christmas - today; //time remaining in ms until Christmas
    
    let daysLeft = Math.floor(distance/ (1000 * 60 * 60 * 24)); //converts ms to days remaining
   
    let hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //converts ms to hours remaining
    
    let minutesLeft = Math.floor((distance % (1000 * 60 * 60))/ (1000 * 60 ));
    
    let secondsLeft = Math.floor((distance % (1000 * 60 ))/ 1000);
    
    console.log(daysLeft);
   
    document.getElementById('days-left').textContent = daysLeft;
    document.getElementById('hours').textContent = hoursLeft;
     document.getElementById('minutes').textContent = minutesLeft;
    
     document.getElementById('seconds').textContent = secondsLeft;
    
    setTimeout(daysToChristmas, 1000);
  }
  
  daysToChristmas();