let guest = prompt("Merhaba, lütfen isminizi giriniz.")
let guestName = document.querySelector("#myName");
guestName.innerHTML = guest

function showTime() {
    let now = new Date()
    let day = now.toLocaleDateString('tr-Tr', {weekday: "long"})
    let time = now.toLocaleDateString('tr-Tr')
    myClock.innerHTML = time + ' ' + day
    document.querySelector("#myClock")

}

setInterval(showTime, 1000)