const startedAt = '2023-01-09' // 09 Jan

window.onload = function() { 
    let daysDiv=document.getElementById("days")

    daysDiv.innerText=`Happy birthday!`
    // if (daysDiv!==null) { //TODO REMOVE
    //     daysDiv.innerText=`${getDays()} days`
    // }
  };


function getDays() {
    let date=new Date()

    let ms= Number(date)-Number(new Date(startedAt))

    return Math.floor(ms / (1000*60*60*24))
}



